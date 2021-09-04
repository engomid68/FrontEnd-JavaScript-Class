import HttpsService from '../httpService.js';
import HomeViewer from './homeViewer.js';

export default class HomeController {
	/**
	 * @param  {HomeViewer} homeViewer A HomeViewer instance
	 * @param  {HttpsService} httpService A HttpsService instance
	 */
	constructor(homeViewer, httpService) {
		this.homeViewer = homeViewer;
		this.httpService = httpService;
		homeViewer.bindDeleteItem(this.deleteItem.bind(this));
		homeViewer.bindEditItem(this.editItem.bind(this));
	}

	init() {
		this.homeViewer.activeListLoading();
		try {
			( () => {
				return this.httpService.getBikes()
					.then((result) =>{
						if (result === 0) {
							console.log("result nadarim");
						}
						console.log(result);
						this.homeViewer.setHomeBikes(result);//.home
					});

			})();
		} catch (error) {
			console.error(error);
		}
	}

	/**
	 * Delete an Item of the List.
	 *
	 * @param {object} bikeId
	 */
	async deleteItem(bikeId) {
		if(bikeId !== 0) {
			const data = (!!(await this.httpService.deleteBike(bikeId)));
			// let idx = this.httpService.arr.findIndex((arr) => arr.id === bikeId);
			// this.httpService.arr.splice(idx, 1);
			let $el = document.getElementById(`${bikeId}`);
			$el.remove();
			alert("data deleted successfully id =" + bikeId);
		} else {
			alert('Error');
		}
	}

	async editItem(bikeId) {
		if(bikeId !== 0) {
			
		} else {
			alert('Error');
		}
	}
}
