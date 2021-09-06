import HttpsService from '../httpService.js';
import StoreService from '../storeService.js';
import AddViewer from './addViewer.js';

const _getLocalStorage = key => JSON.parse(localStorage.getItem(key));


export default class AddController {
	/**
	 * @param  {AddViewer} addViewer A addViewer instance
	 * @param  {HttpsService} httpService A HttpsService instance
	 * @param  {StoreService} storeService A StoreService instance
	 */
	constructor(addViewer, httpService,storeService) {
		this.addViewer = addViewer;
		this.httpService = httpService;
		this.storeService = storeService;
		let localData = _getLocalStorage('editItem');
		console.log('localData', localData);
		if (localData !== null) {
			addViewer.editRow(this.addItem.bind(this));
			localStorage.removeItem('editItem');
		}
		addViewer.bindAddItem(this.addItem.bind(this));
	}

	init() {
		
	}

	/**
	 * Add an Item to the Store and display it in the list.
	 *
	 * @param {object} body
	 */
	async addItem(body) {
		if(body.id !== '') {
			if (this.storeService.getBike(body.id) === null ) {
				await this.httpService.postBike(body);
						this.storeService.addItem(body);
			} else {
				const idBody = body.id;
				delete body.id;
				if (window.confirm("Do you really want to editItem?")) {
					await this.httpService.putBike(body,idBody)
					.then((resault) => {
						this.storeService.editItem(body);
					});
				} 
			}
			
		}
	}
}
