import AppViewer from "../appViewer.js";
import { qs,$on } from '../helpers.js';

// const _itemId = element => parseInt(element.value , 10);

export default class AddViewer extends AppViewer {

    constructor(template) {
        super(template);
    }

    async checkLoadContent() {
		await this.loadContent('src/js/add/add.html');
		this.$divForm = qs('.form');
		this.$idInput = qs('#n1', this.$divForm);
		this.$createdAtInput = qs('#n2', this.$divForm);
		this.$nameInput = qs('#n3', this.$divForm);
		this.$countryInput = qs('#n4', this.$divForm);
		this.$colorInput = qs('#n5', this.$divForm);
		this.$buttonFormSubmit = qs('.Add', this.$divForm);
	}

    // activeListLoading() {
	// 	this.$tBody.innerHTML = 
    //         `<div class="Loading">
    //              <img src="src/Image/loading.gif" class="Loading">
    //          </div>`;
	// }

    // async setHomeBikes(Bikes) {
	// 	if(Bikes.length === 0) {
	// 		this.$tBody.innerHTML = `<div>NO ITEMS!!!</div>`;
	// 		return;
	// 	}
	// 	this.$tBody.innerHTML =  await this.template.itemListTemplate(Bikes);
    //     this.$btnDelete = qs('.btn-delete');//
    //     this.$btnEdit = qs('.btn-edit');//
	// }

    bindAddItem(handler) {
        $on(this.$buttonFormSubmit, 'click', () => {
            this.$buttonFormSubmit.innerHTML = 'Loading...';
			this.$buttonFormSubmit.disabled = true;
            let bikeBody = 
                { id: this.$idInput.value,
                  createdAt: this.$createdAtInput.value,
                  name: this.$nameInput.value,
                  country: this.$countryInput.value,
                  color: this.$colorInput.value
                }
            ;          
            (async () => {
				const result = await handler(bikeBody);
                this.$buttonFormSubmit.innerHTML = 'Add New Bike';
                this.$buttonFormSubmit.disabled = false;
			})();
		});
	}
}