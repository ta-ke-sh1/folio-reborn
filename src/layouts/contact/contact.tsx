import { Container, Grid, Group, Stack, Text } from "@mantine/core";
import { useEffect } from "react";
import { GradientAnimation } from "../../animations/gradient/gradient.ts";
import { shuffleText } from "../../utils/utils.ts";
import { LINK_CURSOR_CLASS } from "../../components/cursor/cursor.tsx";

interface ContactLayoutProps {
    width?: string | number;
    height?: string | number;
}

export default function ContactLayout({ width, height }: ContactLayoutProps) {
    useEffect(() => {
        let canvas = document.getElementById("canvas");
        let controller = new GradientAnimation(canvas);

        return function () {
            controller.clearCanvas();
        };
    }, []);

    // @ts-ignore
    return (
        <Container
            fluid
            style={{
                height: height ?? "100%",
                width: width ?? "100%",
                position: "relative",
            }}>
            <Stack style={{ transform: "translateY(-10px)" }}>
                <Text
                    mr={"sm"}
                    style={{
                        marginTop: "10px",
                        letterSpacing: "-2px",
                        fontFamily: "serif-regular",
                        fontSize: "80px",
                    }}>
                    Contact Me
                </Text>
                <p
                    style={{
                        fontSize: "11px",
                        marginTop: "-38px",
                        marginLeft: "5px",
                    }}>
                    LET'S CREATE D0PE SHITS T0GETHER. CURRENTLY AVAILABLE!
                </p>
            </Stack>
            <Group
                p={"sm"}
                style={{
                    position: "absolute",
                    top: "52.5%",
                    transform: "translateY(-50%)",
                    left: 0,
                    width: "100%",
                    justifyContent: "space-between",
                }}>
                <Grid style={{ width: "100%" }} align={"top"}>
                    <Grid.Col span={{ md: 6, lg: 3 }}>
                        <Stack gap={"xs"} align={"end"}>
                            <Text size={"xs"} fw={600}>
                                Working Hours
                            </Text>
                            <Text size={"sm"}>Mon - Fri</Text>
                            <Text size={"sm"}>9AM - 6PM</Text>
                        </Stack>
                    </Grid.Col>
                    <Grid.Col span={{ md: 6, lg: 3 }}></Grid.Col>
                    <Grid.Col span={{ md: 6, lg: 3 }}></Grid.Col>
                    <Grid.Col span={{ md: 6, lg: 3 }}></Grid.Col>
                    <Grid.Col span={{ md: 6, lg: 3 }}></Grid.Col>
                    <Grid.Col span={{ md: 6, lg: 3 }}></Grid.Col>
                    <Grid.Col span={{ sm: 6, xs: 6, md: 6, lg: 3 }}>
                        <Stack gap={"xs"}>
                            <Text size={"xs"} fw={600}>
                                Socials
                            </Text>
                            <p
                                style={{
                                    fontSize: "11px",
                                    color: "crimson",
                                }}
                                className={`shuffle-item ${LINK_CURSOR_CLASS}`}
                                onMouseEnter={(e) =>
                                    shuffleText(e, "[Facebook]")
                                }>
                                [Facebook]
                            </p>
                            <p
                                style={{
                                    fontSize: "11px",
                                    color: "crimson",
                                }}
                                className={`shuffle-item ${LINK_CURSOR_CLASS}`}
                                onMouseEnter={(e) =>
                                    shuffleText(e, "[Discord]")
                                }>
                                [Discord]
                            </p>
                            <p
                                style={{
                                    fontSize: "11px",
                                    color: "crimson",
                                }}
                                className={`shuffle-item ${LINK_CURSOR_CLASS}`}
                                onMouseEnter={(e) =>
                                    shuffleText(e, "[Behance]")
                                }>
                                [Behance]
                            </p>
                            <p
                                style={{
                                    fontSize: "11px",
                                    color: "crimson",
                                }}
                                className={`shuffle-item ${LINK_CURSOR_CLASS}`}
                                onMouseEnter={(e) =>
                                    shuffleText(e, "[LinkedIn]")
                                }>
                                [LinkedIn]
                            </p>
                        </Stack>
                    </Grid.Col>
                    <Grid.Col
                        span={{ sm: 6, xs: 6, md: 6, lg: 3 }}
                        style={{
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "flex-end",
                        }}>
                        <Stack gap={"xs"} m={0} p={0}>
                            <Text size={"xs"} fw={600}>
                                Contacts
                            </Text>
                            <Text size={"sm"}>(+84) 818 16 1998</Text>
                            <Text size={"sm"}>hello@trung.ha.com</Text>
                        </Stack>
                    </Grid.Col>
                    <Grid.Col span={{ md: 6, lg: 3 }}></Grid.Col>
                    <Grid.Col span={{ md: 6, lg: 3 }}></Grid.Col>
                    <Grid.Col span={{ md: 6, lg: 3 }}></Grid.Col>
                </Grid>
            </Group>
            <Group
                gap={1}
                justify="space-between"
                style={{
                    width: "100%",
                    position: "absolute",
                    bottom: "10px",
                    left: "0px",
                }}>
                <Text style={{ marginLeft: "15px" }} size={"sm"}>
                    Copyright ©2024 – All Rights Reserved
                </Text>
                <Text style={{ marginRight: "15px " }} size={"sm"}>
                    Designed & developed in my free time
                </Text>
            </Group>
        </Container>
    );
}
