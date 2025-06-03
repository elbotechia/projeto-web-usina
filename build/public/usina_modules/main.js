import { ColetivoPage } from "./coletivoPage.js";

console.log("main.js loaded");

const data2Inject1 ={
  targetId: "app",
  template: ColetivoPage
}

const renderApp = (data2Inject) => {
    const { targetId, template } = data2Inject;
    const targetElement = document.getElementById(targetId);
    
    if (targetElement) {
        targetElement.innerHTML = template;
    } else {
        console.error(`Target element with ID ${targetId} not found.`);
    }
}

renderApp(data2Inject1);