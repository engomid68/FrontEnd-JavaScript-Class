import HttpService from './httpService.js';
import AppViewer from './appViewer.js';
// import Load from './Load.js'

const httpService = new HttpService();

/**
 * 
* @type {AppViewer} //makeData
*/
const appViewer = new AppViewer(httpService);

// Load.
window.addEventListener('load', (e) => {
    appViewer.appStart();
});

// DeleteButton = document.getElementById('delete');

///for changing behavior of click on Delete Button
addEventListener('click', function (event) {
    let btnDelete = document.getElementById('delete');
    let btnEdit = document.getElementById('edit');
    let trId = document.getElementById('id');
    event.preventDefault();
    console.log(trId);
    alert("Welcome to delet Button");
    // e.value = "Wating...";
    // e.disabled = true;
    // appViewer.functionDel(id);
})


