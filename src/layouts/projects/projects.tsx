import { Stack, Container, Text, Badge, Group } from "@mantine/core";
import { IconArrowDown } from "@tabler/icons-react";

export default function ProjectsLayout() {
    return (
        <Container
            fluid
            p={0}
            m={0}
            className="hide-scroll"
            style={{
                width: "100%",
                height: "94%",
                position: "relative",
                overflowY: "auto",
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
                    Memories
                </Text>
                <Group>
                    <Badge color="gray" variant="outline">
                        (100) items
                    </Badge>
                </Group>
            </div>
            <Stack align="center">
                {[...Array(100).keys()].map((a: any, index: number) => {
                    return (
                        <div
                            style={{
                                marginTop: "30px",
                                textAlign: "center",
                                height: "200px",
                                width: "400px",
                                backgroundColor: "crimson",
                            }}>
                            {index}
                        </div>
                    );
                })}
            </Stack>
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
    );
}
