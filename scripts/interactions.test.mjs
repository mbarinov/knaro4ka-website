// Lifecycle tests without a browser: layout/visual behavior is checked separately in CUA.
import test from "node:test";
import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import vm from "node:vm";
import ts from "typescript";

function load(name, { node = {}, pathname = "/", reduced = false } = {}) {
  const effects = [],
    intersections = [],
    resizes = [],
    instances = [],
    frames = new Map();
  const eventTarget = (object) =>
    Object.assign(object, {
      listeners: new Map(),
      addEventListener(type, fn) {
        this.listeners.set(type, fn);
      },
      removeEventListener(type, fn) {
        if (this.listeners.get(type) === fn) this.listeners.delete(type);
      },
      emit(type) {
        this.listeners.get(type)?.();
      },
    });
  const media = eventTarget({ matches: reduced });
  const document = eventTarget({ hidden: false });
  const window = eventTarget({ scrollY: 0 });
  let imports = 0,
    frameId = 0;
  class Lenis {
    constructor(options) {
      this.options = options;
      this.destroyed = false;
      instances.push(this);
    }
    destroy() {
      this.destroyed = true;
    }
    scrollTo(target) {
      this.target = target;
    }
  }
  const react = {
    useEffect: (fn) => effects.push(fn),
    useRef: () => ({ current: node }),
    Children: { toArray: (a) => a },
    isValidElement: () => false,
    cloneElement: (x) => x,
  };
  class Observer {
    constructor(fn, list) {
      this.callback = fn;
      this.disconnected = false;
      list.push(this);
    }
    observe(target) {
      this.target = target;
    }
    disconnect() {
      this.disconnected = true;
    }
  }
  const testModule = { exports: {} };
  const context = {
    module: testModule,
    exports: testModule.exports,
    window,
    document,
    matchMedia: () => media,
    getComputedStyle: () => ({ gap: "10px" }),
    requestAnimationFrame: (fn) => {
      frames.set(++frameId, fn);
      return frameId;
    },
    cancelAnimationFrame: (id) => frames.delete(id),
    IntersectionObserver: class extends Observer {
      constructor(fn) {
        super(fn, intersections);
      }
    },
    ResizeObserver: class extends Observer {
      constructor(fn) {
        super(fn, resizes);
      }
    },
    require(id) {
      if (id === "react") return react;
      if (id === "react/jsx-runtime")
        return {
          jsx: (tag, props) => ({ tag, props }),
          jsxs: (tag, props) => ({ tag, props }),
        };
      if (id === "next/navigation") return { usePathname: () => pathname };
      if (id === "lenis") {
        imports++;
        return { default: Lenis };
      }
      throw Error(id);
    },
  };
  const source = readFileSync(
    `src/components/interactions/${name}.tsx`,
    "utf8",
  );
  const { outputText } = ts.transpileModule(source, {
    compilerOptions: {
      module: ts.ModuleKind.CommonJS,
      target: ts.ScriptTarget.ES2022,
      jsx: ts.JsxEmit.ReactJSX,
    },
  });
  vm.runInNewContext(outputText, context);
  return {
    component: Object.values(testModule.exports)[0],
    mount: () => effects[0]?.(),
    media,
    document,
    window,
    intersections,
    resizes,
    instances,
    frames,
    imports: () => imports,
  };
}

test("ticker pauses offscreen/hidden and resumes its phase, including resize", () => {
  const animations = [];
  const node = {
    children: [{ offsetWidth: 100 }, { offsetWidth: 100 }],
    parentElement: {},
    animate(_keyframes, options) {
      const animation = {
        currentTime: 0,
        playState: "running",
        options,
        play() {
          this.playState = "running";
        },
        pause() {
          this.playState = "paused";
        },
        cancel() {
          this.playState = "idle";
        },
      };
      animations.push(animation);
      return animation;
    },
  };
  const h = load("ticker", { node });
  h.component({ children: ["a", "b"], speed: 50, gap: 10 });
  const cleanup = h.mount();
  const a = animations[0];
  assert.equal(a.playState, "paused");
  assert.equal(h.intersections[0].target, node.parentElement);
  h.intersections[0].callback([{ isIntersecting: true }]);
  a.currentTime = a.options.duration / 4;
  h.document.hidden = true;
  h.document.emit("visibilitychange");
  assert.equal(a.playState, "paused");
  const time = a.currentTime;
  h.document.hidden = false;
  h.document.emit("visibilitychange");
  assert.equal(a.playState, "running");
  assert.equal(a.currentTime, time);
  h.intersections[0].callback([{ isIntersecting: false }]);
  assert.equal(a.playState, "paused");
  node.children[0].offsetWidth = 200;
  h.resizes[0].callback();
  const b = animations.at(-1);
  assert.equal(b.currentTime / b.options.duration, 0.25);
  assert.equal(b.playState, "paused");
  h.media.matches = true;
  h.media.emit("change");
  assert.equal(b.playState, "idle");
  cleanup();
  assert(h.intersections[0].disconnected && h.resizes[0].disconnected);
  assert.equal(h.document.listeners.size, 0);
  assert.equal(h.media.listeners.size, 0);
});

test("Lenis does not load on case pages or reduced motion", async () => {
  for (const options of [
    { pathname: "/vocao" },
    { pathname: "/cycle-aura" },
    { reduced: true },
  ]) {
    const h = load("smooth-scroll", options);
    h.component();
    h.mount();
    await Promise.resolve();
    await Promise.resolve();
    assert.equal(h.imports(), 0);
    assert.equal(h.instances.length, 0);
  }
});

test("Lenis import cannot create a stale instance after unmount", async () => {
  const h = load("smooth-scroll");
  h.component();
  const cleanup = h.mount();
  cleanup();
  await Promise.resolve();
  await Promise.resolve();
  await Promise.resolve();
  assert.equal(h.instances.length, 0);
});

test("Lenis keeps original rounding and cleans up on motion changes", async () => {
  const h = load("smooth-scroll", { pathname: "/about" });
  h.component();
  const cleanup = h.mount();
  await Promise.resolve();
  await Promise.resolve();
  await Promise.resolve();
  assert.equal(h.instances.length, 1);
  h.instances[0].scrollTo(1.6);
  assert.equal(h.instances[0].target, 2);
  assert.equal(h.instances[0].options.duration, 0.5);
  h.media.matches = true;
  h.media.emit("change");
  assert(h.instances[0].destroyed);
  cleanup();
  assert.equal(h.media.listeners.size, 0);
});

test("parallax stops frame updates offscreen and resynchronizes on return", () => {
  const node = { style: {}, parentElement: {} };
  const h = load("parallax-heading", { node });
  h.component({});
  const cleanup = h.mount();
  assert.equal(h.window.listeners.size, 0);
  h.intersections[0].callback([{ isIntersecting: true }]);
  h.window.scrollY = 200;
  h.window.emit("scroll");
  h.window.emit("scroll");
  assert.equal(h.frames.size, 1);
  h.intersections[0].callback([{ isIntersecting: false }]);
  assert.equal(h.frames.size, 0);
  assert.equal(h.window.listeners.size, 0);
  h.window.scrollY = 100;
  h.intersections[0].callback([{ isIntersecting: true }]);
  assert.equal(node.style.transform, "translateY(25px)");
  h.media.matches = true;
  h.media.emit("change");
  assert.equal(node.style.transform, "");
  cleanup();
  assert(h.intersections[0].disconnected);
});
