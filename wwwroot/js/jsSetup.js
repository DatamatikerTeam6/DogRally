function init() {
    var containers = [];
    containers.push(document.getElementById('exercises'));

    for (var i = 1; i <= 112; i++) {
        containers.push(document.getElementById('course' + i));
    }

    for (var i = 1; i <= 10; i++) {
        containers.push(document.getElementById('course1' + i));
    }

    dragula(containers, {
        copy: function (el, source) {
            return source === document.getElementById('exercises');
        },
        accepts: function (el, target) {
            return target !== document.getElementById('exercises');
        }
    });
}


//function init() {
//    dragula([document.getElementById('exercises'),
//        document.getElementById('course1'),
//        document.getElementById('course2'),
//        document.getElementById('course3'),
//        document.getElementById('course4'),
//        document.getElementById('course5'),
//        document.getElementById('course6'),
//        document.getElementById('course7'),
//        document.getElementById('course8'),
//        document.getElementById('course9'),
//        document.getElementById('course10')], {
//        copy: function (el, source) {
//            return source === document.getElementById('exercises');
//        },
//        accepts: function (el, target) {
//            return target !== document.getElementById('exercises');
//        }
//    });
//}




//function init() {
//    dragula([document.getElementById('left'), document.getElementById('right')]);
//}
