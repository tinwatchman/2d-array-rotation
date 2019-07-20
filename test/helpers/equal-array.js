'use strict';

module.exports = function(chai, utils) {
	const Assertion = chai.Assertion;
	Assertion.addMethod('equalArray', function(b) {
		const a = this._obj;
		utils.expectTypes(this, ['array']);
		this.assert(
			a.length === b.length,
			"expected #{this}.length to be #{exp}, not #{act}",
			"expected #{this}.length to not be #{exp}",
			b.length,
			a.length
		);
		for (var y=0; y<a.length; y++) {
			for (var x=0; x<a[y].length; x++) {
				if (!a[y][x] || !b[y][x]) {
					// use non-strict equality if comparing null or false values
					this.assert(
						a[y][x] == b[y][x],
						"expected [" + y + "][" + x + "] to equal #{exp}",
						"expected [" + y + "][" + x + "] to not equal #{exp}",
						(b[y][x] ? b[y][x] : 'null or false'),
						(a[y][x] ? a[y][x] : 'null or false')
					);
				} else {
					this.assert(
						a[y][x] === b[y][x],
						"expected [" + y + "][" + x + "] to equal #{exp}",
						"expected [" + y + "][" + x + "] to not equal #{exp}",
						b[y][x],
						a[y][x]
					);
				}
			}
		}
	});
};