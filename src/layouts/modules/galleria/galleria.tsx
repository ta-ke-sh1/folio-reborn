import { Card, Container, Stack, Text } from "@mantine/core";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { CSSProperties, useRef } from "react";
import { useLanguageState } from "../../../hooks/useLanguage";
import { shuffleText } from "../../../utils/utils";

export default function GalleriaLayout() {
    const { languageData } = useLanguageState();

    const font_style = {
        lineHeight: "12px",
    };

    const containerRef = useRef<HTMLDivElement>(null);

    const card_1_Ref = useRef<HTMLDivElement>(null);
    const card_2_Ref = useRef<HTMLDivElement>(null);
    const image_Ref = useRef<HTMLDivElement>(null);

    useGSAP(animateGalleria, {
        scope: containerRef,
    });

    function animateGalleria() {
        if (containerRef.current) {
            gsap.timeline({
                defaults: {
                    duration: 1,
                    ease: "power3",
                },
                scrollTrigger: {
                    trigger: image_Ref.current,
                    start: "-20% bottom",
                    end: "+200% top",
                    scrub: true,
                },
            })
                .add("start")
                .to(
                    card_1_Ref.current,
                    {
                        x: 50,
                    },
                    "start"
                )
                .to(
                    card_2_Ref.current,
                    {
                        x: -50,
                    },
                    "start"
                );
        }
    }

    const cardStyle = {
        position: "absolute",
    } as CSSProperties;

    return (
        <Container
            ref={containerRef}
            style={{ height: "130dvh", position: "relative" }}
            mt={"xl"}
            pt={"lg"}>
            <Card
                style={{
                    ...cardStyle,
                    top: "45%",
                    left: "45%",
                    transform: "translate(-50%, -50%)",
                }}
                p={"lg"}
                ref={image_Ref}>
                <div
                    style={{
                        height: "400px",
                        width: "300px",
                        backgroundImage:
                            'url("https://images.pexels.com/photos/28400613/pexels-photo-28400613/free-photo-of-stylish-man-in-coat-and-hat-against-wooden-wall.jpeg")',
                        backgroundSize: "cover",
                    }}></div>
            </Card>
            <Card
                shadow={"md"}
                style={{
                    ...cardStyle,
                    top: "35%",
                    left: "20%",
                    transform: "translate(-50%, -50%) rotate(-10deg)",
                }}
                p={"lg"}
                ref={card_1_Ref}>
                <Stack
                    gap={"xs"}
                    className={"shuffle-container"}
                    style={font_style}>
                    <Text>{languageData.galleria.paragraph.r1}</Text>
                    <Text>{languageData.galleria.paragraph.r2}</Text>
                    <Text style={{ marginBottom: "-5px" }}>Trung Ha</Text>
                </Stack>
            </Card>
            <Card
                shadow={"md"}
                style={{
                    ...cardStyle,
                    width: "280px",
                    top: "65%",
                    left: "70%",
                    transform: "translate(-50%, -50%) rotate(2deg)",
                }}
                p={"lg"}
                ref={card_2_Ref}>
                <Stack>
                    <Stack mt={"sm"} className={"shuffle-container"}>
                        <Text
                            style={{
                                fontSize: "2rem",
                                lineHeight: "2rem",
                                letterSpacing: "-3px",
                                userSelect: "none",
                            }}
                            className={"shuffle-item"}
                            onMouseEnter={(e) =>
                                shuffleText(e, languageData.galleria.title, 80)
                            }>
                            {languageData.galleria.title}
                        </Text>
                    </Stack>
                    <Text style={{ marginBottom: "-5px" }}>who loves</Text>
                    <Stack className={"shuffle-container"} mb={"lg"}>
                        <Text
                            style={{
                                fontSize: "2rem",
                                lineHeight: "2rem",
                                letterSpacing: "-3px",
                                userSelect: "none",
                            }}
                            className={"shuffle-item"}
                            onMouseEnter={(e) =>
                                shuffleText(e, "capturing moments", 80)
                            }>
                            capturing moments
                        </Text>
                    </Stack>
                </Stack>
            </Card>
        </Container>
    );
}
