import HttpService from './httpService.js';
import AppViewer from './appViewer.js';
import ManageEvent from './manageEvent.js';

const httpService = new HttpService();

/**
 * 
* @type {AppViewer} //makeData
*/
const appViewer = new AppViewer(httpService);

// Load.

/**
 * @type {ClickEvent}
 */
const Controller = new ManageEvent(appViewer);

Controller.appViewer.appStart();





