import {ReactLenis} from '@studio-freight/react-lenis'

export default function SmoothScrollWrapper(props: any) {

    const {children} = props;

    return (
        <ReactLenis root options={{
            syncTouch: true,
            lerp: 0.04,
            wheelMultiplier: 0.7,
            touchMultiplier: 0.4,
        }}>
            {children}
        </ReactLenis>
    )
}