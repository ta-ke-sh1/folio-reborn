import { Grid } from "@mantine/core";
import Time from "./time";
import Controls from "./settings";
import Pages from "./navigation";

export default function MobileMenu() {
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
