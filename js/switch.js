

// Don't change the next two lines!
// This creates two variables:
//     one with the colors of the rainbow, and another with a single randome
//     another with a single random color value
var colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
var color = colors[Math.floor(Math.random() * colors.length)];

switch (color) {
    case "red" :
       consol.log("color is red");
       break;
   case "orange" :
       consol.log("color is orange");
       break;   
    case "yellow" :
       consol.log("color is yellow");
       break;
    case "green" :
       consol.log("color is green");
       break;
    case "blue" :
       consol.log("color is blue");
       break; 
    default:
       consol.log("color is indigo or violet");
}


    // TODO: create a case statement that will handle every color except indigo and violet
    // TODO: when a color is encountered log a message that tells the color, and an object of that color
    //       example: Blue is the color of the sky.

    // TODO: create a default case that will catch indigo and violet
    // TODO: for the default case, log: I do not know anything by that color.

