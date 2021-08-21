import { environment }  from "./environment.js";
export default class HttpService {
    
    constructor () {
        this.arr = [];
        this.url = environment.BASE_API + '/api/v1/bikes';
    }

    getData() {
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

}
