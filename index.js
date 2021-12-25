import {menuOpen} from "./src/JS/Menu/menu-Open.js";
import {menuClose} from "./src/JS/Menu/menu-Close.js";
import {modal} from "./src/JS/Modal/modal.js";
import {observerSidebar} from "./src/JS/Observers/observer-Sidebar.js";
import {changeLanguage} from "./src/JS/Settings/changeLanguage.js";
import {changeLanguageAccessibility} from "./src/JS/Settings/changeLanguageAccessibility.js";
import {changeTheme} from "./src/JS/Settings/changeTheme.js";
import {progressBar} from "./src/JS/Visual-Components/progressBar.js";
import {showOffScrollbar} from "./src/JS/Settings/show-off-Scrollbar.js";
import {changeFontSize} from "./src/JS/Settings/changeFontSize.js";

window.addEventListener('DOMContentLoaded', () => {

    observerSidebar()
    progressBar()
    menuOpen()
    menuClose()
    modal()
    changeLanguage()
    changeLanguageAccessibility()
    changeTheme()
    changeFontSize()
    showOffScrollbar()
})