import ContactLayout from "./contact/contact.tsx";
import SmoothScrollWrapper from "../wrapper/smoothScroll.tsx";
import LegendLayout from "./legend/legend.tsx";
import GalleriaLayout from "./galleria/galleria.tsx";
import PlaygroundLayout from "./playground/playground.tsx";
import StoryLayout from "./story/story.tsx";
import ProjectsLayout from "./projects/projects.tsx";

export default function HomeLayout() {
    return (
        <>
            <SmoothScrollWrapper>
                <LegendLayout/>
                <GalleriaLayout/>
                <StoryLayout />
                <PlaygroundLayout />
                <ProjectsLayout />
                <ContactLayout/>
            </SmoothScrollWrapper>
        </>

    )
}