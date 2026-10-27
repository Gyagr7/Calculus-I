// One vertical strip under y = 3 - x on [0, 2] (Sec 6.1, Handout sections 0-1).
// Slider x moves the strip. Checkbox raises the floor from y = 0 to y = 1.
// The div id below must match the <slate> xml:id in sec-6-1-areas-between-curves.ptx.
// Note: do not name a function "top" (it collides with window.top).
var board = JXG.JSXGraph.initBoard('interactive-strip-floor-slate', {
    boundingbox: [-0.45, 4.3, 2.9, -1.0],
    axis: true,
    showCopyright: false,
    showNavigation: false,
    keepAspectRatio: false
});

function topY(x) { return 3 - x; }

var cb = board.create('checkbox', [0.05, -0.6, ' Raise the floor to y = 1'], {fixed: true});
function floorY() { return cb.Value() ? 1 : 0; }

var xs = board.create('slider', [[0.15, 3.95], [1.55, 3.95], [0.05, 0.5, 1.95]], {
    name: 'x', snapWidth: 0.05, precision: 2
});

var region = board.create('curve', [[], []], {
    fillColor: '#7fb3e6', fillOpacity: 0.3, strokeWidth: 0, highlight: false
});
region.updateDataArray = function () {
    var f = floorY();
    this.dataX = [0, 0, 2, 2, 0];
    this.dataY = [f, 3, 1, f, f];
};

board.create('functiongraph', [topY, -0.2, 2.6], {strokeColor: '#0066cc', strokeWidth: 3, highlight: false});
board.create('functiongraph', [function () { return cb.Value() ? 1 : NaN; }, -0.2, 2.6],
    {strokeColor: '#cc3333', strokeWidth: 3, highlight: false});
board.create('segment', [[2, 0], [2, 1]], {strokeColor: '#555', dash: 2, highlight: false, fixed: true});
board.create('text', [1.45, 2.05, 'y = 3 - x'], {fontSize: 15, color: '#0066cc', fixed: true});

var W = 0.08;
var strip = board.create('curve', [[], []], {
    fillColor: '#f2a65a', fillOpacity: 0.75, strokeColor: '#c45f00', strokeWidth: 2, highlight: false
});
strip.updateDataArray = function () {
    var x = xs.Value(), f = floorY(), t = topY(x);
    this.dataX = [x - W / 2, x + W / 2, x + W / 2, x - W / 2, x - W / 2];
    this.dataY = [f, f, t, t, f];
};

board.create('text', [1.75, 3.55, function () {
    var x = xs.Value(), f = floorY(), t = topY(x);
    return 'top: y = ' + t.toFixed(2) + '<br>bottom: y = ' + f +
        '<br><b>height = ' + t.toFixed(2) + ' - ' + f + ' = ' + (t - f).toFixed(2) + '</b>';
}], {fontSize: 14, fixed: true, anchorX: 'left'});

JXG.addEvent(cb.rendNodeCheckbox, 'change', function () { board.update(); }, cb);
