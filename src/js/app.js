// import HttpService from './httpService.js';
// import AppViewer from './appViewer.js';
// import AppController from './appController.js';

// const httpService = new HttpService();

/**
 * 
* @type {AppViewer} //makeData
*/
// const appViewer = new AppViewer(httpService);

// Load.

/**
 * @type {AppController}
 */
// const appController = new AppController(appViewer);

// appController.appViewer.appStart();


// const appController = new AppController(httpService, storeService);
// const init = () => appController.init(document.location.hash);

// $on(window, 'load', init);
// $on(window, 'hashchange', init);

import HttpService from './httpService.js';
// import AppViewer from './appViewer.js';
import AppController from './appController.js';
import { $on } from './helpers.js';

const httpService = new HttpService();


// const appViewer = new AppViewer(httpService);

// Load.

/**
 * @type {AppController}
 */
const appController = new AppController(httpService);

const init = () => appController.init(document.location.hash);

$on(window, 'load', init);
$on(window, 'hashchange', init);






