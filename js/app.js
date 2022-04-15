require('./bootstrap');

const WOW = require('wowjs');
window.wow = new WOW.WOW({
    offset: 200,          // default
});
window.wow.init();

const observer = lozad(); // lazy loads elements with default selector as '.lozad'
observer.observe();