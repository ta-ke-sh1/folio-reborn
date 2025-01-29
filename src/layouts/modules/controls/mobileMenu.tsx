import { Divider, Grid, Text, Stack, Group } from "@mantine/core";
import Commands from "./commands";
import Time from "./time";
import Controls from "./controls";
import ModuleCard from "../../../components/card/moduleCard";

export default function MobileMenu() {
    function handleClickEnter(command: string) {
        console.log(command);
    }

    return (
        <Grid gutter={12} style={{ overflow: "hidden" }}>
            <Grid.Col span={6}>
                <Time width={"100%"} />
            </Grid.Col>
            <Grid.Col span={6}>
                <Controls width={"100%"} />
            </Grid.Col>
            <Grid.Col span={12}>
                <Commands width={"100%"} handleClickEnter={handleClickEnter} />
            </Grid.Col>
            <Grid.Col span={12}>
                <Preview />
            </Grid.Col>
        </Grid>
    );
}

function Preview() {
    return (
        <Stack style={{ height: "100%", width: "100%" }}>
            <ModuleCard>
                <Text
                    pt={5}
                    pb={2}
                    pl="xs"
                    pr="xs"
                    style={{ fontSize: "14px" }}>
                    PREVIEW
                </Text>
                <Divider m={0} style={{ backgroundColor: "white" }} />
                <Group
                    justify="space-between"
                    pl="xs"
                    pr="xs"
                    m={0}
                    style={{
                        height: "200px",
                    }}></Group>
            </ModuleCard>
        </Stack>
    );
}
