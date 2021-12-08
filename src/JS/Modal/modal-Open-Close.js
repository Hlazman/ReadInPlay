// ********** FUNCTION OPEN MODAL **********
const openModal = (btn, section) => {
    btn.addEventListener('click', () => {
        section.classList.remove('hide')
        section.classList.add('modal-target')
        const sidebar = document.querySelector('.sidebar')
        sidebar.classList.remove('sidebarTransform')
        setTimeout(() => {
            sidebar.classList.add('hide')
        }, 500)
    })
}
// ********** FUNCTION CLOSE MODAL **********
const closeModal = (btn, section) => {
    btn.addEventListener('click', () => {
        section.classList.remove('modal-target')
        setTimeout(() => {
            section.classList.add('hide')
        }, 300)
    })
}
// ********** FUNCTION CLOSE MODAL OUTSIDE **********
const closeModalOutside = (clicked, section) => {
    clicked.addEventListener('click', (e) => {
        if (e.target === clicked) {
            section.classList.remove('modal-target')
            setTimeout(() => {
                section.classList.add('hide')
            }, 300)
        }
    })
}
// ********** FUNCTION CLOSE MODAL ESC **********
const closeModalESC = (section) => {
    document.addEventListener('keydown', (e) => {
        if (e.key === "Escape") {
            if (!section.classList.contains('hide')) {
                section.classList.remove('modal-target')
                setTimeout(() => {
                    section.classList.add('hide')
                }, 300)
            }
        }
    })
}
export {openModal, closeModal, closeModalOutside, closeModalESC}