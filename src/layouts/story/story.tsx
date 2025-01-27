import { Container } from "@mantine/core";

interface StoryLayoutProps {
    height: string | number;
}

export default function StoryLayout({ height }: StoryLayoutProps) {
    return <Container fluid style={{ position: "relative" }}></Container>;
}
