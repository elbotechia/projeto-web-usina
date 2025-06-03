import { renderTemplates } from "./templates/templates.js";
import { setFooter } from "./templates/partials/Footer.js";
export const main = () => {
    renderTemplates();
    setFooter();
}

main();