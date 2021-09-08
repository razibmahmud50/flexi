/*
 * color change js
 * Author: themebazar
 * Author URL: http://themebazar.com
 * Version: 1.0
 */
//theme color changer js
(function($) {
    "use strict";

    var demoPanel = $("#lm_demo_panel"),
        demoPanelSwitcher = $("#lm_demo_panel_switcher");

    $(window).on("click", function() {
        $("#lm_demo_panel.active").removeClass("active");
    });

    demoPanelSwitcher.on("click", function(event) {
        event.stopPropagation();
        demoPanel.toggleClass("active");
    });

    demoPanel.on("click", function(event) {
        event.stopPropagation();
    });

    // Template style
    $('#t_style').on("click", "a.light-theme", function() {
        $("body").css({
            '--pri-color': '#F8F8F8',
            '--bg-color': '#F8F8F8',
            '--h-color': '#171619',
            '--white': '#171619',
        });

    });
    $('#t_style').on("click", "a.dark-theme", function() {
        $("body").css({
            '--pri-color': '#171619',
            '--bg-color': '#171619',
            '--h-color': '#fff',
            '--white': '#fff',
        });

    });

})(jQuery);