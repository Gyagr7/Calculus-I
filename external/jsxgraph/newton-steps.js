// Newton's method on f(x) = x^3 - 2x - 5: three tangent-line steps from a draggable x1.
// The div id below must match the <slate> xml:id in sec-4-8-newtons-method.ptx.
var board = JXG.JSXGraph.initBoard('interactive-newton-steps-slate', {
    boundingbox: [0.5, 18, 3.5, -9],
    axis: true,
    showCopyright: false,
    showNavigation: false,
    keepAspectRatio: false
});

function f(x) { return x * x * x - 2 * x - 5; }
function fp(x) { return 3 * x * x - 2; }

board.create('functiongraph', [f, 0.5, 3.5], {strokeColor: '#0066cc', strokeWidth: 2, highlight: false});

var start = board.create('glider', [2.8, 0, board.defaultAxes.x], {
    name: 'x1',
    color: '#cc0000',
    size: 5,
    label: {offset: [-4, -16]}
});

// x_(n+1), counting the starting guess as step 0
function iterate(n) {
    var x = start.X();
    for (var i = 0; i < n; i++) {
        var d = fp(x);
        if (Math.abs(d) < 1e-9) { return NaN; }
        x = x - f(x) / d;
    }
    return x;
}

var colors = ['#009933', '#cc7a00', '#8e44ad'];
var names = ['x2', 'x3', ''];

for (var k = 0; k < 3; k++) {
    (function (k) {
        // dashed drop from the axis up to the curve
        board.create('segment', [
            [function () { return iterate(k); }, 0],
            [function () { return iterate(k); }, function () { return f(iterate(k)); }]
        ], {dash: 2, strokeColor: '#888888', strokeWidth: 1, highlight: false, point1: {visible: false}, point2: {visible: false}});
        // tangent line from the curve down to where it crosses the axis
        board.create('segment', [
            [function () { return iterate(k); }, function () { return f(iterate(k)); }],
            [function () { return iterate(k + 1); }, 0]
        ], {strokeColor: colors[k], strokeWidth: 2, highlight: false, point1: {visible: false}, point2: {visible: false}});
        board.create('point', [function () { return iterate(k + 1); }, 0], {
            name: names[k],
            color: colors[k],
            size: 3,
            fixed: true,
            label: {offset: [-4, 14]}
        });
    })(k);
}

board.create('text', [0.6, 16.3, function () {
    return 'x1 = ' + iterate(0).toFixed(4) + '  |  x2 = ' + iterate(1).toFixed(4) +
           '  |  x3 = ' + iterate(2).toFixed(4) + '  |  x4 = ' + iterate(3).toFixed(4);
}], {fontSize: 14, fixed: true, cssStyle: 'font-weight:bold;'});

board.create('text', [0.6, 14.3, 'Drag the red point x1 along the axis to change the first guess.'], {
    fontSize: 13, fixed: true, color: '#555555'
});
