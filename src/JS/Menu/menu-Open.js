const menuOpen = () => {
    const sidebar = document.querySelector('.sidebar')
    const btn = document.querySelector('#menuBtn')

// OPEN MENU TO CLICK ON BUTTON 'MENU'
    btn.addEventListener('click', () => {
        sidebar.classList.remove('hide')
        sidebar.classList.add('sidebarTransform')
    })
}
export {menuOpen}