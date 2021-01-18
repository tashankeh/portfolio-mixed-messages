// code for the mixed messages portfolio project

// Message object
const message = {
    _msgYear: [],
    wish: ["will certainly be"," if well planned, will be", "if nothing is done now will not be",
          "will be", "seems to be","will be Akeva's","will be Duma's","will be Edima's","will be Mama's","will be Dad's"],
    qualification:  ["health & wellness","financial freedom","networking & relationships",
          "spiritual awareness & growth","relaxation & enjoyment","investment","harvesting","joy & laughter",
          "spiritual regeneration","service"],
    set msgYear(startYear){
        let arrYears = [];
        for (i= 0; i<10; i++) {
            arrYears.push(startYear);
            startYear ++;
        }
        this._msgYear = arrYears;
    },
    get msgYear() {
        return this._msgYear;
    }
};

//msg generation function

const mixedMessages = (yr) => {
    message.msgYear = yr;
    let x = Math.floor(Math.random()*10);// x will be used to determine array index to use for message selections
    let y = Math.floor(Math.random()*10);// y will be used to determine array index to use for message selections
    let z = Math.floor(Math.random()*10);// z will be used to determine array index to use for message selections
    console.log(`${x}, ${y} ${z}`);
    console.log(`${message.msgYear[x]} ${message.wish[y]} a year of ${message.qualification[z]}`);
}
mixedMessages(2031);