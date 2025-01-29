import React, { useEffect, useRef, useState } from "react";
import { usePreloader } from "../hooks/usePreloader/usePreloader.tsx";
import {
    ActionIcon,
    Grid,
    Group,
    useMantineTheme,
    Burger,
    Drawer,
    Stack,
} from "@mantine/core";
import WindowCard from "../components/card/windowCard.tsx";
import ContactLayout from "./contact/contact.tsx";
import PlaygroundLayout from "./modules/playground/playground.tsx";
import Time from "./modules/controls/time.tsx";
import Controls from "./modules/controls/controls.tsx";
import Commands from "./modules/controls/commands.tsx";
import GradientBackground from "../components/backgrounds/gradient.tsx";
import EyeBackground from "../components/backgrounds/eye.tsx";
import Theme from "./modules/controls/theme.tsx";
import StoryLayout from "./story/story.tsx";
import { useMediaQuery, useDisclosure } from "@mantine/hooks";
import { IconMenu } from "@tabler/icons-react";
import MobileMenu from "./modules/controls/mobileMenu.tsx";

const backgrounds = [
    {
        component: <GradientBackground />,
    },
    {
        component: <EyeBackground />,
    },
];

export default function HomeLayout() {
    const containerRef = useRef<HTMLDivElement>(null);
    const { enterAnimation } = usePreloader();
    const theme = useMantineTheme();

    const [screens, setScreens] = useState<[] | any[]>([]);
    const [selectedBg, setSelectedBg] = useState<number>(0);

    const isMobile = useMediaQuery(
        `(max-width: ${parseInt(theme.breakpoints.sm, 10) * 16}px)`,
        true
    );

    const [opened, { toggle, open, close }] = useDisclosure();

    useEffect(() => {
        setTimeout(() => {
            if (enterAnimation) {
                enterAnimation();
            }
        }, 1000);
    }, []);

    function handleClickEnter(command: string) {
        switch (command) {
            case "/a":
                setScreens([
                    ...screens,
                    {
                        title: "folio",
                        component: <StoryLayout height={"80vh"} />,
                    },
                ]);
                break;
            case "/c":
                setScreens([
                    ...screens,
                    {
                        title: "contact",
                        component: <ContactLayout height={"80vh"} />,
                    },
                ]);
                break;
            case "/p":
                setScreens([
                    ...screens,
                    {
                        title: "playground",
                        component: <PlaygroundLayout height={"80vh"} />,
                    },
                ]);
                break;
            default:
                break;
        }
    }

    const handleCloseScreen = (index: number) => {
        let screenTempArr = JSON.parse(JSON.stringify(screens));
        screenTempArr.splice(index, 1);
        setScreens(screenTempArr);
    };

    const toggleBg = (index: number) => {
        setSelectedBg(index);
    };

    return (
        <>
            <div
                ref={containerRef}
                className={"legend"}
                id={"legend-container"}>
                {isMobile ? (
                    <Group
                        justify="center"
                        style={{
                            width: "100%",
                            zIndex: 10,
                            position: "fixed",
                            bottom: 10,
                            left: 10,
                        }}>
                        <Burger
                            opened={opened}
                            onClick={toggle}
                            aria-label="Toggle navigation"
                            style={{ zIndex: 1000 }}
                        />
                        <Drawer
                            overlayProps={{ backgroundOpacity: 0.5, blur: 4 }}
                            offset={12}
                            radius={0}
                            padding={0}
                            opened={opened}
                            onClose={close}
                            position="bottom"
                            size={"510px"}
                            zIndex={100}
                            withCloseButton={false}>
                            <MobileMenu />
                        </Drawer>
                    </Group>
                ) : (
                    <Grid
                        style={{
                            width: "100%",
                            zIndex: 10,
                            position: "fixed",
                            bottom: 10,
                            left: 10,
                        }}>
                        <Grid.Col span={{ xs: 3 }}>
                            <Group justify="start" style={{ zIndex: 10 }}>
                                <Commands handleClickEnter={handleClickEnter} />
                            </Group>
                        </Grid.Col>
                        <Grid.Col span={{ xs: 9 }}>
                            <Group justify="end" pr={30}>
                                <Theme toggleBg={toggleBg} />
                                <Time />
                                <Controls />
                            </Group>
                        </Grid.Col>
                    </Grid>
                )}
                {screens.map((screen, index: number) => (
                    <React.Fragment key={"screen-index-" + "g" + index}>
                        <WindowCard
                            style={{ zIndex: 1000 }}
                            close={() => handleCloseScreen(index)}
                            title={screen.title}>
                            {screen.component}
                        </WindowCard>
                    </React.Fragment>
                ))}
                {backgrounds[selectedBg].component}
            </div>
        </>
    );
}
