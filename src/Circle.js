export default class Circle {
	_area = '';
	constructor() {
		console.log('Circle const');

	}

	get area() {
		return this._area;
	}

	setArea(param) {
		this._area = param;
	}

};
