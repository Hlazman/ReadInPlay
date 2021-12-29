const changeLanguageAccessibility = () => {

    const lang = document.querySelector('#lang')

    const bookName = document.querySelector('#bookName')
    const bookmarkBtn = document.querySelector('#bookmarkBtn')
    const menuBtn = document.querySelector('#menuBtn')
    const closeMenu = document.querySelector('#closeMenu')
    const characterModalCloseBtn = document.querySelector('#characterModalCloseBtn')
    const mapModalCloseBtn = document.querySelector('#mapModalCloseBtn')
    const inventoryModalCloseBtn = document.querySelector('#inventoryModalCloseBtn')
    const logModalCloseBtn = document.querySelector('#logModalCloseBtn')
    const bookmarksModalCloseBtn = document.querySelector('#bookmarksModalCloseBtn')
    const settingsModalCloseBtn = document.querySelector('#settingsModalCloseBtn')
    const labelLang = document.querySelector('#labelLang')
    const labelThemes = document.querySelector('#labelThemes')
    const labelFont = document.querySelector('#labelFont')
    const plusFont = document.querySelector('#plusFont')
    const minusFont = document.querySelector('#minusFont')
    const resetFont = document.querySelector('#resetFont')
    const labelScrollbarOFF = document.querySelector('label[for = scrollbarOFF]')
    const labelScrollbarON = document.querySelector('label[for = scrollbarON]')
    const infoModalCloseBtn = document.querySelector('#infoModalCloseBtn')
    const contactModalCloseBtn = document.querySelector('#contactModalCloseBtn')

    lang.addEventListener('change', () => {
        // ENGLISH
        if (lang.selectedIndex === 0) {
            bookName.ariaLabel = 'The name of the book'
            bookmarkBtn.ariaLabel = 'Made bookmark'
            bookmarkBtn.title = 'Made bookmark'
            menuBtn.ariaLabel = 'Open menu'
            menuBtn.title = 'Open menu'
            closeMenu.ariaLabel = 'close menu'
            closeMenu.title = 'close menu'
            characterModalCloseBtn.ariaLabel = 'close window Character'
            characterModalCloseBtn.title = 'close window Character'
            mapModalCloseBtn.ariaLabel = 'close window Map'
            mapModalCloseBtn.title = 'close window Map'
            inventoryModalCloseBtn.ariaLabel = 'close window Inventory'
            inventoryModalCloseBtn.title = 'close window Inventory'
            logModalCloseBtn.ariaLabel = 'close window Activity log'
            logModalCloseBtn.title = 'close window Activity log'
            bookmarksModalCloseBtn.ariaLabel = 'close window Bookmarks'
            bookmarksModalCloseBtn.title = 'close window Bookmarks'
            settingsModalCloseBtn.ariaLabel = 'close window Settings'
            settingsModalCloseBtn.title = 'close window Settings'
            labelLang.ariaLabel = 'Choose language'
            labelLang.title = 'Choose language'
            labelThemes.ariaLabel = 'Choose theme'
            labelThemes.title = 'Choose theme'
            labelFont.ariaLabel = 'Change font size'
            labelFont.title = 'Change font size'
            plusFont.ariaLabel = 'make the font bigger'
            plusFont.title = 'make the font bigger'
            minusFont.ariaLabel = 'make the font smaller'
            minusFont.title = 'make the font smaller'
            resetFont.ariaLabel = 'make the font size default'
            resetFont.title = 'make the font size default'
            labelScrollbarOFF.ariaLabel = 'disable scrollbar'
            labelScrollbarOFF.title = 'disable scrollbar'
            labelScrollbarON.ariaLabel = 'enable scrollbar'
            labelScrollbarON.title = 'enable scrollbar'
            infoModalCloseBtn.ariaLabel = 'close window Information'
            infoModalCloseBtn.title = 'close window Information'
            contactModalCloseBtn.ariaLabel = 'close window Contact us'
            contactModalCloseBtn.title = 'close window Contact us'
        }
        // UKRAINIAN
        if (lang.selectedIndex === 1) {
            bookName.ariaLabel = 'Назва книги'
            bookmarkBtn.ariaLabel = 'Зробити закладку'
            bookmarkBtn.title = 'Зробити закладку'
            menuBtn.ariaLabel = 'Відкрити меню'
            menuBtn.title = 'Відкрити меню'
            closeMenu.ariaLabel = 'Закрити меню'
            closeMenu.title = 'Закрити меню'
            characterModalCloseBtn.ariaLabel = 'закрити вікно Персонаж'
            characterModalCloseBtn.title = 'закрити вікно Персонаж'
            mapModalCloseBtn.ariaLabel = 'закрити вікно Мапа'
            mapModalCloseBtn.title = 'закрити вікно Мапа'
            inventoryModalCloseBtn.ariaLabel = 'закрити вікно Інвентар'
            inventoryModalCloseBtn.title = 'закрити вікно Інвентар'
            logModalCloseBtn.ariaLabel = 'закрити вікно Журнал подій'
            logModalCloseBtn.title = 'закрити вікно Журнал подій'
            bookmarksModalCloseBtn.ariaLabel = 'закрити вікно Закладки'
            bookmarksModalCloseBtn.title = 'закрити вікно Закладки'
            settingsModalCloseBtn.ariaLabel = 'закрити вікно Налаштування'
            settingsModalCloseBtn.title = 'закрити вікно Налаштування'
            labelLang.ariaLabel = 'Вибрати мову'
            labelLang.title = 'Вибрати мову'
            labelThemes.ariaLabel = 'Вибрати тему'
            labelThemes.title = 'Вибрати тему'
            labelFont.ariaLabel = 'Змінити розмір шрифту'
            labelFont.title = 'Змінити розмір шрифту'
            plusFont.ariaLabel = 'збільшити шрифт'
            plusFont.title = 'збільшити шрифт'
            minusFont.ariaLabel = 'зменшити шрифт'
            minusFont.title = 'зменшити шрифт'
            resetFont.ariaLabel = 'зробити розмір шрифту за замовчуванням'
            resetFont.title = 'зробити розмір шрифту за замовчуванням'
            labelScrollbarOFF.ariaLabel = 'вимкнути смугу прокрутки'
            labelScrollbarOFF.title = 'вимкнути смугу прокрутки'
            labelScrollbarON.ariaLabel = 'увімкнути смугу прокрутки'
            labelScrollbarON.title = 'увімкнути смугу прокрутки'
            infoModalCloseBtn.ariaLabel = 'закрити вікно Інформація'
            infoModalCloseBtn.title = 'закрити вікно Інформація'
            contactModalCloseBtn.ariaLabel = 'закрити вікно Контакти'
            contactModalCloseBtn.title = 'закрити вікно Контакти'
        }
        // RUSSIAN
        if (lang.selectedIndex === 2) {
            bookName.ariaLabel = 'Название книги'
            bookmarkBtn.ariaLabel = 'Сделать закладку'
            bookmarkBtn.title = 'Сделать закладку'
            menuBtn.ariaLabel = 'Открыть меню'
            menuBtn.title = 'Открыть меню'
            closeMenu.ariaLabel = 'Закрыть меню'
            closeMenu.title = 'Закрыть меню'
            characterModalCloseBtn.ariaLabel = 'закрыть окно Персонаж'
            characterModalCloseBtn.title = 'закрыть окно Персонаж'
            mapModalCloseBtn.ariaLabel = 'закрыть окно Карта'
            mapModalCloseBtn.title = 'закрыть окно Карта'
            inventoryModalCloseBtn.ariaLabel = 'закрыть окно Инвентарь'
            inventoryModalCloseBtn.title = 'закрыть окно Инвентарь'
            logModalCloseBtn.ariaLabel = 'закрыть окно Журнал событий'
            logModalCloseBtn.title = 'закрыть окно Журнал событий'
            bookmarksModalCloseBtn.ariaLabel = 'закрыть окно Закладки'
            bookmarksModalCloseBtn.title = 'закрыть окно Закладки'
            settingsModalCloseBtn.ariaLabel = 'закрыть окно Настройки'
            settingsModalCloseBtn.title = 'закрыть окно Настройки'
            labelLang.ariaLabel = 'Выбирите язык'
            labelLang.title = 'Выбирите язык'
            labelThemes.ariaLabel = 'Выбирите тему'
            labelThemes.title = 'Выбирите тему'
            labelFont.ariaLabel = 'Изменить размер шрифта'
            labelFont.title = 'Изменить размер шрифта'
            plusFont.ariaLabel = 'Увеличить шрифт'
            plusFont.title = 'Увеличить шрифт'
            minusFont.ariaLabel = 'Уменьшить шрифт'
            minusFont.title = 'Уменьшить шрифт'
            resetFont.ariaLabel = 'установить размер шрифта по умолчанию'
            resetFont.title = 'установить размер шрифта по умолчанию'
            labelScrollbarOFF.ariaLabel = 'отключить полосу прокрутки'
            labelScrollbarOFF.title = 'отключить полосу прокрутки'
            labelScrollbarON.ariaLabel = 'включить полосу прокрутки'
            labelScrollbarON.title = 'включить полосу прокрутки'
            infoModalCloseBtn.ariaLabel = 'закрыть окно Информация'
            infoModalCloseBtn.title = 'закрыть окно Информация'
            contactModalCloseBtn.ariaLabel = 'закрыть окно Контакты'
            contactModalCloseBtn.title = 'закрыть окно Контакты'
        }
    })
}
export {changeLanguageAccessibility}