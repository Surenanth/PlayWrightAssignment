import { uiComponent } from "./Suren_uiComponent";

class Button implements uiComponent{
    render(): void {
       console.log("I'm in Button class render metion");
       
    }
    handleEvent(): void {
        console.log("I'm in Button class handleEvent metion");
    }

}


class TextField implements uiComponent{
    render(): void {
       console.log("I'm in TextField class render metion");
       
    }
    handleEvent(): void {
        console.log("I'm in TextField class handleEvent metion");
    }

}


class Checkbox implements uiComponent{
    render(): void {
       console.log("I'm in Checkbox class render metion");
       
    }
    handleEvent(): void {
        console.log("I'm in Checkbox class handleEvent metion");
    }

}


const button = new Button();
button.render();
button.handleEvent();


const tf = new TextField();
tf.render();
tf.handleEvent();


const cb = new Checkbox();
cb.render();
cb.handleEvent();