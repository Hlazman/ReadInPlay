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
}
export {modal}