// The family F(x) = x^3 + C: sliding C moves the curve, but the slope at each x never changes.
// The div id below must match the <slate> xml:id in sec-4-9-antiderivatives.ptx.
var board = JXG.JSXGraph.initBoard('interactive-antiderivative-family-slate', {
    boundingbox: [-2.5, 12, 2.5, -12],
    axis: true,
    showCopyright: false,
    showNavigation: false,
    keepAspectRatio: false
});

var cS = board.create('slider', [[0.5, -8.5], [2.1, -8.5], [-6, 0, 6]], {
    name: 'C', snapWidth: 0.5, precision: 1
});
var xS = board.create('slider', [[0.5, -10.5], [2.1, -10.5], [-1.8, 1, 1.8]], {
    name: 'x', snapWidth: 0.1, precision: 1
});

// faint background members of the family
[-6, -3, 0, 3, 6].forEach(function (c) {
    board.create('functiongraph', [function (x) { return x * x * x + c; }, -2.5, 2.5], {
        strokeColor: '#bbbbbb', strokeWidth: 1, highlight: false
    });
});

// the member picked by the slider
board.create('functiongraph', [function (x) { return x * x * x + cS.Value(); }, -2.5, 2.5], {
    strokeColor: '#0066cc', strokeWidth: 3, highlight: false
});

function X() { return xS.Value(); }
function Y() { var x = X(); return x * x * x + cS.Value(); }

var P = board.create('point', [X, Y], {name: '', color: '#cc0000', size: 4, fixed: true});

// tangent line at P, slope 3x^2
board.create('line', [P, [function () { return X() + 1; }, function () { var x = X(); return Y() + 3 * x * x; }]], {
    strokeColor: '#009933', strokeWidth: 2, highlight: false, point2: {visible: false}
});

board.create('text', [-2.35, 10.8, function () {
    return 'C = ' + cS.Value().toFixed(1) + '     F(' + X().toFixed(1) + ') = ' + Y().toFixed(2);
}], {fontSize: 14, fixed: true});

board.create('text', [-2.35, 9.3, function () {
    var x = X();
    return 'slope at x = ' + x.toFixed(1) + ':  ' + (3 * x * x).toFixed(2);
}], {fontSize: 15, fixed: true, cssStyle: 'font-weight:bold;'});
