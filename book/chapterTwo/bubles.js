var scores = [60, 50, 60, 58, 54, 54, 58, 50, 52, 54, 48, 69, 34, 55, 51, 52, 44, 51, 69, 64, 66, 55, 52, 61, 46, 31, 57, 52, 44, 18, 41, 53, 55, 61, 51, 44];
var costs = [.25, .27, .25, .25, .25, .25, .33, .31, .25, .29, .27, .22, .31, .25, .25, .33, .21, .25, .25, .25, .28, .25, .24, .22, .20, .25, .30, .25, .24, .25, .25, .25, .27, .25, .26, .29];

console.log(scores.length);
console.log(costs.length);

function MaxSolution (array) { //поиск максимального значения
    var max = 0;
    for (var i = 0; i < array.length; i++) {
        if (scores[i] > max) {
            max = scores[i];
        }
        maximum=max;

    }
    return maximum;
}


function BestSolution(array, maxScores) { //лучшие образцы
    var best=[];
    var maxScores;
    for(var i =0; i<array.length; i++) {
        if (array[i] == maxScores) {
            best.push(i);
        }
    }
    bestSolution=best;
    return bestSolution;
}
function MinimalCost(array) {
    var min=1;
    for (var i = 0; i < bestSolution.length; i++) {
        if (array[bestSolution[i]] < min) {
            min = array[bestSolution[i]];
        }
        return min;
    }
}



console.log(MaxSolution(scores));
console.log(BestSolution(scores, maximum));
console.log(MinimalCost(costs));
