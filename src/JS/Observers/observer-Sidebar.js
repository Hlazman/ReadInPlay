import {menuArrowNavigation} from "../Menu/menu-ArrowNavigation.js";

const observerSidebar = () => {
    const observer = new MutationObserver(() => {
        menuArrowNavigation()
    })
    observer.observe(document.querySelector('.sidebar'),
        {attributes: true, childList: false, subtree: false});
}

export {observerSidebar}