import { useState, useEffect } from "react";
import ModuleCard from "../../../components/card/moduleCard";
import { Divider, Group, Text } from "@mantine/core";
import moment from "moment";

export default function Time(props: any) {
    const [time, setTime] = useState(new Date());

    useEffect(() => {
        const intervalId = setInterval(() => {
            setTime(new Date());
        }, 60000); // Update every 1 minute

        return () => clearInterval(intervalId); // Cleanup interval on component unmount
    }, []);

    const fontSize = "12px";

    return (
        <ModuleCard style={{ width: props.width ?? "180px", ...props.style }}>
            <Text pt={5} pb={2} pl="xs" pr="xs" style={{ fontSize: "14px" }}>
                INF0
            </Text>
            <Divider m={0} style={{ backgroundColor: "white" }} />
            <Group justify="space-between" pl="xs" pr="xs" m={0}>
                <Text
                    pt={5}
                    style={{ fontSize: fontSize, fontFamily: "geist-regular" }}>
                    Location:
                </Text>
                <Text
                    pt={5}
                    style={{ fontSize: fontSize, fontFamily: "geist-regular" }}>
                    Vietnam
                </Text>
            </Group>
            <Group justify="space-between" pl="xs" pr="xs" pb="xs" m={0}>
                <Text
                    pt={5}
                    style={{ fontSize: fontSize, fontFamily: "geist-regular" }}>
                    Current time:
                </Text>
                <Text
                    pt={5}
                    style={{ fontSize: fontSize, fontFamily: "geist-regular" }}>
                    {moment(time).format("hh:mm A")}
                </Text>
            </Group>
        </ModuleCard>
    );
}
