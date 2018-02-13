var count=99;

while (count>0) {
    console.log("на стене " + count + " бутилок вина");
    count--;
    console.log('одна бутылка вина упала');

    if (count>0) console.log("на стене осталось " + count + " бутылок вина");
    else console.log("на стене больше не осталось бутылок вина");

}