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

    const [suggestions, setSuggestions] = useState([]);
    const [commandList, setCommandList] = useState([]);

    function handleCommandChange(value: string) {
        setCommand(value);
    }

    return (
        <ModuleCard style={{ width: "240px", ...props.style }}>
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
                        fontFamily: "JetBrains Mono",
                    }}
                    onChange={(e) => handleCommandChange(e.currentTarget.value)}
                />
                <ActionIcon
                    className={`${LINK_CURSOR_CLASS}`}
                    color={colorScheme === "light" ? "dark.3" : "dark.5"}
                    m={0}
                    p={0}
                    size={"lg"}
                    onClick={() => props.handleClickEnter(command)}>
                    <IconCornerRightUp />
                </ActionIcon>
            </Group>
        </ModuleCard>
    );
}
