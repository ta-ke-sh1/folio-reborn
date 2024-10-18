import {getMouseDistance, getPointerPos, lerp} from '../utils/utils.js';
import {Image} from './image.ts';
import gsap from "gsap";

let mousePos: any, lastMousePos: any, cacheMousePos: any;
mousePos = {x: 0, y: 0};
cacheMousePos = {...mousePos};
lastMousePos = {...mousePos};

export const handlePointerMove = (ev: any) => {
    // If it's a touch event, we'll use the first touch point
    if (ev.touches) {
        mousePos = getPointerPos(ev.touches[0]);
    } else {
        // If it's a mouse event, proceed as usual
        mousePos = getPointerPos(ev);
    }
};

export class ImageTrail {
    // Class properties initialization
    DOM: any = {el: null}; // Object to hold DOM elements
    images: any[] = []; // Array to store Image objects
    imagesTotal = 0; // Variable to store total number of images
    imgPosition = 0; // Variable to store the position of the upcoming image
    zIndexVal = 1; // z-index value for the upcoming image
    activeImagesCount = 0; // Counter for active images
    isIdle = true; // Flag to check if all images are inactive
    threshold = 80;

    static instance: ImageTrail;

    static getInstance(DOM_el: any) {
        if (ImageTrail.instance === undefined) {
            ImageTrail.instance = new ImageTrail(DOM_el)
        }

        return ImageTrail.instance;
    }

    /**
     * Constructor for the ImageTrail class.
     * Initializes the instance, sets up the DOM elements, creates Image objects for each image element, and starts the rendering loop.
     * @param {HTMLElement} DOM_el - The parent DOM element containing all image elements.
     */
    private constructor(DOM_el: any) {
        // Store the reference to the parent DOM element.
        this.DOM.el = DOM_el;

        // Create and store Image objects for each image element found within the parent DOM element.
        this.images = [...this.DOM.el.querySelectorAll('.content__img')].map(img => new Image(img));

        // Store the total number of images.
        this.imagesTotal = this.images.length;

        const onPointerMoveEv = () => {
            cacheMousePos = {...mousePos};
            // Initiate the rendering loop.
            requestAnimationFrame(() => this.render());

            // Remove this mousemove event listener after it runs once to avoid reinitialization.
            window.removeEventListener('mousemove', onPointerMoveEv);
            window.removeEventListener('touchmove', onPointerMoveEv);
        };

        window.addEventListener('mouseover', onPointerMoveEv);
        window.addEventListener('touchmove', onPointerMoveEv);
    }

    /**
     * The `render` function is the main rendering loop for the `ImageTrail` class, updating images based on mouse movement.
     * It calculates the distance between the current and the last mouse position, then decides whether to show the next image.
     * @returns {void}
     */
    render() {
        // Calculate distance between current mouse position and last recorded mouse position.
        let distance = getMouseDistance(mousePos, lastMousePos);

        // Smoothly interpolate between cached mouse position and current mouse position for smoother visual effects.
        cacheMousePos.x = lerp(cacheMousePos.x || mousePos.x, mousePos.x, 0.3);
        cacheMousePos.y = lerp(cacheMousePos.y || mousePos.y, mousePos.y, 0.3);

        // If the calculated distance is greater than the defined threshold, show the next image and update lastMousePos.
        if (distance > this.threshold) {
            this.showNextImage();
            lastMousePos = mousePos;
        }

        // If all images are inactive (isIdle is true) and zIndexVal is not 1, reset zIndexVal to avoid endless incrementation.
        if (this.isIdle && this.zIndexVal !== 1) {
            this.zIndexVal = 1;
        }

        // Request the next animation frame, creating a recursive loop for continuous rendering.
        requestAnimationFrame(() => this.render());
    }

    /**
     * The `showNextImage` function is responsible for displaying, animating, and managing the next image in the sequence.
     * It increments the zIndexVal, selects the next image, stops ongoing animations, and defines a series of GSAP animations.
     * @returns {void}
     */
    showNextImage() {
        // Increment zIndexVal for next image.
        ++this.zIndexVal;

        // Select the next image in the sequence, or revert to the first image if at the end of the sequence.
        this.imgPosition = this.imgPosition < this.imagesTotal - 1 ? this.imgPosition + 1 : 0;

        // Retrieve the Image object for the selected position.
        const img = this.images[this.imgPosition];

        // Stop any ongoing GSAP animations on the target image element to prepare for new animations.
        gsap.killTweensOf(img.DOM.el);

        img.timeline = gsap.timeline({
            onStart: () => this.onImageActivated(),
            onComplete: () => this.onImageDeactivated()
        })
            .fromTo(img.DOM.el, {
                opacity: 1,
                scale: 0,
                zIndex: this.zIndexVal,
                x: cacheMousePos.x - img.rect.width / 2,
                y: cacheMousePos.y - img.rect.height / 2
            }, {
                duration: 0.4,
                ease: 'power1',
                scale: 1,
                x: mousePos.x - img.rect.width / 2,
                y: mousePos.y - img.rect.height / 2
            }, 0)
            /* Inner image */
            .fromTo(img.DOM.inner, {
                scale: 2.8,
                filter: 'brightness(250%)'
            }, {
                duration: 0.4,
                ease: 'power1',
                scale: 1,
                filter: 'brightness(100%)'
            }, 0)
            /* Inner image */
            // then make it disappear
            .to(img.DOM.el, {
                duration: 0.4,
                ease: 'power2',
                opacity: 0,
                scale: 0.2
            }, 0.45)
    }

    /**
     * onImageActivated function is called when an image's activation (display) animation begins.
     * It increments the activeImagesCount and sets isIdle flag to false.
     * @returns {void}
     */
    onImageActivated = () => {
        // Increment the counter for active images.
        this.activeImagesCount++;

        // Set the isIdle flag to false as there's at least one active image.
        this.isIdle = false;
    }

    /**
     * onImageDeactivated function is called when an image's deactivation (disappearance) animation ends.
     * It decrements the activeImagesCount and sets isIdle flag to true if no images are active.
     * @returns {void}
     */
    onImageDeactivated = () => {
        // Decrement the counter for active images.
        this.activeImagesCount--;

        // If there are no active images, set the isIdle flag to true.
        if (this.activeImagesCount === 0) {
            this.isIdle = true;
        }
    }
}