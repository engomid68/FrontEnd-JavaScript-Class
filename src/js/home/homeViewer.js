import AppViewer from "../appViewer.js";
import { qs,$delegate, $on } from '../helpers.js';

const _itemId = element => parseInt(element.parentNode.dataset.id || element.dataset.id || element.parentNode.parentNode.dataset.id, 10);

export default class HomeViewer extends AppViewer {

    constructor(template) {
        super(template);
    }

    async checkLoadContent() {
		await this.loadContent('js/home/home.html');
		this.$home = qs('.home');
		this.$table = qs('.table', this.$home);
		this.$tBody = qs('.response', this.$table );
	}

    activeListLoading() {
		this.$tBody.innerHTML = 
            `<div class="Loading">
                 <img src="assets/loading.gif" class="Loading">
             </div>`;
	}

    async setHomeBikes(bikes) {
		if(bikes.length === 0) {
			this.$tBody.innerHTML = `<div>NO ITEMS!!!</div>`;
			return;
		}
		this.$tBody.innerHTML =  await this.template.itemListTemplate(bikes);
        this.$btnDelete = qs('.btn-delete');//
        this.$btnEdit = qs('.btn-edit');//
	}

    bindDeleteItem(handler) {
        $delegate(this.$tBody, '.btn-delete', 'click', ({target}) => {
            let itemId = _itemId(target);
            target.value = "Deleting...";
            target.disabled = true;
            (async () => {
				const result = await handler(itemId);
			})();
		});
	}

    bindEditItem(handler) {
        $delegate(this.$tBody, '.btn-edit', 'click', ({target}) => {
            let itemId = _itemId(target);
            target.value = "Editing...";
            target.disabled = true;            
            (async () => {
				const result = await handler(itemId);
			})();
		});
	}
}