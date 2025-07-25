import Collapsify from "@terrahq/collapsify";
import RevealItem from "./modules/RevealItem";
class Main{
    constructor(){
        this.DOM = {
            revealItems: document.querySelectorAll(".js--reveal-item"),
            playBtn: document.querySelector(".js--play"),
            pauseBtn: document.querySelector(".js--pause"),
        }
        this.instances = []
        this.init();
        this.events()
    }

    init(){

        this.instances['collapsify'] = [];
        this.instances['collapsify'][0]= new Collapsify({});


        this.instances['RevealInstances'] = [];
        this.DOM.revealItems.forEach((item,index) => {
            this.instances['RevealInstances'][index](new RevealItem({ element: item }));
        });

    }

    events(){
        this.DOM.playBtn.addEventListener("click", () => {
            console.log("Play button clicked");
        });
        this.DOM.pauseBtn.addEventListener("click", () => {
            console.log("Pause button clicked");
        });
    }
}
export default Main;