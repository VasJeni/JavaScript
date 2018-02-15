// var scores = [60, 50, 60, 58, 54, 54, 58, 50, 52, 54, 48, 69, 34, 55, 51, 52, 44, 51, 69, 64, 66, 55, 52, 61, 46, 31, 57, 52, 44, 18, 41, 53, 55, 61, 51, 44];
// var output;
// var i=0;
//
//     while (i<scores.length) {
//         output="Bubble solution #" + i + "score: " + scores[i];
//         console.log(output);
//         i++;
//     }
//var products = ["Choo Choo Chocolate", "Icy Mint", "Cake Batter", "Bubblegum"];
//var hasBubbleGum = [false, false, false, true];
// var i = 0;
// while (i < hasBubbleGum.length){
//     if (hasBubbleGum[i]){
//         console.log(products[i] + " contains bubble gum");
//     }
//     i = i + 1;
// }
//for (var i=0; i<hasBubbleGum.length;i++){
   // if (hasBubbleGum[i]) {
   //     console.log(products[i] + " contains bubble gum");
   // }
//}
var scores = [60, 50, 60, 58, 54, 54, 58, 50, 52, 54, 48, 69, 34, 55, 51, 52, 44, 51, 69, 64, 66, 55, 52, 61, 46, 31, 57, 52, 44, 18, 41, 53, 55, 61, 51, 44];
var maxscores=[];
var output;
var maxbubles=0;
var hightScore=0;

function maxBubbles (array){         //функция на перебор масива и посик максимального значения
    for (var i=0; i<array.length; i++){
        output=("Bubble solution #" + i + "score: " + array[i]);
        console.log(output);
        if (array[i]>hightScore) {
            hightScore=array[i];
        }
    }

}

function getBestResult (array){     //функция на поиск элемента масива с максимальным значением
    for(var i=0; i<array.length; i++){
        if (hightScore == array[i]){
            maxscores.push(i);
        }
    }
}
maxBubbles(scores);
getBestResult(scores);

console.log("Solution with the best scores " + maxscores);
console.log("Best scores" + hightScore);




 //   for(var i=0; i<scores.length; i++){
  //      if (maxbubles == scores[i]){
 //           maxscores.push(i);
 //       }

  //  }



//    console.log(maxbubles);
//    console.log(maxscores);

//var genres = [];

 //   genres.push("Rockabilly");
//    genres.push("Ambient");
//    var size = genres.length;
//    console.log(genres);

