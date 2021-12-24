const changeTheme = () => {

    const theme = document.querySelector('#themes')
    const dataTheme = document.querySelectorAll('[data-theme]');

    const scrollbar = document.querySelector('body')
    const headerContainer = document.querySelector('.flex-container-header')
    const modal = document.querySelectorAll('.modal')
    const flexItemsTools = document.querySelectorAll('.flex-items-tools')
    const settingsSelect = document.querySelectorAll('.settingsSelect')
    const divSettingsGroup = document.querySelectorAll('.divSettingsGroup')
    const dataThemeBorder = document.querySelectorAll('[data-border]');

    theme.addEventListener('change', () => {
// ****************************** DARK THEME  ******************************
        if (theme.selectedIndex === 1) {
            dataTheme.forEach((item) => {
                item.classList.remove('light')
                item.classList.add('dark')
            })
            // SCROLLBAR
            scrollbar.classList.remove('scrollBar-light')
            scrollbar.classList.add('scrollBar-dark')

            // HEADER
            headerContainer.classList.remove('header-light')
            headerContainer.classList.add('header-dark')

            // MODAL
            modal.forEach((item) => {
                item.classList.remove('modal-light')
                item.classList.add('modal-dark')
            })

            // ITEMS IN MODAL
            flexItemsTools.forEach((item) => {
                item.classList.remove('flex-items-tools-light')
                item.classList.add('flex-items-tools-dark')
            })

            // SELECT IN SETTINGS
            settingsSelect.forEach((item) => {
                item.classList.remove('settingsSelect-light')
                item.classList.add('settingsSelect-dark')
            })

            // CONTAINER FOR INPUT & BUTTONS
            divSettingsGroup.forEach((item) => {
                item.classList.remove('divSettingsGroup-light')
                item.classList.add('divSettingsGroup-dark')
            })

            // BORDER INPUT AND BUTTONS (FONT/SCROLLBAR) SETTINGS
            dataThemeBorder.forEach((item) => {
                item.classList.remove('btnBorder-light')
                item.classList.add('btnBorder-dark')
            })
        }

// ****************************** LIGHT THEME  ******************************
        if (theme.selectedIndex === 0) {
            dataTheme.forEach((item) => {
                item.classList.remove('dark')
                item.classList.add('light')
            })

            // SCROLLBAR
            scrollbar.classList.remove('scrollBar-dark')
            scrollbar.classList.add('scrollBar-light')

            // HEADER
            headerContainer.classList.remove('header-dark')
            headerContainer.classList.add('header-light')

            // MODAL
            modal.forEach((item) => {
                item.classList.remove('modal-dark')
                item.classList.add('modal-light')
            })

            // ITEMS IN MODAL
            flexItemsTools.forEach((item) => {
                item.classList.remove('flex-items-tools-dark')
                item.classList.add('flex-items-tools-light')
            })

            // SELECT IN SETTINGS
            settingsSelect.forEach((item) => {
                item.classList.remove('settingsSelect-dark')
                item.classList.add('settingsSelect-light')
            })

            // CONTAINER FOR INPUT & BUTTONS
            divSettingsGroup.forEach((item) => {
                item.classList.remove('divSettingsGroup-dark')
                item.classList.add('divSettingsGroup-light')
            })

            // FONT BUTTONS IN SETTINGS
            dataThemeBorder.forEach((item) => {
                item.classList.remove('btnBorder-dark')
                item.classList.add('btnBorder-light')
            })
        }
    })
}
export {changeTheme}