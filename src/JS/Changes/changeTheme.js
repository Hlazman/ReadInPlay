const changeTheme = () => {

    const theme = document.querySelector('#themes')
    const dataTheme = document.querySelectorAll('[data-theme]');

    const header = document.querySelector('.flex-container-header')
    const modal = document.querySelectorAll('.modal')
    const flexItemsTools = document.querySelectorAll('.flex-items-tools')
    const settingsSelect = document.querySelectorAll('.settingsSelect')
    const fontGroup = document.querySelector('.fontGroup')
    const inputFont = document.querySelector('#font')
    const btnFont = document.querySelectorAll('.btnFont')


    theme.addEventListener('change', () => {
// ****************************** DARK THEME  ******************************
        if (theme.selectedIndex === 1) {
            dataTheme.forEach((item) => {
                item.classList.remove('light')
                item.classList.add('dark')
            })
            // HEADER
            header.classList.remove('header-light')
            header.classList.add('header-dark')

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
            fontGroup.classList.remove('fontGroup-light')
            fontGroup.classList.add('fontGroup-dark')

            // INPUT IN SETTINGS
            inputFont.classList.remove('settingsInput-light')
            inputFont.classList.add('settingsInput-dark')

            // BUTTONS +- IN SETTINGS
            btnFont.forEach((item) => {
                item.classList.remove('btnFont-light')
                item.classList.add('btnFont-dark')
            })
        }

// ****************************** LIGHT THEME  ******************************
        if (theme.selectedIndex === 0) {
            dataTheme.forEach((item) => {
                item.classList.remove('dark')
                item.classList.add('light')
            })

            // HEADER
            header.classList.remove('header-dark')
            header.classList.add('header-light')

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
            fontGroup.classList.remove('fontGroup-dark')
            fontGroup.classList.add('fontGroup-light')

            // INPUT IN SETTINGS
            inputFont.classList.remove('settingsInput-dark')
            inputFont.classList.add('settingsInput-light')

            // BUTTONS +- IN SETTINGS
            btnFont.forEach((item) => {
                item.classList.remove('btnFont-dark')
                item.classList.add('btnFont-light')
            })
        }
    })
}
export {changeTheme}