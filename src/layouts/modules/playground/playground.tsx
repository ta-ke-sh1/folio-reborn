import { Container, Stack } from "@mantine/core";
import { useEffect, useRef } from "react";
import {
    ImageTrail,
    handlePointerMove,
} from "../../../animations/imageTrails/imageTrail";
import { useLanguageState } from "../../../hooks/useLanguage";

interface PlaygroundLayoutProps {
    width?: number | string;
    height?: number | string;
}

export default function PlaygroundLayout({
    width,
    height,
}: PlaygroundLayoutProps) {
    const { languageData } = useLanguageState();

    let containerRef = useRef<any>();

    useEffect(() => {}, []);

    const font_style = {
        lineHeight: "12px",
        fontFamily: "Geist Sans",
    };

    return (
        <>
            <Container
                style={{
                    height: height ?? "90dvh",
                    width: width ?? "100%",
                    position: "relative",
                }}
                className={"hover-container"}
                ref={containerRef}
                fluid>
                <Stack
                    align={"center"}
                    style={{
                        position: "absolute",
                        left: "50%",
                        top: "50%",
                        transform: "translate(-50%, -50%)",
                    }}>
                    <Stack className={"shuffle-container"} style={font_style}>
                        {languageData.playground.paragraph.r1}
                    </Stack>
                    <Stack className={"shuffle-container"} style={font_style}>
                        {languageData.playground.paragraph.r2}
                    </Stack>
                    <Stack className={"shuffle-container"} style={font_style}>
                        {languageData.playground.paragraph.r3}
                    </Stack>
                </Stack>
            </Container>
            <Container style={{ height: "0dvh" }}></Container>
        </>
    );
}
