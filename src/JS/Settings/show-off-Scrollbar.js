import {toast} from "../Visual-Components/toast.js";

const showOffScrollbar = () => {
    const body = document.querySelector('body')
    const scrollbarON = document.querySelector('#scrollbarON')
    const scrollbarOFF = document.querySelector('#scrollbarOFF')

    scrollbarOFF.addEventListener('click', () => {
        body.classList.add('scrollBarNone')
        toast('Scrollbar OFF',
            'Смуга прокрутки вимкнена',
            'Полоса прокрутки выключена')
    })

    scrollbarON.addEventListener('click', () => {
        body.classList.remove('scrollBarNone')
        toast('Scrollbar ON',
            'Смуга прокрутки увімкнена',
            'Полоса прокрутки включена')
    })
}
export {showOffScrollbar}