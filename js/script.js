let result = function (res = 0) {
	const func = {
		increase(x) {
			return res += x;
		},
		decrease(x) {
			return res -= x;
		},
		get() {
			return res;
		}

	}
	return func;
}
let inst = result();

inst.increase(100);
inst.decrease(30);
console.log(inst.get());