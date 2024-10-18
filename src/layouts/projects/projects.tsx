import {Card, Container, Grid, Title} from "@mantine/core";
import {useLanguageState} from "../../hooks/useLanguage.ts";

export default function ProjectsLayout(){
    const {languageData} = useLanguageState();

    return (
        <Container mt="lg" fluid style={{minHeight: '100dvh'}}>
            <Title style={{fontFamily: 'aptos'}} mt={"xl"} mb={"xl"}>
                {languageData.projects.title}
            </Title>
            <Grid>
                <Grid.Col span={{base: 6, sm: 12, md: 6}}>
                    <Card></Card>
                </Grid.Col>
                <Grid.Col span={{base: 6, sm: 12, md: 6}}>
                    <Card></Card>
                </Grid.Col>
                <Grid.Col span={{base: 6, sm: 12, md: 6}}>
                    <Card></Card>
                </Grid.Col>
                <Grid.Col span={{base: 6, sm: 12, md: 6}}>
                    <Card></Card>
                </Grid.Col>
            </Grid>
        </Container>
    )
}