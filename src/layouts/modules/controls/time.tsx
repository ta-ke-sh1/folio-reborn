import { useState, useEffect } from "react";
import ModuleCard from "../../../components/card/moduleCard";
import { Stack, Text } from "@mantine/core";
import moment from 'moment';

export default function Time() {

    const [time, setTime] = useState(new Date());

    useEffect(() => {
        const intervalId = setInterval(() => {
            setTime(new Date());
        }, 60000); // Update every 1 minute

        return () => clearInterval(intervalId); // Cleanup interval on component unmount
    }, []);

    return (
        <ModuleCard style={{
            position: 'absolute',

        }}>
            <Stack mr={"xl"} align={"end"}>
                <Text size={"sm"}>
                    Hanoi, Vietnam
                </Text>
                <Text size={"sm"}>
                    {moment(time).format('hh:mm A')}
                </Text>
            </Stack>
        </ModuleCard>
    )

}