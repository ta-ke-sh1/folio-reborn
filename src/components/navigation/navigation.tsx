import { Group, Text, useMantineColorScheme } from "@mantine/core";
import ModuleCard from "../card/moduleCard";

export default function NavigationBar() {
    const { colorScheme } = useMantineColorScheme();

    return (
        <Group className={"nav-bar"} p={"md"}>
            <ModuleCard>
                <Group m={10} p={3} gap={0} align="top">
                    <Text style={{ fontSize: '27px', lineHeight: '18px' }}>M0DULAR</Text>
                    <Text style={{ fontSize: '10px', lineHeight: '10px' }}>(1)</Text>
                </Group>
            </ModuleCard>
            <div style={{ width: '200px' }}>
                <Text style={{
                    color: colorScheme === 'light' ? 'white' : 'black'
                }}>
                    M0DULAR(1) IS TA-KE-SH1’S
                    EVER-EVOLVING PLAYGROUND
                </Text>
            </div>
        </Group>
    )
}