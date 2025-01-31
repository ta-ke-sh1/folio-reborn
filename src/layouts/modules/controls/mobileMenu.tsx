import { Grid, Group, Text } from "@mantine/core";
import Time from "./time";
import Controls from "./settings";
import Pages from "./navigation";

interface MobileMenuProps {
    handleClickEnter: any;
    close: any;
}

export default function MobileMenu({
    handleClickEnter,
    close,
}: MobileMenuProps) {
    return (
        <div
            style={{
                position: "relative",
                width: "100%",
                height: "100%",
            }}>
            <Grid gutter={12} style={{ overflow: "hidden" }}>
                <Grid.Col span={6}>
                    <Time width={"100%"} />
                </Grid.Col>
                <Grid.Col span={6}>
                    <Controls width={"100%"} />
                </Grid.Col>
                <Grid.Col span={12}>
                    <Group pt={"sm"} pl="xl" justify="center">
                        <Pages
                            handleClickEnter={(value: any) => {
                                close();
                                setTimeout(() => {
                                    handleClickEnter(value);
                                }, 500);
                            }}
                            styles={{}}
                        />
                    </Group>
                </Grid.Col>
            </Grid>
            <Group
                justify="space-between"
                style={{
                    position: "fixed",
                    left: 0,
                    bottom: 5,
                    width: "100%",
                }}>
                <Group m={10} p={3} gap={0} align="top">
                    <Text style={{ fontSize: "27px", lineHeight: "18px" }}>
                        M0DULAR
                    </Text>
                    <Text style={{ fontSize: "10px", lineHeight: "10px" }}>
                        (1)
                    </Text>
                </Group>
                <Group pr={15} style={{ marginBottom: "-15px" }}>
                    ©2025. ALL RIGHTS RESERVED
                </Group>
            </Group>
        </div>
    );
}
