import {TextSplitter} from "../utils/text-splitter.ts";
import gsap from 'gsap';

const lettersAndSymbols = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', '!', '@', '#', '$', '%', '^', '&', '*', '-', '_', '+', '=', ';', ':', '<', '>', ','];

// Initialize shuffler animation
// return array of listener for clean up
export function initShuffleAnimationListeners(container_name: string, selector_class_name: string, debounce_rate?: number){
    let listeners: any[] = [];
    let containers = document.querySelectorAll(container_name);

    containers.forEach((item) => {
        const cols = Array.from(item.querySelectorAll(selector_class_name));
        const animators = cols.map((col) => new TextShuffler(col, debounce_rate));
        let listener = () => {
            animators.forEach(animator => animator.animate());
        };
        item.addEventListener('mouseenter', listener, false);
        listeners.push(listener)
    });
    return listeners;
}

export function shuffleTextElement(element: any, debounce_rate?: number){
    const animator = new TextShuffler(element, debounce_rate)
    animator.animate()
}

export class TextShuffler {
    private readonly textElement: HTMLElement | Element;
    private splitter: TextSplitter;
    private originalChars: any;
    private readonly debounce_rate?: number;

    constructor(textElement: HTMLElement | Element, debounce_rate?: number) {
        // Check if the provided element is valid.
        if (!textElement || !(textElement instanceof HTMLElement)) {
            console.log("not valid element")
            throw new Error('Invalid text element provided.');
        }

        this.textElement = textElement;
        this.splitter = new TextSplitter(this.textElement, {
            splitTypeTypes: 'words, chars',
        });

        this.debounce_rate = debounce_rate;
        this.splitText();
    }

    splitText() {
        let chars = this.splitter.getChars();
        console.log(chars)
        if (chars) {
            this.originalChars = chars.map(char => char.innerHTML);
        }
    }

    animate() {
        this.reset();
        const chars = this.splitter.getChars();
        if (chars !== null) {
            chars.forEach((char, position) => {
                let initialHTML = char.innerHTML;
                let repeatCount = 0;
                gsap.fromTo(char, {
                        opacity: 0
                    },
                    {
                        duration: 0.03,
                        onStart: () => {
                            gsap.set(char, {'--opa': 1});
                        },
                        onComplete: () => {
                            gsap.set(char, {innerHTML: initialHTML, delay: 0.03})
                        },
                        repeat: 3,
                        onRepeat: () => {
                            repeatCount++;
                            if (repeatCount === 1) {
                                gsap.set(char, {'--opa': 0});
                            }
                        },
                        repeatRefresh: true,
                        repeatDelay: 0.02,
                        delay: (position + 1) * (this.debounce_rate ?? 0.03),
                        innerHTML: () => lettersAndSymbols[Math.floor(Math.random() * lettersAndSymbols.length)],
                        opacity: 1
                    });
            });
        }
    }

    reset() {
        const chars = this.splitter.getChars();
        if (chars !== null) {
            chars.forEach((char, index) => {
                gsap.killTweensOf(char);
                char.innerHTML = this.originalChars[index];
            });
        }
    }
}