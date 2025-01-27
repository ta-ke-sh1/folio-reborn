import { Button, Divider, Group, rem, Switch, Text } from "@mantine/core";
import ModuleCard from "../../../components/card/moduleCard";
import { LINK_CURSOR_CLASS } from "../../../components/cursor/cursor";

export default function Theme(props: any) {
    const fontSize = "12px";

    return (
        <ModuleCard style={{ width: "120px", height: "82px", ...props.style }}>
            <Text pt={5} pb={2} pl="xs" pr="xs" style={{ fontSize: "14px" }}>
                BACKGROUNDS
            </Text>
            <Divider m={0} />
            <Group pl="sm" pr="sm" pb="md" pt="sm" align="center">
                <Button
                    className={`${LINK_CURSOR_CLASS}`}
                    color="dark.2"
                    onClick={() => props.toggleBg(0)}>
                    1
                </Button>
                <Button
                    className={`${LINK_CURSOR_CLASS}`}
                    color="dark.3"
                    onClick={() => props.toggleBg(1)}>
                    2
                </Button>
            </Group>
        </ModuleCard>
    );
}
