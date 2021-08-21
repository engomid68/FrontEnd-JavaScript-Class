import { environment }  from "./environment.js";
export default class HttpService {
    
    constructor () {
        this.arr = [];
        this.url = environment.BASE_API + '/api/v1/bikes';
    }

    getBikes() {
        return fetch(this.url).then(rep => {
            return rep.json();
        }).catch((err) => {
            console.log(`We can't connet to website :  ${err}`);
        })
    }

    functionDel(id) {
        return fetch(`${this.url}/${id}`, {
            method: 'DELETE'
        }).then((dataResponse) => {
            return dataResponse.json();
        }).catch((err) => {
                console.log(`We can't connet to website and Delete row :  ${err}`);
        });
    }

    // post(url, body) {
	// 	let api = environment.BASE_API + url;
	// 	fetch(api, {
	// 		method: 'POST',
	// 		headers: this.getHeaders(),
	// 		mode: 'cors', // no-cors, *cors, same-origin
	// 		body: JSON.stringify({data: body})
	// 	});		
	// 	return await response.json();
	// }

	// getHeaders() {
	// 	return {
	// 		'Content-Type': 'application/json; charset=utf-8'
	// 	}
	// }

}
