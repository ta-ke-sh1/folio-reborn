import { IconPlus } from "@tabler/icons-react";
import $ from "jquery";
import gsap from "gsap";
import { useEffect, useState } from "react";

export const LINK_CURSOR_CLASS = "link-cursor";

export default function Cursor() {
    const [cursorType, setCursorType] = useState(0);

    const cursors = [
        {
            description: "default",
            icon: <IconPlus />,
        },
        {
            description: "link",
            icon: (
                <div
                    style={{
                        transform: "translate(5px, 8px)",
                        fontSize: "20px",
                    }}>
                    👆
                </div>
            ),
        },
    ];

    useEffect(() => {
        window.addEventListener("mousemove", moveHandler);

        // Button cursor event handler
        $(`.${LINK_CURSOR_CLASS}`).on("mouseenter", () => {
            setCursorType(1);
        });

        $(`.${LINK_CURSOR_CLASS}`).on("mouseleave", () => {
            setCursorType(0);
        });

        return () => {
            window.removeEventListener("mousemove", moveHandler);
        };
    }, []);

    function moveHandler(event: any) {
        gsap.to($("#circle"), {
            left: event.clientX - 10,
            top: event.clientY - 10,
            duration: 0,
        });
    }

    return (
        <div
            id="circle"
            style={{
                position: "fixed",
                zIndex: 10000,
                pointerEvents: "none",
            }}>
            {cursors[cursorType].icon}
        </div>
    );
}

$(function () {
    var cursor = $("#circle");
    $(window)
        .on("mouseleave", () => {
            cursor.css({ opacity: "0" });
        })
        .on("mouseenter", () => {
            cursor.css({ opacity: "1" });
        });
});
