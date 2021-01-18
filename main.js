// code for the mixed messages portfolio project

// Message object
const msg = {
    _year: [],
    ref: ["will certainly be your"," if well planned, will be your", "if nothing is done now will not be your",
          "will be your", "seems to be your","will be your siter's","will be your son's",
          "will be your daughter's","will be your Mama's","will be Dad's"],
    wish:  ["health & wellness","financial freedom","networking & relationships building",
          "spiritual awareness & growth","relaxation & enjoyment","massive financial investment",
          "harvesting the fruits of consistency","joy & laughter",
          "spiritual regeneration"," sacrifice & service to humanity"],
    set year(firstYear){
        let arrYears = [];
        for (i= 0; i<10; i++) {
            arrYears.push(firstYear);
            firstYear ++;
        }
        this._year = arrYears;
    },
    get year() {
        return this._year;
    }
};

//generate a random index
const indexGen = num =>{
    let index = Math.floor(Math.random()*num);
    return index;
}
//msg generation function

const printMixedMsg = (startYr) => {
    msg.year = startYr;
    let x = indexGen(msg.year.length);
    let y = indexGen(msg.ref.length);
    let z = indexGen(msg.wish.length);
    console.log(`${msg.year[x]} ${msg.ref[y]} year of ${msg.wish[z]}`);
}
printMixedMsg(2021);