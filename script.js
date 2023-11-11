$(function() {
    'use strict';

    // Initialize Scrollify
    $.scrollify({
        section: ".section",
        sectionName: "section-name",
        interstitialSection: ".header, .footer",
        easing: "easeOutExpo",
        scrollSpeed: 1100,
        offset: 0,
        scrollbars: true,
        standardScrollElements: "",
        setHeights: true,
        overflowScroll: true,
        updateHash: true,
        touchScroll: true,
        before: function(sectionIndex) {
            // Custom behavior before scrolling to a section
            var currentSection = $.scrollify.current();
            console.log("Leaving section " + currentSection.data("section-name"));
        },
        after: function(sectionIndex) {
            // Custom behavior after scrolling to a section
            var currentSection = $.scrollify.current();
            console.log("Entering section " + currentSection.data("section-name"));
        },
        afterResize: function() {
            // Behavior after resizing the window
            console.log("Resize completed");
        },
        afterRender: function() {
            // Behavior after initial render of the sections
            console.log("Scrollify render completed");
        }
    });

    // Example: Toggle class on scroll
    $(window).on("scroll", function() {
        if ($(this).scrollTop() > 50) {
            $(".header").addClass("scrolled");
        } else {
            $(".header").removeClass("scrolled");
        }
    });
});
