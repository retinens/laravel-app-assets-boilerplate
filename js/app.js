require('./bootstrap');

const WOW = require('wowjs');
window.wow = new WOW.WOW({
    offset: 200,
});
window.wow.init();

require("lozad");
const observer = lozad();
observer.observe();
