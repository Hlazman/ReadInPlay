import {closeModal, closeModalESC, closeModalOutside, openModal} from "./modal-Open-Close.js";

const modal = () => {
    // ********** CHARACTER **********
    const characterBtn = document.querySelector('#character')
    const characterSection = document.querySelector('#characterSection')
    const characterModalDialog = document.querySelector('#characterModalDialog')
    const characterModalCloseBtn = document.querySelector('#characterModalCloseBtn')

    openModal(characterBtn, characterSection)
    closeModal(characterModalCloseBtn, characterSection)
    closeModalOutside(characterModalDialog, characterSection)
    closeModalESC(characterSection)

    // ********** MAP **********
    const mapBtn = document.querySelector('#map')
    const mapSection = document.querySelector('#mapSection')
    const mapModalDialog = document.querySelector('#mapModalDialog')
    const mapModalCloseBtn = document.querySelector('#mapModalCloseBtn')

    openModal(mapBtn, mapSection)
    closeModal(mapModalCloseBtn, mapSection)
    closeModalOutside(mapModalDialog, mapSection)
    closeModalESC(mapSection)

    // ********** INVENTORY **********
    const inventoryBtn = document.querySelector('#inventory')
    const inventorySection = document.querySelector('#inventorySection')
    const inventoryModalDialog = document.querySelector('#inventoryModalDialog')
    const inventoryModalCloseBtn = document.querySelector('#inventoryModalCloseBtn')

    openModal(inventoryBtn, inventorySection)
    closeModal(inventoryModalCloseBtn, inventorySection)
    closeModalOutside(inventoryModalDialog, inventorySection)
    closeModalESC(inventorySection)

    // ********** ACTIVITY LOG **********
    const logBtn = document.querySelector('#log')
    const logSection = document.querySelector('#logSection')
    const logModalDialog = document.querySelector('#logModalDialog')
    const logModalCloseBtn = document.querySelector('#logModalCloseBtn')

    openModal(logBtn, logSection)
    closeModal(logModalCloseBtn, logSection)
    closeModalOutside(logModalDialog, logSection)
    closeModalESC(logSection)

    // ********** BOOKMARKS **********
    const bookmarksBtn = document.querySelector('#bookmark')
    const bookmarksSection = document.querySelector('#bookmarksSection')
    const bookmarksModalDialog = document.querySelector('#bookmarksModalDialog')
    const bookmarksModalCloseBtn = document.querySelector('#bookmarksModalCloseBtn')

    openModal(bookmarksBtn, bookmarksSection)
    closeModal(bookmarksModalCloseBtn, bookmarksSection)
    closeModalOutside(bookmarksModalDialog, bookmarksSection)
    closeModalESC(bookmarksSection)

    // ********** TOOLS **********
    const toolsBtn = document.querySelector('#tools')
    const toolsSection = document.querySelector('#toolsSection')
    const toolsModalDialog = document.querySelector('#toolsModalDialog')
    const toolsModalCloseBtn = document.querySelector('#toolsModalCloseBtn')

    openModal(toolsBtn, toolsSection)
    closeModal(toolsModalCloseBtn, toolsSection)
    closeModalOutside(toolsModalDialog, toolsSection)
    closeModalESC(toolsSection)

    // ********** INFORMATION **********
    const infoBtn = document.querySelector('#information')
    const infoSection = document.querySelector('#infoSection')
    const infoModalDialog = document.querySelector('#infoModalDialog')
    const infoModalCloseBtn = document.querySelector('#infoModalCloseBtn')

    openModal(infoBtn, infoSection)
    closeModal(infoModalCloseBtn, infoSection)
    closeModalOutside(infoModalDialog, infoSection)
    closeModalESC(infoSection)

    // ********** CONTACT **********
    const contactBtn = document.querySelector('#contact')
    const contactSection = document.querySelector('#contactSection')
    const contactModalDialog = document.querySelector('#contactModalDialog')
    const contactModalCloseBtn = document.querySelector('#contactModalCloseBtn')

    openModal(contactBtn, contactSection)
    closeModal(contactModalCloseBtn, contactSection)
    closeModalOutside(contactModalDialog, contactSection)
    closeModalESC(contactSection)
}
export {modal}