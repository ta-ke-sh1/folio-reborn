import {createTheme, MantineProvider} from "@mantine/core";
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import HomeLayout from "./layouts/home.tsx";
import ErrorLayout from "./layouts/404/404.tsx";

import "@fontsource/jetbrains-mono";
import "@fontsource/jetbrains-mono/400.css";
import "@fontsource/jetbrains-mono/400-italic.css";

import '@mantine/core/styles.css';
import "../styles/main.scss";
import "../styles/legend.scss"
import "../styles/navigation.scss"
import "../styles/playground.scss"
import "../styles/fonts/font.scss"

import {useEffect} from "react";
import NavigationBar from "./components/navigation/navigation.tsx";
import {PreloaderWrapper} from "./hooks/usePreloader/usePreloader.tsx";

function App() {

    useEffect(() => {
        initSystemSettings()
    }, [])

    function initSystemSettings() {

    }

    const router = createBrowserRouter([
        {
            path: "/",
            element: <HomeLayout/>,
        },
        {
            path: "*",
            element: <ErrorLayout/>
        }
    ]);

    const theme = createTheme({
        fontFamily: 'JetBrains Mono, monospace',
    });

    return (
        <MantineProvider theme={theme}>
            <svg
                style={{opacity: 0.1, position: 'fixed', left: 0, top: 0, zIndex: 1000, pointerEvents: 'none'}}
                viewBox="0 0 200 200"
                xmlns='http://www.w3.org/2000/svg'>
                <filter id='noiseFilter'>
                    <feTurbulence
                        type='fractalNoise'
                        baseFrequency='12'
                        numOctaves='5'
                        stitchTiles='stitch'/>
                    <feSpecularLighting surfaceScale="7" specularConstant="5.9" specularExponent="20"
                                        lightingColor="#ffffff" x="0%" y="0%" width="100%" height="100%" in="turbulence"
                                        result="specularLighting">
                        <feDistantLight azimuth="5" elevation="67"></feDistantLight>
                    </feSpecularLighting>
                </filter>
                <rect
                    width='100%'
                    height='100%'
                    filter='url(#noiseFilter)'/>
            </svg>
            <PreloaderWrapper>
                <NavigationBar/>
                <RouterProvider router={router}/>
            </PreloaderWrapper>
        </MantineProvider>
    )
}

export default App
