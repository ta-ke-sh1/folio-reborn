import { Card, Stack } from "@mantine/core";

interface ModuleCardProps {
    children: JSX.Element[] | JSX.Element,
    style?: any
}


export default function ModuleCard({ style, children }: ModuleCardProps) {
    return (
        <Card style={{ ...style }} m={0} radius={0}>
            <Stack style={{ position: 'relative' }}>
                {children}
            </Stack>
        </Card>
    )
}