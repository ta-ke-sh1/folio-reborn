import gsap from 'gsap';
import {useGSAP} from '@gsap/react';
import {useEffect, useRef} from "react";
import {ScrollTrigger} from "gsap/ScrollTrigger";
import {usePreloader} from "../../hooks/usePreloader/usePreloader.tsx";

export default function LegendLayout() {
    gsap.registerPlugin(ScrollTrigger)
    gsap.registerPlugin(useGSAP);

    window.scrollTo(0, 0)

    const titleRef = useRef<HTMLDivElement>(null);

    let videoRef = useRef<any>(null);

    const containerRef = useRef<HTMLDivElement>(null);

    const { enterAnimation } = usePreloader();

    useEffect(() => {
        setTimeout(() => {
            if(enterAnimation){
                enterAnimation()
            }
        }, 1000)
    }, [])

    useGSAP(animateLegend, {
        scope: containerRef
    })

    function animateLegend() {
        const duration = videoRef.current.duration || 9; // Fallback to 1 to avoid division by zero
        const updateFrame = (e: any) => {
            const scrollProgress = e.progress;
            videoRef.current.currentTime = scrollProgress * duration / 3;
        }

        if (titleRef.current && containerRef.current) {
            gsap.timeline({
                defaults: {
                    ease: 'none'
                },
                scrollTrigger: {
                    trigger: titleRef.current,
                    start: 'bottom bottom',
                    end: 'top -20%',
                    scrub: true,
                    onUpdate: updateFrame
                },
            }).to(titleRef.current, {
                xPercent: '-20',
                ease: 'none'
            }).to(containerRef.current, {
                yPercent: 35,
                scale: 0.95,
                startAt: {filter: 'brightness(100%)', opacity: 1},
                filter: 'brightness(30%)',
                opacity: 0,
                borderRadius: '40px'
            }, 0)
        }
    }

    return (
        <>
            <div ref={containerRef} className={"legend"} id={"legend-container"}>
                <p ref={titleRef} className={"legend-title"}>
                    this is a mock text this is a mock text
                </p>
                <video style={{objectFit: 'cover'}} className={"video-background"} ref={videoRef} preload="metadata" src={"/output.mp4"} />
            </div>
        </>
    )
}
