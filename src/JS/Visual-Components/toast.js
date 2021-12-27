const toast = (messageEN, messageUA, messageRU) => {

    const toastMessage = document.querySelector('#toastMessage')
    if (document.querySelector('#lang').selectedIndex === 0) {
        toastMessage.textContent = messageEN
    }
    if (document.querySelector('#lang').selectedIndex === 1) {
        toastMessage.textContent = messageUA
    }
    if (document.querySelector('#lang').selectedIndex === 2) {
        toastMessage.textContent = messageRU
    }
    toastMessage.classList.add('show')
    setTimeout(() => {
        toastMessage.classList.remove('show')
    }, 1500)
}
export {toast}