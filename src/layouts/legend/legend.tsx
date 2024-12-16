import React, {useEffect, useRef, useState} from "react";
import {usePreloader} from "../../hooks/usePreloader/usePreloader.tsx";
import {ActionIcon, Group, Stack, Text, TextInput} from "@mantine/core";
import {IconCornerRightUp} from "@tabler/icons-react";
import WindowCard from "../../components/card/windowCard.tsx";
import ContactLayout from "../contact/contact.tsx";
import PlaygroundLayout from "../playground/playground.tsx";

export default function LegendLayout() {
    const containerRef = useRef<HTMLDivElement>(null);

    const {enterAnimation} = usePreloader();

    const inputRef = useRef(null);

    const [screens, setScreens] = useState<[] | any[]>([])

    const [command, setCommand] = useState("")

    useEffect(() => {
        setTimeout(() => {
            if (enterAnimation) {
                enterAnimation()
            }
        }, 1000)
    }, [])

    function handleClickEnter() {
        switch (command) {
            case "/c":
                setScreens([
                    ...screens,
                    {
                        title: 'contact',
                        component: <ContactLayout height={'80vh'}/>
                    }
                ])
                break;
            case "/p":
                setScreens([
                    ...screens,
                    {
                        title: 'playground',
                        component: <PlaygroundLayout height={'80vh'}/>
                    }
                ])
                break;
            default:
                break;
        }
        setCommand("")
    }

    const handleCloseScreen = (index: number) => {
        let screenTempArr = JSON.parse(JSON.stringify(screens))
        screenTempArr.splice(index, 1)
        setScreens(screenTempArr)
    }

    return (
        <>
            <div ref={containerRef} className={"legend"} id={"legend-container"}>
                {
                    screens.length > 0 && screens.map((screen, index: number) => (
                        <React.Fragment
                            key={"screen-index\-" +
                                "g" + index}>
                            <WindowCard close={() => handleCloseScreen(index)} title={screen.title}>
                                {screen.component}
                            </WindowCard>
                        </React.Fragment>)
                    )
                }
                <div style={{position: 'absolute', left: '50%', top: '50%', transform: 'translate(-50%, -50%)'}}>
                    <Stack>
                        <Text>Hello, </Text>
                        <Group>
                            <TextInput
                                value={command}
                                ref={inputRef}
                                style={{
                                    fontFamily: "JetBrains Mono", width: '400px'
                                }} onChange={(e) => setCommand(e.currentTarget.value)}/>
                            <ActionIcon size={"lg"} onClick={handleClickEnter}>
                                <IconCornerRightUp/>
                            </ActionIcon>
                        </Group>
                    </Stack>
                </div>
            </div>
        </>
    )
}
