// One vertical strip between y = 2x - x^2 (top) and y = x^2 (bottom) on [0, 1] (Sec 6.1, Handout section 3).
// Slider x moves the strip; the text reads off both endpoints and the strip height.
// The div id below must match the <slate> xml:id in sec-6-1-areas-between-curves.ptx.
var board = JXG.JSXGraph.initBoard('interactive-strip-between-slate', {
    boundingbox: [-0.25, 1.5, 1.45, -0.3],
    axis: true,
    showCopyright: false,
    showNavigation: false,
    keepAspectRatio: false
});

function upper(x) { return 2 * x - x * x; }
function lower(x) { return x * x; }

var xs = board.create('slider', [[0.05, 1.38], [0.6, 1.38], [0.02, 0.5, 0.98]], {
    name: 'x', snapWidth: 0.02, precision: 2
});

var region = board.create('curve', [[], []], {
    fillColor: '#7fb3e6', fillOpacity: 0.3, strokeWidth: 0, highlight: false
});
region.updateDataArray = function () {
    var X = [], Y = [], i, x;
    for (i = 0; i <= 60; i++) { x = i / 60; X.push(x); Y.push(upper(x)); }
    for (i = 60; i >= 0; i--) { x = i / 60; X.push(x); Y.push(lower(x)); }
    this.dataX = X; this.dataY = Y;
};

board.create('functiongraph', [upper, -0.05, 1.2], {strokeColor: '#0066cc', strokeWidth: 3, highlight: false});
board.create('functiongraph', [lower, -0.05, 1.15], {strokeColor: '#cc3333', strokeWidth: 3, highlight: false});
board.create('text', [0.04, 0.78, 'y = 2x - x^2'], {fontSize: 15, color: '#0066cc', fixed: true});
board.create('text', [0.82, 0.45, 'y = x^2'], {fontSize: 15, color: '#cc3333', fixed: true});

var W = 0.03;
var strip = board.create('curve', [[], []], {
    fillColor: '#f2a65a', fillOpacity: 0.8, strokeColor: '#c45f00', strokeWidth: 2, highlight: false
});
strip.updateDataArray = function () {
    var x = xs.Value(), lo = lower(x), hi = upper(x);
    this.dataX = [x - W / 2, x + W / 2, x + W / 2, x - W / 2, x - W / 2];
    this.dataY = [lo, lo, hi, hi, lo];
};

board.create('text', [0.03, 1.22, function () {
    var x = xs.Value(), hi = upper(x), lo = lower(x);
    return 'top: y = 2x - x^2 = ' + hi.toFixed(3) +
        '<br>bottom: y = x^2 = ' + lo.toFixed(3) +
        '<br><b>height = ' + (hi - lo).toFixed(3) + '</b>';
}], {fontSize: 14, fixed: true});
