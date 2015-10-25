var path = require('path');
var fs = require('fs');

// I'm beyond perverse and track hits to the slides.
var analytics = require('analytics');
analytics('UA-384699-1');

// TODO: this is ugly ugly ugly
require('../../node_modules/reveal.js/lib/js/head.min.js');

/* TODO not working yet but I don't need it *for now*
// Inline highlight source plugin
require('../../node_modules/reveal.js/plugin/highlight/highlight.js');

hljs.configure({
	tabReplace: '  ',
	languages: [ 'javascript', 'html', 'markup' ],
	ignore_illegals: true
});
hljs.initHighlighting();
*/


var Reveal = require('reveal.js');

Reveal.initialize({

    // Display controls in the bottom right corner
    controls: false,

    // Display a presentation progress bar
    progress: true,

    // Display the page number of the current slide
    slideNumber: false,

    // Push each slide change to the browser history
    history: true,

    // Enable keyboard shortcuts for navigation
    keyboard: true,

    // Enable the slide overview mode
    overview: true,

    // Vertical centering of slides
    center: true,

    // Enables touch navigation on devices with touch input
    touch: true,

    // Loop the presentation
    loop: false,

    // Change the presentation direction to be RTL
    rtl: false,

    // Turns fragments on and off globally
    fragments: true,

    // Flags if the presentation is running in an embedded mode,
    // i.e. contained within a limited portion of the screen
    embedded: false,

    // Flags if we should show a help overlay when the questionmark
    // key is pressed
    help: true,

    // Number of milliseconds between automatically proceeding to the
    // next slide, disabled when set to 0, this value can be overwritten
    // by using a data-autoslide attribute on your slides
    autoSlide: 0,

    // Stop auto-sliding after user input
    autoSlideStoppable: true,

    // Enable slide navigation via mouse wheel
    mouseWheel: false,

    // Hides the address bar on mobile devices
    hideAddressBar: true,

    // Opens links in an iframe preview overlay
    previewLinks: false,

    // Transition style
    transition: 'fade', // none/fade/slide/convex/concave/zoom

    // Transition speed
    transitionSpeed: 'fast', // default/fast/slow

    // Transition style for full page slide backgrounds
    backgroundTransition: 'default', // none/fade/slide/convex/concave/zoom

    // Number of slides away from the current that are visible
    viewDistance: 3,

    // Parallax background image
    parallaxBackgroundImage: '', // e.g. "'https://s3.amazonaws.com/hakim-static/reveal-js/reveal-parallax-1.jpg'"

    // Parallax background size
    parallaxBackgroundSize: '', // CSS syntax, e.g. "2100px 900px"
		
	dependencies: [
	]

});

