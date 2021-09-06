import { environment }  from "./environment.js";
export default class HttpService {
    
    constructor (storeService) {
        this.url = environment.BASE_API + '/api/v1/bikes';
        this.storeService = storeService;
    }

    getBikes() {
        return fetch(this.url)
            .then((rep) => {
               return rep.json();
        }).catch((err) => {
            console.log(`We can't connet to website :  ${err}`);
        });
    }

    getBike(id) {
        return fetch(this.url+'/'+id).then(rep => {
            return rep.json();
        }).catch((err) => {
            console.log(`We can't connet to website :  ${err}`);
        })
    }

    deleteBike(id) {
        return fetch(`${this.url}/${id}`, {
            method: 'DELETE'
        }).then((dataResponse) => {
            return dataResponse.json();
        }).catch((err) => {
                console.log(`We Can't Connet To Website For Deleting Row :  ${err}`);
        });
    }

    postBike(data) {
		return fetch(this.url , {
			method: 'POST',
			headers: this.getHeaders() ,
            body: JSON.stringify(data)
		}).catch((err) => {	
            console.log(`We Can't Connet To Website For Adding New Row :  ${err}`);
        });
	}

    async putBike(body,id) {
		const response = await fetch(`${this.url}/${id}`, {
			method: 'PUT',
			headers: this.getHeaders(),
			mode: 'cors', // no-cors, *cors, same-origin
			body: JSON.stringify(body)
		});		
		return await response.json();
	}

	getHeaders() {
		return {
            'Accept': 'application/json',
			'Content-Type': 'application/json; charset=utf-8'
		}
	}

}
