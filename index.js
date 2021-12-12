import {menuOpen} from "./src/JS/Menu/menu-Open.js";
import {menuClose} from "./src/JS/Menu/menu-Close.js";
import {modal} from "./src/JS/Modal/modal.js";
import {observerSidebar} from "./src/JS/Observers/observer-Sidebar.js";
import {changeLanguage} from "./src/JS/Languages/changeLanguage.js";
import {changeLanguageAccessibility} from "./src/JS/Languages/changeLanguageAccessibility.js";

window.addEventListener('DOMContentLoaded', () => {

    observerSidebar()
    menuOpen()
    menuClose()
    modal()
    changeLanguage()
    changeLanguageAccessibility()

})