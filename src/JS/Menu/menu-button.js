const menuBTN = () => {
    const btn = document.querySelector('#menuBtn')
    btn.addEventListener('click', () => {
        document.querySelector('.sidebar').classList.remove('hide')
        document.querySelector('.sidebar').classList.add('sidebarTransform')
    })
}

export {menuBTN}