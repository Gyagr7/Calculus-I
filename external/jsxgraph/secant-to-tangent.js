// Secant line sliding into the tangent line, for f(x) = x^2 at x = 1.
// The div id below must match the <slate> xml:id in the .ptx source.
var board = JXG.JSXGraph.initBoard('interactive-secant-tangent-slate', {
    boundingbox: [-1.5, 10.5, 4.5, -1.5],
    axis: true,
    showCopyright: false,
    showNavigation: true,
    keepAspectRatio: false
});

// f(x) = x^2, drawn as a parametric curve
var curve = board.create('curve', [
    function (t) { return t; },
    function (t) { return t * t; }
], {strokeColor: '#0066cc', strokeWidth: 2});
curve.setAttribute({fillOpacity: 0});

// P is fixed at the point of tangency, x = 1
var P = board.create('glider', [1, 1, curve], {
    name: 'P = (1, 1)',
    fixed: true,
    color: '#cc0000',
    size: 4,
    label: {offset: [-10, -18]}
});

// Q is draggable along the curve; start it away from P
var Q = board.create('glider', [3, 9, curve], {
    name: 'Q',
    color: '#cc7a00',
    size: 4,
    label: {offset: [8, 8]}
});

// The secant line through P and Q
board.create('line', [P, Q], {
    straightFirst: true,
    straightLast: true,
    strokeColor: '#009933',
    strokeWidth: 2
});

// A live readout of the secant slope
board.create('text', [-1.3, 10, function () {
    var m = (Q.Y() - P.Y()) / (Q.X() - P.X());
    return 'secant slope through P and Q =  ' + m.toFixed(3);
}], {fontSize: 16, cssStyle: 'font-weight:bold;'});

board.create('text', [-1.3, 9.1, 'Drag Q toward P. What number does the slope approach?'], {
    fontSize: 13,
    color: '#555555'
});
