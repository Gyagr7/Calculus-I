// Region between x = y^2 and x = y + 2 (Sec 6.1, Handout sections 7-8).
// Slider moves one strip across the region. The checkbox switches between
// vertical strips (bottom curve changes at x = 1) and horizontal strips (one description works).
// The div id below must match the <slate> xml:id in sec-6-1-areas-between-curves.ptx.
var board = JXG.JSXGraph.initBoard('interactive-strip-direction-slate', {
    boundingbox: [-0.7, 3.0, 5.0, -2.0],
    axis: true,
    showCopyright: false,
    showNavigation: false,
    keepAspectRatio: false
});

var cb = board.create('checkbox', [-0.5, -1.7, ' Use horizontal strips'], {fixed: true});
function horiz() { return cb.Value(); }

var ps = board.create('slider', [[-0.5, 2.7], [1.6, 2.7], [0.02, 0.4, 0.98]], {
    name: 'slide', snapWidth: 0.01, precision: 2
});

var region = board.create('curve', [[], []], {fillColor: '#7fb3e6', fillOpacity: 0.3, strokeWidth: 0, highlight: false});
region.updateDataArray = function () {
    var X = [], Y = [], i, y;
    for (i = 0; i <= 60; i++) { y = -1 + 3 * i / 60; X.push(y * y); Y.push(y); }
    X.push(-1 + 2); Y.push(-1);
    this.dataX = X; this.dataY = Y;
};

board.create('curve', [function (t) { return t * t; }, function (t) { return t; }, -1.3, 2.15],
    {strokeColor: '#0066cc', strokeWidth: 3, highlight: false});
board.create('curve', [function (t) { return t + 2; }, function (t) { return t; }, -1.5, 2.4],
    {strokeColor: '#cc3333', strokeWidth: 3, highlight: false});
board.create('text', [0.15, -1.35, 'x = y^2'], {fontSize: 15, color: '#0066cc', fixed: true});
board.create('text', [3.55, 1.2, 'x = y + 2'], {fontSize: 15, color: '#cc3333', fixed: true});

var strip = board.create('curve', [[], []], {
    fillColor: '#f2a65a', fillOpacity: 0.85, strokeColor: '#c45f00', strokeWidth: 2, highlight: false
});
function vert() {
    var x = 4 * ps.Value(), top = Math.sqrt(x), bot = x <= 1 ? -Math.sqrt(x) : x - 2;
    return {x: x, top: top, bot: bot, botName: x <= 1 ? 'y = -sqrt(x)  (the parabola again)' : 'y = x - 2  (the line)'};
}
function hor() {
    var y = -1 + 3 * ps.Value();
    return {y: y, left: y * y, right: y + 2};
}
strip.updateDataArray = function () {
    var W;
    if (horiz()) {
        var h = hor(); W = 0.06;
        this.dataX = [h.left, h.right, h.right, h.left, h.left];
        this.dataY = [h.y - W / 2, h.y - W / 2, h.y + W / 2, h.y + W / 2, h.y - W / 2];
    } else {
        var v = vert(); W = 0.08;
        this.dataX = [v.x - W / 2, v.x + W / 2, v.x + W / 2, v.x - W / 2, v.x - W / 2];
        this.dataY = [v.bot, v.bot, v.top, v.top, v.bot];
    }
};

board.create('text', [2.45, -0.5, function () {
    if (horiz()) {
        var h = hor();
        return 'y = ' + h.y.toFixed(2) +
            '<br>left: x = y^2 = ' + h.left.toFixed(2) +
            '<br>right: x = y + 2 = ' + h.right.toFixed(2) +
            '<br><b>length = ' + (h.right - h.left).toFixed(2) + '</b>';
    }
    var v = vert();
    return 'x = ' + v.x.toFixed(2) +
        '<br>top: y = sqrt(x) = ' + v.top.toFixed(2) +
        '<br>bottom: ' + v.botName + ' = ' + v.bot.toFixed(2) +
        '<br><b>height = ' + (v.top - v.bot).toFixed(2) + '</b>';
}], {fontSize: 14, fixed: true});

JXG.addEvent(cb.rendNodeCheckbox, 'change', function () { board.update(); }, cb);
