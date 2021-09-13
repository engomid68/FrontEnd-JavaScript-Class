import HttpsService from '../httpService.js';
import HomeViewer from './homeViewer.js';
import StoreService from '../storeService.js';


export default class HomeController {
	/**
	 * @param  {HomeViewer} homeViewer A HomeViewer instance
	 * @param  {HttpsService} httpService A HttpsService instance
	 * @param  {StoreService} storeService A StoreService instance
	 */
	constructor(homeViewer, httpService, storeService) {
		this.homeViewer = homeViewer;
		this.httpService = httpService;
		this.storeService = storeService;
		homeViewer.bindDeleteItem(this.deleteItem.bind(this));
		homeViewer.bindEditItem(this.editItem.bind(this));
		homeViewer.bindShowModal(this.showModalItem.bind(this));
		homeViewer.bindCloseModal(this.closeModalItem.bind(this));
		homeViewer.bindModalEditItem(this.editItem.bind(this));
		homeViewer.bindModalDeleteItem(this.deleteItem.bind(this));
		homeViewer.bindSearchInput(this.searchItem.bind(this));
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
						this.storeService.setBikes(result);
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
			this.httpService.deleteBike(bikeId)
			.then((result) => {
				this.storeService.removeItem(bikeId);
				let $rowElement = document.querySelector(`.bike-item-${bikeId}`);
				$rowElement && $rowElement.remove();
				console.log("data deleted successfully id =" + bikeId);
				if(!!this.homeViewer.$modal.getElementsByClassName('active') === true) {
					this.closeModalItem();
				}
			});
		} else {
			alert('Error');
		}
	}

	async editItem(bikeId) {
		let bike = this.storeService.getBike(bikeId);
		console.log('BIKE DATA =>', bike);
		let btnEditRows = {
			id: bike.id,
			createdAt: bike.createdAt,
			name: bike.name,
			country: bike.country,
			color: bike.color,
		};
		console.log("btnEditRows "+btnEditRows);
		localStorage.setItem('editItem', JSON.stringify(btnEditRows));
		document.location.hash = '#add';	
	}

	showModalItem(bikeId) {
		console.log('showItem => Noting',bikeId);
		let bike = this.storeService.getBike(bikeId);
		this.homeViewer.putItemInModal(bike);			
		this.homeViewer.$modal.classList.add('active');	
	}

	closeModalItem() {
		this.homeViewer.$modal.classList.remove('active');
	}

	searchItem(inputName) {
		let bike = this.storeService.serachBike(inputName);
		bike.forEach(element => {
			this.homeViewer.setHomeBikes(bike);
		});
	}
}
