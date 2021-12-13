import {menuOpen} from "./src/JS/Menu/menu-Open.js";
import {menuClose} from "./src/JS/Menu/menu-Close.js";
import {modal} from "./src/JS/Modal/modal.js";
import {observerSidebar} from "./src/JS/Observers/observer-Sidebar.js";
import {changeLanguage} from "./src/JS/Changes/changeLanguage.js";
import {changeLanguageAccessibility} from "./src/JS/Changes/changeLanguageAccessibility.js";
import {changeTheme} from "./src/JS/Changes/changeTheme.js";

window.addEventListener('DOMContentLoaded', () => {

    observerSidebar()
    menuOpen()
    menuClose()
    modal()
    changeLanguage()
    changeLanguageAccessibility()
    changeTheme()

})