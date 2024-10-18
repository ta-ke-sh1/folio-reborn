import {Center, Container, Group, Stack, Text, Tooltip} from "@mantine/core";
import {useLanguageState} from "../../hooks/useLanguage.ts";
import { shuffleText } from "../../utils/utils.ts";

export default function GalleriaLayout() {

    const {languageData} = useLanguageState();

    const font_style = {
        lineHeight: '12px'
    }

    return (
        <Container style={{height: '130dvh'}} mt={"xl"} pt={"lg"}>
            <Center style={{marginTop: '40vh'}}>
                <Stack align={"center"}>
                    <Text style={{marginBottom: '-10px'}}>Trung Ha</Text>
                    <Group gap={0} align={"top"} style={{userSelect: 'none'}} mb={"xs"} mt={"xs"}>
                        <Tooltip withArrow label={"I don't talk in binary, fyi."}>
                            <Stack className={"shuffle-container"}>
                                <Text
                                    style={{fontSize: '4rem', lineHeight: '3rem'}}
                                    className={"shuffle-item"}
                                    onMouseEnter={(e) => shuffleText(e, languageData.galleria.title)}>
                                    {languageData.galleria.title}
                                </Text>
                            </Stack>
                        </Tooltip>
                    </Group>
                    <Stack className={"shuffle-container"} style={font_style}>
                        {languageData.galleria.paragraph.r1}
                    </Stack>
                    <Stack className={"shuffle-container"} style={font_style}>
                        {languageData.galleria.paragraph.r2}
                    </Stack>
                    <Stack className={"shuffle-container"} style={font_style}>
                        {languageData.galleria.paragraph.r3}
                    </Stack>
                </Stack>
            </Center>
        </Container>
    )
}