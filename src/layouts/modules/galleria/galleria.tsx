import { Container, Stack } from "@mantine/core";

export default function GalleriaLayout() {
    return (
        <Container
            fluid
            p={0}
            m={0}
            style={{
                width: "100%",
                height: "94%",
                position: "relative",
                overflowY: "auto",
            }}>
            <Stack align="center">
                {[...Array(100).keys()].map((a: any, index: number) => {
                    return (
                        <div
                            style={{
                                textAlign: "center",
                                height: "100px",
                                width: "400px",
                            }}>
                            {index}
                        </div>
                    );
                })}
            </Stack>
        </Container>
    );
}
