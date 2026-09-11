// 40 m of fence around a rectangle: width x, length 20 - x.
// The div id below must match the <slate> xml:id in sec-4-7-optimization.ptx.
var board = JXG.JSXGraph.initBoard('interactive-fence-rectangle-slate', {
    boundingbox: [-2, 25, 24, -5],
    axis: false,
    showCopyright: false,
    showNavigation: false,
    keepAspectRatio: true
});

var s = board.create('slider', [[2, -2.5], [16, -2.5], [0.5, 3, 19.5]], {
    name: 'width',
    snapWidth: 0.5,
    precision: 1
});

function w() { return s.Value(); }
function len() { return 20 - s.Value(); }

var A = board.create('point', [0, 0], {fixed: true, visible: false});
var B = board.create('point', [function () { return w(); }, 0], {visible: false});
var C = board.create('point', [function () { return w(); }, function () { return len(); }], {visible: false});
var D = board.create('point', [0, function () { return len(); }], {visible: false});

board.create('polygon', [A, B, C, D], {
    fillColor: '#7fb3e6',
    fillOpacity: 0.35,
    highlight: false,
    vertices: {visible: false},
    borders: {strokeColor: '#0066cc', strokeWidth: 3, highlight: false}
});

board.create('text', [0, 23.8, function () {
    return 'width = ' + w().toFixed(1) + ' m,   length = ' + len().toFixed(1) + ' m';
}], {fontSize: 15, fixed: true});

board.create('text', [0, 21.8, function () {
    return 'area = ' + (w() * len()).toFixed(1) + ' square meters';
}], {fontSize: 17, fixed: true, cssStyle: 'font-weight:bold;'});
