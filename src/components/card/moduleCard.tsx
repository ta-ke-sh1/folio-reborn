import {
    Card,
    MantineShadow,
    Stack,
    useMantineColorScheme,
} from "@mantine/core";

const strokeWidth = 1;

const topLeftCorner = {
    top: 0,
    left: 0,
    transform: "rotate(0deg)",
    strokeWidth: strokeWidth,
};
const topRightCorner = {
    top: 0,
    right: 0,
    transform: "rotate(90deg)",
    strokeWidth: strokeWidth,
};
const bottomLeftCorner = {
    bottom: 0,
    left: 0,
    transform: "rotate(270deg)",
    strokeWidth: strokeWidth,
};
const bottomRightCorner = {
    bottom: 0,
    right: 0,
    transform: "rotate(180deg)",
    strokeWidth: strokeWidth,
};

interface ModuleCardProps {
    children: JSX.Element[] | JSX.Element;
    style?: any;
    shadow?: MantineShadow | undefined;
}

function Corner({ style, className }: { style?: any; className: string }) {
    const { colorScheme } = useMantineColorScheme();

    return (
        <svg
            className={className}
            style={{ ...style }}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 8.5 8.5">
            <g id="Layer_2" data-name="Layer 2">
                <g id="Layer_1-2" data-name="Layer 1">
                    <polyline
                        stroke={colorScheme === "light" ? "black" : "white"}
                        className="cls-1"
                        points="0.5 8.5 0.5 0.5 2.53 0.5 8.5 0.5"
                    />
                </g>
            </g>
        </svg>
    );
}

export default function ModuleCard({
    shadow,
    style,
    children,
}: ModuleCardProps) {
    return (
        <Card
            shadow={shadow}
            style={{ ...style }}
            className="module-box"
            m={0}
            p={0}
            radius={0}>
            <Corner
                className="top-left"
                style={{
                    position: "absolute",
                    height: "8px",
                    ...topLeftCorner,
                }}
            />
            <Corner
                className="top-right"
                style={{
                    position: "absolute",
                    height: "8px",
                    ...topRightCorner,
                }}
            />
            <Corner
                className="bottom-left"
                style={{
                    position: "absolute",
                    height: "8px",
                    ...bottomLeftCorner,
                }}
            />
            <Corner
                className="bottom-right"
                style={{
                    position: "absolute",
                    height: "8px",
                    ...bottomRightCorner,
                }}
            />
            <Stack gap={0} style={{ position: "relative" }}>
                {children}
            </Stack>
        </Card>
    );
}
