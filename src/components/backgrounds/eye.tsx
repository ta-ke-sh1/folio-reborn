import { useEffect } from "react";
import $ from "jquery";
import gsap from "gsap";

export default function EyeBackground() {
    const colors = [
        "#3B6790",
        "#6A80B9",
        "#E82561",
        "#B82132",
        "#D2665A",
        "#F2B28C",
        "#EFB036",
        "#BE3144",
    ];

    useEffect(() => {
        let index = 0;
        function animateColor() {
            gsap.to($("#eye-circle"), {
                duration: 3,
                fill: colors[index],
                onComplete: () => {
                    index = (index + 1) % colors.length;
                    animateColor();
                },
            });
        }
        animateColor();
    }, []);

    useEffect(() => {
        let area = document.getElementById("move-area");
        if (area) {
            area.addEventListener("mousemove", eyeMoveEvent);
        }

        return () => {
            area!.removeEventListener("mousemove", eyeMoveEvent);
        };
    }, []);

    function eyeMoveEvent(event: any) {
        var eye = $("#eye-circle");
        var eye_2 = $("#eye-pupil");
        const x = -(window.innerWidth / 2 - event.pageX) / 9;
        const y = -(window.innerHeight / 2 - event.pageY) / 9;

        const x2 = (x * 3) / 4;
        const y2 = (y * 3) / 4;
        gsap.to(eye, {
            transform: `translate(${x}px, ${y}px)`,
            duration: 1,
            ease: "power",
        });

        gsap.to(eye_2, {
            transform: `translate(${x2}px, ${y2}px)`,
            duration: 1,
            ease: "power",
        });
    }

    return (
        <div
            id="move-area"
            className="move-area"
            style={{
                width: "100dvw",
                height: "100dvh",
                position: "absolute",
                left: 0,
                top: 0,
            }}>
            <div
                style={{
                    position: "absolute",
                    top: "70%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                    width: "70%",
                    height: "70%",
                }}>
                <div className="eye-outer">
                    <svg viewBox="0 0 617.24 351">
                        <path
                            className="eye-outline"
                            d="M308.62,2A354.69,354.69,0,0,1,487.35,50,361.88,361.88,0,0,1,614.9,175.5,361.88,361.88,0,0,1,487.35,301a355,355,0,0,1-84.69,35.48,356.94,356.94,0,0,1-94,12.56,357,357,0,0,1-94.05-12.56A354.73,354.73,0,0,1,129.89,301,362,362,0,0,1,2.33,175.5,362,362,0,0,1,129.89,50,354.61,354.61,0,0,1,308.62,2m0-2C177.71,0,63.11,70.32,0,175.5,63.11,280.68,177.71,351,308.62,351s245.51-70.32,308.62-175.5C554.13,70.32,439.53,0,308.62,0Z"
                        />
                        <path
                            id="eye-pupil"
                            className="eye-circle-2"
                            d="M308.62,64.67a110.84,110.84,0,1,1-78.37,32.46,110.08,110.08,0,0,1,78.37-32.46m0-2A112.83,112.83,0,1,0,421.45,175.5,112.83,112.83,0,0,0,308.62,62.67Z"
                        />
                        <circle
                            id="eye-circle"
                            className="eye-circle"
                            cx="308.62"
                            cy="175.5"
                            r="42.58"
                        />
                    </svg>
                </div>
            </div>
        </div>
    );
}
