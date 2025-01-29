import { Divider, Group, Select, SelectProps, Text } from "@mantine/core";
import ModuleCard from "../../../components/card/moduleCard";
import { LINK_CURSOR_CLASS } from "../../../components/cursor/cursor";
import { useState } from "react";

export default function Theme(props: any) {
    const [theme, setTheme] = useState("0");

    const renderSelectOption: SelectProps["renderOption"] = ({ option }) => (
        <Group flex="1" gap="xs">
            <Text className={`${LINK_CURSOR_CLASS}`}>{option.label}</Text>
        </Group>
    );

    return (
        <ModuleCard style={{ width: "160px", height: "82px", ...props.style }}>
            <Text pt={5} pb={2} pl="xs" pr="xs" style={{ fontSize: "14px" }}>
                THEME
            </Text>
            <Divider m={0} />
            <Group pl="sm" pr="sm" pb="md" pt="sm" align="center">
                <Select
                    className={`${LINK_CURSOR_CLASS}`}
                    value={theme}
                    onChange={(value) => {
                        setTheme(String(value));
                        props.toggleBg(Number(value));
                    }}
                    renderOption={renderSelectOption}
                    data={[
                        {
                            label: "Gradient",
                            value: "0",
                        },
                        {
                            label: "Eye",
                            value: "1",
                        },
                    ]}
                />
            </Group>
        </ModuleCard>
    );
}
