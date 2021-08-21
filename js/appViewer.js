import HttpService from "./httpService.js";

export default class AppViewer {

    /**
     * @param {HttpService} httpService 
     */
    constructor(httpService) {
        this.httpService = httpService;    
        
        this.isLoading = true;
        if (this.isLoading === true) {
            document.querySelector('.table').style.visibility  = 'hidden';
        }

    }

    appStart() {
       return this.httpService.getBikes()
        .then((jsonResponse) => {
            // console.log(jsonResponse);
            this.arr = jsonResponse;
            console.log(this.arr);
            this.isLoading = false;
            if (this.isLoading === false) {
                document.querySelector('#Loading').style.display = 'none';
                document.querySelector('.table').style.visibility  = 'visible';
                this.maker(jsonResponse); //json  
            }
        });   
    }

    maker(data) {
        let output = document.querySelector('.response');
        data.forEach((el, index) => {
            const bg = index % 2 == 0 ? '#eee' : '#fff';// different color each row
            const tr = document.createElement('tr');
            tr.id = `${el.id}`;
            tr.style.backgroundColor = bg;
            tr.innerHTML += `<td id="id">${el.id} </td>`;
            tr.innerHTML += `<td id="createdAt">${el.createdAt}</td>`;
            tr.innerHTML += `<td id="name">${el.name}</td>`;
            tr.innerHTML += `<td id="country">   <div class="button-container">
                                        <span class="btn btn-modal dark" data-id="bounce-modal" class="Dot3">...</span>
                                            <span class="EditContent__a">
                                                ${el.country}
                                            </span>
                                        </p>
                                    </div>
                            </td>`;
            tr.innerHTML += `<td class="color">${el.color} </td>`;
            tr.innerHTML += `<td class="delete"><input type="button" value="DELETE" class="delete" id="${el.id}" /></td>`;// onmousedown="myMousedownFunction(this,${el.id})" 
            tr.innerHTML += `<td class="edit"><input type="button" value="EDIT" id="btn-edit" class="${el.id}" /></td>`;
            output.append(tr);
        });
    }
    
    deleteData(id) {
       return this.httpService.functionDel(id)
        .then((dataResponse) => {        
            let idx = this.arr.findIndex((arr) => arr.id === id)
            this.arr.splice(idx, 1);
            // any
            let el = document.getElementById(`${id}`);
            console.log(el);
            el.remove();
            alert("data delete successfully id ="+ id);
            console.log(dataResponse);
        }) 
    }


}