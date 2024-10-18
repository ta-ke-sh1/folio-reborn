import {textShuffleLight} from "../animations/text/shuffle_light.ts";

function preventDefault(e: any){
    e.preventDefault();
}

export function disableScroll(){
    document.body.addEventListener('touchmove', preventDefault, false);
}
export function enableScroll(){
    document.body.removeEventListener('touchmove', preventDefault, false);
}

export function shuffleText(e: any, text: string) {
    let interval;
    textShuffleLight(e.target, text, interval, 50)
}