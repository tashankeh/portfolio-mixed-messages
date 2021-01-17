// code for the mixed messages portfolio project

// arrays to contain various message pieces
const arrYears = [];
const arrQualifications = ["health & wellness","financial freedom","network & relationships",
"spiritual awareness & growth","relaxation & enjoyment","investment","harvesting","joy & laughter",
"spiritual regeneration","service"];
const arrWishes =["will certainly be"," if well planned, will be", "if nothing is done now will not be",
"will be", "seems to be","will be Akeva's","will be Duma's","will be Edima's","will be Mama's"];

const message = {
    myYear: arrYears,
    wish: arrWishes,
    qualification: arrQualifications
};

//function will generate 10 ccalendar years starting from the initial year passed as argument and store in the years array.

const msgYearsGen = year => {
    for (i= 0; i<10; i++) {
        arrYears.push(year);
        year ++;
    }
    return arrYears;
}

//msg generation function

const mixedMessages = yrs => {
    msgYearsGen(yrs);
    let x = Math.floor(Math.random()*10);// x will be used to determine array index to use for message selections
    let y = Math.floor(Math.random()*10);// y will be used to determine array index to use for message selections
    let z = Math.floor(Math.random()*10);// z will be used to determine array index to use for message selections
    //console.log(`${x}, ${y} ${z}`);
    console.log(`${message.myYear[x]} ${message.wish[y]} a year of ${message.qualification[z]}`);

}
mixedMessages(2021);