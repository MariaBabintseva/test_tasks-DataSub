"use strict";
class AClass {
    constructor(n) {
        this.Numbers = [];
        this.fill(n);
    }
    fill(n) {
        for (let i = 0; i < n; i++) {
            const number = Math.floor(Math.random() * (10 - 1)) + 1;
            this.Numbers.push(number);
        }
        return this.Numbers;
    }
    factorial() {
        function getFactorial(num) {
            for (let i = num - 1; i > 0; i--) {
                num *= i;
            }
            return num;
        }
        const result = this.Numbers.map((x) => getFactorial(x));
        return result;
    }
}
class Class1 extends AClass {
    constructor(n) {
        super(n);
        this.sort();
    }
    sort() {
        const sortArray = this.Numbers.sort(function (a, b) {
            return a - b;
        });
        return this.factorial();
    }
}
class Class2 extends AClass {
    sort() {
        for (let i = 0; i < this.Numbers.length - 1; i++) {
            for (let j = 0; j < this.Numbers.length - 1 - i; j++) {
                if (this.Numbers[j + 1] < this.Numbers[j]) {
                    let t = this.Numbers[j + 1];
                    this.Numbers[j + 1] = this.Numbers[j];
                    this.Numbers[j] = t;
                }
            }
        }
        return this.factorial();
    }
}
const class1 = new Class1(5);
console.log(class1);
console.log(class1.factorial());
//console.log(class1.sort());
const class2 = new Class2(5);
console.log(class2);
console.log(class2.sort());
//# sourceMappingURL=script.js.map