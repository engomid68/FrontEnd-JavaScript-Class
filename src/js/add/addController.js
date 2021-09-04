import HttpsService from '../httpService.js';
import AddViewer from './addViewer.js';

/**
 * 
 * @param {_search} //functiob for searching in array 
 * @param {*} nameKey //keyName in Array 
 * @param {*} myArray //Name of Array
 * @returns 
 */
const _search = (nameKey, myArray) => {
    for (var i=0; i < myArray.length; i++) {
        if (myArray[i].name === nameKey) {
            return myArray[i];
        }
    }
}

export default class AddController {
	/**
	 * @param  {addViewer} addViewer A addViewer instance
	 * @param  {HttpsService} httpService A HttpsService instance
	 */
	constructor(addViewer, httpService) {
		this.addViewer = addViewer;
		this.httpService = httpService;
		addViewer.bindAddItem(this.addItem.bind(this));
		// if (typeof this.httpService.arr !== 'undefined' ) {
		// 	this.httpService.getBikes();	
		// 	console.log(this.httpService.arr11);
		// }
	}

	init() {
		// this.addViewer.activeListLoading();
		// this.addViewer.showAppHeader();
		// try {
		// 	( () => {
		// 		return this.httpService.getBikes()
		// 			.then((result) =>{
		// 				if (result === 0) {
		// 					console.log("result nadarim");
		// 				}
		// 				this.arr = result;
		// 				console.log("result = "+result);
		// 				this.addViewer.setHomeBikes(result);//.home
		// 			});

		// 	})();
		// } catch (error) {
		// 	console.error(error);
		// }
	}

	/**
	 * Add an Item to the Store and display it in the list.
	 *
	 * @param {object} home
	 */
	async addItem(body) {
		if(body.id !== 0) {
			
			// let f;


			// this.httpService.arr11 = (_search(this.httpService.arr11.id,body.id));
			// console.log(checkId);
			// if (!checkId) {
			// 	return false;
			// }

			// if () {
			// 	alert(`This Id ${body[0].id} is Enter Before`);
			// 	if (confirm('Are you sure you want to save this thing?')) {
			// 		// Save it!
			// 		console.log('Thing was saved to the database.');
			// 		console.log(body);
			console.log(body);

				const response = await this.httpService.postBike(body);
				if (typeof response !== 'undefined') {
					this.httpService.arr11.push(body);
					console.log(this.httpService.arr);
					alert("data Added successfully id =" + body.id);
				} else {
					alert("connection is stopped");
				}


					

				//   } else {
				// 	// Do nothing!
				// 	console.log('Thing was not saved.');
				//   }
			// }
			// else {
			// 	await this.httpService.postBike(body);
			// }
			
		} 
		else {
			alert('Error');
		}
	}

	/**
	 * verify domain
	 * @param {BigInteger} domainId 
	 */
	// async verifyDomain(domainId) {
	// 	if(domainId) {
	// 		const result = await this.httpsService.get('domain/verify/'+domainId);
	// 		return result;
	// 	} else {
	// 		alert('Error');
	// 	}
	// }

}
