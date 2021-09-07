import AppViewer from "../appViewer.js";
import { qs,$on } from '../helpers.js';

const _getLocalStorage = key => JSON.parse(localStorage.getItem(key));

export default class AddViewer extends AppViewer {

    constructor(template,storeStorage) {
        super(template);
        this.storeStorage = storeStorage;
    }

    async checkLoadContent() {
		await this.loadContent('js/add/add.html');
		this.$divForm = qs('.form');
		this.$idInput = qs('#n1', this.$divForm);
		this.$createdAtInput = qs('#n2', this.$divForm);
		this.$nameInput = qs('#n3', this.$divForm);
		this.$countryInput = qs('#n4', this.$divForm);
		this.$colorInput = qs('#n5', this.$divForm);
		this.$btnAddNewBike = qs('.Add', this.$divForm);
	}

    bindAddItem(handler) {
        $on(this.$btnAddNewBike, 'click', () => {
            this.$btnAddNewBike.innerHTML = 'Loading...';
			this.$btnAddNewBike.disabled = true;
            if (this.$nameInput.value === "" ) {
                this.$btnAddNewBike.innerHTML = 'Add New Bike';
                this.$btnAddNewBike.disabled = false;
            } else {
                let bikeBody = 
                    { id: this.$idInput.value,
                    createdAt: this.$createdAtInput.value,
                    name: this.$nameInput.value,
                    country: this.$countryInput.value,
                    color: this.$colorInput.value
                    };         
                (async () => {
                    await handler(bikeBody);
                    this.$btnAddNewBike.innerHTML = 'Add New Bike';
                    this.$btnAddNewBike.disabled = false;
                })();
            }
		});
	}

    editRow() {
        let bikeEdit = _getLocalStorage('editItem');
        console.log('editRow bikeEdit =>',bikeEdit);
        this.$idInput.value = bikeEdit.id;
        this.$createdAtInput.value = bikeEdit.createdAt;
        this.$nameInput.value = bikeEdit.name;
        this.$countryInput.value = bikeEdit.country;
        this.$colorInput.value = bikeEdit.color;   
    }
}