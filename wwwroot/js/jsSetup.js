function init() {
    dragula([document.getElementById('left'), document.getElementById('right')], {
        copy: function (el, source) {
            return source === document.getElementById('left');
        },
        accepts: function (el, target) {
            return target !== document.getElementById('left');
        }
    });
}


//function init() {
//    dragula([document.getElementById('left'), document.getElementById('right')]);
//}
