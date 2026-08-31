var ptx_lunr_search_style = "textbook";
var ptx_lunr_docs = [
{
  "id": "preface",
  "level": "1",
  "url": "preface.html",
  "type": "Preface",
  "number": "",
  "title": "Preface",
  "body": " Preface  [TODO: a short note to students -- what this course covers, how these notes are organized (each section moves from a motivating question, to a worked problem, to the general rule or theorem), and how the notes connect to the skills you'll be assessed on this semester.]  "
},
{
  "id": "sec-derivatives-refresher",
  "level": "1",
  "url": "sec-derivatives-refresher.html",
  "type": "Section",
  "number": "1.1",
  "title": "Derivative Rules and Critical Points",
  "body": " Derivative Rules and Critical Points    What does a derivative actually mean?  Picture yourself driving. The odometer racks up total distance, and dividing that by elapsed time gives your average speed for the whole trip — one honest number, easy to compute. The speedometer is answering a stranger question: how fast are you going right now , at this exact instant? There's no stretch of time to divide by here — time isn't passing at an instant. And yet the needle gives a real, meaningful number. Figuring out what that number even means , and how to compute it for any changing quantity — not just a car's position, but a population, a temperature, an account balance — is the entire point of a derivative.  Here's the trick that makes \"speed right now\" computable: you can't measure it directly, but you can measure average speed over a short window of time, and see what happens as that window shrinks toward nothing. Say your position after seconds is (in some units), and you want your speed exactly at . Average speed over is . Watch what happens as shrinks:   The average speeds aren't jumping around — they're homing in on . That limiting number, the one the average settles toward as the time window shrinks to a single instant, is the instantaneous speed at . Nothing mystical is happening; we're just squeezing an average over a smaller and smaller window until, in the limit, it stops being an average of two points and becomes a property of one.   Try it yourself   Push the squeeze one step further than the table above. For , what is the average speed on the interval ?  Average speed          Right on the money — and this is even closer to than the row was. Shrink further and this number keeps sliding toward .       The same squeeze has a geometric picture, and it's the one worth keeping in your head all semester. Take any curve and a point on it. Pick a second, nearby point, and draw the line through both — a secant line . Its slope is exactly the average rate of change we computed above, . Now let that second point slide back toward the first, so . The secant line swings around and settles onto the tangent line : the line that just grazes the curve at that single point, tilted at exactly the curve's own steepness there. That settling slope is the derivative.   Dragging toward turns the secant line into the tangent line.     The big idea  A derivative is nothing more than: the slope an average rate of change settles into as the interval it's averaged over shrinks to a single point. Everything in this subsection — the formula below, the rules in the next subsection, all of it — is just bookkeeping built on top of that one idea.   Writing that squeeze down symbolically, instead of re-deriving it with a table of numbers every time, gives the formal definition:   The derivative   The derivative of at , written , is provided the limit exists.    You'll hear described two ways, and both readings trace straight back to the picture above. Geometrically, it's the slope of the tangent line to at — useful whenever you care about steepness. Physically, it's an instantaneous rate of change — useful whenever you care about how fast something is happening right now. Velocity is the derivative of position; marginal cost is the derivative of total cost; the rate an epidemic spreads is the derivative of case count. Same computation, different story attached to it depending on what represents.   True or false?    tells you the average rate of change of over the interval from to .    False. is the instantaneous rate of change at the single point — there's no interval left to average over once the limit has been taken. The average rate of change over is the different number , and generally won't match at all.     Computing a derivative directly from the definition   Let . Find using , and check it against the numerical squeeze above.    Set up the difference quotient and simplify before taking the limit — plugging in too early gives the meaningless , since we need the algebra to cancel that out of the denominator first.   Now can safely go to , since it's no longer sitting in a denominator. At this gives — exactly the number our shrinking-window table was homing in on. The definition isn't just abstract machinery; it's the same squeeze, done symbolically instead of numerically, for every at once.    That algebra worked fine for , but imagine repeating it for , or . The definition is the truth of what a derivative is — you should always be able to fall back on it — but it's a slow way to compute one. The rules below exist purely so you never have to run that limit by hand again; every single one of them is just this same limit, worked out once and in general, for a whole family of functions at a time.    The differentiation toolkit  Rather than list these as symbols to memorize, here's the intuition behind each one — the picture that makes the formula feel inevitable rather than arbitrary. A clean reference table for all of them sits at the end of this subsection once the ideas are back in place.  Three of the rules are close to obvious once you see them stated. A constant function never changes, so its rate of change is . Scaling a function by a constant factor scales its rate of change by that same factor — if you triple every output, you triple how fast it's changing too. And if two quantities change independently and you add them together (two separate savings accounts, each earning its own interest), the combined total changes at the combined rate — you just add the two rates.   The Power Rule takes a little more picturing. Think of as copies of multiplied together. Nudge up by a tiny amount, and each of those copies gets nudged — each contributing its own small sliver to the product. With nudges each worth roughly stacking up, the total rate of change comes out to times :   (That picture is easiest to see for a whole number , but the formula itself holds for any real exponent — negative, fractional, whatever you throw at it.)   Quick check: Power Rule   Which of these is ?      Careful with the exponent step: the Power Rule drops the exponent by , so becomes , not .     Right — bring the down as a coefficient, then drop the exponent by one: becomes .     The exponent change is right, but the sign of the coefficient should carry over from the original .     That mixes up two different rules. The Power Rule just brings the exponent down as a coefficient and lowers it by — nothing gets multiplied twice.      Two more Power Rule reflexes   Use the Power Rule to differentiate, then evaluate at the given point.  If , then    If , then         Yes — , and .       Yes — rewrite as first, so , and .      The Product Rule has a nice picture too. Imagine a rectangle whose width is and whose height is , so its area is . Nudge slightly, and both sides grow a little. The extra area shows up as two thin strips — one along the top from the width growing (worth ) and one along the side from the height growing (worth ) — plus a tiny corner sliver so small it vanishes in the limit. Add the two strips and you have the whole rule: differentiate one factor at a time, holding the other one fixed, and add the results.  The Quotient Rule isn't really a separate idea — it's the Product Rule wearing a disguise. Write as and apply the Product Rule (plus the Chain Rule, below, to differentiate ), and the familiar formula falls out on its own — which is also why the minus sign and the in the denominator show up right where they do.  The Chain Rule is usually the rustiest one, and it's the one we'll lean on hardest all semester — substitution, our main integration technique in Chapter , is really the Chain Rule run backwards. Picture two gears meshed together: turn the first one, and it turns the second at a rate scaled by the gear ratio between them. A composed function works the same way — an \"outer\" function wrapped around an \"inner\" function . Nudging nudges at rate , and that nudge to in turn nudges at rate (evaluated at , not at ). The two rates multiply, gear-ratio style:   Alongside these rules for combining functions, you'll need the rates of a handful of specific functions on recall. Two are worth a quick word rather than bare memorization. is the unique function that is its own rate of change — at every instant it's already growing exactly as fast as its current size demands, the way an account under continuous compounding grows faster the bigger it gets. And differentiating a wave produces another wave, a quarter-cycle out of step: the slope of traces out , whose own slope traces out , and so on around.   Standard derivatives       Product Rule and Chain Rule together   Differentiate .    This is a product of two functions, and , so start with the Product Rule. The second factor needs the Chain Rule on its own: the \"outside\" function is and the \"inside\" function is , whose derivative is .      Quotient Rule   Differentiate .       For quick reference once the intuition above has done its job:   Basic differentiation rules, all in one place   For differentiable functions and , and a constant :       Critical points  One more piece of vocabulary, and it follows straight from the tangent-line picture. Imagine hiking along the graph of like a trail. At most points the ground under your feet is tilted — you're climbing or descending. But right at the top of a hill, or the bottom of a valley, the ground goes momentarily flat: for that one instant, slope zero, before it tips the other way. That flatness is exactly , and it's worth naming.   Drag the hiker along the trail and watch the slope underfoot hit at the hilltop and the valley bottom.     Critical point   A critical point of is a value in the domain of where either (flat ground) or does not exist (a sharp corner or break, where \"the slope\" isn't even well-defined).    Critical points are exactly the candidates for a hilltop or valley bottom — not every flat spot turns out to be one (a trail can flatten briefly and keep climbing, like a switchback), but every genuine peak or valley in the interior of the trail has to be a critical point first. That's the entire engine behind optimization, which is where we're headed next: find the flat spots, then work out which ones are actually the top or bottom.   Finding critical points   Find the critical points of .     is a polynomial, so is defined everywhere; the only critical points come from .   So has critical points at and . (Sketch if you want to see why: it has a local max at and a local min at , exactly the two flat spots on that curve's trail.)     Try it yourself   Find the critical points of . Enter the smaller value first.  Smaller critical point:     Larger critical point:        Right — gives , and the smaller root is .       Right — the other solution of is .      With the mechanics of differentiation and the idea of a critical point back in hand, we're ready for Chapter , where \"find the critical points\" becomes the key step in solving real optimization problems.   "
},
{
  "id": "subsec-what-is-a-derivative-2",
  "level": "2",
  "url": "sec-derivatives-refresher.html#subsec-what-is-a-derivative-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "average speed "
},
{
  "id": "check-numeric-squeeze",
  "level": "2",
  "url": "sec-derivatives-refresher.html#check-numeric-squeeze",
  "type": "Checkpoint",
  "number": "1.1.1",
  "title": "Try it yourself.",
  "body": " Try it yourself   Push the squeeze one step further than the table above. For , what is the average speed on the interval ?  Average speed          Right on the money — and this is even closer to than the row was. Shrink further and this number keeps sliding toward .      "
},
{
  "id": "subsec-what-is-a-derivative-7",
  "level": "2",
  "url": "sec-derivatives-refresher.html#subsec-what-is-a-derivative-7",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "secant line tangent line "
},
{
  "id": "fig-secant-to-tangent",
  "level": "2",
  "url": "sec-derivatives-refresher.html#fig-secant-to-tangent",
  "type": "Figure",
  "number": "1.1.2",
  "title": "",
  "body": " Dragging toward turns the secant line into the tangent line.   "
},
{
  "id": "subsec-what-is-a-derivative-9",
  "level": "2",
  "url": "sec-derivatives-refresher.html#subsec-what-is-a-derivative-9",
  "type": "Insight",
  "number": "1.1.3",
  "title": "The big idea.",
  "body": " The big idea  A derivative is nothing more than: the slope an average rate of change settles into as the interval it's averaged over shrinks to a single point. Everything in this subsection — the formula below, the rules in the next subsection, all of it — is just bookkeeping built on top of that one idea.  "
},
{
  "id": "def-derivative",
  "level": "2",
  "url": "sec-derivatives-refresher.html#def-derivative",
  "type": "Definition",
  "number": "1.1.4",
  "title": "The derivative.",
  "body": " The derivative   The derivative of at , written , is provided the limit exists.   "
},
{
  "id": "subsec-what-is-a-derivative-12",
  "level": "2",
  "url": "sec-derivatives-refresher.html#subsec-what-is-a-derivative-12",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "slope of the tangent line instantaneous rate of change "
},
{
  "id": "check-derivative-meaning",
  "level": "2",
  "url": "sec-derivatives-refresher.html#check-derivative-meaning",
  "type": "Checkpoint",
  "number": "1.1.5",
  "title": "True or false?",
  "body": " True or false?    tells you the average rate of change of over the interval from to .    False. is the instantaneous rate of change at the single point — there's no interval left to average over once the limit has been taken. The average rate of change over is the different number , and generally won't match at all.   "
},
{
  "id": "example-derivative-from-definition",
  "level": "2",
  "url": "sec-derivatives-refresher.html#example-derivative-from-definition",
  "type": "Example",
  "number": "1.1.6",
  "title": "Computing a derivative directly from the definition.",
  "body": " Computing a derivative directly from the definition   Let . Find using , and check it against the numerical squeeze above.    Set up the difference quotient and simplify before taking the limit — plugging in too early gives the meaningless , since we need the algebra to cancel that out of the denominator first.   Now can safely go to , since it's no longer sitting in a denominator. At this gives — exactly the number our shrinking-window table was homing in on. The definition isn't just abstract machinery; it's the same squeeze, done symbolically instead of numerically, for every at once.   "
},
{
  "id": "subsec-differentiation-rules-3",
  "level": "2",
  "url": "sec-derivatives-refresher.html#subsec-differentiation-rules-3",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "constant "
},
{
  "id": "subsec-differentiation-rules-5",
  "level": "2",
  "url": "sec-derivatives-refresher.html#subsec-differentiation-rules-5",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Power Rule "
},
{
  "id": "check-power-rule-negative",
  "level": "2",
  "url": "sec-derivatives-refresher.html#check-power-rule-negative",
  "type": "Checkpoint",
  "number": "1.1.7",
  "title": "Quick check: Power Rule.",
  "body": " Quick check: Power Rule   Which of these is ?      Careful with the exponent step: the Power Rule drops the exponent by , so becomes , not .     Right — bring the down as a coefficient, then drop the exponent by one: becomes .     The exponent change is right, but the sign of the coefficient should carry over from the original .     That mixes up two different rules. The Power Rule just brings the exponent down as a coefficient and lowers it by — nothing gets multiplied twice.    "
},
{
  "id": "check-power-rule-more",
  "level": "2",
  "url": "sec-derivatives-refresher.html#check-power-rule-more",
  "type": "Checkpoint",
  "number": "1.1.8",
  "title": "Two more Power Rule reflexes.",
  "body": " Two more Power Rule reflexes   Use the Power Rule to differentiate, then evaluate at the given point.  If , then    If , then         Yes — , and .       Yes — rewrite as first, so , and .     "
},
{
  "id": "subsec-differentiation-rules-10",
  "level": "2",
  "url": "sec-derivatives-refresher.html#subsec-differentiation-rules-10",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Product Rule "
},
{
  "id": "subsec-differentiation-rules-11",
  "level": "2",
  "url": "sec-derivatives-refresher.html#subsec-differentiation-rules-11",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Quotient Rule "
},
{
  "id": "subsec-differentiation-rules-12",
  "level": "2",
  "url": "sec-derivatives-refresher.html#subsec-differentiation-rules-12",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Chain Rule "
},
{
  "id": "fact-standard-derivatives",
  "level": "2",
  "url": "sec-derivatives-refresher.html#fact-standard-derivatives",
  "type": "Fact",
  "number": "1.1.9",
  "title": "Standard derivatives.",
  "body": " Standard derivatives     "
},
{
  "id": "example-product-chain",
  "level": "2",
  "url": "sec-derivatives-refresher.html#example-product-chain",
  "type": "Example",
  "number": "1.1.10",
  "title": "Product Rule and Chain Rule together.",
  "body": " Product Rule and Chain Rule together   Differentiate .    This is a product of two functions, and , so start with the Product Rule. The second factor needs the Chain Rule on its own: the \"outside\" function is and the \"inside\" function is , whose derivative is .    "
},
{
  "id": "example-quotient",
  "level": "2",
  "url": "sec-derivatives-refresher.html#example-quotient",
  "type": "Example",
  "number": "1.1.11",
  "title": "Quotient Rule.",
  "body": " Quotient Rule   Differentiate .      "
},
{
  "id": "fact-basic-rules",
  "level": "2",
  "url": "sec-derivatives-refresher.html#fact-basic-rules",
  "type": "Fact",
  "number": "1.1.12",
  "title": "Basic differentiation rules, all in one place.",
  "body": " Basic differentiation rules, all in one place   For differentiable functions and , and a constant :    "
},
{
  "id": "fig-hiking-trail",
  "level": "2",
  "url": "sec-derivatives-refresher.html#fig-hiking-trail",
  "type": "Figure",
  "number": "1.1.13",
  "title": "",
  "body": " Drag the hiker along the trail and watch the slope underfoot hit at the hilltop and the valley bottom.   "
},
{
  "id": "def-critical-point",
  "level": "2",
  "url": "sec-derivatives-refresher.html#def-critical-point",
  "type": "Definition",
  "number": "1.1.14",
  "title": "Critical point.",
  "body": " Critical point   A critical point of is a value in the domain of where either (flat ground) or does not exist (a sharp corner or break, where \"the slope\" isn't even well-defined).   "
},
{
  "id": "example-critical-points",
  "level": "2",
  "url": "sec-derivatives-refresher.html#example-critical-points",
  "type": "Example",
  "number": "1.1.15",
  "title": "Finding critical points.",
  "body": " Finding critical points   Find the critical points of .     is a polynomial, so is defined everywhere; the only critical points come from .   So has critical points at and . (Sketch if you want to see why: it has a local max at and a local min at , exactly the two flat spots on that curve's trail.)   "
},
{
  "id": "check-critical-points",
  "level": "2",
  "url": "sec-derivatives-refresher.html#check-critical-points",
  "type": "Checkpoint",
  "number": "1.1.16",
  "title": "Try it yourself.",
  "body": " Try it yourself   Find the critical points of . Enter the smaller value first.  Smaller critical point:     Larger critical point:        Right — gives , and the smaller root is .       Right — the other solution of is .     "
},
{
  "id": "sec-pre-assignment-optimization",
  "level": "1",
  "url": "sec-pre-assignment-optimization.html",
  "type": "Section",
  "number": "2.1",
  "title": "Pre-Assignment: Before Tuesday’s Class",
  "body": " Pre-Assignment: Before Tuesday's Class  Complete the short warm-up below before we meet Tuesday. It connects the critical-point skill from to the idea of optimization, and takes about 10 minutes.   Open the pre-assignment and sign in (your own Doenet account, or create a free one) before you start, so your work is recorded for completion credit. It opens in a new tab.  "
},
{
  "id": "sec-4-7-optimization",
  "level": "1",
  "url": "sec-4-7-optimization.html",
  "type": "Section",
  "number": "2.2",
  "title": "Optimization Problems",
  "body": " Optimization Problems   [Motivation -- TODO: the question or problem that makes this worth learning]  [Problem -- TODO: a guiding worked example]  [Abstraction -- TODO: the general rule, definition, or theorem this section establishes]  "
},
{
  "id": "sec-4-8-newtons-method",
  "level": "1",
  "url": "sec-4-8-newtons-method.html",
  "type": "Section",
  "number": "2.3",
  "title": "Newton’s Method",
  "body": " Newton's Method   [Motivation -- TODO: the question or problem that makes this worth learning]  [Problem -- TODO: a guiding worked example]  [Abstraction -- TODO: the general rule, definition, or theorem this section establishes]  "
},
{
  "id": "sec-4-9-antiderivatives",
  "level": "1",
  "url": "sec-4-9-antiderivatives.html",
  "type": "Section",
  "number": "2.4",
  "title": "Antiderivatives",
  "body": " Antiderivatives   [Motivation -- TODO: the question or problem that makes this worth learning]  [Problem -- TODO: a guiding worked example]  [Abstraction -- TODO: the general rule, definition, or theorem this section establishes]  "
},
{
  "id": "sec-5-1-areas-distances",
  "level": "1",
  "url": "sec-5-1-areas-distances.html",
  "type": "Section",
  "number": "3.1",
  "title": "Areas and Distances",
  "body": " Areas and Distances   [Motivation -- TODO: the question or problem that makes this worth learning]  [Problem -- TODO: a guiding worked example]  [Abstraction -- TODO: the general rule, definition, or theorem this section establishes]  "
},
{
  "id": "sec-5-2-definite-integral",
  "level": "1",
  "url": "sec-5-2-definite-integral.html",
  "type": "Section",
  "number": "3.2",
  "title": "The Definite Integral",
  "body": " The Definite Integral   [Motivation -- TODO: the question or problem that makes this worth learning]  [Problem -- TODO: a guiding worked example]  [Abstraction -- TODO: the general rule, definition, or theorem this section establishes]  "
},
{
  "id": "sec-5-3-ftc",
  "level": "1",
  "url": "sec-5-3-ftc.html",
  "type": "Section",
  "number": "3.3",
  "title": "The Fundamental Theorem of Calculus",
  "body": " The Fundamental Theorem of Calculus   [Motivation -- TODO: the question or problem that makes this worth learning]  [Problem -- TODO: a guiding worked example]  [Abstraction -- TODO: the general rule, definition, or theorem this section establishes]  "
},
{
  "id": "sec-5-4-indefinite-net-change",
  "level": "1",
  "url": "sec-5-4-indefinite-net-change.html",
  "type": "Section",
  "number": "3.4",
  "title": "Indefinite Integrals and the Net Change Theorem",
  "body": " Indefinite Integrals and the Net Change Theorem   [Motivation -- TODO: the question or problem that makes this worth learning]  [Problem -- TODO: a guiding worked example]  [Abstraction -- TODO: the general rule, definition, or theorem this section establishes]  "
},
{
  "id": "sec-5-5-substitution",
  "level": "1",
  "url": "sec-5-5-substitution.html",
  "type": "Section",
  "number": "3.5",
  "title": "The Substitution Rule",
  "body": " The Substitution Rule   [Motivation -- TODO: the question or problem that makes this worth learning]  [Problem -- TODO: a guiding worked example]  [Abstraction -- TODO: the general rule, definition, or theorem this section establishes]  "
},
{
  "id": "sec-6-1-areas-between-curves",
  "level": "1",
  "url": "sec-6-1-areas-between-curves.html",
  "type": "Section",
  "number": "4.1",
  "title": "Areas Between Curves",
  "body": " Areas Between Curves   [Motivation -- TODO: the question or problem that makes this worth learning]  [Problem -- TODO: a guiding worked example]  [Abstraction -- TODO: the general rule, definition, or theorem this section establishes]  "
},
{
  "id": "sec-6-2-volumes",
  "level": "1",
  "url": "sec-6-2-volumes.html",
  "type": "Section",
  "number": "4.2",
  "title": "Volumes (Disks and Washers)",
  "body": " Volumes (Disks and Washers)   [Motivation -- TODO: the question or problem that makes this worth learning]  [Problem -- TODO: a guiding worked example]  [Abstraction -- TODO: the general rule, definition, or theorem this section establishes]  "
},
{
  "id": "sec-6-3-cylindrical-shells",
  "level": "1",
  "url": "sec-6-3-cylindrical-shells.html",
  "type": "Section",
  "number": "4.3",
  "title": "Volumes by Cylindrical Shells",
  "body": " Volumes by Cylindrical Shells   [Motivation -- TODO: the question or problem that makes this worth learning]  [Problem -- TODO: a guiding worked example]  [Abstraction -- TODO: the general rule, definition, or theorem this section establishes]  "
},
{
  "id": "sec-6-4-work",
  "level": "1",
  "url": "sec-6-4-work.html",
  "type": "Section",
  "number": "4.4",
  "title": "Work",
  "body": " Work   [Motivation -- TODO: the question or problem that makes this worth learning]  [Problem -- TODO: a guiding worked example]  [Abstraction -- TODO: the general rule, definition, or theorem this section establishes]  "
},
{
  "id": "sec-6-5-average-value",
  "level": "1",
  "url": "sec-6-5-average-value.html",
  "type": "Section",
  "number": "4.5",
  "title": "Average Value of a Function",
  "body": " Average Value of a Function   [Motivation -- TODO: the question or problem that makes this worth learning]  [Problem -- TODO: a guiding worked example]  [Abstraction -- TODO: the general rule, definition, or theorem this section establishes]  "
},
{
  "id": "sec-8-1-arc-length",
  "level": "1",
  "url": "sec-8-1-arc-length.html",
  "type": "Section",
  "number": "5.1",
  "title": "Arc Length",
  "body": " Arc Length   [Motivation -- TODO: the question or problem that makes this worth learning]  [Problem -- TODO: a guiding worked example]  [Abstraction -- TODO: the general rule, definition, or theorem this section establishes]  "
},
{
  "id": "sec-8-2-surface-area",
  "level": "1",
  "url": "sec-8-2-surface-area.html",
  "type": "Section",
  "number": "5.2",
  "title": "Area of a Surface of Revolution",
  "body": " Area of a Surface of Revolution   [Motivation -- TODO: the question or problem that makes this worth learning]  [Problem -- TODO: a guiding worked example]  [Abstraction -- TODO: the general rule, definition, or theorem this section establishes]  "
},
{
  "id": "sec-8-3-applications-physics-engineering",
  "level": "1",
  "url": "sec-8-3-applications-physics-engineering.html",
  "type": "Section",
  "number": "5.3",
  "title": "Applications to Physics and Engineering",
  "body": " Applications to Physics and Engineering   [Motivation -- TODO: the question or problem that makes this worth learning]  [Problem -- TODO: a guiding worked example]  [Abstraction -- TODO: the general rule, definition, or theorem this section establishes]  "
},
{
  "id": "backmatter-2",
  "level": "1",
  "url": "backmatter-2.html",
  "type": "Colophon",
  "number": "",
  "title": "Colophon",
  "body": " These notes were authored in PreTeXt .  "
}
]

var ptx_lunr_idx = lunr(function () {
  this.ref('id')
  this.field('title')
  this.field('body')
  this.metadataWhitelist = ['position']

  ptx_lunr_docs.forEach(function (doc) {
    this.add(doc)
  }, this)
})
