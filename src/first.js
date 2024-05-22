var myNames = new Array("Somto", "Buchi", "Dominic", "Kateline", "Christiana");
var subj = new Array("English", "Maths", "Chemistry");
var scoreOne = new Array(23, 28, 84);
var scoreTwo = new Array(63, 38, 44);
var scoreThree = new Array(64, 67, 23);
var i = 0;

for (i = 0; i <= 4; i++){
    document.write("<br /> Name: " + myNames[i]);

    for(j =0; j <= 2; j++){
        var score = "score " + j.toString();

        document.write("<br /> " + score);
        document.write("<br />Subject (" + j +") is : " + subj[j] 
        + " " + score[i]);

        score = " ";
    }

    document.write("<br />");
};