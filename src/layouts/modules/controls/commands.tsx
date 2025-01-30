import {
    ActionIcon,
    Divider,
    Group,
    Text,
    TextInput,
    Tooltip,
    Stack,
    useMantineColorScheme,
    SegmentedControl,
} from "@mantine/core";
import ModuleCard from "../../../components/card/moduleCard";
import { IconCornerRightUp, IconHelpHexagon } from "@tabler/icons-react";
import { useRef, useState } from "react";
import { LINK_CURSOR_CLASS } from "../../../components/cursor/cursor";
import Pages from "./pages";

export default function Commands(props: any) {
    const inputRef = useRef(null);
    const { colorScheme } = useMantineColorScheme();
    const [command, setCommand] = useState("");

    const [controlType, setControlType] = useState("0");

    function handleCommandChange(value: string) {
        setCommand(value);
    }

    return (
        <Stack>
            <ModuleCard>
                {controlType === "0" ? (
                    <Pages />
                ) : (
                    <>
                        <Group
                            pt={10}
                            pb={5}
                            pl={10}
                            pr={10}
                            justify="space-between">
                            <TextInput
                                value={command}
                                ref={inputRef}
                                style={{
                                    width: "100%",
                                    fontFamily: "JetBrains Mono",
                                }}
                                onChange={(e) =>
                                    handleCommandChange(e.currentTarget.value)
                                }
                                rightSection={
                                    <ActionIcon
                                        className={`${LINK_CURSOR_CLASS}`}
                                        color={
                                            colorScheme === "light"
                                                ? "dark.3"
                                                : "dark.5"
                                        }
                                        m={0}
                                        p={0}
                                        size={"sm"}
                                        onClick={() =>
                                            props.handleClickEnter(command)
                                        }>
                                        <IconCornerRightUp />
                                    </ActionIcon>
                                }
                                rightSectionPointerEvents="auto"
                            />
                        </Group>
                        <Text
                            pb={2}
                            pl="xs"
                            pr="xs"
                            style={{ fontSize: "14px" }}>
                            0UTPUT:
                        </Text>
                        <Group
                            justify="space-between"
                            pl="xs"
                            pr="xs"
                            m={0}
                            style={{
                                height: "184px",
                            }}></Group>
                    </>
                )}
            </ModuleCard>
            <ModuleCard
                style={{ width: props.width ?? "200px", ...props.style }}>
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
                        <IconHelpHexagon
                            size={15}
                            style={{ marginRight: "8px" }}
                        />
                    </Tooltip>
                </Group>
                <Divider m={0} />
                <SegmentedControl
                    m={"xs"}
                    value={controlType}
                    onChange={setControlType}
                    data={[
                        { label: "Command", value: "1" },
                        { label: "Pages", value: "0" },
                    ]}
                />
            </ModuleCard>
        </Stack>
    );
}
