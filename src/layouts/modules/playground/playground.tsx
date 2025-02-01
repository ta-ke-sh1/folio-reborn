import { Container, Text, Badge, Group } from "@mantine/core";
import { IconArrowDown } from "@tabler/icons-react";
import { useEffect } from "react";

export default function PlaygroundLayout() {
    useEffect(() => {}, []);
    return (
        <>
            <Container
                fluid
                p={0}
                m={0}
                style={{
                    width: "100%",
                    height: "100%",
                    position: "relative",
                    overflowX: "hidden",
                }}>
                <div
                    style={{
                        position: "fixed",
                        top: "40px",
                        left: "20px",
                        fontSize: "11px",
                    }}>
                    <Text
                        mt={"xs"}
                        style={{
                            letterSpacing: "-2px",
                            fontFamily: "serif-regular",
                            fontSize: "80px",
                            marginBottom: "-25px",
                        }}>
                        Playground
                    </Text>
                    <Group align="end">
                        <Badge color="gray" variant="outline">
                            (100) items
                        </Badge>
                    </Group>
                    <p style={{ width: "30%", marginTop: "10px" }}>
                        Well all my works at Toshiba are confidential. This site
                        is where I test out & deploy new shits and ideas as well
                        as personal development topics
                    </p>
                </div>
                <div
                    style={{
                        position: "fixed",
                        bottom: "10px",
                        left: "50%",
                        fontSize: "11px",
                        transform: "translateX(-50%)",
                    }}>
                    <Badge
                        color="red.5"
                        variant="filled"
                        rightSection={<IconArrowDown size={12} />}>
                        SCR0LL T0 SEE M0RE
                    </Badge>
                </div>
            </Container>
        </>
    );
}
