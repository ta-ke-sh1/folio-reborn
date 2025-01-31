import {
    ActionIcon,
    Card,
    CloseIcon,
    Divider,
    Group,
    Stack,
    Title,
    Tooltip,
} from "@mantine/core";
import { useEffect, useRef } from "react";

interface WindowCardProps {
    width?: number | string;
    height?: number | string;
    title: string;
    children: JSX.Element[] | JSX.Element;
    close: any;
    style?: any;
}

export default function WindowCard({
    title,
    width,
    height,
    children,
    close,
    style,
}: WindowCardProps) {
    useEffect(() => {
        return () => {};
    }, []);

    return (
        <>
            <Card
                radius={"sm"}
                padding={0}
                style={{
                    ...style,
                    position: "absolute",
                    left: "50%",
                    top: "50%",
                    transform: "translate(-50%, -50%)",
                    width: width ?? "96vw",
                    height: height ?? "92vh",
                }}>
                <Group
                    pl={"md"}
                    pr={"md"}
                    pb={"md"}
                    pt={"sm"}
                    justify={"space-between"}>
                    <Title order={4}>{title}</Title>
                    <ActionIcon color={"red"} variant={"outline"}>
                        <CloseIcon onClick={close} />
                    </ActionIcon>
                </Group>
                <Divider />
                <Stack
                    p={0}
                    style={{
                        position: "relative",
                        width: "100%",
                        height: "100%",
                    }}>
                    {children}
                </Stack>
            </Card>
            <div
                style={{
                    position: "absolute",
                    left: 0,
                    top: 0,
                    width: "100dvw",
                    height: "100dvh",
                    backdropFilter: "blur(2px)",
                    zIndex: 50,
                }}></div>
        </>
    );
}
