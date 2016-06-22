(function(){
    "use strict";

    // TODO: Create an array holding the names of the eight planets in our solar system in order, starting closest to the sun.
    var planets = [];

    // function for logging the planets array
    function logPlanets() {
        console.log("Here is the list of planets:");
        console.log(planets);
        console.log("---- ---- ---- ----");
    }

    logPlanets();

    console.log('Adding "The Sun" to the beginning of the planets array.');
    planets.upshift("The Sun");

    planets.upshift("the Sun");
    logPlanets();

    console.log('Adding "Pluto" to the end of the planets array.');
    
    planets.push("pluto");
    logPlanets();

    console.log('Removing "The Sun" from the beginning of the planets array.');
    
    planets.shift("sun");
    logPlanets();

    console.log('Removing "Pluto" from the end of the planets array.');
    
    planets.pop();
    logPlanets();

    console.log('Finding and logging the index of "Earth" in the planets array.');
    var indexOfEarth = planets.indexof("Earth")
    
    console.log('Using splice to remove the planet after "Earth".');
    var planetAfterEarth = planets.splice(indexOfEarth + 1, 1);
    logPlanets();

    console.log('Using splice to add back the planet after "Earth".');
    planets.splice(indexOfEarth + 1, 0, planetsAfterEarth[0]);
    logPlanets();

    console.log("Reversing the order of the planets array.");
    planets.reverse();

    console.log("Sorting the planets array.");
    planets.sort();
})()
