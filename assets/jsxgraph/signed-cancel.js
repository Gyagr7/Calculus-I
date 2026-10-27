// y = x and y = x^3 on [-1, 1] (Sec 6.1, Handout sections 4-5).
// Slider x moves a vertical strip. The text compares the signed value x - x^3
// with the actual strip length. Left of 0 the two curves trade places.
// The div id below must match the <slate> xml:id in sec-6-1-areas-between-curves.ptx.
var board = JXG.JSXGraph.initBoard('interactive-signed-cancel-slate', {
    boundingbox: [-1.45, 1.65, 1.45, -1.55],
    axis: true,
    showCopyright: false,
    showNavigation: false,
    keepAspectRatio: false
});

function line(x) { return x; }
function cube(x) { return x * x * x; }

var xs = board.create('slider', [[-1.3, 1.45], [-0.3, 1.45], [-0.96, 0.5, 0.96]], {
    name: 'x', snapWidth: 0.02, precision: 2
});

function piece(a, b, color) {
    var c = board.create('curve', [[], []], {fillColor: color, fillOpacity: 0.3, strokeWidth: 0, highlight: false});
    c.updateDataArray = function () {
        var X = [], Y = [], i, x;
        for (i = 0; i <= 40; i++) { x = a + (b - a) * i / 40; X.push(x); Y.push(line(x)); }
        for (i = 40; i >= 0; i--) { x = a + (b - a) * i / 40; X.push(x); Y.push(cube(x)); }
        this.dataX = X; this.dataY = Y;
    };
}
piece(-1, 0, '#7fb3e6');
piece(0, 1, '#f2a65a');

board.create('functiongraph', [cube, -1.12, 1.12], {strokeColor: '#0066cc', strokeWidth: 3, highlight: false});
board.create('functiongraph', [line, -1.3, 1.3], {strokeColor: '#cc3333', strokeWidth: 3, highlight: false});
board.create('text', [0.55, 0.9, 'y = x'], {fontSize: 15, color: '#cc3333', fixed: true});
board.create('text', [0.95, 0.45, 'y = x^3'], {fontSize: 15, color: '#0066cc', fixed: true});

var W = 0.035;
var strip = board.create('curve', [[], []], {
    fillColor: function () { return xs.Value() >= 0 ? '#f2a65a' : '#e05a5a'; },
    fillOpacity: 0.85, strokeColor: '#333', strokeWidth: 1.5, highlight: false
});
strip.updateDataArray = function () {
    var x = xs.Value(), a = cube(x), b = line(x);
    this.dataX = [x - W / 2, x + W / 2, x + W / 2, x - W / 2, x - W / 2];
    this.dataY = [a, a, b, b, a];
};

board.create('text', [0.15, -0.85, function () {
    var x = xs.Value(), d = x - cube(x);
    var topName = d >= 0 ? 'y = x' : 'y = x^3';
    return 'top curve here: ' + topName +
        '<br>x - x^3 = ' + d.toFixed(3) + (d < 0 ? '  <b style="color:#c62828">(negative!)</b>' : '') +
        '<br><b>strip length = ' + Math.abs(d).toFixed(3) + '</b>';
}], {fontSize: 14, fixed: true});
