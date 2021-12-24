const showOffScrollbar = () => {
    const body = document.querySelector('body')
    const scrollbarON = document.querySelector('#scrollbarON')
    const scrollbarOFF = document.querySelector('#scrollbarOFF')

    scrollbarOFF.addEventListener('click', () => {
        body.classList.add('scrollBarNone')
    })

    scrollbarON.addEventListener('click', () => {
        body.classList.remove('scrollBarNone')
    })
}

export {showOffScrollbar}