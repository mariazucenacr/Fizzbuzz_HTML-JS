var numeros =100;
// var divisible=false;//Opción 1 boleean

 for(i =1; i<=100; i++){
   // var divisible=false; //Opción 1 boleean

   if(i % 3 == 0){
     document.write("Fizz");
     // divisible=true;//Opción 1 boleean
   }

   if(i % 5 == 0){
     document.write("Buzz");
     // divisible=true;//Opción 1 boleean
   }

   if(i % 3!=0 && i % 5!=0){ //Opción 2 para evaluar si no divisible entre 3 o 5
     document.write(i);
   }

   // if (!divisible){ //Opción 1 boleean
   //   document.write(i);
   // }

   document.write("<br>");
 }
