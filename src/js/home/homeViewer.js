import AppViewer from "../appViewer.js";
import { qs,$delegate, $on } from '../helpers.js';

const _itemId = element => parseInt(element.parentNode.dataset.id || element.parentNode.parentNode.dataset.id, 10);

export default class HomeViewer extends AppViewer {

    constructor(template) {
        super(template);
    }

    async checkLoadContent() {
		await this.loadContent('src/js/home/home.html');
		this.$home = qs('.home');
		this.$table = qs('.table', this.$home);
		this.$tBody = qs('.response', this.$table );
	}

    activeListLoading() {
		this.$tBody.innerHTML = 
            `<div class="Loading">
                 <img src="src/Image/loading.gif" class="Loading">
             </div>`;
	}

    async setHomeBikes(Bikes) {
		if(Bikes.length === 0) {
			this.$tBody.innerHTML = `<div>NO ITEMS!!!</div>`;
			return;
		}
		this.$tBody.innerHTML =  await this.template.itemListTemplate(Bikes);
        this.$btnDelete = qs('.btn-delete');//
        this.$btnEdit = qs('.btn-edit');//
	}

    bindDeleteItem(handler) {
        $delegate(this.$tBody, '.btn-delete', 'click', ({target}) => {
            let idx = target.parentNode.parentNode.dataset.id;
            target.value = "Deleting...";
            target.disabled = true;
            alert("Your Request For Deleting is Successfully Sent With This ID = "+ idx);
            (async () => {
				const result = await handler(_itemId(target));
			})();
		});
	}

    bindEditItem(handler) {
        $delegate(this.$tBody, '.btn-edit', 'click', ({target}) => {
            let idx = target.parentNode.parentNode.dataset.id;
            target.value = "Editing...";
            target.disabled = true;
            console.log(target.parentNode.parentNode.childNode[9].innerText);
            
            alert("Your Request For Deleting is Successfully Sent With This ID = "+ idx+': '+$id.parentNode.dataset.id);
            (async () => {
				const result = await handler(_itemId(target));
			})();
		});
	}
}