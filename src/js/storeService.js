export default class StoreService {
	
	constructor() {
		this.bikes = [];
	}

	setBikes(bikes) {
		this.bikes = bikes;
	}

	getBikes() {
		return this.bikes;
	}

	getBike(bikeId) {
		let idx = this.bikes.findIndex((arr) => parseInt(arr.id) === parseInt(bikeId));
		if(idx === -1) {
			return null;
		}
		return this.bikes[idx];
	}

	serachBike(bike) {
		const inputBikeName = this.bikes.filter((item)=>(item.name).toLowerCase().includes(bike.toLowerCase()));
		return inputBikeName;
	}

	removeItem(bikeId) {
		let idx = this.bikes.findIndex((arr) => parseInt(arr.id) === bikeId);
		idx !== -1 && this.bikes.splice(idx, 1);
	}

	addItem(bike) {
		this.bikes.push(bike);
	}

	editItem(bikeId) {
		let idx = this.bikes.findIndex((arr) => parseInt(arr.id) === bikeId);
		this.bikes.splice(idx,1, bikeId);
	}

}
