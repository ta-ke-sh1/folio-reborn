import { Card, Container, Grid, Text } from "@mantine/core";
import { useLanguageState } from "../../hooks/useLanguage.ts";

export default function ProjectsLayout() {
    const { languageData } = useLanguageState();

    return (
        <Container fluid style={{ height: "100%" }}>
            <div
                style={{
                    position: "absolute",
                    top: "0px",
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
                        marginBottom: "-15px",
                    }}>
                    Memories
                </Text>
            </div>
            <Grid>
                <Grid.Col span={{ base: 6, sm: 12, md: 6 }}>
                    <Card></Card>
                </Grid.Col>
                <Grid.Col span={{ base: 6, sm: 12, md: 6 }}>
                    <Card></Card>
                </Grid.Col>
                <Grid.Col span={{ base: 6, sm: 12, md: 6 }}>
                    <Card></Card>
                </Grid.Col>
                <Grid.Col span={{ base: 6, sm: 12, md: 6 }}>
                    <Card></Card>
                </Grid.Col>
            </Grid>
        </Container>
    );
}
