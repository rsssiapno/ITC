function ShowNumbers() {

    var nlimit,i,ntext;

    nlimit = document.getElementById("nlimit").value;

    ntext="";
    i=1;

   do {
         ntext += i+" ";
         i++;
    } while (i <= nlimit);

    console.log(nlimit);
    console.log(ntext);

    document.getElementById("ntitle").innerHTML=
      "The first "+nlimit+" natural numbers are:";

    document.getElementById("nnumbers").innerHTML=
       ntext;


}