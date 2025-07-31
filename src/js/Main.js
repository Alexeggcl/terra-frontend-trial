import Collapsify from "@terrahq/collapsify";
import RevealItem from "./modules/RevealItem";
class Main{
    constructor({lotties}){
        this.DOM = {
            revealItems: document.querySelectorAll(".js--reveal-item"),
            playBtn: document.querySelector(".js--play"),
            pauseBtn: document.querySelector(".js--pause"),
            lotties: lotties
        }
        this.instances = []
        this.init();
        this.events();
    }

    init(){
        this.instances['collapsify'] = [];
        this.instances['collapsify'][0]= new Collapsify({});

        this.instances['RevealInstances'] = [];
        this.DOM.revealItems.forEach((item, index) => {
            this.instances['RevealInstances'][index] = new RevealItem({ element: item });
        });
    }

    events(){
        if (this.DOM.playBtn) {
            this.DOM.playBtn.addEventListener("click", () => {
                const lottieName = this.DOM.playBtn.dataset.lottie;
                if (window.WL && window.WL[lottieName]) {
                    window.WL[lottieName].play();
                    this.DOM.playBtn.setAttribute('aria-pressed', 'true');
                    this.DOM.pauseBtn.setAttribute('aria-pressed', 'false');
                }
            });
        }
        if (this.DOM.pauseBtn) {
            this.DOM.pauseBtn.addEventListener("click", () => {
                const lottieName = this.DOM.pauseBtn.dataset.lottie;
                if (window.WL && window.WL[lottieName]) {
                    window.WL[lottieName].pause();
                    this.DOM.pauseBtn.setAttribute('aria-pressed', 'true');
                    this.DOM.playBtn.setAttribute('aria-pressed', 'false');
                }
            });
        }
    }
}
export default Main;