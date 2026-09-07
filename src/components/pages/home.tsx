import type { CSSProperties } from "react";
import Image from "next/image";
import { SiteFooter, SiteNavigation } from "../site-components";
import { Reveal } from "../interactions/reveal";
import { Ticker } from "../interactions/ticker";
import { TiltCard } from "../interactions/tilt-card";
/** Layout and content migrated from the captured original. No Framer runtime. */
export default function HomePage() {
  return (
    <div
      className={
        "framer-iH80L framer-qiQhp framer-Qihgk framer-7nSTT framer-Y8B44 framer-72rtr7"
      }
      style={{ minHeight: "100vh", width: "auto" } as CSSProperties}
      data-site-page="home"
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
        className={"framer-9we5oi-container"}
      >
        <SiteNavigation caseStudy={false} />
      </Reveal>
      <main className={"framer-1kma92d"} data-framer-name={"main"}>
        <header
          className={"framer-e9hglg"}
          data-framer-name={"hero section"}
          id={"hero-section"}
        >
          <div className={"framer-1uaev5h"} data-framer-name={"container"}>
            <div
              className={"framer-vlavvt"}
              data-framer-name={"designer and art director"}
              data-framer-component-type={"RichTextContainer"}
              style={{ transform: "none" } as CSSProperties}
            >
              <h1
                className={"framer-text framer-styles-preset-1dmirnf"}
                dir={"auto"}
                style={
                  {
                    "--framer-text-alignment": "center",
                    "--framer-text-color":
                      "var(--token-d7a90985-9f9c-42fd-aec8-e2228e6f7113, rgb(238, 238, 238))",
                  } as CSSProperties
                }
              >
                {"product designer who ships magic"}
              </h1>
            </div>
            <div
              className={"framer-1e63f4v"}
              data-framer-name={
                "designer and art director who creates bold ideas with a purpose"
              }
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
                  "designing meaningful experiences that move businesses forward"
                }
              </p>
            </div>
          </div>
          <div
            className={"framer-bhy15k"}
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
                <div className={"framer-1u1qwb6"}>
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
                      loading="eager"
                      width={"736"}
                      height={"970"}
                      sizes={"200px"}
                      src={"/assets/d44ce6cbc063.avif"}
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
                </div>
              </li>
              <li className="ticker-item">
                <div className={"framer-1fa3zxn"}></div>
              </li>
              <li className="ticker-item">
                <div className={"framer-12v6rhe"}>
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
                      loading="eager"
                      width={"1008"}
                      height={"1008"}
                      sizes={"200px"}
                      src={"/assets/433527337bf7.png"}
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
                    />
                  </div>
                  <div
                    data-framer-component-type={"SVG"}
                    className={"framer-dbcj8h"}
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
                <div className={"framer-a7scdh"}>
                  <div
                    data-framer-component-type={"SVG"}
                    className={"framer-1rcxnmc"}
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
                <div className={"framer-11esqmv"}>
                  <div
                    data-framer-component-type={"SVG"}
                    className={"framer-lcsek1"}
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
                <div className={"framer-f9egp4"}>
                  <div
                    data-framer-component-type={"SVG"}
                    className={"framer-oycgbu"}
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
                <div className={"framer-15oehjt"}>
                  <div
                    data-framer-component-type={"SVG"}
                    className={"framer-1dbuvek"}
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
                <div className={"framer-znqc13"}>
                  <div
                    data-framer-component-type={"SVG"}
                    className={"framer-e34r3i"}
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
        </header>
        <Reveal
          as="section"
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
          className={"framer-1jqux9q"}
          data-framer-name={"works"}
        >
          <div className={"framer-tqacl8"} data-framer-name={"container"}>
            <div
              className={"framer-1monq6v"}
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
                {"selected works (25-26')"}
              </h2>
            </div>
            <div
              className={"framer-11dre1h"}
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
                {"A showcase of handpicked projects"}
              </p>
            </div>
          </div>
          <div className={"framer-14vima8"}>
            <TiltCard>
              <div className={"framer-1fnefmo"}>
                <div className={"framer-yex0ls-container"}>
                  <a
                    href={"/vocao"}
                    title={""}
                    rel="noopener noreferrer"
                    target={"_blank"}
                    style={
                      {
                        display: "flex",
                        placeContent: "center",
                        placeItems: "center",
                        width: "100%",
                        height: "100%",
                        padding: "0",
                      } as CSSProperties
                    }
                  >
                    <Image
                      style={
                        {
                          maxWidth: "100%",
                          maxHeight: "100%",
                          borderRadius: "0",
                          userSelect: "none",
                        } as CSSProperties
                      }
                      src={"/assets/48de8cc805a9.avif"}
                      alt={""}
                      sizes={"200px"}
                      width={909}
                      height={1218}
                      unoptimized
                    />
                    <div
                      style={
                        {
                          position: "absolute",
                          inset: "0",
                          pointerEvents: "none",
                          borderRadius: "0",
                        } as CSSProperties
                      }
                    ></div>
                  </a>
                </div>
                <div className={"framer-198042z"} data-framer-name={"info"}>
                  <div
                    className={"framer-1uevbwz"}
                    data-framer-component-type={"RichTextContainer"}
                    style={{ transform: "none" } as CSSProperties}
                  >
                    <h3
                      className={"framer-text framer-styles-preset-o3nqxi"}
                      dir={"auto"}
                      style={
                        {
                          "--framer-text-alignment": "center",
                          "--framer-text-color":
                            "var(--token-d7a90985-9f9c-42fd-aec8-e2228e6f7113, rgb(238, 238, 238))",
                        } as CSSProperties
                      }
                    >
                      {"VOCAO"}
                    </h3>
                  </div>
                  <div
                    className={"framer-3baupu"}
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
                      {"Founder & Solo Designer, 2025"}
                    </p>
                  </div>
                </div>
              </div>
            </TiltCard>
            <TiltCard>
              <div className={"framer-12bf602"}>
                <div className={"framer-1rbccn1-container"}>
                  <a
                    href={"/cycle-aura"}
                    title={""}
                    rel="noopener noreferrer"
                    target={"_blank"}
                    style={
                      {
                        display: "flex",
                        placeContent: "center",
                        placeItems: "center",
                        width: "100%",
                        height: "100%",
                        padding: "0",
                      } as CSSProperties
                    }
                  >
                    <Image
                      style={
                        {
                          maxWidth: "100%",
                          maxHeight: "100%",
                          borderRadius: "0",
                          userSelect: "none",
                        } as CSSProperties
                      }
                      src={"/assets/257e6f8bfacb.png"}
                      alt={""}
                      sizes={"200px"}
                      width={1608}
                      height={2154}
                    />
                    <div
                      style={
                        {
                          position: "absolute",
                          inset: "0",
                          pointerEvents: "none",
                          borderRadius: "0",
                        } as CSSProperties
                      }
                    ></div>
                  </a>
                </div>
                <div className={"framer-os3h9f"} data-framer-name={"info"}>
                  <div
                    className={"framer-nts20m"}
                    data-framer-component-type={"RichTextContainer"}
                    style={{ transform: "none" } as CSSProperties}
                  >
                    <h3
                      className={"framer-text framer-styles-preset-o3nqxi"}
                      dir={"auto"}
                      style={
                        {
                          "--framer-text-alignment": "center",
                          "--framer-text-color":
                            "var(--token-d7a90985-9f9c-42fd-aec8-e2228e6f7113, rgb(238, 238, 238))",
                        } as CSSProperties
                      }
                    >
                      {"CYCLE  AURA"}
                    </h3>
                  </div>
                  <div
                    className={"framer-1ek76my"}
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
                      {"Designer & Vibecode developer, 2026"}
                    </p>
                  </div>
                </div>
              </div>
            </TiltCard>
          </div>
        </Reveal>
      </main>
      <div className={"framer-uel9i6-container"} id={"footer-section"}>
        <SiteFooter responsive={true} />
      </div>
      <div className={"framer-a15w2x-container"}>
        <div></div>
      </div>
      <div className={"framer-d66etu-container"}>
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
