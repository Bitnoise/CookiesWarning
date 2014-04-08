(function () {
    var addWarningCookie = function (c_name, value, exdays) {
        var exdate = new Date();
        exdate.setDate(exdate.getDate() + exdays);
        var c_value = escape(value) + ((exdays == null) ? "" : "; expires=" + exdate.toUTCString());
        document.cookie = c_name + "=" + c_value;
    };

    var getCookie = function (c_name) {
        var i, x, y, ARRcookies = document.cookie.split(";");
        for (i = 0; i < ARRcookies.length; i++) {
            x = ARRcookies[i].substr(0, ARRcookies[i].indexOf("="));
            y = ARRcookies[i].substr(ARRcookies[i].indexOf("=") + 1);
            x = x.replace(/^\s+|\s+$/g, "");
            if (x == c_name) {
                return unescape(y);
            }
        }
    }

    if (getCookie('cookieWarning')) {
        return;
    }

    var body = document.getElementsByTagName('body')[0];
    var container = document.createElement('div');
    container.style.cssText = "display:block;min-height:70px;width:100%; border:1px solid #000; border-width: 1px 0 1px 0; text-align:justify; auto;padding:0.5em;background:#fff; position: relative; z-index: 99999";

    var pDesc = document.createElement('p');
    pDesc.style.cssText = "display: inline-block; width: 80%; padding: 15px; margin-right: 25px;";
    pDesc.innerHTML = "Strona korzysta z plików cookie w celu realizacji usług zgodnie z Polityką Cookies. Możesz samodzielnie określić warunki przechowywania lub dostępu mechanizmu cookie w Twojej przeglądarce.";

    var buttons = document.createElement('div');
    buttons.style.cssText = "display: inline-block; width: 10%;";

    var buttonYes = document.createElement('p');
    buttonYes.style.cssText = "display:block;font-family:Verdana;text-align:center;color:#eee;cursor:pointer;padding:5px;background:#4cbb17; width: 50px;";
    buttonYes.innerHTML = "OK";
    buttonYes.onclick = function () {
        addWarningCookie('cookieWarning', true, 365);
        remove();
    };

    var remove = function () {
        body.removeChild(container);
    };

    buttons.appendChild(buttonYes);

    container.appendChild(pDesc);
    container.appendChild(buttons);

    body.insertBefore(container, body.firstChild);
    container.style.width = body.style.width;
})();
