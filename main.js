// code for the mixed messages portfolio project

// Message object
const message = {
    _msgYear: [],
    wish: ["will certainly be your"," if well planned, will be your", "if nothing is done now will not be your",
          "will be your", "seems to be your","will be your siter's","will be your son's","will be your daughter's","will be your Mama's","will be Dad's"],
    qualification:  ["health & wellness","financial freedom","networking & relationships",
          "spiritual awareness & growth","relaxation & enjoyment","massive financial investment",
          "harvesting the fruits of consistency","joy & laughter",
          "spiritual regeneration"," sacrifice & service to humanity"],
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

//generate a random index
const randomNumGen = num =>{
    let index = Math.floor(Math.random()*num);
    return index;
}
//msg generation function

const mixedMessages = (yr) => {
    message.msgYear = yr;
    let x = randomNumGen(message.msgYear.length);
    let y = randomNumGen(message.wish.length);
    let z = randomNumGen(message.qualification.length);
    console.log(`${message.msgYear[x]} ${message.wish[y]} year of ${message.qualification[z]}`);
}
mixedMessages(2021);