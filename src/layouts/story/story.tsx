import { Container, Group, Text, useMantineColorScheme } from "@mantine/core";
import svg from "/svg/eye/art.svg"

interface StoryLayoutProps {
    height: string | number;
    width?: string | number;
}

export default function StoryLayout({ height, width }: StoryLayoutProps) {
    const { colorScheme } = useMantineColorScheme();
    
    return (
        <Container
            fluid
            style={{
                position: "relative",
                height: height ?? "102.5vh",
                width: width ?? "100%",
                overflowX: 'hidden',
                overflowY: "auto",
            }}>
            <Group>
                <Text
                    mt={"xs"}
                    style={{
                        fontFamily: "serif-regular",
                        fontSize: "80px",
                    }}>
                    About
                </Text>
            </Group>
            <img style={{
                filter: `invert(${colorScheme === 'dark' ? 100 : 0}%)`,
                position: 'absolute',
                right: -150,
                top: -150
            }} height={400} src={svg} alt="My SVG" />
            <Text style={{ marginTop: "100dvh" }}>test</Text>
        </Container>
    );
}

