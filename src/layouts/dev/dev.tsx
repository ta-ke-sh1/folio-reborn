
import WindowCard from "../../components/card/windowCard.tsx";
import {useEffect} from "react";
import {usePreloader} from "../../hooks/usePreloader/usePreloader.tsx";
import GridTrialEffect from "../../components/grid-screen/grid.tsx";

export default function DevLayout(){

    const {enterAnimation} = usePreloader();

    const screen = {
        title: "Test",
        component: ""
    }

    useEffect(() => {
        enterAnimation()
    }, [])

    return (
        <div className={"legend"} id={"legend-container"}>
            <div style={{position: 'absolute', left: '50%', top: '50%', transform: 'translate(-50%, -50%)'}}>
                <WindowCard width={'60vw'} close={() => {}} title={screen.title}>
                    <GridTrialEffect />
                </WindowCard>
            </div>
        </div>
    )
}