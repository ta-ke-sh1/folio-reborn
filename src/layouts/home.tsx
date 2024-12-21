import React, { useEffect, useRef, useState } from "react";
import { usePreloader } from "../hooks/usePreloader/usePreloader.tsx";
import { ActionIcon, Group, Stack, Text, TextInput } from "@mantine/core";
import { IconCornerRightUp } from "@tabler/icons-react";
import { GradientAnimation } from "../animations/gradient/gradient.ts";
import WindowCard from "../components/card/windowCard.tsx";
import ContactLayout from "./contact/contact.tsx";
import PlaygroundLayout from "./modules/playground/playground.tsx";
import Time from "./modules/controls/time.tsx";
import Controls from "./modules/controls/controls.tsx";
import { getMessage, useLanguageState } from "../hooks/useLanguage.ts";
import moment from "moment";
import Commands from "./modules/controls/commands.tsx";

export default function HomeLayout() {
    const containerRef = useRef<HTMLDivElement>(null);

    const { enterAnimation } = usePreloader();

    const inputRef = useRef(null);

    const [screens, setScreens] = useState<[] | any[]>([])

    const [command, setCommand] = useState("")

    const { language } = useLanguageState();

    const motto = getMessage(language, "motto_" + moment(new Date()).weekday())

    useEffect(() => {
        let canvas = document.getElementById("canvas")
        let controller = new GradientAnimation(canvas);

        return function () {
            controller.clearCanvas()
        }
    }, [])

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
                        component: <ContactLayout height={'80vh'} />
                    }
                ])
                break;
            case "/p":
                setScreens([
                    ...screens,
                    {
                        title: 'playground',
                        component: <PlaygroundLayout height={'80vh'} />
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
                    screens.map((screen, index: number) => (
                        <React.Fragment
                            key={"screen-index\-" +
                                "g" + index}>
                            <WindowCard close={() => handleCloseScreen(index)} title={screen.title}>
                                {screen.component}
                            </WindowCard>
                        </React.Fragment>)
                    )
                }
                <Stack style={{ position: 'absolute', bottom: 10, left: 10, width: '200px' }} gap={0}>
                    <Text>
                        Daily motto:
                    </Text>
                    <Text>{motto}</Text>
                </Stack>

                <Group style={{ position: 'absolute', bottom: 10, left: '50%', transform: 'translateX(-50%)' }}>
                    <Commands />
                </Group>

                <Group style={{ position: 'absolute', bottom: 10, right: 10 }} >
                    <Time />
                    <Controls />
                </Group>

                <canvas style={{
                    borderRadius: '10px',
                    zIndex: -1,
                    display: 'block',
                    width: '100%',
                    height: '100%',
                    position: 'absolute',
                    left: 0,
                    top: 0
                }} id={"canvas"}></canvas>
            </div>
        </>
    )
}
