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
  "body": " Derivative Rules and Critical Points    What does a derivative actually mean?  Before any rules: what problem is the derivative actually solving? Picture a curve and a point on it. You want to know how steep the curve is right at that point — not the average steepness between two far-apart points, but the steepness at one exact instant. That's the whole idea. Everything else is machinery for computing it.  A first attempt: pick a second, nearby point on the curve and find the slope of the line connecting the two (a secant line ). If the two points are and , that slope is This is only an average rate of change over the gap between the two points — not what we wanted. But if we let the gap shrink toward , the secant line swings around and settles onto the tangent line at : the line that just grazes the curve at that single point. That limiting slope is the derivative.   The derivative   The derivative of at , written , is provided the limit exists. Geometrically, is the slope of the tangent line to at the point . Just as often, we read it as a rate of change : how fast is changing, per unit change in , at that instant.    Both readings matter all semester. \"Slope of the tangent line\" is the picture to keep in your head; \"instantaneous rate of change\" is how derivatives show up in every applied problem — velocity is the derivative of position, marginal cost is the derivative of total cost, and so on.   Computing a derivative directly from the definition   Let . Find using .    Set up the difference quotient and simplify before taking the limit — plugging in too early gives .   Now can safely go to , since it's no longer in a denominator. This confirms something you likely remember: the derivative of is .    This works, but imagine doing that algebra for something like , or . The definition is the truth of what a derivative is, but it's a slow way to compute one. That's what the rules below are for: they're all theorems you could prove from the limit definition, packaged so you never have to run that limit by hand again.    The differentiation toolkit  These are the rules you built up over Calc I. Skim them to see what comes back on its own, and flag anything that doesn't — we'll move fast, but we'll use every one of these repeatedly for the rest of the semester.   Basic differentiation rules   For differentiable functions and , and a constant :     The Chain Rule is the one people are rustiest on, and it's the one we'll lean on hardest this semester (substitution, our main integration technique in Chapter , is really the Chain Rule run backwards). The pattern to recognize: a function inside another function. Differentiate the outside function, leave the inside alone, then multiply by the derivative of the inside.  Alongside these, you'll need the derivatives of a handful of specific functions on recall:   Standard derivatives       Product Rule and Chain Rule together   Differentiate .    This is a product of two functions, and , so start with the Product Rule. The second factor needs the Chain Rule on its own: the \"outside\" function is and the \"inside\" function is , whose derivative is .      Quotient Rule   Differentiate .         Critical points  One more piece of vocabulary we'll need immediately in the next chapter. Where a smooth curve has a local peak or valley, its tangent line is flat — slope zero. That observation is worth naming.   Critical point   A critical point of is a value in the domain of where either or does not exist.    Critical points are exactly the candidates for where a function reaches a local maximum or minimum — not every critical point is one, but every local max or min (away from the endpoints of an interval) has to be one. That's the entire engine behind optimization, which is where we're headed next.   Finding critical points   Find the critical points of .     is a polynomial, so is defined everywhere; the only critical points come from .   So has critical points at and . (Sketch if you want to see why: it has a local max at and a local min at .)    With the mechanics of differentiation and the idea of a critical point back in hand, we're ready for Chapter , where \"find the critical points\" becomes the key step in solving real optimization problems.   "
},
{
  "id": "subsec-what-is-a-derivative-3",
  "level": "2",
  "url": "sec-derivatives-refresher.html#subsec-what-is-a-derivative-3",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "secant line tangent line "
},
{
  "id": "def-derivative",
  "level": "2",
  "url": "sec-derivatives-refresher.html#def-derivative",
  "type": "Definition",
  "number": "1.1.1",
  "title": "The derivative.",
  "body": " The derivative   The derivative of at , written , is provided the limit exists. Geometrically, is the slope of the tangent line to at the point . Just as often, we read it as a rate of change : how fast is changing, per unit change in , at that instant.   "
},
{
  "id": "example-derivative-from-definition",
  "level": "2",
  "url": "sec-derivatives-refresher.html#example-derivative-from-definition",
  "type": "Example",
  "number": "1.1.2",
  "title": "Computing a derivative directly from the definition.",
  "body": " Computing a derivative directly from the definition   Let . Find using .    Set up the difference quotient and simplify before taking the limit — plugging in too early gives .   Now can safely go to , since it's no longer in a denominator. This confirms something you likely remember: the derivative of is .   "
},
{
  "id": "fact-basic-rules",
  "level": "2",
  "url": "sec-derivatives-refresher.html#fact-basic-rules",
  "type": "Fact",
  "number": "1.1.3",
  "title": "Basic differentiation rules.",
  "body": " Basic differentiation rules   For differentiable functions and , and a constant :    "
},
{
  "id": "subsec-differentiation-rules-4",
  "level": "2",
  "url": "sec-derivatives-refresher.html#subsec-differentiation-rules-4",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "inside "
},
{
  "id": "fact-standard-derivatives",
  "level": "2",
  "url": "sec-derivatives-refresher.html#fact-standard-derivatives",
  "type": "Fact",
  "number": "1.1.4",
  "title": "Standard derivatives.",
  "body": " Standard derivatives     "
},
{
  "id": "example-product-chain",
  "level": "2",
  "url": "sec-derivatives-refresher.html#example-product-chain",
  "type": "Example",
  "number": "1.1.5",
  "title": "Product Rule and Chain Rule together.",
  "body": " Product Rule and Chain Rule together   Differentiate .    This is a product of two functions, and , so start with the Product Rule. The second factor needs the Chain Rule on its own: the \"outside\" function is and the \"inside\" function is , whose derivative is .    "
},
{
  "id": "example-quotient",
  "level": "2",
  "url": "sec-derivatives-refresher.html#example-quotient",
  "type": "Example",
  "number": "1.1.6",
  "title": "Quotient Rule.",
  "body": " Quotient Rule   Differentiate .      "
},
{
  "id": "def-critical-point",
  "level": "2",
  "url": "sec-derivatives-refresher.html#def-critical-point",
  "type": "Definition",
  "number": "1.1.7",
  "title": "Critical point.",
  "body": " Critical point   A critical point of is a value in the domain of where either or does not exist.   "
},
{
  "id": "example-critical-points",
  "level": "2",
  "url": "sec-derivatives-refresher.html#example-critical-points",
  "type": "Example",
  "number": "1.1.8",
  "title": "Finding critical points.",
  "body": " Finding critical points   Find the critical points of .     is a polynomial, so is defined everywhere; the only critical points come from .   So has critical points at and . (Sketch if you want to see why: it has a local max at and a local min at .)   "
},
{
  "id": "sec-4-7-optimization",
  "level": "1",
  "url": "sec-4-7-optimization.html",
  "type": "Section",
  "number": "2.1",
  "title": "Optimization Problems",
  "body": " Optimization Problems   [Motivation -- TODO: the question or problem that makes this worth learning]  [Problem -- TODO: a guiding worked example]  [Abstraction -- TODO: the general rule, definition, or theorem this section establishes]  "
},
{
  "id": "sec-4-8-newtons-method",
  "level": "1",
  "url": "sec-4-8-newtons-method.html",
  "type": "Section",
  "number": "2.2",
  "title": "Newton’s Method",
  "body": " Newton's Method   [Motivation -- TODO: the question or problem that makes this worth learning]  [Problem -- TODO: a guiding worked example]  [Abstraction -- TODO: the general rule, definition, or theorem this section establishes]  "
},
{
  "id": "sec-4-9-antiderivatives",
  "level": "1",
  "url": "sec-4-9-antiderivatives.html",
  "type": "Section",
  "number": "2.3",
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
