const changeFontSize = () => {

    const dataFontSize = document.querySelectorAll('[data-fontSize]');
    const plusSize = document.querySelector('#plusFont')
    const minusSize = document.querySelector('#minusFont')
    const resetSize = document.querySelector('#resetFont')
    let size = 18

    // ********** FUNCTION SET FONT SIZE **********
    const setFontSize = () => {
        dataFontSize.forEach((item) => {
            item.style.cssText = `font-size: ${size}px`
        })
    }
    setFontSize()

// ********** FUNCTION + FONT SIZE **********
    plusSize.addEventListener('click', () => {
        size++
        setFontSize()
    })

// ********** FUNCTION - FONT SIZE **********
    minusSize.addEventListener('click', () => {
        size--
        setFontSize()
    })

// ********** FUNCTION RESET FONT SIZE **********
    resetSize.addEventListener('click', () => {
        size = 18
        setFontSize()
    })

}

export {changeFontSize}