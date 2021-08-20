import environment from "./environment";
import  importData from "./imporData";
export default class  {

    constructor () {
        var arr = [];
        url = Base_url + '/api/v1/bikes';
        output = document.querySelector('.response');
        window.addEventListener('load', (e) => {
            getData(url);    
            console.log("constructor");
        })
    }

    getData(urlPath) {
        fetch(urlPath).then(rep => {
            return rep.json()
        }).then((json) => {
                this.arr = json;
                console.log("getData");
                maker(this.arr); //json
        }).catch((err) => {
            console.log("We can't connet to website :" + err);
        })
    }



    functionDel(id) {
        fetch(`${this.url}/${id}`, {
            method: 'DELETE'
        }).then((response) => {
            return response.json();
        }).then((data) => {        
            let idx = this.arr.findIndex((arr) => arr.id === id)
            this.arr.splice(idx, 1);
            // any
            let el = document.getElementById(`${id}`);
            console.log(el);
            el.remove();
            alert("data delete successfully id ="+ id);
            console.log(data);
        })
    }

///for changing behavior of click on Delete Button
    myMousedownFunction(e,id) { 
        e.value = "Wating...";
        e.disabled = true;
        // alert(" Mousedown" + e +' : '+id);
        functionDel(id);
    }

