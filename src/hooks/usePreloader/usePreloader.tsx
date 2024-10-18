import {create} from "zustand/react";
import gsap from "gsap"
import {Group} from "@mantine/core";

type LoadingState = {
    loading: boolean,
    enterAnimation: any,
    exitAnination: any,
}

type LoadingActions = {
    setLoading: (loading: any) => void;
}

const delay = 0.3;
const ease = "power4.out"
const duration = 0.8

export const usePreloader = create<LoadingState & LoadingActions>((set) => ({
    loading: true,
    enterAnimation: () => {
        let card_1  = document.getElementById("card_1")
        let card_2 = document.getElementById("card_2")
        let card_3 = document.getElementById("card_3")
        let card_4 = document.getElementById("card_4")

        gsap.timeline().to(card_1, {
            y: '-1000px',
            duration: duration,
            delay: delay,
            opacity: 1,
            ease: ease
        }).to(card_2, {
            y: '-1000px',
            duration: duration,
            delay: -0.5,
            opacity: 1,
            ease: ease
        }).to(card_3, {
            y: '-1000px',
            duration: duration,
            delay: -0.6,
            opacity: 1,
            ease: ease
        }).to(card_4, {
            y: '-1000px',
            duration: duration,
            delay: -0.7,
            opacity: 1,
            ease: ease
        })
    },

    exitAnination: () => {
        let preloader = document.getElementById("preloader")
        gsap.timeline().to(preloader, {
            transform: 'translateY(0%)',
            duration: 0.5,
            opacity: 0,
            delay: delay,
            ease: 'power1'
        })
    },
    setLoading: (loading: boolean) => set((_) => ({loading: loading})),
}))

export function PreloaderWrapper(props: any) {

    return (
        <>
            <Group className={"preloader-container"} gap={0}>
                <div className={"preloader-card"} id={"card_1"}></div>
                <div className={"preloader-card"} id={"card_2"}></div>
                <div className={"preloader-card"} id={"card_3"}></div>
                <div className={"preloader-card"} id={"card_4"}></div>
            </Group>
            {props.children}
        </>
    )
}