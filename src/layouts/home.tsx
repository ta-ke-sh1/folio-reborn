import React, { useEffect, useRef, useState } from "react";
import { usePreloader } from "../hooks/usePreloader/usePreloader.tsx";
import { Group, useMantineTheme, Burger, Drawer } from "@mantine/core";
import WindowCard from "../components/card/windowCard.tsx";
import ContactLayout from "./contact/contact.tsx";
import PlaygroundLayout from "./modules/playground/playground.tsx";
import Time from "./modules/controls/time.tsx";
import Controls from "./modules/controls/settings.tsx";
import Commands from "./modules/controls/commands.tsx";
import GradientBackground from "../components/backgrounds/gradient.tsx";
import StoryLayout from "./story/story.tsx";
import { useMediaQuery, useDisclosure } from "@mantine/hooks";
import MobileMenu from "./modules/controls/mobileMenu.tsx";
import ProjectsLayout from "./projects/projects.tsx";
import GalleriaLayout from "./modules/galleria/galleria.tsx";

export default function HomeLayout() {
    const containerRef = useRef<HTMLDivElement>(null);
    const { enterAnimation } = usePreloader();
    const theme = useMantineTheme();

    const [screens, setScreens] = useState<[] | any[]>([]);

    const isMobile = useMediaQuery(
        `(max-width: ${parseInt(theme.breakpoints.sm, 10) * 16}px)`,
        true
    );

    const [opened, { toggle, close }] = useDisclosure();

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
                    {
                        title: "F0LI0",
                        component: <StoryLayout />,
                    },
                ]);
                break;
            case "/c":
                setScreens([
                    {
                        title: "C0NTACT",
                        component: <ContactLayout />,
                    },
                ]);
                break;
            case "/p":
                setScreens([
                    {
                        title: "VISI0NS",
                        component: <PlaygroundLayout />,
                    },
                ]);
                break;
            case "/projects":
                setScreens([
                    {
                        title: "MEM0RIES",
                        component: <ProjectsLayout />,
                    },
                ]);
                break;
            case "/g":
                setScreens([
                    {
                        title: "GALLERY",
                        component: <GalleriaLayout />,
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
                            radius={8}
                            padding={10}
                            opened={opened}
                            onClose={close}
                            position="bottom"
                            size={"510px"}
                            zIndex={100}
                            withCloseButton={false}>
                            <MobileMenu
                                close={close}
                                handleClickEnter={handleClickEnter}
                            />
                        </Drawer>
                    </Group>
                ) : (
                    <>
                        <Group
                            style={{
                                zIndex: 10,
                                position: "fixed",
                                bottom: 10,
                                left: 10,
                            }}>
                            <Commands handleClickEnter={handleClickEnter} />
                        </Group>
                        <Group
                            justify="end"
                            style={{
                                zIndex: 10,
                                position: "fixed",
                                bottom: 10,
                                right: 10,
                            }}>
                            <Time />
                            <Controls />
                        </Group>
                    </>
                )}
                {screens.map((screen, index: number) => (
                    <React.Fragment key={"screen-index-" + "g" + index}>
                        <WindowCard
                            style={{ zIndex: 0 }}
                            close={() => handleCloseScreen(index)}
                            title={screen.title}>
                            {screen.component}
                        </WindowCard>
                    </React.Fragment>
                ))}
                <GradientBackground />
            </div>
        </>
    );
}
