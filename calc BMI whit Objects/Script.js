var johnBmi = {
    firstNmae: 'John',
    mass: 85,
    height: 1.60,
    calcBmi: function () {
        this.bmi = this.mass / (this.height * this.height);
        return this.bmi
    }
};
var markbmi = {
    firstNmae: 'mark',
    mass: 90,
    height: 1.90,
    calcBmi: function () {
        this.bmi = this.mass / (this.height * this.height);
        return this.bmi;
    }
};
johnBmi.calcBmi();
markbmi.calcBmi();
console.log(johnBmi, markbmi)

if (johnBmi.calcBmi() > markbmi.calcBmi()) {
    console.log('John BMI is higher than Mark BMi ')
} else if (markbmi.calcBmi() > johnBmi.calcBmi()) {
    console.log('Mark BMi is higher than John bmi ')

}
else {
    console.log('their BMi are the same ')
}