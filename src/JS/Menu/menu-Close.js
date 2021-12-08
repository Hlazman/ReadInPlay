const menuClose = () => {
    const sidebar = document.querySelector('.sidebar')
    const closeMenuBtn = document.querySelector('#closeMenu')

    // ********** CLOSE MENU TO CLICK OUTSIDE THE SIDEBAR **********
    document.addEventListener('click', (e) => {
        let node = e.target;
        let inside = false;
        while (node) {
            if (node.classList.contains('sidebar') || node.classList.contains('menuBtn')) {
                inside = true;
                break;
            }
            node = node.parentElement;
        }
        if (!inside) {
            sidebar.classList.remove('sidebarTransform')
            setTimeout(() => {
                sidebar.classList.add('hide')
            }, 500)
        }
    });

// ********** CLOSE MENU TO CLICK ON BUTTON CLOSE **********
    closeMenuBtn.addEventListener('click', () => {
        sidebar.classList.remove('sidebarTransform')
        setTimeout(() => {
            sidebar.classList.add('hide')
        }, 500)
    })

    // ********** CLOSE MENU TO CLICK ON ESC **********
    document.addEventListener('keydown', (e) => {
        if (e.key === "Escape") {
            if (!sidebar.classList.contains('hide')) {
                sidebar.classList.remove('sidebarTransform')
                setTimeout(() => {
                    sidebar.classList.add('hide')
                }, 500)
            }
        }
    })
}
export {menuClose}