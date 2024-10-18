import {Container, Text} from "@mantine/core";

export default function StoryLayout() {
    return (
        <Container fluid style={{ position: 'relative', height: '105dvh' }}>
            <div style={{
                position: 'absolute',
                left: 0,
                top: '50%',
                transform: 'translateY(-50%)',
                mixBlendMode: 'difference'
            }}>
                <Text pl={"md"} style={{
                    fontSize: '4.5vmax',
                    width: '70%',
                    letterSpacing: '-0.5px',
                    lineHeight: '4.2vmax',
                    fontFamily: "aptos, sans-serif",
                }}>
                    I was truly impressed by their level of flexibility, professionalism, and dedication when it came to tackling the workload. Their commitment to the task at hand, coupled with their serious approach, truly stood out to me.
                </Text>
            </div>
            <div style={{
                width: '100%',
                height: '100%',
                position: 'absolute',
                left: 0,
                top: 0,
                zIndex: -1,
                backgroundImage: "url('/img/story.jpg')",
                backgroundSize: 'cover'
            }}>
            </div>
        </Container>
    )
}