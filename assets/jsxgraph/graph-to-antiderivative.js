// A graph of f (no formula shown to students) and, on request, one antiderivative F with F(0) = 2.
// f(x) = -cos(pi x / 2): negative on (0,1), positive on (1,3), negative on (3,5).
// F(x) = 2 - (2/pi) sin(pi x / 2).
// The div id below must match the <slate> xml:id in sec-4-9-antiderivatives.ptx.
var board = JXG.JSXGraph.initBoard('interactive-graph-to-antiderivative-slate', {
    boundingbox: [-0.4, 3.4, 5.4, -1.7],
    axis: true,
    showCopyright: false,
    showNavigation: false,
    keepAspectRatio: false
});

function f(x) { return -Math.cos(Math.PI * x / 2); }
function F(x) { return 2 - (2 / Math.PI) * Math.sin(Math.PI * x / 2); }

board.create('functiongraph', [f, 0, 5], {strokeColor: '#0066cc', strokeWidth: 3, highlight: false});
board.create('text', [4.3, -1.35, 'y = f(x)'], {fontSize: 15, color: '#0066cc', fixed: true});

var cb = board.create('checkbox', [0.1, 3.1, ' Show one possible F (with F(0) = 2)'], {fixed: true});

board.create('functiongraph', [function (x) { return cb.Value() ? F(x) : NaN; }, 0, 5], {
    strokeColor: '#cc0000', strokeWidth: 3, dash: 2, highlight: false
});
board.create('point', [0, function () { return cb.Value() ? 2 : NaN; }], {
    name: '(0, 2)', color: '#cc0000', size: 3, fixed: true, label: {offset: [6, 10]}
});

JXG.addEvent(cb.rendNodeCheckbox, 'change', function () { board.update(); }, cb);
