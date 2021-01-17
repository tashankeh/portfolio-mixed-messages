// code for the mixed messages portfolio project

// arrays to contain various message pieces
const msgYears = [];
const msgQualifications = ["health & wellness","financial freedom","network & relationships",
"spiritual awareness & growth","relaxation & enjoyment","investment","harvesting","joy & laughter",
"spiritual regeneration","service"];
const msgWishes =["will certainly be"," if well planned, will be", "if nothing is done now will not be",
"will be", "seems to be","will be Akeva's","will be Duma's","will be Edima's","will be Mama's"];

//function will generate 10 ccalendar years starting from the initial year passed as argument and store in the years array.

const msgYearsGen = year => {
    for (i= 0; i<10; i++) {
        msgYears.push(year);
        year ++;
    }
    return msgYears;
}

//msg generation function

const mixedMessages = yrs => {
    msgYearsGen(yrs);
    let x = Math.floor(Math.random()*10);// x will be used to determine array index to use for message selections
    let y = Math.floor(Math.random()*10);// y will be used to determine array index to use for message selections
    let z = Math.floor(Math.random()*10);// z will be used to determine array index to use for message selections
    //console.log(`${x}, ${y} ${z}`);
    console.log(`${msgYears[x]} ${msgWishes[y]} a year of ${msgQualifications[z]}`);

}
mixedMessages(2021);