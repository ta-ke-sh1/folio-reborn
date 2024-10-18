import {Container, Stack} from "@mantine/core";
import {useEffect, useRef} from "react";
import {handlePointerMove, ImageTrail} from "../../animations/imageTrails/imageTrail.tsx";
import {useLanguageState} from "../../hooks/useLanguage.ts";

export default function PlaygroundLayout() {
    const {languageData} = useLanguageState();

    let containerRef = useRef<any>();

    let imageTrailAnimation = useRef<ImageTrail | undefined>(undefined);

    useEffect(() => {
        containerRef.current.addEventListener('mouseover', () => {
            window.addEventListener('touchmove', handlePointerMove);
            window.addEventListener('mousemove', handlePointerMove)
            if (imageTrailAnimation.current === undefined) {
                imageTrailAnimation.current = ImageTrail.getInstance(document.querySelector('.contents'));
            }
        })
        containerRef.current.addEventListener('mouseleave', () => {
            window.removeEventListener('mousemove', handlePointerMove)
            window.removeEventListener('touchmove', handlePointerMove);
        })
    }, [])

    const font_style = {
        lineHeight: '12px',
        fontFamily: "aptos",
    }

    return (
        <>
            <Container style={{height: '90dvh', position: 'relative'}} className={"hover-container"} ref={containerRef}
                       fluid>
                <Stack align={"center"} style={{
                    position: 'absolute',
                    left: '50%',
                    top: '50%',
                    transform: 'translate(-50%, -50%)'
                }}>
                    <Stack className={"shuffle-container"} style={font_style}>
                        {languageData.playground.paragraph.r1}
                    </Stack>
                    <Stack className={"shuffle-container"} style={font_style}>
                        {languageData.playground.paragraph.r2}
                    </Stack>
                    <Stack className={"shuffle-container"} style={font_style}>
                        {languageData.playground.paragraph.r3}
                    </Stack>
                </Stack>
            </Container>
            <Container style={{height: '0dvh'}}>
                <div className="contents">
                    <div className="content__img">
                        <div className="content__img-inner" style={{backgroundImage: "url('img/21.jpg')"}}></div>
                    </div>
                    <div className="content__img">
                        <div className="content__img-inner" style={{backgroundImage: "url('/img/22.jpg')"}}></div>
                    </div>
                    <div className="content__img">
                        <div className="content__img-inner" style={{backgroundImage: "url('/img/23.jpg')"}}></div>
                    </div>
                    <div className="content__img">
                        <div className="content__img-inner" style={{backgroundImage: "url('/img/24.jpg')"}}></div>
                    </div>
                    <div className="content__img">
                        <div className="content__img-inner" style={{backgroundImage: "url('/img/25.jpg')"}}></div>
                    </div>
                    <div className="content__img">
                        <div className="content__img-inner" style={{backgroundImage: "url('/img/26.jpg')"}}></div>
                    </div>
                    <div className="content__img">
                        <div className="content__img-inner" style={{backgroundImage: "url('/img/27.jpg')"}}></div>
                    </div>
                    <div className="content__img">
                        <div className="content__img-inner" style={{backgroundImage: "url('/img/28.jpg')"}}></div>
                    </div>
                    <div className="content__img">
                        <div className="content__img-inner" style={{backgroundImage: "url('/img/29.jpg')"}}></div>
                    </div>
                    <div className="content__img">
                        <div className="content__img-inner" style={{backgroundImage: "url('/img/30.jpg')"}}></div>
                    </div>
                </div>
            </Container>
        </>
    )
}