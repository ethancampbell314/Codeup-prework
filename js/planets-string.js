(function(){
    "use strict";

    var planetsString = "Mercury,Venus,Earth,Mars,Jupiter,Saturn,Uranus,Neptune";
    console.log(planetsString);
    
    var planetsarray = planetsString.split ('Mercury','Venus','Earth','Mars','Jupiter','Saturn','Uranus','Neptune,');

    // TODO: Convert planetsString to an array, save it to planetsArray.
    console.log(planetsArray);

    // TODO: Create a string with <br> tags between each planet. console.log() your results.
    //       Why might this be useful?
   switch (planet) {
    case "Mercury" :
       consol.log("Planet is Mercury");
       break;
   case "Venus" :
       consol.log("Planet is Venus");
       break;   
    case "Earth" :
       consol.log("Planet is Earth");
       break;
    case "Mars" :
       consol.log("Planet is Mars");
       break;
    case "Jupiter" :
       consol.log("Planet is Jupiter");
       break; 
       case "Saturn" :
       consol.log("Planet is Saturn");
       break; 
       case "Uranus" :
       consol.log("Planet is Uranus");
       break; 
       case "Neptune" :
       consol.log("Planet is Neptune");
       break; 
       console.log(',')
       
}

    

    // Bonus: Create a second string that would display your planets in an undordered list.
    //        You will need an opening AND closing <ul> tags around the entire string, and <li> tags around each planet.
    //        console.log() your results.
})();
