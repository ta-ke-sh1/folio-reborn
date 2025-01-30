import { Grid } from "@mantine/core";
import Time from "./time";
import Controls from "./settings";
import Pages from "./pages";

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
                <Pages />
            </Grid.Col>
        </Grid>
    );
}
