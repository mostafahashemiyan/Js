
var Johnheight, Johnmass
Johnheight = 1.95;
Johnmass = 85;
console.log("John height is" + '  ' + Johnheight + "and" + "Johnmass is" + '   ' + Johnmass)

var JohnBmi = Johnmass / (Johnheight * Johnheight);
console.log(JohnBmi)

var markheight, markmass
markheight = 1.87;
markmass = 90;
console.log("Mark height is" + '  ' + markheight + "and" + "markmass is" + '   ' + markmass)

var markBmi = markmass / (markheight * markheight);
console.log(markBmi)

var Bmi = JohnBmi > markBmi
console.log(" Is John Bmi  greater than Mark ? " + '  ' + Bmi)
