const addBookmark = () => {

    function checkStorageSupport() {
        let test = "test";
        try {
            localStorage.setItem(test, test);
            localStorage.removeItem(test);
            return true;
        } catch (e) {
            return false;
        }
    }

    function getTotalHeight() {
        // return document.body.clientHeight;
        // return document.querySelector('#story').clientHeight;
        return document.querySelector('main').clientHeight;

    }

    function getSavedPercent() {
        let percent = storageSupported ? loadFromStorage() : loadFromCookie();
        return (percent === null || percent === "") ? 0 : percent;
    }


    /******* Save *******/
    function saveInStorage() {
        localStorage.setItem("scrollPercent", (document.documentElement.scrollTop / getTotalHeight()));
    }

    function saveCookie() {
        let expDate = new Date();
        expDate.setDate(expDate.getDate() + 7); // start over if it's been more than ___ days
        document.cookie = "scrollPercent=" + (document.documentElement.scrollTop / getTotalHeight())
            + "; " + expDate;
    }


    /******* Load *******/

    function loadFromStorage() {
        return localStorage.getItem("scrollPercent");
    }

    function loadFromCookie() {
        return document.cookie.replace(/(?:(?:^|.*;\s*)scrollPercent\s*\=\s*([^;]*).*$)|^.*$/, "$1");
    }


    /******* Remove *******/

    function removeFromStorage() {
        localStorage.removeItem("scrollPercent");
    }

    function removeCookie() {
        document.cookie = "scrollPercent=''";
    }


    /******* Handler *******/
    let saveButton = document.getElementById("saveButton"),
        saved = document.getElementById("saved");

    saveButton.onclick = function () {
        storageSupported ? saveInStorage() : saveCookie();
        saved.style.visibility = "visible";
        setTimeout(function () {
            saved.style.visibility = "hidden";
        }, 1500);
    };


    /******* Logic *******/

    let storageSupported = checkStorageSupport(),
        percent = getSavedPercent();

    if (percent > 0) {
        if (confirm("Would you like to continue reading where you left off?")) {
            document.documentElement.scrollTop = percent * getTotalHeight();
        }
        storageSupported ? removeFromStorage() : removeCookie();
    }


}

export {addBookmark}