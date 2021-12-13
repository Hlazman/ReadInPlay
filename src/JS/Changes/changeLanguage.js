const changeLanguage = () => {

    const lang = document.querySelector('#lang')

    const htmlLang = document.querySelector('html')
    const bookName = document.querySelector('#bookName')
    // ****************************** MENU  ******************************
    const sidebarHeading = document.querySelector('#sidebarHeading')
    const characterText = document.querySelector('#characterText')
    const mapText = document.querySelector('#mapText')
    const inventoryText = document.querySelector('#inventoryText')
    const logText = document.querySelector('#logText')
    const bookmarkText = document.querySelector('#bookmarkText')
    const settingsText = document.querySelector('#settingsText')
    const informationText = document.querySelector('#informationText')
    const contactText = document.querySelector('#contactText')
    // ****************************** CHARACTER  ******************************
    const characterHeading = document.querySelector('#characterHeading')
    // ****************************** MAP  ******************************
    const mapHeading = document.querySelector('#mapHeading')
    // ****************************** INVENTORY  ******************************
    const inventoryHeading = document.querySelector('#inventoryHeading')
    // ****************************** ACTIVITY LOG  ******************************
    const logHeading = document.querySelector('#logHeading')
    // ****************************** BOOKMARKS  ******************************
    const bookmarksHeading = document.querySelector('#bookmarksHeading')
    // ****************************** SETTINGS  ******************************
    const settingsHeading = document.querySelector('#settingsHeading')
    const LangHeading = document.querySelector('#LangHeading')
    const themeHeading = document.querySelector('#themeHeading')
    const light = document.querySelector('#light')
    const dark = document.querySelector('#dark')
    const fontSizeHeading = document.querySelector('#fontSizeHeading')
    // ****************************** INFORMATION  ******************************
    const infoHeading = document.querySelector('#infoHeading')
    // ****************************** CONTACT  ******************************
    const contactHeading = document.querySelector('#contactHeading')


    lang.addEventListener('change', () => {
        // ENGLISH
        if (lang.selectedIndex === 0) {
            htmlLang.lang = 'en'
            bookName.textContent = 'BOOK NAME'
            sidebarHeading.textContent = 'Menu'
            characterText.textContent = 'Character'
            mapText.textContent = 'Map'
            inventoryText.textContent = 'Inventory'
            logText.textContent = 'Activity log'
            bookmarkText.textContent = 'Bookmarks'
            settingsText.textContent = 'Settings'
            informationText.textContent = 'Information'
            contactText.textContent = 'Contact us'
            characterHeading.textContent = 'CHARACTER'
            mapHeading.textContent = 'MAP'
            inventoryHeading.textContent = 'INVENTORY'
            logHeading.textContent = 'ACTIVITY LOG'
            bookmarksHeading.textContent = 'BOOKMARKS'
            settingsHeading.textContent = 'SETTINGS'
            LangHeading.textContent = 'Language'
            themeHeading.textContent = 'Theme'
            light.textContent = 'Light'
            dark.textContent = 'Dark'
            fontSizeHeading.textContent = 'Font size'
            infoHeading.textContent = 'INFORMATION'
            contactHeading.textContent = 'CONTACT US'
        }
        // UKRAINIAN
        if (lang.selectedIndex === 1) {
            htmlLang.lang = 'uk'
            bookName.textContent = 'НАЗВА КНИГИ'
            sidebarHeading.textContent = 'Меню'
            characterText.innerText = 'Персонаж'
            mapText.textContent = 'Мапа'
            inventoryText.textContent = 'Інвентар'
            logText.textContent = 'Журнал подій'
            bookmarkText.textContent = 'Закладки'
            settingsText.textContent = 'Налаштування'
            informationText.textContent = 'Інформація'
            contactText.textContent = "Контакти"
            characterHeading.textContent = 'ПЕРСОНАЖ'
            mapHeading.textContent = 'МАПА'
            inventoryHeading.textContent = 'ІНВЕНТАР'
            logHeading.textContent = 'ЖУРНАЛ ПОДІЙ'
            bookmarksHeading.textContent = 'ЗАКЛАДКИ'
            settingsHeading.textContent = 'НАЛАШТУВАННЯ'
            LangHeading.textContent = 'Мова'
            themeHeading.textContent = 'Тема'
            light.textContent = 'Світла'
            dark.textContent = 'Темна'
            fontSizeHeading.textContent = 'Розмір шрифту'
            infoHeading.textContent = 'ІНФОРМАЦІЯ'
            contactHeading.textContent = "КОНТАКТИ"
        }
        // RUSSIAN
        if (lang.selectedIndex === 2) {
            htmlLang.lang = 'ru'
            bookName.textContent = 'НАЗВАНИЕ КНИГИ'
            sidebarHeading.textContent = 'Меню'
            characterText.textContent = 'Персонаж'
            mapText.textContent = 'Карта'
            inventoryText.textContent = 'Инвентарь'
            logText.textContent = 'Журнал событий'
            bookmarkText.textContent = 'Закладки'
            settingsText.textContent = 'Настройки'
            informationText.textContent = 'Информация'
            contactText.textContent = 'Контакты'
            characterHeading.textContent = 'ПЕРСОНАЖ'
            mapHeading.textContent = 'КАРТА'
            inventoryHeading.textContent = 'ИНВЕНТАРЬ'
            logHeading.textContent = 'ЖУРНАЛ СОБЫТИЙ'
            bookmarksHeading.textContent = 'ЗАКЛАДКИ'
            settingsHeading.textContent = 'НАСТРОЙКИ'
            LangHeading.textContent = 'Язык'
            themeHeading.textContent = 'Тема'
            light.textContent = 'Светлая'
            dark.textContent = 'Темная'
            fontSizeHeading.textContent = 'Размер шрифта'
            infoHeading.textContent = 'ИНФОРМАЦИЯ'
            contactHeading.textContent = 'КОНТАКТЫ'
        }
    })
}
export {changeLanguage}