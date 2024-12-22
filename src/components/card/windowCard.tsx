import { ActionIcon, Card, CloseIcon, Group, Stack, Title, Tooltip } from "@mantine/core";
import { StyleHTMLAttributes, useEffect } from "react";

interface WindowCardProps {
    width?: number | string
    height?: number | string
    title: string
    children: JSX.Element[] | JSX.Element,
    close: any
    style?: any
}

export default function WindowCard({ title, width, height, children, close, style }: WindowCardProps) {

    useEffect(() => {
        return () => {

        }
    }, [])

    return (
        <Card radius={"sm"} padding={0}
            style={{
                ...style,
                position: 'absolute',
                left: '50%',
                top: '50%',
                transform: 'translate(-50%, -50%)',
                zIndex: 0, width: width ?? '95vw', height: height,
            }}>
            <Group pl={"md"} pr={"md"} pb={0} pt={"sm"} justify={"space-between"}>
                <Title order={4}>{title}</Title>
                <Tooltip withArrow={true} label={"Close window"}>
                    <ActionIcon color={"red"} variant={'outline'}>
                        <CloseIcon onClick={close} />
                    </ActionIcon>
                </Tooltip>
            </Group>
            <Stack p={0} style={{ position: 'relative', width: '100%', height: '100%' }}>
                {children}
            </Stack>
        </Card>
    )
}