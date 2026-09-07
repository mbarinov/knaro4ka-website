import type { CSSProperties } from "react";
import Image from "next/image";
import {
  ParallaxHeading,
  Reveal,
  ServicesTicker,
  SiteFooter,
  SiteNavigation,
  Ticker,
} from "../site-components";
/** Layout and content migrated from the captured original. No Framer runtime. */
export default function AboutPage() {
  return (
    <div
      className={
        "framer-pKRS9 framer-qiQhp framer-Qihgk framer-7nSTT framer-i0nK1 framer-elhp65"
      }
      style={{ minHeight: "100vh", width: "auto" } as CSSProperties}
      data-site-page="about"
    >
      <Reveal
        as="div"
        effect={{
          initial: {
            opacity: 0.001,
            rotate: 0,
            rotateX: 0,
            rotateY: 0,
            scale: 1,
            skewX: 0,
            skewY: 0,
            x: 0,
            y: -500,
          },
          animate: {
            opacity: 1,
            rotate: 0,
            rotateX: 0,
            rotateY: 0,
            scale: 1,
            skewX: 0,
            skewY: 0,
            transition: {
              delay: 0.2,
              duration: 1,
              ease: [0.16, 1, 0.3, 1],
              type: "tween",
            },
            x: 0,
            y: 0,
          },
        }}
        className={"framer-1c1stpi-container"}
      >
        <SiteNavigation caseStudy={false} />
      </Reveal>
      <main className={"framer-jxkrxo"} data-framer-name={"main"}>
        <header
          className={"framer-1ef3gee"}
          data-border={"true"}
          data-framer-name={"hero section"}
        >
          <div className={"framer-81lwxk"} data-framer-name={"container"}>
            <ParallaxHeading
              className={"framer-1d64ou8"}
              data-framer-name={"heading"}
              style={{ opacity: "1" } as CSSProperties}
            >
              <Reveal
                as="div"
                effect={{
                  initial: {
                    opacity: 0.001,
                    rotate: 0,
                    rotateX: 0,
                    rotateY: 0,
                    scale: 1,
                    skewX: 0,
                    skewY: 0,
                    x: 0,
                    y: 500,
                  },
                  animate: {
                    opacity: 1,
                    rotate: 0,
                    rotateX: 0,
                    rotateY: 0,
                    scale: 1,
                    skewX: 0,
                    skewY: 0,
                    transition: {
                      delay: 0.3,
                      duration: 1,
                      ease: [0.16, 1, 0.3, 1],
                      type: "tween",
                    },
                    x: 0,
                    y: 0,
                  },
                }}
                className={"framer-1jmuu43"}
                data-framer-component-type={"RichTextContainer"}
              >
                <h1
                  className={"framer-text framer-styles-preset-1dmirnf"}
                  style={
                    {
                      "--framer-text-alignment": "center",
                      "--framer-text-color":
                        "var(--token-d7a90985-9f9c-42fd-aec8-e2228e6f7113, rgb(238, 238, 238))",
                    } as CSSProperties
                  }
                >
                  {"my design story"}
                </h1>
              </Reveal>
            </ParallaxHeading>
            <div className={"ssr-variant"}>
              <Reveal
                as="div"
                effect={{
                  initial: {
                    opacity: 0.001,
                    rotate: 0,
                    rotateX: 0,
                    rotateY: 0,
                    scale: 1,
                    skewX: 0,
                    skewY: 0,
                    x: 0,
                    y: 500,
                  },
                  animate: {
                    opacity: 1,
                    rotate: 0,
                    rotateX: 0,
                    rotateY: 0,
                    scale: 1,
                    skewX: 0,
                    skewY: 0,
                    transition: {
                      delay: 0.3,
                      duration: 1,
                      ease: [0.16, 1, 0.3, 1],
                      type: "tween",
                    },
                    x: 0,
                    y: 0,
                  },
                }}
                className={"framer-1yxag8e"}
                data-framer-name={"portrait image"}
              >
                <div
                  style={
                    {
                      position: "absolute",
                      borderRadius: "inherit",
                      cornerShape: "inherit",
                      top: "0",
                      right: "0",
                      bottom: "0",
                      left: "0",
                    } as CSSProperties
                  }
                  data-framer-background-image-wrapper={"true"}
                >
                  <Image
                    width={"1278"}
                    height={"1598"}
                    sizes={
                      "(min-width: 1200px) calc((100vw - 40px) / 3.477), (max-width: 809.98px) calc((100vw - 32px) * 0.6), (min-width: 810px) and (max-width: 1199.98px) calc((100vw - 40px) * 0.4)"
                    }
                    src={"/assets/f6c773baa9fc.png"}
                    alt={""}
                    style={
                      {
                        display: "block",
                        width: "100%",
                        height: "100%",
                        borderRadius: "inherit",
                        cornerShape: "inherit",
                        objectPosition: "center",
                        objectFit: "cover",
                      } as CSSProperties
                    }
                    unoptimized
                  />
                </div>
              </Reveal>
            </div>
          </div>
          <ServicesTicker />
        </header>
        <section className={"framer-1am1lz"} data-framer-name={"clients"}>
          <div
            className={"framer-nydwue"}
            data-framer-component-type={"RichTextContainer"}
            style={{ transform: "none" } as CSSProperties}
          >
            <h2
              className={"framer-text framer-styles-preset-ucxo9e"}
              dir={"auto"}
              style={
                {
                  "--framer-text-alignment": "center",
                  "--framer-text-color":
                    "var(--token-d7a90985-9f9c-42fd-aec8-e2228e6f7113, rgb(238, 238, 238))",
                } as CSSProperties
              }
            >
              {"Who  am  i?"}
            </h2>
          </div>
          <div className={"framer-qy3t7h"} data-framer-name={"container"}>
            <div
              className={"framer-1jfsbgw"}
              data-framer-component-type={"RichTextContainer"}
              style={{ transform: "none" } as CSSProperties}
            >
              <p
                className={"framer-text framer-styles-preset-gv0r8j"}
                dir={"auto"}
                style={
                  {
                    "--framer-text-alignment": "center",
                    "--framer-text-color":
                      "var(--token-d7a90985-9f9c-42fd-aec8-e2228e6f7113, rgb(238, 238, 238))",
                  } as CSSProperties
                }
              >
                {
                  "With a sharp eye for detail and an instinct for bold aesthetics, I craft meaningful interfaces that help people truly enjoy the products they use. My experience spans startups and companies, and I also create personal projects for fun, experimenting with ideas and exploring new ways to design"
                }
              </p>
            </div>
          </div>
        </section>
        <section className={"framer-8mw2hb"} data-framer-name={"my approach"}>
          <div
            className={"framer-5inlg5"}
            data-framer-component-type={"RichTextContainer"}
            style={{ transform: "none" } as CSSProperties}
          >
            <h2
              className={"framer-text framer-styles-preset-ucxo9e"}
              style={
                {
                  "--framer-text-alignment": "center",
                  "--framer-text-color":
                    "var(--token-d7a90985-9f9c-42fd-aec8-e2228e6f7113, rgb(238, 238, 238))",
                } as CSSProperties
              }
            >
              {"my approach"}
            </h2>
          </div>
          <div
            className={"framer-1o77p00"}
            data-framer-component-type={"RichTextContainer"}
            style={{ transform: "none" } as CSSProperties}
          >
            <p
              className={"framer-text framer-styles-preset-gv0r8j"}
              dir={"auto"}
              style={
                {
                  "--framer-text-alignment": "center",
                  "--framer-text-color":
                    "var(--token-d7a90985-9f9c-42fd-aec8-e2228e6f7113, rgb(238, 238, 238))",
                } as CSSProperties
              }
            >
              {
                "I design with a product mindset — always balancing user needs, business goals, and visual clarity. I like to start from understanding the problem deeply before jumping into solutions, and I iterate quickly to test what actually works in real contexts.  "
              }
              <br className={"framer-text"} />
              <br className={"framer-text"} />
              {
                "I pay close attention to details, but I always zoom out to make sure the experience feels coherent and intuitive as a we. For me, good design is not just how it looks, but how naturally it guides people through thhole product"
              }
            </p>
          </div>
        </section>
        <div
          className={"framer-1xpp3ye"}
          style={
            {
              overflowX: "clip",
              display: "flex",
              position: "relative",
            } as CSSProperties
          }
        >
          <Ticker speed={50} gap={10}>
            <li className="ticker-item">
              <div className={"framer-s3y00g"} data-border={"true"}>
                <div
                  className={"framer-t4drow"}
                  data-framer-component-type={"RichTextContainer"}
                  style={{ transform: "none" } as CSSProperties}
                >
                  <h2
                    className={"framer-text framer-styles-preset-ucxo9e"}
                    dir={"auto"}
                    style={
                      {
                        "--framer-text-alignment": "start",
                        "--framer-text-color":
                          "var(--token-d7a90985-9f9c-42fd-aec8-e2228e6f7113, rgb(238, 238, 238))",
                      } as CSSProperties
                    }
                  >
                    {"rfjf"}
                  </h2>
                </div>
                <div
                  className={"framer-1hycfgc"}
                  data-framer-component-type={"RichTextContainer"}
                  style={{ transform: "none" } as CSSProperties}
                >
                  <p
                    className={"framer-text framer-styles-preset-gv0r8j"}
                    dir={"auto"}
                    style={
                      {
                        "--framer-text-alignment": "start",
                        "--framer-text-color":
                          "var(--token-d7a90985-9f9c-42fd-aec8-e2228e6f7113, rgb(238, 238, 238))",
                      } as CSSProperties
                    }
                  >
                    {
                      "I design with a p I design with a pI design with a pI design with a pI design with a pI design with a pI design with a p"
                    }
                  </p>
                </div>
              </div>
            </li>
            <li className="ticker-item">
              <div className={"framer-1q0y3oi"} data-border={"true"}>
                <div
                  className={"framer-13baynt"}
                  data-framer-component-type={"RichTextContainer"}
                  style={{ transform: "none" } as CSSProperties}
                >
                  <h2
                    className={"framer-text framer-styles-preset-ucxo9e"}
                    dir={"auto"}
                    style={
                      {
                        "--framer-text-alignment": "start",
                        "--framer-text-color":
                          "var(--token-d7a90985-9f9c-42fd-aec8-e2228e6f7113, rgb(238, 238, 238))",
                      } as CSSProperties
                    }
                  >
                    {"rfjf"}
                  </h2>
                </div>
                <div
                  className={"framer-uc9y2r"}
                  data-framer-component-type={"RichTextContainer"}
                  style={{ transform: "none" } as CSSProperties}
                >
                  <p
                    className={"framer-text framer-styles-preset-gv0r8j"}
                    dir={"auto"}
                    style={
                      {
                        "--framer-text-alignment": "start",
                        "--framer-text-color":
                          "var(--token-d7a90985-9f9c-42fd-aec8-e2228e6f7113, rgb(238, 238, 238))",
                      } as CSSProperties
                    }
                  >
                    {
                      "I design with a p I design with a pI design with a pI design with a pI design with a pI design with a pI design with a p"
                    }
                  </p>
                </div>
              </div>
            </li>
            <li className="ticker-item">
              <div className={"framer-knmn1x"} data-border={"true"}>
                <div
                  className={"framer-k83opa"}
                  data-framer-component-type={"RichTextContainer"}
                  style={{ transform: "none" } as CSSProperties}
                >
                  <h2
                    className={"framer-text framer-styles-preset-ucxo9e"}
                    dir={"auto"}
                    style={
                      {
                        "--framer-text-alignment": "start",
                        "--framer-text-color":
                          "var(--token-d7a90985-9f9c-42fd-aec8-e2228e6f7113, rgb(238, 238, 238))",
                      } as CSSProperties
                    }
                  >
                    {"rfjf"}
                  </h2>
                </div>
                <div
                  className={"framer-1n8t4qu"}
                  data-framer-component-type={"RichTextContainer"}
                  style={{ transform: "none" } as CSSProperties}
                >
                  <p
                    className={"framer-text framer-styles-preset-gv0r8j"}
                    dir={"auto"}
                    style={
                      {
                        "--framer-text-alignment": "start",
                        "--framer-text-color":
                          "var(--token-d7a90985-9f9c-42fd-aec8-e2228e6f7113, rgb(238, 238, 238))",
                      } as CSSProperties
                    }
                  >
                    {
                      "I design with a p I design with a pI design with a pI design with a pI design with a pI design with a pI design with a p"
                    }
                  </p>
                </div>
              </div>
            </li>
            <li className="ticker-item">
              <div className={"framer-u37sch"} data-border={"true"}>
                <div
                  className={"framer-1l627vu"}
                  data-framer-component-type={"RichTextContainer"}
                  style={{ transform: "none" } as CSSProperties}
                >
                  <h2
                    className={"framer-text framer-styles-preset-ucxo9e"}
                    dir={"auto"}
                    style={
                      {
                        "--framer-text-alignment": "start",
                        "--framer-text-color":
                          "var(--token-d7a90985-9f9c-42fd-aec8-e2228e6f7113, rgb(238, 238, 238))",
                      } as CSSProperties
                    }
                  >
                    {"rfjf"}
                  </h2>
                </div>
                <div
                  className={"framer-1902sux"}
                  data-framer-component-type={"RichTextContainer"}
                  style={{ transform: "none" } as CSSProperties}
                >
                  <p
                    className={"framer-text framer-styles-preset-gv0r8j"}
                    dir={"auto"}
                    style={
                      {
                        "--framer-text-alignment": "start",
                        "--framer-text-color":
                          "var(--token-d7a90985-9f9c-42fd-aec8-e2228e6f7113, rgb(238, 238, 238))",
                      } as CSSProperties
                    }
                  >
                    {
                      "I design with a p I design with a pI design with a pI design with a pI design with a pI design with a pI design with a p"
                    }
                  </p>
                </div>
              </div>
            </li>
            <li className="ticker-item">
              <div className={"framer-12p5jcw"} data-border={"true"}>
                <div
                  className={"framer-vj3yxq"}
                  data-framer-component-type={"RichTextContainer"}
                  style={{ transform: "none" } as CSSProperties}
                >
                  <h2
                    className={"framer-text framer-styles-preset-ucxo9e"}
                    dir={"auto"}
                    style={
                      {
                        "--framer-text-alignment": "start",
                        "--framer-text-color":
                          "var(--token-d7a90985-9f9c-42fd-aec8-e2228e6f7113, rgb(238, 238, 238))",
                      } as CSSProperties
                    }
                  >
                    {"rfjf"}
                  </h2>
                </div>
                <div
                  className={"framer-1r8mjg4"}
                  data-framer-component-type={"RichTextContainer"}
                  style={{ transform: "none" } as CSSProperties}
                >
                  <p
                    className={"framer-text framer-styles-preset-gv0r8j"}
                    dir={"auto"}
                    style={
                      {
                        "--framer-text-alignment": "start",
                        "--framer-text-color":
                          "var(--token-d7a90985-9f9c-42fd-aec8-e2228e6f7113, rgb(238, 238, 238))",
                      } as CSSProperties
                    }
                  >
                    {
                      "I design with a p I design with a pI design with a pI design with a pI design with a pI design with a pI design with a p"
                    }
                  </p>
                </div>
              </div>
            </li>
            <li className="ticker-item">
              <div className={"framer-1giuof2"} data-border={"true"}>
                <div
                  className={"framer-13sgi72"}
                  data-framer-component-type={"RichTextContainer"}
                  style={{ transform: "none" } as CSSProperties}
                >
                  <h2
                    className={"framer-text framer-styles-preset-ucxo9e"}
                    dir={"auto"}
                    style={
                      {
                        "--framer-text-alignment": "start",
                        "--framer-text-color":
                          "var(--token-d7a90985-9f9c-42fd-aec8-e2228e6f7113, rgb(238, 238, 238))",
                      } as CSSProperties
                    }
                  >
                    {"rfjf"}
                  </h2>
                </div>
                <div
                  className={"framer-f9sit0"}
                  data-framer-component-type={"RichTextContainer"}
                  style={{ transform: "none" } as CSSProperties}
                >
                  <p
                    className={"framer-text framer-styles-preset-gv0r8j"}
                    dir={"auto"}
                    style={
                      {
                        "--framer-text-alignment": "start",
                        "--framer-text-color":
                          "var(--token-d7a90985-9f9c-42fd-aec8-e2228e6f7113, rgb(238, 238, 238))",
                      } as CSSProperties
                    }
                  >
                    {
                      "I design with a p I design with a pI design with a pI design with a pI design with a pI design with a pI design with a p"
                    }
                  </p>
                </div>
              </div>
            </li>
            <li className="ticker-item">
              <div className={"framer-1eiwkrx"}>
                <div
                  data-framer-component-type={"SVG"}
                  className={"framer-1feyaei"}
                  aria-hidden={"true"}
                  style={
                    {
                      imageRendering: "pixelated",
                      flexShrink: "0",
                      backgroundSize: "100% 100%",
                      backgroundImage: "url('/assets/dc6a8b210e53.svg')",
                    } as CSSProperties
                  }
                ></div>
              </div>
            </li>
            <li className="ticker-item">
              <div className={"framer-r5t3gr"}>
                <div
                  data-framer-component-type={"SVG"}
                  className={"framer-1k1dbm3"}
                  aria-hidden={"true"}
                  style={
                    {
                      imageRendering: "pixelated",
                      flexShrink: "0",
                      backgroundSize: "100% 100%",
                      backgroundImage: "url('/assets/d4d2ff3ac814.svg')",
                    } as CSSProperties
                  }
                ></div>
              </div>
            </li>
            <li className="ticker-item">
              <div className={"framer-1t9u7dh"}>
                <div
                  data-framer-component-type={"SVG"}
                  className={"framer-lwhh43"}
                  aria-hidden={"true"}
                  style={
                    {
                      imageRendering: "pixelated",
                      flexShrink: "0",
                      backgroundSize: "100% 100%",
                      backgroundImage: "url('/assets/41e3ea5c404a.svg')",
                    } as CSSProperties
                  }
                ></div>
              </div>
            </li>
            <li className="ticker-item">
              <div className={"framer-hmxf7u"}>
                <div
                  data-framer-component-type={"SVG"}
                  className={"framer-1om9exv"}
                  aria-hidden={"true"}
                  style={
                    {
                      imageRendering: "pixelated",
                      flexShrink: "0",
                      backgroundSize: "100% 100%",
                      backgroundImage: "url('/assets/dc6a8b210e53.svg')",
                    } as CSSProperties
                  }
                ></div>
              </div>
            </li>
          </Ticker>
        </div>{" "}
        <section className={"framer-zd1vo5"} data-framer-name={"awards"}>
          <div
            className={"framer-uj4fld"}
            data-framer-component-type={"RichTextContainer"}
            style={{ transform: "none" } as CSSProperties}
          >
            <h2
              className={"framer-text framer-styles-preset-ucxo9e"}
              dir={"auto"}
              style={
                {
                  "--framer-text-alignment": "center",
                  "--framer-text-color":
                    "var(--token-d7a90985-9f9c-42fd-aec8-e2228e6f7113, rgb(238, 238, 238))",
                } as CSSProperties
              }
            >
              {"Fun  Facts"}
            </h2>
          </div>
          <div className={"framer-yj1tgy"} data-framer-name={"container"}>
            <div
              className={"framer-136b261"}
              data-framer-component-type={"RichTextContainer"}
              style={{ transform: "none" } as CSSProperties}
            >
              <p
                className={"framer-text framer-styles-preset-rkifp2"}
                dir={"auto"}
                style={
                  {
                    "--framer-text-alignment": "center",
                    "--framer-text-color":
                      "var(--token-d7a90985-9f9c-42fd-aec8-e2228e6f7113, rgb(238, 238, 238))",
                  } as CSSProperties
                }
              >
                {"I run a design Tik Tok with growing audience"}
              </p>
            </div>
            <div
              className={"framer-rncmwu"}
              data-framer-component-type={"RichTextContainer"}
              style={{ transform: "none" } as CSSProperties}
            >
              <p
                className={"framer-text framer-styles-preset-rkifp2"}
                dir={"auto"}
                style={
                  {
                    "--framer-text-alignment": "center",
                    "--framer-text-color":
                      "var(--token-d7a90985-9f9c-42fd-aec8-e2228e6f7113, rgb(238, 238, 238))",
                  } as CSSProperties
                }
              >
                {
                  "I design in Figma in my sleep more often than I’d like to admit"
                }
              </p>
            </div>
            <div
              className={"framer-sop486"}
              data-framer-component-type={"RichTextContainer"}
              style={{ transform: "none" } as CSSProperties}
            >
              <p
                className={"framer-text framer-styles-preset-rkifp2"}
                dir={"auto"}
                style={
                  {
                    "--framer-text-alignment": "center",
                    "--framer-text-color":
                      "var(--token-d7a90985-9f9c-42fd-aec8-e2228e6f7113, rgb(238, 238, 238))",
                  } as CSSProperties
                }
              >
                {"I judge restaurants by their menu design"}
              </p>
            </div>
            <div
              className={"framer-jpegjh"}
              data-framer-component-type={"RichTextContainer"}
              style={{ transform: "none" } as CSSProperties}
            >
              <p
                className={"framer-text framer-styles-preset-rkifp2"}
                dir={"auto"}
                style={
                  {
                    "--framer-text-alignment": "center",
                    "--framer-text-color":
                      "var(--token-d7a90985-9f9c-42fd-aec8-e2228e6f7113, rgb(238, 238, 238))",
                  } as CSSProperties
                }
              >
                {"Bad alignment in real life objects actually makes me mad"}
              </p>
            </div>
          </div>
        </section>
      </main>
      <div className={"framer-1sud3c4-container"} id={"footer-section"}>
        <SiteFooter responsive={true} />
      </div>
      <div className={"framer-avsvpn-container"}>
        <div
          style={
            {
              width: "100%",
              height: "100%",
              backgroundSize: "128px",
              backgroundRepeat: "repeat",
              backgroundImage: "url('/assets/noise.png')",
              opacity: "0.1",
              borderRadius: "0",
            } as CSSProperties
          }
        ></div>
      </div>
      <div className={"framer-19anzdg-container"}>
        <div></div>
      </div>
    </div>
  );
}
