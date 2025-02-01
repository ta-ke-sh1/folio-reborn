import { Container, Text, Group, Badge, Grid, Card } from "@mantine/core";
import { IconArrowDown } from "@tabler/icons-react";

interface WritingModel {
    title: string;
    date: string | Date | Number;
    imageUrl?: string;
}

const writings = [
    {
        title: "Test 1",
        date: "2024/12/1",
    },
    {
        title: "Test 2",
        date: "2024/12/1",
    },
    {
        title: "Test 3",
        date: "2024/12/1",
    },
    {
        title: "Test 4",
        date: "2024/12/1",
    },
    {
        title: "Test 5",
        date: "2024/12/1",
    },
];

interface WritingCardProps {
    writing: WritingModel;
    index?: number;
}

function WritingCard({ writing, index }: WritingCardProps) {
    return (
        <Card
            style={{
                borderRadius: "7px",
                textAlign: "center",
                height: "240px",
                backgroundColor: "crimson",
            }}>
            {index} - {writing.title}
        </Card>
    );
}

export default function GalleriaLayout() {
    return (
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
                    Writings
                </Text>
                <Group align="end">
                    <Badge color="gray" variant="outline">
                        (100) items
                    </Badge>
                </Group>
            </div>
            <Grid>
                <Grid.Col span={3}></Grid.Col>
                <Grid.Col span={9}>
                    <Grid pt="md" pr="md">
                        {writings.map(
                            (writing: WritingModel, index: number) => {
                                return (
                                    <Grid.Col span={6} key={`writing-{index}`}>
                                        <WritingCard
                                            writing={writing}
                                            index={index}
                                        />
                                    </Grid.Col>
                                );
                            }
                        )}
                    </Grid>
                </Grid.Col>
            </Grid>
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
