import HttpService from './httpService.js';
import AppViewer from './appViewer.js';
// import Load from './Load.js'

const httpService = new HttpService();

/**
 * 
* @type {AppViewer} //makeData
*/
const appViewer = new AppViewer(httpService);

window.addEventListener('load', (e) => {
    appViewer.appStart();
});

///for changing behavior of click on Delete Button
function myMousedownFunction(e,id) { 
    e.value = "Wating...";
    e.disabled = true;
    appViewer.functionDel(id);
}

// Load.
