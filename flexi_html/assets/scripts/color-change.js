/*
 * color change js
 * Author: Razib
 * Author URL:
 * Version: 1.0
 */
//toggle color switcher
(function () {
    var demoPanel = document.querySelector("#lm_demo_panel"),
        demoPanelSwitcher = document.querySelector("#lm_demo_panel_switcher");

    window.addEventListener("click", function () {
        document.querySelector("#lm_demo_panel.active").classList.remove("active");
    });

    demoPanelSwitcher.addEventListener("click", function (event) {
        event.stopPropagation();
        demoPanel.classList.toggle("active");
    });

    demoPanel.addEventListener("click", function (event) {
        event.stopPropagation();
    });

    // Color switcher
    document.querySelector('#t_style .light-theme').addEventListener("click", function () {
        document.querySelector("body").style.cssText = "--pri-color: #F8F8F8; --bg-color: #F8F8F8; --h-color: #171619; --white: #171619;";
    });

    document.querySelector('#t_style .dark-theme').addEventListener("click", function () {
        document.querySelector("body").style.cssText = "--pri-color: #171619; --bg-color: #171619; --h-color: #fff; --white: #fff;";
    });

})();