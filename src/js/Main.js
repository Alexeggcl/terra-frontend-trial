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
        this.events()
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
                window.WL[lottieName].play();
            });
        }
        if (this.DOM.pauseBtn) {
            this.DOM.pauseBtn.addEventListener("click", () => {
                const lottieName = this.DOM.playBtn.dataset.lottie;
                window.WL[lottieName].pause();
            });
        }
    }
}
export default Main;