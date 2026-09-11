var ptx_lunr_search_style = "textbook";
var ptx_lunr_docs = [
{
  "id": "preface",
  "level": "1",
  "url": "preface.html",
  "type": "Preface",
  "number": "",
  "title": "Before You Start",
  "body": " Before You Start  Welcome to Math 1540.  These notes go with our class. They are not meant to be read like a novel. They are meant to be worked through , with a pencil in your hand.  Every section is built the same way:  A question. Something worth caring about, in plain language.  You try something. A computation, a prediction, or a graph to play with.  Then we give it a name. The definition or rule comes after you have seen why we need it.    Along the way you will see a few kinds of boxes:  Checkpoints ask you to do something right now. Some check your answer instantly. Others have a solution you can open. Try first, then check.  We do examples are worked out step by step, with the thinking written down.  You do problems are your turn to try the same kind of problem.  Pre-assignments link to short warm-ups on Doenet. Do them before class.    Getting a checkpoint wrong costs you nothing. It is exactly how learning starts.  One last thing. If a sentence in here does not make sense, that is on the notes, not on you. Tell me, and I will fix it.  "
},
{
  "id": "sec-derivatives-refresher",
  "level": "1",
  "url": "sec-derivatives-refresher.html",
  "type": "Section",
  "number": "1.1",
  "title": "Derivative Rules and Critical Points",
  "body": " Derivative Rules and Critical Points    What does a derivative actually mean?   Today's Question  Your speedometer says mph. But at a single instant, no time passes. So what is that measuring?   Here is why that is strange. Speed is distance divided by time. At one instant, the time is zero. And you cannot divide by zero.  Yet the needle points at a real number. Where does it come from?   Start with something you can compute  You can compute an average speed. Pick a start time and an end time, then divide:   Say your position after seconds is meters. We want your speed at exactly .  Here is the first average, done for you. From to :   A one-second window is pretty wide, though. Let's shrink it. Your turn.    Shrink the window   Find the average speed of on each window.  From to : m\/s  From to : m\/s        Yes. , so the average is .         Yes. , so the average is .       See a pattern yet? Push it one more step.   One more squeeze   From to , the average speed is m\/s.        Right. Even closer to than last time.        What do you notice?   Line up your averages, from the widest window to the narrowest. What is happening to them? Decide before you open the solution.    They go , , , . Each one is closer to . They are not jumping around. They are settling down.     What just happened  As the window shrinks, the average speed settles on one number: m\/s. That number is your speed at the instant .  Notice what we did not do. We never divided by zero. We just watched where the averages were headed.    Now see it on a graph  The same squeeze has a picture. It is the picture to keep in your head all semester.  Pick a point on a curve. Pick a second point nearby. Draw the line through them. That is a secant line . Its slope is an average rate of change, just like the averages you computed.  Now slide toward . Before you touch the graph, predict: what will happen to the line? What will happen to its slope?    Dragging toward turns the secant line into the tangent line.    The secant line swings around and settles onto one line: the line that just touches the curve at . That is the tangent line .  And its slope? . The same number you found with the table. That is not a coincidence. The table and the picture are the same squeeze.   Now give the idea a name  Twice now, we did the same thing: shrink a window, and watch an average rate of change settle down. That settling number has a name.    The big idea  A derivative is the number an average rate of change settles on as the window shrinks to a single point.  Everything else in this chapter is bookkeeping on top of that one idea.   Here is the same idea, written in symbols.   The derivative   The derivative of at , written , is provided the limit exists.    Check that it matches what you did. The fraction is an average rate of change over a window of width . The part just says: shrink the window.   Two ways to read   On a graph,  is the slope of the tangent line . Use this reading when you care about steepness.   In the world,  is an instantaneous rate of change . Use this reading when you care about how fast something is happening right now.  Velocity is the derivative of position. If is the concentration of a drug in the bloodstream, then tells you how fast that level is rising or falling right now. Same computation. Different story.    True or false?    tells you the average rate of change of over the interval from to .    False. is the rate at the single point . Once the limit is taken, there is no window left to average over. The average over is a different number, , and it usually does not match .     We do: the definition, by hand   Let . Use to find . Then check: does match the we found twice already?    First, a trap. If we plug in right away, we get . That tells us nothing. So we simplify first and take the limit last .   Once the in the denominator cancels, letting is safe.  So , and . Same number, third time.    That worked nicely for . Now imagine doing it for . Or for .  No thanks.  That is why we have rules. Each rule is this same limit, worked out once, for a whole family of functions.   Keep these two apart  The definition tells you what a derivative is .  The rules tell you how to compute one fast.     The differentiation toolkit  You already know these rules. Here is a better question: do you know why they work?  If you know why, you will not mix them up. So for each rule, we start with a guess or a picture. The formula comes second.   Three rules you could guess  Try these before you open the solution. No formulas needed.    Predict first     The function never changes. How fast is it changing?  You triple every output of a function. What happens to how fast it changes?  You have two savings accounts, each growing on its own. How fast does the total grow?        Not at all. Its rate of change is .  It triples too. Three times the output means three times the change.  Add the two rates. The total grows at the combined rate.      If you got those, you already know three rules. Here they are in symbols.    The Power Rule, as a picture  Think of as three copies of multiplied together: .  Now nudge up a tiny bit. Each of the three copies gets nudged. Each nudge adds about worth of change (the other two copies, multiplied).  Three copies. Three nudges. Total rate of change: .  With copies, you get nudges, each worth about :    The picture works for whole numbers . The rule works for any exponent: negative, fractional, anything. Let's put that to the test.   Error analysis: who is right?   Four students differentiated . Which answer is correct?     Student A:  Student A lowered the exponent in the wrong direction. Subtract : , not .    Student B:  Right. Bring the down in front. Then lower the exponent by one: becomes .    Student C:  Student C got the exponent right but lost the minus sign. The number in front is the old exponent, .    Student D:  Student D mixed two rules together. The Power Rule brings the exponent down once and lowers it by . Nothing gets multiplied twice.      You do: two quick ones   Differentiate first. Then plug in the point.  If , then    If , then         Yes. , and .       Yes. The trick is to rewrite as first. Then , and .       The Product Rule, as a picture  Picture a rectangle. Its width is and its height is . So its area is .  Now nudge . Both sides grow a little. Where does the new area show up?  In two thin strips. One strip comes from the width growing: about . The other comes from the height growing: about . There is also a tiny corner piece, but it is so small that it disappears in the limit.  Add the two strips, and that is the whole rule:    In words: differentiate one factor at a time, hold the other one fixed, and add.   The Quotient Rule is not really new  It is the Product Rule in disguise. Write as . Apply the Product Rule, plus the Chain Rule for , and the familiar formula falls out. That is also why the minus sign and the show up where they do.    The Chain Rule: rates multiply  This is usually the rustiest rule. It is also the one we lean on hardest this semester. Substitution, our main integration technique in , is the Chain Rule run backward.  So let's rebuild it from something simple: gears.    Gears   Three gears are linked in a row: , , . Gear turns times as fast as gear . Gear turns times as fast as gear .  Gear turns how many times as fast as gear ?        Yes. . Rates along a chain multiply.      A composition works exactly like those gears.  Nudge , and the inner function changes at rate . That change makes the outer function change at rate , measured at . Two rates in a chain. So multiply:    Watch out  Two places people slip: forgetting the at the end, and plugging into instead of .    A few derivatives to know by heart  Two of these deserve a picture instead of memorizing.   is its own rate of change. The bigger it gets, the faster it grows, like money under continuous compounding.  Differentiating a wave gives back a wave, shifted by a quarter-cycle. The slope of traces out . The slope of traces out .    Standard derivatives       We do: Product Rule and Chain Rule together   Differentiate .     What kind of function is this? A product: times . So the Product Rule goes first.   Does either piece need another rule? Yes. is a composition. The outer function is . The inner function is , with derivative . So .   Now put it together.    Both terms had an in them, so we factored it out.     You do: Quotient Rule   Differentiate . Work it out on paper before you open the solution.       Here is the whole toolkit on one card. Use it as a reference. When you forget a rule, go back to its picture.   The differentiation toolkit, all in one place   For differentiable functions and , and a constant :      Main idea  Every rule is the definition of the derivative, worked out once for a whole family of functions. Remember the picture, and you can rebuild the rule.     Critical points   Question  You are hiking a trail shaped like the graph of . You reach the very top of a hill. What is the ground like under your feet?   Most of the time, the ground is tilted. You are climbing, or you are heading down. Walk the trail below. Watch the slope at the hilltop and at the bottom of the valley.   Drag the hiker along the trail and watch the slope underfoot hit at the hilltop and the valley bottom.    At the top of the hill, the ground is flat. For one instant, the slope is . Then it tips the other way. The bottom of a valley works the same way.  In symbols, a flat spot at means .   One more case: sharp corners  Some peaks are not smooth. Picture the graph of . Its top, at , is a sharp point. What is the slope right there?  There isn't one. Just left of , the slope is . Just right of , it is . So does not exist. But it is still a peak, so we want to count it too.   Now give both cases one name.   Critical point   A critical point of is a value in the domain of where either (flat ground) or does not exist (a sharp corner or a break).    (Your textbook calls these critical numbers . Same idea.)  So every hilltop and valley bottom along the trail (not at its very ends) is a critical point. Does it work the other way? Is every critical point a hilltop or a valley? Decide before you check.   True or false?   If , then has a local maximum or a local minimum at .    False. Try . Its derivative is , so and the ground is flat at . But the graph keeps climbing on both sides. No peak, no valley. Think of a trail that levels off for one step, then keeps going up.     Remember  A critical point is a candidate , not automatically an answer.    We do: find the critical points   Find the critical points of .     Is there anywhere fails to exist? No. is a polynomial, so it has no corners or breaks. That leaves only the flat spots.   Where is the ground flat? Set :   So the critical points are and . Sketch the graph and you will see a hilltop at and a valley at .     You do: find the critical points   Find the critical points of . Enter the smaller value first.  Smaller critical point:     Larger critical point:        Right. gives , and the smaller solution is .       Right. The other solution of is .       Exit ticket   Answer in your own words. One sentence each is plenty.  What is a derivative? No formulas allowed.  If we have the definition, why do we need the rules?  Is every critical point a peak or a valley? Give an example.        One good answer: how fast something is changing at a single instant, found by shrinking an average rate of change down to one point.  The definition is slow. Each rule is the definition worked out once, so we never have to redo the limit by hand.  No. has a critical point at , but no peak or valley there.       Main idea  Peaks and valleys can only happen where the slope is or does not exist. Those points are candidates. Deciding which candidate is the best is what optimization is about.   That is exactly where we go next, in . There, find the critical points becomes one step in solving real problems, like building the biggest possible box from a sheet of cardboard.   "
},
{
  "id": "check-shrink-window",
  "level": "2",
  "url": "sec-derivatives-refresher.html#check-shrink-window",
  "type": "Checkpoint",
  "number": "1.1.1",
  "title": "Shrink the window.",
  "body": " Shrink the window   Find the average speed of on each window.  From to : m\/s  From to : m\/s        Yes. , so the average is .         Yes. , so the average is .      "
},
{
  "id": "check-numeric-squeeze",
  "level": "2",
  "url": "sec-derivatives-refresher.html#check-numeric-squeeze",
  "type": "Checkpoint",
  "number": "1.1.2",
  "title": "One more squeeze.",
  "body": " One more squeeze   From to , the average speed is m\/s.        Right. Even closer to than last time.      "
},
{
  "id": "notice-averages-settle",
  "level": "2",
  "url": "sec-derivatives-refresher.html#notice-averages-settle",
  "type": "Checkpoint",
  "number": "1.1.3",
  "title": "What do you notice?",
  "body": " What do you notice?   Line up your averages, from the widest window to the narrowest. What is happening to them? Decide before you open the solution.    They go , , , . Each one is closer to . They are not jumping around. They are settling down.   "
},
{
  "id": "subsec-what-is-a-derivative-11-3",
  "level": "2",
  "url": "sec-derivatives-refresher.html#subsec-what-is-a-derivative-11-3",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "secant line "
},
{
  "id": "fig-secant-to-tangent",
  "level": "2",
  "url": "sec-derivatives-refresher.html#fig-secant-to-tangent",
  "type": "Figure",
  "number": "1.1.4",
  "title": "",
  "body": " Dragging toward turns the secant line into the tangent line.   "
},
{
  "id": "subsec-what-is-a-derivative-13",
  "level": "2",
  "url": "sec-derivatives-refresher.html#subsec-what-is-a-derivative-13",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "tangent line "
},
{
  "id": "subsec-what-is-a-derivative-16",
  "level": "2",
  "url": "sec-derivatives-refresher.html#subsec-what-is-a-derivative-16",
  "type": "Insight",
  "number": "1.1.5",
  "title": "The big idea.",
  "body": " The big idea  A derivative is the number an average rate of change settles on as the window shrinks to a single point.  Everything else in this chapter is bookkeeping on top of that one idea.  "
},
{
  "id": "def-derivative",
  "level": "2",
  "url": "sec-derivatives-refresher.html#def-derivative",
  "type": "Definition",
  "number": "1.1.6",
  "title": "The derivative.",
  "body": " The derivative   The derivative of at , written , is provided the limit exists.   "
},
{
  "id": "subsec-what-is-a-derivative-20-2",
  "level": "2",
  "url": "sec-derivatives-refresher.html#subsec-what-is-a-derivative-20-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "slope of the tangent line "
},
{
  "id": "subsec-what-is-a-derivative-20-3",
  "level": "2",
  "url": "sec-derivatives-refresher.html#subsec-what-is-a-derivative-20-3",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "instantaneous rate of change "
},
{
  "id": "check-derivative-meaning",
  "level": "2",
  "url": "sec-derivatives-refresher.html#check-derivative-meaning",
  "type": "Checkpoint",
  "number": "1.1.7",
  "title": "True or false?",
  "body": " True or false?    tells you the average rate of change of over the interval from to .    False. is the rate at the single point . Once the limit is taken, there is no window left to average over. The average over is a different number, , and it usually does not match .   "
},
{
  "id": "example-derivative-from-definition",
  "level": "2",
  "url": "sec-derivatives-refresher.html#example-derivative-from-definition",
  "type": "Example",
  "number": "1.1.8",
  "title": "We do: the definition, by hand.",
  "body": " We do: the definition, by hand   Let . Use to find . Then check: does match the we found twice already?    First, a trap. If we plug in right away, we get . That tells us nothing. So we simplify first and take the limit last .   Once the in the denominator cancels, letting is safe.  So , and . Same number, third time.   "
},
{
  "id": "predict-first-three-rules",
  "level": "2",
  "url": "sec-derivatives-refresher.html#predict-first-three-rules",
  "type": "Checkpoint",
  "number": "1.1.9",
  "title": "Predict first.",
  "body": " Predict first     The function never changes. How fast is it changing?  You triple every output of a function. What happens to how fast it changes?  You have two savings accounts, each growing on its own. How fast does the total grow?        Not at all. Its rate of change is .  It triples too. Three times the output means three times the change.  Add the two rates. The total grows at the combined rate.     "
},
{
  "id": "check-power-rule-negative",
  "level": "2",
  "url": "sec-derivatives-refresher.html#check-power-rule-negative",
  "type": "Checkpoint",
  "number": "1.1.10",
  "title": "Error analysis: who is right?",
  "body": " Error analysis: who is right?   Four students differentiated . Which answer is correct?     Student A:  Student A lowered the exponent in the wrong direction. Subtract : , not .    Student B:  Right. Bring the down in front. Then lower the exponent by one: becomes .    Student C:  Student C got the exponent right but lost the minus sign. The number in front is the old exponent, .    Student D:  Student D mixed two rules together. The Power Rule brings the exponent down once and lowers it by . Nothing gets multiplied twice.    "
},
{
  "id": "check-power-rule-more",
  "level": "2",
  "url": "sec-derivatives-refresher.html#check-power-rule-more",
  "type": "Checkpoint",
  "number": "1.1.11",
  "title": "You do: two quick ones.",
  "body": " You do: two quick ones   Differentiate first. Then plug in the point.  If , then    If , then         Yes. , and .       Yes. The trick is to rewrite as first. Then , and .     "
},
{
  "id": "check-chain-gears",
  "level": "2",
  "url": "sec-derivatives-refresher.html#check-chain-gears",
  "type": "Checkpoint",
  "number": "1.1.12",
  "title": "Gears.",
  "body": " Gears   Three gears are linked in a row: , , . Gear turns times as fast as gear . Gear turns times as fast as gear .  Gear turns how many times as fast as gear ?        Yes. . Rates along a chain multiply.     "
},
{
  "id": "fact-standard-derivatives",
  "level": "2",
  "url": "sec-derivatives-refresher.html#fact-standard-derivatives",
  "type": "Fact",
  "number": "1.1.13",
  "title": "Standard derivatives.",
  "body": " Standard derivatives     "
},
{
  "id": "example-product-chain",
  "level": "2",
  "url": "sec-derivatives-refresher.html#example-product-chain",
  "type": "Example",
  "number": "1.1.14",
  "title": "We do: Product Rule and Chain Rule together.",
  "body": " We do: Product Rule and Chain Rule together   Differentiate .     What kind of function is this? A product: times . So the Product Rule goes first.   Does either piece need another rule? Yes. is a composition. The outer function is . The inner function is , with derivative . So .   Now put it together.    Both terms had an in them, so we factored it out.   "
},
{
  "id": "example-quotient",
  "level": "2",
  "url": "sec-derivatives-refresher.html#example-quotient",
  "type": "Checkpoint",
  "number": "1.1.15",
  "title": "You do: Quotient Rule.",
  "body": " You do: Quotient Rule   Differentiate . Work it out on paper before you open the solution.      "
},
{
  "id": "fact-basic-rules",
  "level": "2",
  "url": "sec-derivatives-refresher.html#fact-basic-rules",
  "type": "Fact",
  "number": "1.1.16",
  "title": "The differentiation toolkit, all in one place.",
  "body": " The differentiation toolkit, all in one place   For differentiable functions and , and a constant :    "
},
{
  "id": "fig-hiking-trail",
  "level": "2",
  "url": "sec-derivatives-refresher.html#fig-hiking-trail",
  "type": "Figure",
  "number": "1.1.17",
  "title": "",
  "body": " Drag the hiker along the trail and watch the slope underfoot hit at the hilltop and the valley bottom.   "
},
{
  "id": "def-critical-point",
  "level": "2",
  "url": "sec-derivatives-refresher.html#def-critical-point",
  "type": "Definition",
  "number": "1.1.18",
  "title": "Critical point.",
  "body": " Critical point   A critical point of is a value in the domain of where either (flat ground) or does not exist (a sharp corner or a break).   "
},
{
  "id": "subsec-critical-points-10",
  "level": "2",
  "url": "sec-derivatives-refresher.html#subsec-critical-points-10",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "critical numbers "
},
{
  "id": "check-flat-not-peak",
  "level": "2",
  "url": "sec-derivatives-refresher.html#check-flat-not-peak",
  "type": "Checkpoint",
  "number": "1.1.19",
  "title": "True or false?",
  "body": " True or false?   If , then has a local maximum or a local minimum at .    False. Try . Its derivative is , so and the ground is flat at . But the graph keeps climbing on both sides. No peak, no valley. Think of a trail that levels off for one step, then keeps going up.   "
},
{
  "id": "example-critical-points",
  "level": "2",
  "url": "sec-derivatives-refresher.html#example-critical-points",
  "type": "Example",
  "number": "1.1.20",
  "title": "We do: find the critical points.",
  "body": " We do: find the critical points   Find the critical points of .     Is there anywhere fails to exist? No. is a polynomial, so it has no corners or breaks. That leaves only the flat spots.   Where is the ground flat? Set :   So the critical points are and . Sketch the graph and you will see a hilltop at and a valley at .   "
},
{
  "id": "check-critical-points",
  "level": "2",
  "url": "sec-derivatives-refresher.html#check-critical-points",
  "type": "Checkpoint",
  "number": "1.1.21",
  "title": "You do: find the critical points.",
  "body": " You do: find the critical points   Find the critical points of . Enter the smaller value first.  Smaller critical point:     Larger critical point:        Right. gives , and the smaller solution is .       Right. The other solution of is .     "
},
{
  "id": "exit-ticket-derivatives",
  "level": "2",
  "url": "sec-derivatives-refresher.html#exit-ticket-derivatives",
  "type": "Checkpoint",
  "number": "1.1.22",
  "title": "Exit ticket.",
  "body": " Exit ticket   Answer in your own words. One sentence each is plenty.  What is a derivative? No formulas allowed.  If we have the definition, why do we need the rules?  Is every critical point a peak or a valley? Give an example.        One good answer: how fast something is changing at a single instant, found by shrinking an average rate of change down to one point.  The definition is slow. Each rule is the definition worked out once, so we never have to redo the limit by hand.  No. has a critical point at , but no peak or valley there.     "
},
{
  "id": "sec-pre-assignment-optimization",
  "level": "1",
  "url": "sec-pre-assignment-optimization.html",
  "type": "Section",
  "number": "2.1",
  "title": "Pre-Assignment: Before Tuesday’s Class",
  "body": " Pre-Assignment: Before Tuesday's Class  Pancake the alpaca keeps breaking out of her pen. You have meters of fencing. How do you build her the biggest pen possible?  That is your warm-up before Tuesday. It takes about 10 minutes, and it counts for completion, so a wrong answer is completely fine.  Here is the twist: you already own the tool that solves it. You built it in .   Open the pre-assignment . Sign in first (your Doenet account, or a free new one) so your work counts. It opens in a new tab.  "
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
  "id": "sec-pre-assignment-antiderivatives",
  "level": "1",
  "url": "sec-pre-assignment-antiderivatives.html",
  "type": "Section",
  "number": "2.4",
  "title": "Pre-Assignment: Before Thursday’s Class",
  "body": " Pre-Assignment: Before Thursday's Class  So far, you have always gone one direction: from a function to its derivative.  Can you go backward? If you know how fast Pancake is running, can you figure out how far Pancake has gone?  That is your warm-up before Thursday. It takes about 10 minutes, and it counts for completion, so a wrong answer is completely fine. Keep the differentiation toolkit ( ) handy. You will be running it in reverse.   Open the pre-assignment . Sign in first (your Doenet account, or a free new one) so your work counts. It opens in a new tab.  "
},
{
  "id": "sec-4-9-antiderivatives",
  "level": "1",
  "url": "sec-4-9-antiderivatives.html",
  "type": "Section",
  "number": "2.5",
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
