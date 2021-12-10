const menuArrowNavigation = () => {
    const sidebar = document.querySelector('.sidebar')
    const menuItems = document.querySelectorAll('.sidebar button')
    let index = -1

    const iterationItems = (e) => {
        if (!sidebar.classList.contains('hide')) {
            if (e.key === 'ArrowDown') {
                index++
                if (index === menuItems.length) {
                    index = 0
                }
            }

            if (e.key === 'ArrowUp') {
                index--
                if (index < 0) {
                    index = menuItems.length - 1
                }
            }
            menuItems[index].focus()
        }
    }
    document.addEventListener('keydown', iterationItems)
}
export {menuArrowNavigation}