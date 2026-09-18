// Riemann sum rectangles for v(t) = 3t^2 on [0, 2] (our car from sec-4-9-antiderivatives.ptx).
// Slider n controls how many rectangles (1 to 20); checkbox switches between
// left-endpoint and right-endpoint heights. The div id below must match the
// <slate> xml:id in sec-5-1-areas-distances.ptx.
var board = JXG.JSXGraph.initBoard('interactive-riemann-rectangles-slate', {
    boundingbox: [-0.3, 14.5, 2.3, -2.2],
    axis: true,
    showCopyright: false,
    showNavigation: false,
    keepAspectRatio: false
});

function v(t) { return 3 * t * t; }

board.create('functiongraph', [v, 0, 2], {strokeColor: '#0066cc', strokeWidth: 3, highlight: false});
board.create('text', [1.55, 12.6, 'y = v(t) = 3t^2'], {fontSize: 15, color: '#0066cc', fixed: true});

var nSlider = board.create('slider', [[0, 13.5], [2, 13.5], [1, 4, 20]], {
    name: 'n',
    snapWidth: 1,
    precision: 0
});

var cb = board.create('checkbox', [0, 12.1, ' Use right endpoints (unchecked = left endpoints)'], {fixed: true});

function n() { return nSlider.Value(); }
function dx() { return 2 / n(); }
function useRight() { return cb.Value(); }

var MAX_RECT = 20;

for (var i = 0; i < MAX_RECT; i++) {
    (function (i) {
        function left() { return i * dx(); }
        function right() { return (i + 1) * dx(); }
        function height() { return useRight() ? v(right()) : v(left()); }
        function shown() { return i < n(); }

        var A = board.create('point', [
            function () { return shown() ? left() : NaN; },
            function () { return 0; }
        ], {visible: false});
        var B = board.create('point', [
            function () { return shown() ? right() : NaN; },
            function () { return 0; }
        ], {visible: false});
        var C = board.create('point', [
            function () { return shown() ? right() : NaN; },
            function () { return shown() ? height() : NaN; }
        ], {visible: false});
        var D = board.create('point', [
            function () { return shown() ? left() : NaN; },
            function () { return shown() ? height() : NaN; }
        ], {visible: false});

        board.create('polygon', [A, B, C, D], {
            fillColor: '#7fb3e6',
            fillOpacity: 0.35,
            highlight: false,
            vertices: {visible: false},
            borders: {strokeColor: '#0066cc', strokeWidth: 1, highlight: false}
        });
    })(i);
}

board.create('text', [0, -1.6, function () {
    var sum = 0;
    for (var i = 0; i < n(); i++) {
        var tStar = useRight() ? (i + 1) * dx() : i * dx();
        sum += v(tStar) * dx();
    }
    var label = useRight() ? 'R_' : 'L_';
    return label + n() + ' = ' + sum.toFixed(3) + ' meters    (true value: 8 meters)';
}], {fontSize: 16, fixed: true, cssStyle: 'font-weight:bold;'});

JXG.addEvent(cb.rendNodeCheckbox, 'change', function () { board.update(); }, cb);
