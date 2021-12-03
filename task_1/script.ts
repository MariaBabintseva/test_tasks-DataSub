abstract class AClass {
	Numbers: Array<number> = [];

	constructor(n: number) {
		this.fill(n);
	}

	fill(n: number): Array<number> {
		for (let i = 0; i < n; i++) {
			const number = Math.floor(Math.random() * (100 - 1)) + 1;
			this.Numbers.push(number);
		}
		return this.Numbers;
	}

	factorial(): Array<number> {
		function getFactorial(num: number) {
			for (let i = num - 1; i > 0; i--) {
				num *= i;
			}
			return num;
		}

		const result = this.Numbers.map((x) => getFactorial(x));
		return result;
	}

	abstract sort(): Array<number>;
}

class Class1 extends AClass {
	sort(): Array<number> {
		const sortArray = super.Numbers.sort(function (a, b) {
			return a - b;
		});
		return super.factorial();
	}
}

class Class2 extends AClass {
	sort(): Array<number> {
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

const class1: Class1 = new Class1(5);
console.log(class1);
console.log(class1.sort());

const class2: Class2 = new Class2(5);
console.log(class2);
console.log(class2.sort());
