/** @format */

function result(
	res = 0,
	statisticIncr = 0,
	statisticDecr = 0,
	statisticGet = 0
) {
	const func = {
		increase(x) {
			statisticIncr += 1;
			return (res += x);
		},
		decrease(x) {
			statisticDecr += 1;
			return (res -= x);
		},
		get() {
			statisticGet += 1;
			return res;
		},
		getStatistic() {
			return (statistic = {
				incr: statisticIncr,
				decr: statisticDecr,
				get: statisticGet,
			});
		},

		getStatisticZero() {
			return (statistic = {
				incr: (statisticIncr = 0),
				decr: (statisticDecr = 0),
				get: (statisticGet = 0),
			});
		},
		zero() {
			return (res = 0);
		},
	};
	return func;
}
const inst = result();

inst.increase(100);
inst.increase(100);
inst.decrease(30);
inst.decrease(30);
console.log(inst.get());
console.log(inst.getStatistic());
console.log(inst.getStatisticZero());
console.log(inst.getStatistic());
