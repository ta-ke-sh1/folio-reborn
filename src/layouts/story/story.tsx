import { Container, Text, useMantineColorScheme } from "@mantine/core";
import svg from "/svg/eye/art.svg";
import { useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

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
        const url = `/img/about/${image}`;
        setImageUrl(url);
    }

    function onMouseLeaveSpan() {
        setImageUrl("");
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
                    position: "absolute",
                    bottom: "20px",
                    left: "20px",
                    fontSize: "11px",
                    width: "30vmax",
                }}>
                <Text
                    mt={"xs"}
                    style={{
                        letterSpacing: "-2px",
                        fontFamily: "serif-regular",
                        fontSize: "80px",
                        marginBottom: "-10px",
                    }}>
                    About
                </Text>

                <p>
                    SIDE PROJECTS AS THIS KEEPS MYSELF{" "}
                    <span
                        onMouseEnter={() => onMouseEnterSpan("fresh.jpg")}
                        onMouseLeave={onMouseLeaveSpan}
                        style={imageSpanStyle}>
                        (FRESH)
                    </span>{" "}
                    AND UPDATED WITH THELATEST TECHNOLOGIES. THIS SITE IS
                    DESIGNED FOR TO STACK UP NEW TECHNIQUES &{" "}
                    <span
                        onMouseEnter={() => onMouseEnterSpan("experiment.jpg")}
                        onMouseLeave={onMouseLeaveSpan}
                        style={imageSpanStyle}>
                        (EXPERIMENTS)
                    </span>{" "}
                    AS REPLACABLE MODULES. THE VISUALS THAT YOU ARE SEEING NOW
                    MIGHT NOT LAST UNTIL NEXT MONTH.
                </p>
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
                        onMouseEnter={() => onMouseEnterSpan("1.jpg")}
                        onMouseLeave={onMouseLeaveSpan}
                        style={imageSpanStyle}>
                        (DEVEL0PER)
                    </span>
                    ,{" "}
                    <span
                        onMouseEnter={() => onMouseEnterSpan("2.jpg")}
                        onMouseLeave={onMouseLeaveSpan}
                        style={imageSpanStyle}>
                        (AMATEUR VIDE0 TAKER)
                    </span>
                    ,{" "}
                    <span
                        onMouseEnter={() => onMouseEnterSpan("3.jpg")}
                        onMouseLeave={onMouseLeaveSpan}
                        style={imageSpanStyle}>
                        (AMATEUR PH0T0 TAKER)
                    </span>
                    ,{" "}
                    <span
                        onMouseEnter={() => onMouseEnterSpan("4.jpg")}
                        onMouseLeave={onMouseLeaveSpan}
                        style={imageSpanStyle}>
                        (AL00F RIDER)
                    </span>{" "}
                    BASED IN HAN0I, VIETNAM. CURRENTLY W0RKING FULL-TIME AT
                    TOSHIBA SOFTWARE DEVEL0PMENT VIETNAM, AN OFFSHORE SOFTWARE
                    DEVELOPMENT CENTERS OF TOSHIBA CORPORATE.
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
                height={400}
                src={svg}
                alt="My SVG"
            />
        </Container>
    );
}
