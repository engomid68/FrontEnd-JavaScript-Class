import HomeTemplate from './home/homeTemplate.js';
import HomeViewer from './home/homeViewer.js';
import HomeController from './home/homeController.js';
import AddTemplate from './add/addTemplate.js';
import AddViewer from './add/addViewer.js';
import AddController from './add/addController.js';

export default class AppController {
   

	constructor(httpService, storeService) {
		this.httpService = httpService;
		this.storeService = storeService;
    }

    init(raw) {
		const route = raw.replace(/^#\//, '').trim();
		switch (route) {
			case '':
			case '#home':
				this.initController({
					template: HomeTemplate,
					view: HomeViewer,
					controller: HomeController
				});
				break;
			case '#add':
				this.initController({
					template: AddTemplate,
					view: AddViewer,
					controller: AddController
				});
				break;
			default:
			  alert('not found =>', route);
		}
	}

	initController(arg) {
		const template = new arg.template();
		const view = new arg.view(template);

		view.checkLoadContent().then(() => {
			const controller = new arg.controller(
				view, 
				this.httpService, 
				this.storeService
			);
			controller.init();
		});
	}
}
