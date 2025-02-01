import { Container, Text, useMantineColorScheme } from "@mantine/core";
import svg from "/svg/eye/art.svg";
import { useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { shuffleText } from "../../utils/utils";
import $ from "jquery";

gsap.registerPlugin(useGSAP); // register the hook to avoid React version discrepancies

interface StoryLayoutProps {
    height?: string | number;
    width?: string | number;
}

const imageSpanStyle = {
    color: "crimson",
    fontWeight: 700,
};

export default function StoryLayout({ height, width }: StoryLayoutProps) {
    const { colorScheme } = useMantineColorScheme();

    const [imageUrl, setImageUrl] = useState("");

    useGSAP(() => {
        gsap.to("#image-logo", {
            rotation: 360,
            duration: 35,
            repeat: -1,
            ease: "linear",
        });
    }, []);

    function onMouseEnterSpan(image: string) {
        gsap.to("#text-container", {
            color: "rgba(0,0,0,0)",
            duration: 0.1,
        });
        const url = `/img/about/${image}`;
        setImageUrl(url);
    }

    function onMouseLeaveSpan() {
        setImageUrl("");
        gsap.to("#text-container", {
            color:
                colorScheme === "light"
                    ? "rgba(0,0,0,1)"
                    : "rgba(255,255,255,1)",
            duration: 0.1,
        });
    }

    return (
        <Container
            p={0}
            m={0}
            fluid
            style={{
                position: "relative",
                height: height ?? "100%",
                width: width ?? "100%",
                overflowX: "hidden",
                overflowY: "auto",
            }}>
            <div
                style={{
                    width: "100%",
                    position: "absolute",
                    bottom: "10px",
                    textAlign: "center",
                    fontSize: "11px",
                }}>
                <Text
                    mt={"xs"}
                    style={{
                        letterSpacing: "-2px",
                        fontFamily: "serif-regular",
                        fontSize: "80px",
                        paddingBottom: "-15px",
                    }}>
                    About
                </Text>
            </div>
            {imageUrl.length > 0 ? (
                <div
                    style={{
                        position: "absolute",
                        top: "50%",
                        left: "50%",
                        zIndex: -1,
                        transform: "translate(-50%, -50%)",
                    }}>
                    <img
                        style={{
                            height: "30vmax",
                        }}
                        src={imageUrl}
                        alt="image"
                    />
                </div>
            ) : (
                <></>
            )}
            <div
                id="text-container"
                style={{
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    fontSize: "11px",
                    width: "32vmax",
                    zIndex: 1,
                    transform: "translate(-50%, -50%)",
                }}>
                <p style={{ textAlign: "left", mixBlendMode: "exclusion" }}>
                    <span
                        onMouseEnter={(e) => {
                            onMouseEnterSpan("1.jpg");
                            shuffleText(e, "(DEVELOPER)");
                        }}
                        onMouseLeave={onMouseLeaveSpan}
                        style={imageSpanStyle}>
                        (DEVEL0PER)
                    </span>
                    ,
                    <span
                        onMouseEnter={(e) => {
                            onMouseEnterSpan("2.jpg");
                            shuffleText(e, "(VIDEOGRAPHER)");
                        }}
                        onMouseLeave={onMouseLeaveSpan}
                        style={imageSpanStyle}>
                        (AMATEUR VIDE0 TAKER)
                    </span>
                    ,
                    <span
                        onMouseEnter={(e) => {
                            onMouseEnterSpan("3.jpg");
                            shuffleText(e, "(PH0T0GRAPHER)");
                        }}
                        onMouseLeave={onMouseLeaveSpan}
                        style={imageSpanStyle}>
                        (PH0T0 TAKER)
                    </span>
                    ,
                    <span
                        onMouseEnter={(e) => {
                            onMouseEnterSpan("4.jpg");
                            shuffleText(e, "(AL00F RIDER)");
                        }}
                        onMouseLeave={onMouseLeaveSpan}
                        style={imageSpanStyle}>
                        (AL00F RIDER)
                    </span>{" "}
                    BASED IN HAN0I, VIETNAM. CURRENTLY W0RKING FULL-TIME AT
                    TOSHIBA SOFTWARE DEVEL0PMENT VIETNAM, AN OFFSHORE SOFTWARE
                    DEVELOPMENT CENTER OF TOSHIBA CORPORATE.
                </p>
                <br />
                <p>
                    SIDE PROJECTS AS THIS KEEPS MYSELF{" "}
                    <span
                        onMouseEnter={(e) => {
                            onMouseEnterSpan("fresh.jpg");
                            shuffleText(e, "(FRESH)");
                        }}
                        onMouseLeave={onMouseLeaveSpan}
                        style={imageSpanStyle}>
                        (FRESH)
                    </span>{" "}
                    AND UPDATED WITH THELATEST TECHNOLOGIES. THIS SITE IS
                    DESIGNED FOR TO STACK UP NEW TECHNIQUES &{" "}
                    <span
                        onMouseEnter={(e) => {
                            onMouseEnterSpan("experiment.jpg");
                            shuffleText(e, "(EXPERIMENTS)");
                        }}
                        onMouseLeave={onMouseLeaveSpan}
                        style={imageSpanStyle}>
                        (EXPERIMENTS)
                    </span>{" "}
                    AS REPLACABLE MODULES. THE VISUALS THAT YOU ARE SEEING NOW
                    MIGHT NOT LAST UNTIL NEXT MONTH.
                </p>
            </div>
            <img
                id="image-logo"
                style={{
                    filter: `invert(${colorScheme === "dark" ? 100 : 0}%)`,
                    position: "absolute",
                    right: -150,
                    top: -150,
                }}
                height={350}
                src={svg}
                alt="My SVG"
            />
        </Container>
    );
}
