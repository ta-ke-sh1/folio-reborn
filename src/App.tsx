import { createTheme, MantineProvider } from "@mantine/core";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomeLayout from "./layouts/home.tsx";
import ErrorLayout from "./layouts/404/404.tsx";


import '@mantine/core/styles.css';
import "../styles/main.scss";
import "../styles/legend.scss"
import "../styles/navigation.scss"
import "../styles/playground.scss"
import "../styles/fonts/font.scss"

import { useEffect } from "react";
import NavigationBar from "./components/navigation/navigation.tsx";
import { PreloaderWrapper } from "./hooks/usePreloader/usePreloader.tsx";
import DevLayout from "./layouts/dev/dev.tsx";

function App() {

    useEffect(() => {
        initSystemSettings()
    }, [])

    function initSystemSettings() {

    }

    const router = createBrowserRouter([
        {
            path: "/",
            element: <HomeLayout />,
        },
        {
            path: "*",
            element: <ErrorLayout />
        },
        {
            path: "/dev",
            element: <DevLayout />
        }
    ]);

    const theme = createTheme({
        fontFamily: 'JetBrains Mono, monospace',
    });

    return (
        <MantineProvider theme={theme}>
            <PreloaderWrapper>
                <NavigationBar />
                <RouterProvider router={router} />
            </PreloaderWrapper>
        </MantineProvider>
    )
}

export default App
