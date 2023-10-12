
/*
let weightMark = 72;
let heightMark = 1.69;
let weightJohn = 92;
let heightJohn = 1.95;
let bmiMark = weightMark / (heightMark ** 2);
console.log(bmiMark);
let bmiJohn = weightJohn / (heightJohn ** 2);
console.log(bmiJohn);
let markHigherBMI = bmiMark > bmiJohn;

if (markHigherBMI) {
    console.log(`Mark's BMI is ${bmiMark}. So it is higher than John's BMI which is ${bmiJohn}.`);
}

else if (bmiMark == bmiJohn) {
    console.log(`Mark's BMI is ${bmiMark}. So it is equal to John's BMI which is ${bmiJohn}.`);
}

else {
    console.log(`Mark's BMI is ${bmiMark}. So it is smaller than John's BMI which is ${bmiJohn}.`);
}

/OR WE CAN DO THAT

let weightMark = 92;
let heightMark = 1.95;
let weightJohn = 92;
let heightJohn = 1.95;
let bmiMark = weightMark / (heightMark ** 2);
console.log(bmiMark);
let bmiJohn = weightJohn / (heightJohn ** 2);
console.log(bmiJohn);

if (bmiMark > bmiJohn) {
    console.log(`Mark's BMI is ${bmiMark}. So it is higher than John's BMI which is ${bmiJohn}.`);
}
else if (bmiMark == bmiJohn) {
    console.log(`Mark's BMI is ${bmiMark}. So it is equal to John's BMI which is ${bmiJohn}.`);
}
else {
    console.log(`Mark's BMI is ${bmiMark}. So it is smaller than John's BMI which is ${bmiJohn}.`);
}*/


const johnSmith = {

    height : 1.95,
    weight : 92,
    calcBMI: function () {
        return this.weight / (this.height ** 2);
    },
};

const markMiller = {
    height : 1.69,
    weight : 78,
    calcBMI: function () {
        return this.weight / (this.height ** 2);
    },
};
    if(markMiller.calcBMI() > johnSmith.calcBMI()) {
        console.log(`Mark's BMI is ${markMiller.calcBMI()}. So it is higher than John's BMI which is ${johnSmith.calcBMI()}.`);
    }

else if (markMiller.calcBMI() == johnSmith.calcBMI()) {
        console.log(`Mark's BMI is ${markMiller.calcBMI()}. So it is equal to John's BMI which is ${johnSmith.calcBMI()}.`);
}

else {
        console.log(`Mark's BMI is ${markMiller.calcBMI()}. So it is smaller than John's BMI which is ${johnSmith.calcBMI()}.`);
}