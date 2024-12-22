import { ActionIcon, Divider, Group, Text, TextInput } from "@mantine/core";
import ModuleCard from "../../../components/card/moduleCard";
import { IconCornerRightUp } from "@tabler/icons-react";
import { useRef, useState } from "react";

export default function Commands(props: any) {

    const inputRef = useRef(null);

    const [command, setCommand] = useState("")

    const [suggestions, setSuggestions] = useState([]);
    const [commandList, setCommandList] = useState([]);

    function handleCommandChange(value: string) {
        setCommand(value)
    }

    return (
        <ModuleCard style={{ width: '240px', ...props.style }}>
            <Text pt={5} pb={2} pl="xs" pr="xs" style={{ fontSize: '14px' }}>C0NTR0LS</Text>
            <Divider m={0} />
            <Group pt={15} pb={18} pl={10} pr={10} justify="space-between">
                <TextInput
                    value={command}
                    ref={inputRef}
                    style={{
                        width: '183px',
                        fontFamily: "JetBrains Mono"
                    }} onChange={(e) => handleCommandChange(e.currentTarget.value)} />
                <ActionIcon m={0} size={"lg"} onClick={() => props.handleClickEnter(command)}>
                    <IconCornerRightUp />
                </ActionIcon>
            </Group>
        </ModuleCard>
    )
}