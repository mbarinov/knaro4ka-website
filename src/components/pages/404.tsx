import Link from "next/link";
import type { CSSProperties } from "react";
import { Reveal, SiteFooter, SiteNavigation } from "../site-components";
/** Layout and content migrated from the captured original. No Framer runtime. */
export default function NotFoundPage() {
  return (
    <div
      className={"framer-J0L4Q framer-qiQhp framer-Qihgk framer-1ymnv7s"}
      style={{ minHeight: "100vh", width: "auto" } as CSSProperties}
      data-site-page="404"
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
        className={"framer-1n9mawj-container"}
      >
        <SiteNavigation caseStudy={false} />
      </Reveal>
      <header className={"framer-1ru2f2h"} data-framer-name={"container"}>
        <div className={"framer-1jzxli0"} data-framer-name={"message"}>
          <div
            className={"framer-sqdtir"}
            data-framer-name={"error 404"}
            data-framer-component-type={"RichTextContainer"}
            style={{ transform: "none" } as CSSProperties}
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
              {"error 404"}
            </h1>
          </div>
          <div
            className={"framer-y9ht48"}
            data-framer-name={"page you are looking for does not exist"}
            data-framer-component-type={"RichTextContainer"}
            style={{ transform: "none" } as CSSProperties}
          >
            <p
              className={"framer-text framer-styles-preset-rkifp2"}
              style={
                {
                  "--framer-text-alignment": "center",
                  "--framer-text-color":
                    "var(--token-d7a90985-9f9c-42fd-aec8-e2228e6f7113, rgb(238, 238, 238))",
                } as CSSProperties
              }
            >
              {"page you are looking for does not exist"}
            </p>
          </div>
        </div>
        <div
          className={"framer-krn8ld-container"}
          data-framer-name={"home link"}
        >
          <div className={"ssr-variant hidden-13gsled hidden-7qs5dv"}>
            <Link
              className={
                "framer-q6l86 framer-Qihgk framer-1f1zt1z framer-v-1f1zt1z framer-1utths9"
              }
              data-framer-name={"desktop"}
              href={"/#hero-section"}
            >
              <div
                className={"framer-lz3coi"}
                data-framer-name={"main container"}
              >
                <div
                  className={"framer-13qqjtd"}
                  data-framer-component-type={"RichTextContainer"}
                  style={
                    {
                      "--extracted-r6o4lv":
                        "var(--token-d7a90985-9f9c-42fd-aec8-e2228e6f7113, rgb(238, 238, 238))",
                      "--framer-link-text-color": "rgb(0, 153, 255)",
                      "--framer-link-text-decoration": "underline",
                      transform: "none",
                    } as CSSProperties
                  }
                >
                  <p
                    className={"framer-text framer-styles-preset-rkifp2"}
                    style={
                      {
                        "--framer-text-alignment": "center",
                        "--framer-text-color":
                          "var(--extracted-r6o4lv, var(--token-d7a90985-9f9c-42fd-aec8-e2228e6f7113, rgb(238, 238, 238)))",
                      } as CSSProperties
                    }
                  >
                    {"back to home"}
                  </p>
                </div>
                <div
                  className={"framer-4ragl8"}
                  data-framer-name={"line container"}
                >
                  <div
                    className={"framer-ttkx9t"}
                    data-framer-name={"line"}
                    style={{ opacity: "0" } as CSSProperties}
                  >
                    <div
                      className={"framer-1gj215z"}
                      data-framer-name={"actual line"}
                      style={
                        {
                          backgroundColor:
                            "var(--token-d7a90985-9f9c-42fd-aec8-e2228e6f7113, rgb(18, 18, 18))",
                        } as CSSProperties
                      }
                    ></div>
                  </div>
                </div>
              </div>
            </Link>
          </div>
          <div className={"ssr-variant hidden-1ymnv7s"}>
            <Link
              className={
                "framer-q6l86 framer-Qihgk framer-1f1zt1z framer-v-mzf7tu framer-1utths9"
              }
              data-framer-name={"mobile"}
              href={"/#hero-section"}
              tabIndex={0}
            >
              <div
                className={"framer-lz3coi"}
                data-framer-name={"main container"}
              >
                <div
                  className={"framer-13qqjtd"}
                  data-framer-component-type={"RichTextContainer"}
                  style={
                    {
                      "--extracted-r6o4lv":
                        "var(--token-d7a90985-9f9c-42fd-aec8-e2228e6f7113, rgb(238, 238, 238))",
                      "--framer-link-text-color": "rgb(0, 153, 255)",
                      "--framer-link-text-decoration": "underline",
                      transform: "none",
                    } as CSSProperties
                  }
                >
                  <p
                    className={"framer-text framer-styles-preset-rkifp2"}
                    style={
                      {
                        "--framer-text-alignment": "center",
                        "--framer-text-color":
                          "var(--extracted-r6o4lv, var(--token-d7a90985-9f9c-42fd-aec8-e2228e6f7113, rgb(238, 238, 238)))",
                      } as CSSProperties
                    }
                  >
                    {"back to home"}
                  </p>
                </div>
                <div
                  className={"framer-4ragl8"}
                  data-framer-name={"line container"}
                >
                  <div
                    className={"framer-ttkx9t"}
                    data-framer-name={"line"}
                    style={{ opacity: "0" } as CSSProperties}
                  >
                    <div
                      className={"framer-1gj215z"}
                      data-framer-name={"actual line"}
                      style={
                        {
                          backgroundColor:
                            "var(--token-d7a90985-9f9c-42fd-aec8-e2228e6f7113, rgb(18, 18, 18))",
                        } as CSSProperties
                      }
                    ></div>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </header>
      <div className={"framer-xtfork-container"} id={"footer-section"}>
        <SiteFooter responsive={true} />
      </div>
      <div className={"framer-2xafd4-container"}>
        <div></div>
      </div>
      <div className={"framer-5vrvk8-container"}>
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
    </div>
  );
}
