/**
 * RevealItem.js
 * 
 * This class animates a DOM element into view using GSAP and ScrollTrigger.
 * When the element scrolls into the viewport, it fades in and moves upward.
 * 
 * Dependencies:
 * - GSAP (GreenSock Animation Platform)
 * - GSAP ScrollTrigger plugin
 * 
 * Usage:
 * 
 * import RevealItem from './RevealItem';
 * 
 * const element = document.querySelector('.reveal');
 * new RevealItem({ element });
 * 
 * Features:
 * - Uses ScrollTrigger to animate the element when it enters the viewport.
 * - Element fades in from opacity 0 and moves up 50px.
 * - Reverses the animation when scrolled out of view.
 * - Debug markers enabled (set `markers: false` for production).
 * 
 * Constructor Parameters:
 * @param {Object} payload - Object containing configuration options.
 * @param {HTMLElement} payload.element - The target DOM element to animate.
 */

import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
gsap.registerPlugin(ScrollTrigger);

class RevealItem{
    constructor(payload){
        var { element } = payload;
        this.DOM = {
            element: element,
        };
        this.init();
    }
    init(){

        gsap.from(this.DOM.element, {
            scrollTrigger: {
                trigger: this.DOM.element,
                start: "top 80%",
                toggleActions: "play none none reverse",
                markers: true, // Set to true for debugging
            },
            opacity: 0,
            y:50,
            duration: 1,
            ease: "power2.out",
        });
    }
}
export default RevealItem;


