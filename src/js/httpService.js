import { environment }  from "./environment.js";
export default class HttpService {
    
    constructor () {
        this.arr11 = [];
        this.url = environment.BASE_API + '/api/v1/bikes';
    }

    getBikes() {
        return fetch(this.url)
            .then((rep) => {
               this.arr11 = rep.json();
               return this.arr11;
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
		let api = this.url;
		return fetch(`${api}`, {
			method: 'POST',
			headers: this.getHeaders() ,
            body: JSON.stringify(data)
		}).catch((err) => {	
            console.log(`We Can't Connet To Website For Adding New Row :  ${err}`);
        });
	}

    putBike(data) {
		let api = this.url;
		return fetch(`${api}`, {
			method: 'PUT',
			headers: this.getHeaders() ,

		}).catch((err) => {	
            console.log(`We Can't Connet To Website For Adding New Row :  ${err}`);
        });
	}

	getHeaders() {
		return {
			'Content-Type': 'application/json; charset=utf-8'
		}
	}

}
