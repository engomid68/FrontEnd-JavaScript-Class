import HttpService from './httpService.js';
import AppController from './appController.js';
import StoreService from './storeService.js';
import { $on } from './helpers.js';

import '../css/app.scss';
import '../js/slideMenu.js';


const storeService = new StoreService();
const httpService = new HttpService(storeService);

const appController = new AppController(httpService,storeService);

const init = () => appController.init(document.location.hash);

$on(window, 'load', init);
$on(window, 'hashchange', init);






