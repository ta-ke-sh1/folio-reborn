import {
    ActionIcon,
    Divider,
    Group,
    Text,
    TextInput,
    Tooltip,
    useMantineColorScheme,
} from "@mantine/core";
import ModuleCard from "../../../components/card/moduleCard";
import { IconCornerRightUp, IconHelpHexagon } from "@tabler/icons-react";
import { useRef, useState } from "react";
import { LINK_CURSOR_CLASS } from "../../../components/cursor/cursor";

export default function Commands(props: any) {
    const inputRef = useRef(null);
    const { colorScheme } = useMantineColorScheme();
    const [command, setCommand] = useState("");

    function handleCommandChange(value: string) {
        setCommand(value);
    }

    return (
        <ModuleCard style={{ width: props.width ?? "200px", ...props.style }}>
            <Group justify="space-between">
                <Text
                    pt={5}
                    pb={2}
                    pl="xs"
                    pr="xs"
                    style={{ fontSize: "14px" }}>
                    C0NTR0LS
                </Text>
                <Tooltip label="Cheatsheet" withArrow>
                    <IconHelpHexagon size={15} style={{ marginRight: "8px" }} />
                </Tooltip>
            </Group>
            <Divider m={0} />
            <Group pt={15} pb={18} pl={10} pr={10} justify="space-between">
                <TextInput
                    value={command}
                    ref={inputRef}
                    style={{
                        width: "100%",
                        fontFamily: "JetBrains Mono",
                    }}
                    onChange={(e) => handleCommandChange(e.currentTarget.value)}
                    rightSection={
                        <ActionIcon
                            className={`${LINK_CURSOR_CLASS}`}
                            color={
                                colorScheme === "light" ? "dark.3" : "dark.5"
                            }
                            m={0}
                            p={0}
                            size={"sm"}
                            onClick={() => props.handleClickEnter(command)}>
                            <IconCornerRightUp />
                        </ActionIcon>
                    }
                    rightSectionPointerEvents="auto"
                />
            </Group>
        </ModuleCard>
    );
}
