var sales = [
    [405, 49, 930, 284],
     [24, 345, 21, 456],
     [284, 349, 38, 432],
     [24, 34, 245, 34],
     [283, 293, 289, 293],
     [384, 89, 86, 848],
     [245 , 43, 44, 324]
    ];

    // Initiate total and sum as 0, then pass array(sales) as "t", then make it .lem
var total = 0;
var sum = 0;
var i = 0;
var j = 0;
var t = sales.length;

var sumIng = new Array();
var large = 0;
var small = 0;

for(i = 0; i <= t - 1; i++){
    sum = 0;

    for(j = 0; j <= 3; j++){
        document.write("<br /> sum = " + sum + "+" + sales[i][j]);
        sum += sales[i][j];
    
    }
    total += sum;
    document.write("<br /><b> T Sum = </b>" + sum + "<br />");

    sumIng[i] = sum;
}

document.write("<br /> Grand = " + total);
document.write("<br /> The End");

small = sumIng[0];
for(i = 0; i <= t - 1; i++){
    if(sumIng[i] < small){
        small = sumIng[i];
        sumIng[i] = sumIng[i + 1];
    }
    else{
        small = small;
        sumIng[i] = sumIng[i + 1];
    }
};

document.write("<br /> Smallest: " + small);