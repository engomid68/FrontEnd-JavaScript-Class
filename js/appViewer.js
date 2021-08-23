import HttpService from "./httpService.js";

export default class AppViewer {

    /**
     * @param {HttpService} httpService 
     */
    constructor(httpService) {
        this.httpService = httpService;    
        
        this.isLoading = true;
        if (this.isLoading === true) {
            if(!!(document.querySelector('.table'))){
                document.querySelector('.table').classList.add('hidden');
            }
            // document.querySelector('.table').style.visibility  = 'hidden';
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
                if (!!(document.querySelector('.Loading') && document.querySelector('.table'))) {
                    let loadingPic = document.querySelector('.Loading');
                    let table = document.querySelector('.table');
                    loadingPic.classList.add('hide');
                    table.classList.add('show');//showing table
                    this.makeData(jsonResponse); //json  
                }
            }
        });   
    }

    makeData(data) {
        let output = document.querySelector('.response');
        let counter=0;
        data.forEach((el, index) => {
            const bg = index % 2 == 0 ? '#eee' : '#fff';// different color each row
            const tr = document.createElement('tr');
            tr.id = `${el.id}`;
            tr.style.backgroundColor = bg;
            tr.innerHTML += `<td id="id">${el.id} </td>`;
            tr.innerHTML += `<td id="createdAt">${el.createdAt}</td>`;
            tr.innerHTML += `<td id="name">${el.name}</td>`;
            tr.innerHTML += `<td id="country">   <div class="button-container">
                                        <span class="btn btn-modal dark" data-id="bounce-modal" class="hidden" id='${counter}'>...</span>
                                            <span class="EditContent__a">
                                                ${el.country}
                                            </span>
                                        </p>
                                    </div>
                            </td>`;
            tr.innerHTML += `<td class="color">${el.color} </td>`;
            tr.innerHTML += `<td class="delete"><input type="button" value="DELETE" class="delete" id="${el.id}" /></td>`;// onmousedown="myMousedownFunction(this,${el.id})" 
            tr.innerHTML += `<td class="edit"><input type="button" value="EDIT" id="btn-edit" class="${el.id}" /></td>`;
            counter++;
            output.append(tr);
            
        });
    }
    
    deleteData(id) {
       return this.httpService.deleteBike(id)
        .then((dataResponse) => {        
            let idx = this.httpService.arr.findIndex((arr) => arr.id === id)
            this.httpService.arr.splice(idx, 1);
            // any
            let el = document.getElementById(`${id}`);
            console.log(el);
            el.remove();
            alert("data deleted successfully id ="+ id);
            console.log(dataResponse);
        }) 
    }

     editData(id) {
        let idx = this.arr.findIndex((arr) => arr.id === id);
        console.log(this.arr[idx].name);
        location.href = "Adding Items.html";
     }

     postData(body) {
        return this.httpService.postBike(body)
        .then(response => { 
            response.json();
            this.httpService.arr.push(response);
            console.log(this.httpService.arr);        
            alert("data Added successfully id ="+ body.id);
            location.href = "index.html";
        })
     }
}