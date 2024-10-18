// Import debounce utility function.
import {debounce} from './utils.ts';
import SplitType from 'split-type'

// Defines a class to split text into lines, words and characters for animation.
export class TextSplitter {
    private readonly textElement: HTMLElement;
    private readonly onResize: any;
    private splitText: SplitType;
    private previousContainerWidth: any;

    constructor(textElement: HTMLElement | Element, options: {
        resizeCallback?: any,
        splitTypeTypes: any
    }) {
        if (!textElement || !(textElement instanceof HTMLElement)) {
            throw new Error('Invalid text element provided.');
        }

        const {resizeCallback, splitTypeTypes} = options;

        this.textElement = textElement;

        this.onResize = typeof resizeCallback === 'function' ? resizeCallback : null;

        const splitOptions = splitTypeTypes ? {types: splitTypeTypes} : {};
        this.splitText = new SplitType(this.textElement, splitOptions);

        if (this.onResize) {
            this.previousContainerWidth = null;
            this.initResizeObserver();
        }
    }

    // Sets up ResizeObserver to re-split text on element resize.
    initResizeObserver() {
        let resizeObserver = new ResizeObserver(
            debounce((entries: any) => this.handleResize(entries), 100)
        );
        resizeObserver.observe(this.textElement); // Start observing the text element.
    }

    handleResize(entries: any) {
        const [{contentRect}] = entries;
        const width = Math.floor(contentRect.width);
        if (this.previousContainerWidth && this.previousContainerWidth !== width) {
            this.splitText.split({});
            this.onResize();
        }
        this.previousContainerWidth = width;
    }

    revert() {
        return this.splitText.revert();
    }

    getLines() {
        return this.splitText.lines;
    }

    getWords() {
        return this.splitText.words;
    }

    getChars() {
        return this.splitText.chars;
    }
}