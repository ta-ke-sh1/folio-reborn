import { Container, Grid, Group, Stack, Text } from "@mantine/core";
import { useEffect } from "react";
import { GradientAnimation } from "../../animations/gradient/gradient.ts";
import { shuffleText } from "../../utils/utils.ts";

interface ContactLayoutProps {
    width?: string | number
    height?: string | number
}

export default function ContactLayout({ width, height }: ContactLayoutProps) {
    useEffect(() => {
        let canvas = document.getElementById("canvas")
        let controller = new GradientAnimation(canvas);

        return function () {
            controller.clearCanvas()
        }
    }, [])

    // @ts-ignore
    return (
        <Container fluid style={{
            height: height ?? '102.5vh',
            width: width ?? '100%',
            position: 'relative',
        }}>
            <Group style={{ transform: 'translateY(-10px)' }} justify={"space-between"}>
                <Text mr={"xs"} style={{
                    marginTop: '5px',
                    fontFamily: "aptos, sans-serif",
                    fontSize: '3.8rem',
                    letterSpacing: '-3px'
                }}>trung ha</Text>
            </Group>
            <Group p={"sm"} style={{
                position: 'absolute',
                top: '52.5%',
                transform: 'translateY(-50%)',
                left: 0,
                width: '100%',
                justifyContent: 'space-between'
            }}>
                <Grid style={{ width: '100%' }} align={"top"}>
                    <Grid.Col span={{ md: 6, lg: 3 }}>
                        <Stack mb={"xl"} pb={"xl"} gap={'xs'} align={"end"}>
                            <Text size={"xs"} fw={600}>
                                Full-stack Developer
                            </Text>
                            <Text size={"sm"}>
                                .Currently based in Hanoi
                            </Text>
                        </Stack>
                    </Grid.Col>

                    <Grid.Col span={{ md: 6, lg: 3 }}>
                    </Grid.Col>
                    <Grid.Col span={{ md: 6, lg: 3 }}>
                    </Grid.Col>
                    <Grid.Col span={{ md: 6, lg: 3 }}>
                    </Grid.Col>
                    <Grid.Col span={{ md: 6, lg: 3 }}>
                        <Stack gap={'xs'} align={"end"}>
                            <Text size={"xs"} fw={600}>Working Hours</Text>
                            <Text size={"sm"}>Mon - Fri</Text>
                            <Text size={"sm"}>9AM - 6PM</Text>
                        </Stack>
                    </Grid.Col>
                    <Grid.Col span={{ md: 6, lg: 3 }}>

                    </Grid.Col>
                    <Grid.Col span={{ sm: 6, xs: 6, md: 6, lg: 3 }}>
                        <Stack gap={'xs'}>
                            <Text size={"xs"} fw={600}>Socials</Text>
                            <p style={{ cursor: "pointer", width: 'fit-content', fontSize: '11px' }}
                                className={"shuffle-item"}
                                onMouseEnter={(e) => shuffleText(e, "Facebook")}>
                                Facebook
                            </p>
                            <p style={{ cursor: "pointer", width: 'fit-content', fontSize: '11px' }}
                                className={"shuffle-item"}
                                onMouseEnter={(e) => shuffleText(e, "Discord")}>
                                Discord
                            </p>
                            <p style={{ cursor: "pointer", width: 'fit-content', fontSize: '11px' }}
                                className={"shuffle-item"}
                                onMouseEnter={(e) => shuffleText(e, "Behance")}>
                                Behance
                            </p>
                        </Stack>
                    </Grid.Col>
                    <Grid.Col span={{ sm: 6, xs: 6, md: 6, lg: 3 }}>
                        <Stack gap={'xs'}>
                            <Text size={"xs"} fw={600}>Contacts</Text>
                            <Text size={"sm"}>(+84) 818 16 1998</Text>
                            <Text size={"sm"}>ha.the.trung.1698@gmail.com</Text>
                            <p style={{ cursor: "pointer", width: 'fit-content', fontSize: '11px' }} className={"shuffle-item"}
                                onMouseEnter={(e) => shuffleText(e, "LinkedIn")}>
                                LinkedIn
                            </p>
                        </Stack>
                    </Grid.Col>
                    <Grid.Col span={{ md: 6, lg: 3 }}>
                    </Grid.Col>
                    <Grid.Col span={{ md: 6, lg: 3 }}>
                    </Grid.Col>
                    <Grid.Col span={{ md: 6, lg: 3 }}>
                        <Stack gap={'xs'}>
                            <Text fw={600} size={"sm"}>
                                Copyright ©2024 – All Rights Reserved
                            </Text>
                            <Text fw={600} size={"sm"}>
                                Designed & developed in my free time.
                            </Text>
                        </Stack>
                    </Grid.Col>
                </Grid>
            </Group>
        </Container>
    )
}