// The "hiking trail" picture for critical points: drag the hiker along
// the trail and watch the tangent-line slope hit 0 at the hilltop and
// the valley bottom. The div id below must match the <slate> xml:id.
var board = JXG.JSXGraph.initBoard('interactive-hiking-trail-slate', {
    boundingbox: [-4.5, 4, 4.5, -4],
    axis: true,
    showCopyright: false,
    showNavigation: true,
    keepAspectRatio: false
});

// The trail: f(x) = 0.1x^3 - x, drawn as a parametric curve
var trail = board.create('curve', [
    function (t) { return t; },
    function (t) { return 0.1 * t * t * t - t; }
], {strokeColor: '#0066cc', strokeWidth: 2});
trail.setAttribute({fillOpacity: 0});

// The hiker: a glider constrained to the trail, draggable
var hiker = board.create('glider', [-3, 1.3, trail], {
    name: 'you are here',
    color: '#cc0000',
    size: 4,
    label: {offset: [10, 10]}
});

// The tangent line at the hiker's feet
var tangentLine = board.create('tangent', [hiker], {
    strokeColor: '#009933',
    strokeWidth: 2
});

// A live readout of the slope underfoot
board.create('text', [-4.3, 3.6, function () {
    var m = tangentLine.getSlope();
    return 'slope under your feet =  ' + m.toFixed(2);
}], {fontSize: 16, cssStyle: 'font-weight:bold;'});

board.create('text', [-4.3, 3.1, 'Drag the hiker. Where is the ground exactly flat?'], {
    fontSize: 13,
    color: '#555555'
});
