import type { CSSProperties } from "react";
import Image from "next/image";
import { SiteFooter, SiteNavigation } from "../site-components";
import { Reveal } from "../interactions/reveal";
/** Layout and content migrated from the captured original. No Framer runtime. */
export default function VocaoPage() {
  return (
    <div
      className={"framer-ac5hn framer-i0nK1 framer-7nSTT framer-ljewty"}
      style={{ minHeight: "100vh", width: "auto" } as CSSProperties}
      data-site-page="vocao"
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
        className={"framer-18l1vk6-container"}
      >
        <SiteNavigation caseStudy={true} />
      </Reveal>
      <div className={"framer-8drycf"} data-framer-name={"info"}>
        <div
          className={"framer-xgyfkn"}
          data-framer-component-type={"RichTextContainer"}
          style={
            { justifyContent: "flex-end", transform: "none" } as CSSProperties
          }
        >
          <h1
            dir={"auto"}
            style={
              {
                "--font-selector": "RlM7R2FtYmFyaW5vLXJlZ3VsYXI=",
                "--framer-font-family":
                  '"Gambarino", "Gambarino Placeholder", serif',
                "--framer-font-open-type-features":
                  "'blwf' on, 'cv09' on, 'cv03' on, 'cv04' on, 'cv11' on",
                "--framer-font-size": "80px",
                "--framer-letter-spacing": "-0.04em",
                "--framer-line-height": "0.9em",
                "--framer-text-alignment": "center",
                "--framer-text-color":
                  "var(--token-d7a90985-9f9c-42fd-aec8-e2228e6f7113, rgb(238, 238, 238))",
                "--framer-text-transform": "uppercase",
              } as CSSProperties
            }
            className={"framer-text"}
          >
            {"vocao"}
          </h1>
        </div>
      </div>
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
        className={"framer-nbh406"}
        data-framer-name={"details"}
      >
        <div
          className={"framer-j5tf3s"}
          data-framer-component-type={"RichTextContainer"}
          style={{ transform: "none" } as CSSProperties}
        >
          <p
            className={"framer-text framer-styles-preset-gv0r8j"}
            dir={"auto"}
            style={
              {
                "--framer-text-alignment": "center",
                "--framer-text-color": "rgb(255, 255, 255)",
              } as CSSProperties
            }
          >
            {
              "Most people understand English better than they speak it. When it comes to actually talking, fear of judgment, lack of practice, or just awkward silence gets in the way."
            }
          </p>
          <p
            className={"framer-text framer-styles-preset-gv0r8j"}
            dir={"auto"}
            style={
              {
                "--framer-text-alignment": "center",
                "--framer-text-color": "rgb(255, 255, 255)",
              } as CSSProperties
            }
          >
            {
              "Vocao is an AI tutor built for speaking practice. It gives you a safe, low-pressure space to talk — through simple, playful conversations"
            }
          </p>
        </div>
        <div
          className={"framer-jpgxpj hidden-ljewty hidden-hxxibw"}
          id={"jpgxpj"}
        >
          <div className={"ssr-variant"}>
            <div className={"framer-10geaki"}>
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
                  width={"699"}
                  height={"937"}
                  sizes={
                    "(max-width: 809.98px) 284px, (max-width: 1199.98px) 244px, 339px"
                  }
                  src={"/assets/b744095401b4.webp"}
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
            </div>
          </div>
          <div className={"ssr-variant"}>
            <div className={"framer-1va3hdw"}>
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
                  width={"699"}
                  height={"937"}
                  sizes={
                    "(max-width: 809.98px) 284px, (max-width: 1199.98px) 244px, 339px"
                  }
                  src={"/assets/598044d881fe.webp"}
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
            </div>
          </div>
          <div className={"ssr-variant"}>
            <div className={"framer-aeya37"}>
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
                  width={"699"}
                  height={"937"}
                  sizes={
                    "(max-width: 809.98px) 284px, (max-width: 1199.98px) 244px, 340px"
                  }
                  src={"/assets/b52cf75121be.webp"}
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
            </div>
          </div>
        </div>
      </Reveal>
      <div className={"framer-19k8g6n hidden-5wq5d"}>
        <div className={"ssr-variant"}>
          <div className={"framer-14uke41"}>
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
                width={"699"}
                height={"937"}
                sizes={
                  "(max-width: 809.98px) 284px, (max-width: 1199.98px) 244px, 339px"
                }
                src={"/assets/b744095401b4.webp"}
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
          </div>
        </div>
        <div className={"ssr-variant"}>
          <div className={"framer-1bakxad"}>
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
                width={"699"}
                height={"937"}
                sizes={
                  "(max-width: 809.98px) 284px, (max-width: 1199.98px) 244px, 340px"
                }
                src={"/assets/b52cf75121be.webp"}
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
          </div>
        </div>
        <div className={"ssr-variant"}>
          <div className={"framer-10buxvc"}>
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
                width={"699"}
                height={"937"}
                sizes={
                  "(max-width: 809.98px) 284px, (max-width: 1199.98px) 244px, 339px"
                }
                src={"/assets/598044d881fe.webp"}
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
          </div>
        </div>
      </div>
      <div
        className={"framer-533jkv-container"}
        data-framer-name={"showcase video"}
      >
        <video
          src={"/assets/efbed6ee263d.mp4"}
          poster="/assets/669855084faa.webp"
          preload="metadata"
          controls
          playsInline
          style={
            {
              cursor: "auto",
              width: "100%",
              height: "100%",
              borderRadius: "0px",
              display: "block",
              objectFit: "scale-down",
              backgroundColor: "rgb(9, 9, 9)",
              objectPosition: "50% 50%",
            } as CSSProperties
          }
        ></video>
      </div>
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
        className={"framer-tjo2mz"}
        data-framer-name={"details"}
      >
        <div className={"framer-14o183t"}>
          <div
            className={"framer-dlx9oy"}
            data-framer-component-type={"RichTextContainer"}
            style={{ transform: "none" } as CSSProperties}
          >
            <h2
              dir={"auto"}
              style={
                {
                  "--font-selector": "RlM7R2FtYmFyaW5vLXJlZ3VsYXI=",
                  "--framer-font-family":
                    '"Gambarino", "Gambarino Placeholder", serif',
                  "--framer-font-open-type-features":
                    "'blwf' on, 'cv09' on, 'cv03' on, 'cv04' on, 'cv11' on",
                  "--framer-font-size": "40px",
                  "--framer-letter-spacing": "-0.04em",
                  "--framer-line-height": "0.9em",
                  "--framer-text-alignment": "left",
                  "--framer-text-color":
                    "var(--token-d7a90985-9f9c-42fd-aec8-e2228e6f7113, rgb(238, 238, 238))",
                  "--framer-text-transform": "uppercase",
                } as CSSProperties
              }
              className={"framer-text"}
            >
              {"How  it  started"}
            </h2>
          </div>
          <div
            className={"framer-1x4giu6"}
            data-framer-component-type={"RichTextContainer"}
            style={{ transform: "none" } as CSSProperties}
          >
            <p
              className={"framer-text framer-styles-preset-gv0r8j"}
              dir={"auto"}
            >
              {
                "I could understand English just fine. Until I had to speak — especially during interviews. My mind went blank.  Words vanished. Confidence politely left the room. At some point I thought:  “Why is it so hard to start speaking… nicely?” That question turned into Vocao"
              }
            </p>
          </div>
        </div>
        <div className={"ssr-variant"}>
          <div className={"framer-aljegm"}>
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
                width={"1352"}
                height={"809"}
                sizes={
                  "(min-width: 1200px) 339px, (min-width: 810px) and (max-width: 1199.98px) 339px, (max-width: 809.98px) 358px"
                }
                src={"/assets/38726936d81c.png"}
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
          </div>
        </div>
      </Reveal>
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
        className={"framer-1hyul8r"}
        data-framer-name={"details"}
      >
        <div className={"ssr-variant"}>
          <div className={"framer-110q6bt"}>
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
                width={"1221"}
                height={"804"}
                sizes={
                  "(min-width: 1200px) 339px, (min-width: 810px) and (max-width: 1199.98px) 339px, (max-width: 809.98px) 358px"
                }
                src={"/assets/34ed22ad2d03.png"}
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
          </div>
        </div>
        <div className={"framer-ndpbdg"}>
          <div
            className={"framer-1vw5du9"}
            data-framer-component-type={"RichTextContainer"}
            style={{ transform: "none" } as CSSProperties}
          >
            <h2
              dir={"auto"}
              style={
                {
                  "--font-selector": "RlM7R2FtYmFyaW5vLXJlZ3VsYXI=",
                  "--framer-font-family":
                    '"Gambarino", "Gambarino Placeholder", serif',
                  "--framer-font-open-type-features":
                    "'blwf' on, 'cv09' on, 'cv03' on, 'cv04' on, 'cv11' on",
                  "--framer-font-size": "40px",
                  "--framer-letter-spacing": "-0.04em",
                  "--framer-line-height": "0.9em",
                  "--framer-text-alignment": "left",
                  "--framer-text-color":
                    "var(--token-d7a90985-9f9c-42fd-aec8-e2228e6f7113, rgb(238, 238, 238))",
                  "--framer-text-transform": "uppercase",
                } as CSSProperties
              }
              className={"framer-text"}
            >
              {"The  challenge"}
            </h2>
          </div>
          <div
            className={"framer-59oqlb"}
            data-framer-component-type={"RichTextContainer"}
            style={{ transform: "none" } as CSSProperties}
          >
            <p
              className={"framer-text framer-styles-preset-gv0r8j"}
              dir={"auto"}
            >
              {
                "How might we help English learners practice speaking naturally — without fear or judgment? The challenge was not just to design a learning tool — but to design an emotionally safe, motivating experience that makes people want to talk"
              }
            </p>
          </div>
        </div>
      </Reveal>
      <section className={"framer-91kbxq"} data-framer-name={"awards"}>
        <div
          className={"framer-1efyxdo"}
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
            {"My  Role"}
          </h2>
        </div>
        <div className={"framer-1rdyl7p"} data-framer-name={"container"}>
          <div
            className={"framer-18bhbca"}
            data-framer-component-type={"RichTextContainer"}
            style={{ transform: "none" } as CSSProperties}
          >
            <p
              className={"framer-text framer-styles-preset-gv0r8j"}
              dir={"auto"}
              style={{ "--framer-text-alignment": "center" } as CSSProperties}
            >
              {"I was the co-foinder and solo designer. I owned:"}
            </p>
          </div>
          <div
            className={"framer-1iw9hzn"}
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
              {"• User research"}
            </p>
          </div>
          <div
            className={"framer-clr7lj"}
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
              {"• UX & product flows"}
            </p>
          </div>
          <div
            className={"framer-lktcuc"}
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
              {"• Visual direction"}
            </p>
          </div>
          <div
            className={"framer-1g4pph1"}
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
              {"• Illustrations & animations"}
            </p>
          </div>
          <div
            className={"framer-1b0amqo"}
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
              {"• Iterative design process"}
            </p>
          </div>
        </div>
      </section>
      <section className={"framer-goaj1c"} data-framer-name={"awards"}>
        <div className={"ssr-variant hidden-5wq5d"}>
          <div
            className={"framer-gri0xp"}
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
              {"design  process"}
            </h2>
          </div>
        </div>
        <div className={"ssr-variant hidden-ljewty hidden-hxxibw"}>
          <div
            className={"framer-gri0xp"}
            data-framer-component-type={"RichTextContainer"}
            style={{ transform: "none" } as CSSProperties}
          >
            <h2
              dir={"auto"}
              style={
                {
                  "--font-selector": "RlM7R2FtYmFyaW5vLXJlZ3VsYXI=",
                  "--framer-font-family":
                    '"Gambarino", "Gambarino Placeholder", serif',
                  "--framer-font-open-type-features":
                    "'blwf' on, 'cv09' on, 'cv03' on, 'cv04' on, 'cv11' on",
                  "--framer-font-size": "40px",
                  "--framer-letter-spacing": "-0.04em",
                  "--framer-line-height": "0.9em",
                  "--framer-text-alignment": "left",
                  "--framer-text-color":
                    "var(--token-d7a90985-9f9c-42fd-aec8-e2228e6f7113, rgb(238, 238, 238))",
                  "--framer-text-transform": "uppercase",
                } as CSSProperties
              }
              className={"framer-text"}
            >
              {"design  process"}
            </h2>
          </div>
        </div>
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
          className={"framer-v3jajl"}
          data-framer-name={"details"}
        >
          <div className={"framer-j5rxcv"}>
            <div
              className={"framer-10mzvxn"}
              data-framer-component-type={"RichTextContainer"}
              style={{ transform: "none" } as CSSProperties}
            >
              <ol
                dir={"auto"}
                style={
                  {
                    "--font-selector": "RlM7R2FtYmFyaW5vLXJlZ3VsYXI=",
                    "--framer-font-family":
                      '"Gambarino", "Gambarino Placeholder", serif',
                    "--framer-font-open-type-features":
                      "'blwf' on, 'cv09' on, 'cv03' on, 'cv04' on, 'cv11' on",
                    "--framer-font-size": "32px",
                    "--framer-letter-spacing": "-0.04em",
                    "--framer-line-height": "1.1em",
                    "--framer-text-alignment": "left",
                    "--framer-text-color":
                      "var(--token-d7a90985-9f9c-42fd-aec8-e2228e6f7113, rgb(238, 238, 238))",
                    "--framer-text-transform": "uppercase",
                    "--max-list-digits": "1",
                  } as CSSProperties
                }
                className={"framer-text"}
              >
                <li data-preset-tag={"h2"} className={"framer-text"}>
                  <h2 className={"framer-text"}>{"Research  &  insights  "}</h2>
                </li>
              </ol>
            </div>
            <div
              className={"framer-h9k00p"}
              data-framer-component-type={"RichTextContainer"}
              style={{ transform: "none" } as CSSProperties}
            >
              <p
                className={"framer-text framer-styles-preset-gv0r8j"}
                dir={"auto"}
              >
                {
                  "We began small — talking to friends, students, and eventually our real target users: international learners, TOEFL/IELTS takers, professionals building global careers, and curious language enthusiasts."
                }
                <br className={"framer-text"} />
                {
                  "Through user interviews and competitive analysis (including a chat with a former Duolingo engineer), we uncovered several patterns:"
                }
              </p>
              <ul
                className={"framer-text framer-styles-preset-gv0r8j"}
                dir={"auto"}
                style={
                  {
                    "--framer-text-color": "rgb(202, 161, 255)",
                  } as CSSProperties
                }
              >
                <li data-preset-tag={"p"} className={"framer-text"}>
                  <p
                    style={
                      {
                        "--framer-text-color": "rgb(202, 161, 255)",
                      } as CSSProperties
                    }
                    className={"framer-text"}
                  >
                    {"Many felt anxious speaking with real tutors"}
                  </p>
                </li>
                <li data-preset-tag={"p"} className={"framer-text"}>
                  <p
                    style={
                      {
                        "--framer-text-color": "rgb(202, 161, 255)",
                      } as CSSProperties
                    }
                    className={"framer-text"}
                  >
                    {"Many found lessons too expensive or inconsistent"}
                  </p>
                </li>
                <li data-preset-tag={"p"} className={"framer-text"}>
                  <p
                    style={
                      {
                        "--framer-text-color": "rgb(202, 161, 255)",
                      } as CSSProperties
                    }
                    className={"framer-text"}
                  >
                    {"Most lacked fun, daily motivation"}
                  </p>
                </li>
              </ul>
              <p
                className={"framer-text framer-styles-preset-gv0r8j"}
                dir={"auto"}
              >
                {
                  "We also found that some learners were hesitant to speak with AI. So our goal became clear — make the experience so interactive, playful, and human-like that we might gently convert at least some of these skeptics"
                }
              </p>
            </div>
          </div>
          <div className={"ssr-variant"}>
            <div className={"framer-pzmrak"}>
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
                  width={"1274"}
                  height={"1412"}
                  sizes={
                    "(min-width: 1200px) 339px, (max-width: 809.98px) 358px, (min-width: 810px) and (max-width: 1199.98px) 280px"
                  }
                  src={"/assets/2915cfbd0128.png"}
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
            </div>
          </div>
        </Reveal>
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
          className={"framer-1uggdkm"}
          data-framer-name={"details"}
        >
          <div className={"ssr-variant"}>
            <div className={"framer-1roe4su"}>
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
                  width={"1398"}
                  height={"1660"}
                  sizes={
                    "(min-width: 1200px) 339px, (max-width: 809.98px) 358px, (min-width: 810px) and (max-width: 1199.98px) 280px"
                  }
                  src={"/assets/4e06fecfe348.png"}
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
            </div>
          </div>
          <div className={"framer-mf3ax8"}>
            <div
              className={"framer-7fdusu"}
              data-framer-component-type={"RichTextContainer"}
              style={{ transform: "none" } as CSSProperties}
            >
              <ol
                dir={"auto"}
                start={2}
                style={
                  {
                    "--font-selector": "RlM7R2FtYmFyaW5vLXJlZ3VsYXI=",
                    "--framer-font-family":
                      '"Gambarino", "Gambarino Placeholder", serif',
                    "--framer-font-open-type-features":
                      "'blwf' on, 'cv09' on, 'cv03' on, 'cv04' on, 'cv11' on",
                    "--framer-font-size": "32px",
                    "--framer-letter-spacing": "-0.04em",
                    "--framer-line-height": "1.1em",
                    "--framer-text-alignment": "left",
                    "--framer-text-color":
                      "var(--token-d7a90985-9f9c-42fd-aec8-e2228e6f7113, rgb(238, 238, 238))",
                    "--framer-text-transform": "uppercase",
                    "--max-list-digits": "1",
                  } as CSSProperties
                }
                className={"framer-text"}
              >
                <li data-preset-tag={"h2"} className={"framer-text"}>
                  <h2 className={"framer-text"}>{"defining  the  mvp"}</h2>
                </li>
              </ol>
            </div>
            <div
              className={"framer-2vi42h"}
              data-framer-component-type={"RichTextContainer"}
              style={{ transform: "none" } as CSSProperties}
            >
              <p
                className={"framer-text framer-styles-preset-gv0r8j"}
                dir={"auto"}
              >
                {"To ship an MVP, we applied a strict filter: "}
                <span
                  style={
                    {
                      "--framer-text-color": "rgb(255, 255, 255)",
                    } as CSSProperties
                  }
                  className={"framer-text"}
                >
                  {"Does this feature directly help the user speak more? "}
                </span>
                <br className={"framer-text"} />
                {
                  "Based on that principle, the MVP included four essential components:"
                }
              </p>
              <ul
                className={"framer-text framer-styles-preset-gv0r8j"}
                dir={"auto"}
                style={
                  {
                    "--framer-text-color": "rgb(202, 161, 255)",
                  } as CSSProperties
                }
              >
                <li data-preset-tag={"p"} className={"framer-text"}>
                  <p
                    style={
                      {
                        "--framer-text-color": "rgb(202, 161, 255)",
                      } as CSSProperties
                    }
                    className={"framer-text"}
                  >
                    {"Topic-based conversations"}
                  </p>
                </li>
                <li data-preset-tag={"p"} className={"framer-text"}>
                  <p
                    style={
                      {
                        "--framer-text-color": "rgb(202, 161, 255)",
                      } as CSSProperties
                    }
                    className={"framer-text"}
                  >
                    {"Free practice mode"}
                  </p>
                </li>
                <li data-preset-tag={"p"} className={"framer-text"}>
                  <p
                    style={
                      {
                        "--framer-text-color": "rgb(202, 161, 255)",
                      } as CSSProperties
                    }
                    className={"framer-text"}
                  >
                    {"Daily streak tracking"}
                  </p>
                </li>
                <li data-preset-tag={"p"} className={"framer-text"}>
                  <p
                    style={
                      {
                        "--framer-text-color": "rgb(202, 161, 255)",
                      } as CSSProperties
                    }
                    className={"framer-text"}
                  >
                    {"Post-conversation feedback"}
                  </p>
                </li>
              </ul>
              <p
                className={"framer-text framer-styles-preset-gv0r8j"}
                dir={"auto"}
              >
                {
                  "Everything else — avatars, advanced leveling, personalization, challenges, topic packs — was deliberately postponed. This allowed us to build fast, test real behavior, and avoid premature complexity"
                }
              </p>
            </div>
          </div>
        </Reveal>
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
          className={"framer-1b6z5x5"}
          data-framer-name={"details"}
        >
          <div className={"framer-f8ypi8"}>
            <div
              className={"framer-hdf81f"}
              data-framer-component-type={"RichTextContainer"}
              style={{ transform: "none" } as CSSProperties}
            >
              <ol
                dir={"auto"}
                start={3}
                style={
                  {
                    "--font-selector": "RlM7R2FtYmFyaW5vLXJlZ3VsYXI=",
                    "--framer-font-family":
                      '"Gambarino", "Gambarino Placeholder", serif',
                    "--framer-font-open-type-features":
                      "'blwf' on, 'cv09' on, 'cv03' on, 'cv04' on, 'cv11' on",
                    "--framer-font-size": "32px",
                    "--framer-letter-spacing": "-0.04em",
                    "--framer-line-height": "1.1em",
                    "--framer-text-alignment": "left",
                    "--framer-text-color":
                      "var(--token-d7a90985-9f9c-42fd-aec8-e2228e6f7113, rgb(238, 238, 238))",
                    "--framer-text-transform": "uppercase",
                    "--max-list-digits": "1",
                  } as CSSProperties
                }
                className={"framer-text"}
              >
                <li data-preset-tag={"h2"} className={"framer-text"}>
                  <h2 className={"framer-text"}>
                    {"UX:  designing  a  supportive  speaking  experience"}
                  </h2>
                </li>
              </ol>
            </div>
            <div
              className={"framer-z0gze4"}
              data-framer-component-type={"RichTextContainer"}
              style={{ transform: "none" } as CSSProperties}
            >
              <p
                className={"framer-text framer-styles-preset-gv0r8j"}
                dir={"auto"}
              >
                {
                  "Designing a voice-first product meant designing for silence, hesitation, and fear."
                }
              </p>
              <p
                className={"framer-text framer-styles-preset-gv0r8j"}
                dir={"auto"}
              >
                {"Key decisions:"}
              </p>
              <ul
                className={"framer-text framer-styles-preset-gv0r8j"}
                dir={"auto"}
                style={
                  {
                    "--framer-text-color": "rgb(202, 161, 255)",
                  } as CSSProperties
                }
              >
                <li data-preset-tag={"p"} className={"framer-text"}>
                  <p
                    style={
                      {
                        "--framer-text-color": "rgb(202, 161, 255)",
                      } as CSSProperties
                    }
                    className={"framer-text"}
                  >
                    {
                      "Clear session states (listening / thinking / waiting — no confusion)"
                    }
                  </p>
                </li>
                <li data-preset-tag={"p"} className={"framer-text"}>
                  <p
                    style={
                      {
                        "--framer-text-color": "rgb(202, 161, 255)",
                      } as CSSProperties
                    }
                    className={"framer-text"}
                  >
                    {"Gentle prompts instead of error messages"}
                  </p>
                </li>
                <li data-preset-tag={"p"} className={"framer-text"}>
                  <p
                    style={
                      {
                        "--framer-text-color": "rgb(202, 161, 255)",
                      } as CSSProperties
                    }
                    className={"framer-text"}
                  >
                    {"Friendly endings that reward effort, not perfection"}
                  </p>
                </li>
              </ul>
              <p
                className={"framer-text framer-styles-preset-gv0r8j"}
                dir={"auto"}
              >
                {"The UI never asks: "}
                <em className={"framer-text"}>{"“Why did you say that?”"}</em>
                <br className={"framer-text"} />
                {"It says: "}
                <em className={"framer-text"}>
                  {"“Nice try. Let’s keep going.”"}
                </em>
              </p>
            </div>
          </div>
          <div className={"framer-1i7hpjp"}>
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
                width={"1398"}
                height={"1660"}
                sizes={
                  "(min-width: 1200px) 339px, (min-width: 810px) and (max-width: 1199.98px) 339px, (max-width: 809.98px) 339px"
                }
                src={"/assets/da030e91f7e0.png"}
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
          </div>
        </Reveal>
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
          className={"framer-9141q8"}
          data-framer-name={"details"}
        >
          <div className={"ssr-variant"}>
            <div className={"framer-760ct1"}>
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
                  width={"1398"}
                  height={"1660"}
                  sizes={
                    "(min-width: 1200px) 339px, (max-width: 809.98px) 358px, (min-width: 810px) and (max-width: 1199.98px) 280px"
                  }
                  src={"/assets/04aee89f50b2.png"}
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
            </div>
          </div>
          <div className={"framer-1bbu7b8"}>
            <div
              className={"framer-12q4nby"}
              data-framer-component-type={"RichTextContainer"}
              style={{ transform: "none" } as CSSProperties}
            >
              <h2
                dir={"auto"}
                style={
                  {
                    "--font-selector": "RlM7R2FtYmFyaW5vLXJlZ3VsYXI=",
                    "--framer-font-family":
                      '"Gambarino", "Gambarino Placeholder", serif',
                    "--framer-font-open-type-features":
                      "'blwf' on, 'cv09' on, 'cv03' on, 'cv04' on, 'cv11' on",
                    "--framer-font-size": "32px",
                    "--framer-letter-spacing": "-0.04em",
                    "--framer-line-height": "1.1em",
                    "--framer-text-alignment": "left",
                    "--framer-text-color":
                      "var(--token-d7a90985-9f9c-42fd-aec8-e2228e6f7113, rgb(238, 238, 238))",
                    "--framer-text-transform": "uppercase",
                  } as CSSProperties
                }
                className={"framer-text"}
              >
                {"4. visual direction"}
              </h2>
            </div>
            <div
              className={"framer-16l8l26"}
              data-framer-component-type={"RichTextContainer"}
              style={{ transform: "none" } as CSSProperties}
            >
              <p
                className={"framer-text framer-styles-preset-gv0r8j"}
                dir={"auto"}
              >
                {
                  "To make the product emotionally engaging, I explored a visual language that felt warm, nostalgic, and futuristic. Many users grew up with pixel-style games and associated them with comfort and curiosity. Pure pixel UI felt too flat for an AI product, so I created a hybrid “retro-futuristic” design:"
                }
              </p>
              <ul
                className={"framer-text framer-styles-preset-gv0r8j"}
                dir={"auto"}
                style={
                  {
                    "--framer-text-color": "rgb(202, 161, 255)",
                  } as CSSProperties
                }
              >
                <li data-preset-tag={"p"} className={"framer-text"}>
                  <p
                    style={
                      {
                        "--framer-text-color": "rgb(202, 161, 255)",
                      } as CSSProperties
                    }
                    className={"framer-text"}
                  >
                    {
                      "AI-generated backgrounds evoked soft, dreamlike environments"
                    }
                  </p>
                </li>
                <li data-preset-tag={"p"} className={"framer-text"}>
                  <p
                    style={
                      {
                        "--framer-text-color": "rgb(202, 161, 255)",
                      } as CSSProperties
                    }
                    className={"framer-text"}
                  >
                    {"Hand-drawn pixel characters added familiarity and charm"}
                  </p>
                </li>
              </ul>
              <p
                className={"framer-text framer-styles-preset-gv0r8j"}
                dir={"auto"}
              >
                {"Everything was designed using Figma, ChatGPT, and Midjourney"}
              </p>
            </div>
          </div>
        </Reveal>
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
          className={"framer-1jc7frt"}
          data-framer-name={"details"}
        >
          <div className={"framer-1mkhea6"}>
            <div
              className={"framer-1kr0h85"}
              data-framer-component-type={"RichTextContainer"}
              style={{ transform: "none" } as CSSProperties}
            >
              <h2
                dir={"auto"}
                style={
                  {
                    "--font-selector": "RlM7R2FtYmFyaW5vLXJlZ3VsYXI=",
                    "--framer-font-family":
                      '"Gambarino", "Gambarino Placeholder", serif',
                    "--framer-font-open-type-features":
                      "'blwf' on, 'cv09' on, 'cv03' on, 'cv04' on, 'cv11' on",
                    "--framer-font-size": "32px",
                    "--framer-letter-spacing": "-0.04em",
                    "--framer-line-height": "1.1em",
                    "--framer-text-alignment": "left",
                    "--framer-text-color":
                      "var(--token-d7a90985-9f9c-42fd-aec8-e2228e6f7113, rgb(238, 238, 238))",
                    "--framer-text-transform": "uppercase",
                  } as CSSProperties
                }
                className={"framer-text"}
              >
                {"5.  Prototyping  &  iteration  loops"}
              </h2>
            </div>
            <div
              className={"framer-1ezxg6x"}
              data-framer-component-type={"RichTextContainer"}
              style={{ transform: "none" } as CSSProperties}
            >
              <p
                className={"framer-text framer-styles-preset-gv0r8j"}
                dir={"auto"}
              >
                {
                  "After the designs were finalized, I built a prototype to see how the interface would feel in motion."
                }
                <br className={"framer-text"} />
                {
                  "We tested it with a few users, gathered initial feedback, made improvements, and then launched an early version"
                }
                <br className={"framer-text"} />
                <br className={"framer-text"} />
                {
                  "From week 2 onward, we shipped new builds almost every week, iterating based on:"
                }
              </p>
              <ul
                className={"framer-text framer-styles-preset-gv0r8j"}
                dir={"auto"}
                style={
                  {
                    "--framer-text-color": "rgb(199, 159, 252)",
                  } as CSSProperties
                }
              >
                <li data-preset-tag={"p"} className={"framer-text"}>
                  <p
                    style={
                      {
                        "--framer-text-color": "rgb(199, 159, 252)",
                      } as CSSProperties
                    }
                    className={"framer-text"}
                  >
                    {"Conversation issues"}
                  </p>
                </li>
                <li data-preset-tag={"p"} className={"framer-text"}>
                  <p
                    style={
                      {
                        "--framer-text-color": "rgb(199, 159, 252)",
                      } as CSSProperties
                    }
                    className={"framer-text"}
                  >
                    {"UX issues"}
                  </p>
                </li>
                <li data-preset-tag={"p"} className={"framer-text"}>
                  <p
                    style={
                      {
                        "--framer-text-color": "rgb(199, 159, 252)",
                      } as CSSProperties
                    }
                    className={"framer-text"}
                  >
                    {"Technical issues"}
                  </p>
                </li>
              </ul>
            </div>
          </div>
          <div className={"framer-12f9yw4"}>
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
                width={"1398"}
                height={"1873"}
                sizes={
                  "(min-width: 1200px) 339px, (min-width: 810px) and (max-width: 1199.98px) 339px, (max-width: 809.98px) 339px"
                }
                src={"/assets/56b758191b97.png"}
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
          </div>
        </Reveal>
      </section>
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
        className={"framer-16wdj7h"}
        data-framer-name={"details"}
      >
        <div className={"framer-ypabg6"}>
          <div className={"ssr-variant hidden-hxxibw"}>
            <div
              className={"framer-l3iquc"}
              data-framer-component-type={"RichTextContainer"}
              style={{ transform: "none" } as CSSProperties}
            >
              <h2
                dir={"auto"}
                style={
                  {
                    "--font-selector": "RlM7R2FtYmFyaW5vLXJlZ3VsYXI=",
                    "--framer-font-family":
                      '"Gambarino", "Gambarino Placeholder", serif',
                    "--framer-font-open-type-features":
                      "'blwf' on, 'cv09' on, 'cv03' on, 'cv04' on, 'cv11' on",
                    "--framer-font-size": "40px",
                    "--framer-letter-spacing": "-0.04em",
                    "--framer-line-height": "1.1em",
                    "--framer-text-alignment": "left",
                    "--framer-text-color":
                      "var(--token-d7a90985-9f9c-42fd-aec8-e2228e6f7113, rgb(238, 238, 238))",
                    "--framer-text-transform": "uppercase",
                  } as CSSProperties
                }
                className={"framer-text"}
              >
                {"Early Results  &  reflection"}
              </h2>
            </div>
          </div>
          <div className={"ssr-variant hidden-5wq5d hidden-ljewty"}>
            <div
              className={"framer-l3iquc"}
              data-framer-component-type={"RichTextContainer"}
              style={{ transform: "none" } as CSSProperties}
            >
              <h2
                dir={"auto"}
                style={
                  {
                    "--font-selector": "RlM7R2FtYmFyaW5vLXJlZ3VsYXI=",
                    "--framer-font-family":
                      '"Gambarino", "Gambarino Placeholder", serif',
                    "--framer-font-open-type-features":
                      "'blwf' on, 'cv09' on, 'cv03' on, 'cv04' on, 'cv11' on",
                    "--framer-font-size": "40px",
                    "--framer-letter-spacing": "-0.04em",
                    "--framer-line-height": "1.1em",
                    "--framer-text-alignment": "center",
                    "--framer-text-color":
                      "var(--token-d7a90985-9f9c-42fd-aec8-e2228e6f7113, rgb(238, 238, 238))",
                    "--framer-text-transform": "uppercase",
                  } as CSSProperties
                }
                className={"framer-text"}
              >
                {"Early Results  &  reflection"}
              </h2>
            </div>
          </div>
          <div className={"ssr-variant hidden-5wq5d"}>
            <div
              className={"framer-rrgg86"}
              data-framer-component-type={"RichTextContainer"}
              style={{ transform: "none" } as CSSProperties}
            >
              <p
                className={"framer-text framer-styles-preset-gv0r8j"}
                dir={"auto"}
                style={{ "--framer-text-alignment": "center" } as CSSProperties}
              >
                {
                  "Vocao quickly showed strong early traction: testers engaged consistently, practicing daily and sharing emotional feedback. It gained attention from educators and early-stage investors and was soon featured on Product Hunt, ranking in the top 3 in the education category for the week. While it hasn’t generated significant revenue yet, the project continues to attract engaged users and positive feedback, proving the concept’s value beyond immediate monetization."
                }
              </p>
              <p
                className={"framer-text framer-styles-preset-gv0r8j"}
                dir={"auto"}
                style={{ "--framer-text-alignment": "center" } as CSSProperties}
              >
                {
                  "Vocao taught me that two people can build something truly impactful — and fast. It deepened my understanding of designing around emotion, behavior, and trust, not just interfaces. Looking back, I would make onboarding more engaging by adding a mini test conversation to the MVP and include more game mechanics in the MVP"
                }
              </p>
            </div>
          </div>
          <div className={"ssr-variant hidden-ljewty hidden-hxxibw"}>
            <div
              className={"framer-rrgg86"}
              data-framer-component-type={"RichTextContainer"}
              style={{ transform: "none" } as CSSProperties}
            >
              <p
                className={"framer-text framer-styles-preset-gv0r8j"}
                dir={"auto"}
                style={{ "--framer-text-alignment": "start" } as CSSProperties}
              >
                {
                  "Vocao quickly showed strong early traction: testers engaged consistently, practicing daily and sharing emotional feedback. It gained attention from educators and early-stage investors and was soon featured on Product Hunt, ranking in the top 3 in the education category for the week. While it hasn’t generated significant revenue yet, the project continues to attract engaged users and positive feedback, proving the concept’s value beyond immediate monetization."
                }
              </p>
              <p
                className={"framer-text framer-styles-preset-gv0r8j"}
                dir={"auto"}
                style={{ "--framer-text-alignment": "start" } as CSSProperties}
              >
                {
                  "Vocao taught me that two people can build something truly impactful — and fast. It deepened my understanding of designing around emotion, behavior, and trust, not just interfaces. Looking back, I would make onboarding more engaging by adding a mini test conversation to the MVP and include more game mechanics in the MVP"
                }
              </p>
            </div>
          </div>
        </div>
      </Reveal>
      <div className={"framer-1pdpc3t-container"} id={"footer-section"}>
        <SiteFooter responsive={true} />
      </div>
    </div>
  );
}
