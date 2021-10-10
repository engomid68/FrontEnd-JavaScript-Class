import AppViewer from "../appViewer.js";
import { qs,$delegate, $on } from '../helpers.js';

const _itemId = element => parseInt(element.parentNode.dataset.id || element.dataset.id || element.parentNode.parentNode.dataset.id, 10);
const _modalItemId = element => parseInt(element.target.dataset.id , 10);

export default class HomeViewer extends AppViewer {

    constructor(template) {
        super(template);
    }

    async checkLoadContent() {
		await this.loadContent('./js/home/home.html');
        this.$container = qs('.container');
		this.$home = qs('#home' ,this.$container);
		this.$table = qs('.table', this.$home);
		this.$tBody = qs('.response', this.$table);
		this.$modal = qs('#bounce-modal.modal', this.$home);
		this.$btnModalEdit = qs('.btn-edit', this.$modal);
		this.$btnModalDelete = qs('.btn-delete', this.$modal);
		this.$closeModal = qs('.m-close', this.$modal);
        this.$createdAt = qs('.boxes-7'); 
		this.$name = qs('.boxes-8'); 
		this.$country = qs('.boxes-9'); 
		this.$color = qs('.boxes-10'); 
        this.$searchInput = qs('.search-input');
        this.$hiddenTableBody  = qs('#hiddenBody');
        this.$showTableBody  = qs('#showBody');
        this.$closeTable  = qs('.close');
        this.$expandScreen  = qs('#expandScreen');
	}

    activeListLoading() {
		this.$tBody.innerHTML = 
            `<div class="Loading">
                 <img src="./assets/loading.gif" class="Loading">
             </div>`;
	}

    async setHomeBikes(bikes) {
		if(bikes === undefined) {
			this.$tBody.innerHTML = `<tr>NO ITEMS!!!</tr>`;
			return;
		}
		this.$tBody.innerHTML =  await this.template.itemListTemplate(bikes);
	}

    /**
	* 
	* @param {object} bike 
	*/
    putItemInModal(bike) {
		this.$createdAt.innerHTML = bike.createdAt;
		this.$name.innerHTML = bike.name;
		this.$country.innerHTML = bike.country;
		this.$color.innerHTML = bike.color;
		this.$btnModalDelete.setAttribute('data-id' , `${bike.id}`);
		this.$btnModalEdit.setAttribute('data-id' , `${bike.id}`);
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

    bindShowModal(handler) {
        $delegate(this.$tBody, '.btn-modal', 'click', ({target}) => {
            let itemId = _itemId(target);
            (async () => {
				const result = await handler(itemId);
			})();
        });
    }

    bindCloseModal(handler) {
        $on(this.$closeModal, 'click', () => {
            (async () => {
                const result = await handler();
            })();
        });
    }

    bindModalEditItem(handler) {
        $on(this.$btnModalEdit, 'click', (e) => {
            let itemId = _modalItemId(e);
            (async () => {
                const result = await handler(itemId);
            })()  
        });
    }

    bindModalDeleteItem(handler) {
        $on(this.$btnModalDelete, 'click', (e) => {
            let itemId = _modalItemId(e);
            (async () => {
                const result = await handler(itemId);
            })()  
        });
    }

    bindSearchInput(handler) {
        $on(this.$searchInput, 'input', (e) => {
            let searchInput = e.target.value;
            this.$tBody.innerHTML = '';
            (async () => {
                const result = await handler(searchInput);
            })()
        });
    }

    // bindAddItemAfterScroll() {
    //     $on(this.$tBody,'scroll', () => {
    //     // window.addEventListener('scroll', () => {
    //         const { scrollTop, scrollHeight, clientHeight } = document.documentElement;
            
    //         console.log( { scrollTop, scrollHeight, clientHeight });
            
    //         if(clientHeight + scrollTop >= scrollHeight - 5) {
    //             // console.log("bindAddItemAfterScroll");
    //             // show the loading animation
    //             this.showLoading();
    //         }
    //     });
    // }

    // showLoading() {
    //     const loadingScroll = document.querySelector('.loadingScroll');
    //     loadingScroll.classList.add('show');
    //     setTimeout(getPost, 1000)
    // }

    hiddenTableBody() {
        $on(this.$hiddenTableBody,'click', () => {
            this.$tBody.classList.add("hidden");
            this.$showTableBody.classList.remove("hidden");
            this.$hiddenTableBody.classList.add("hidden");
        })
    }

    showTableBody() {
        $on(this.$showTableBody,'click', () => {
            this.$tBody.classList.remove("hidden");
            this.$showTableBody.classList.add("hidden");
            this.$hiddenTableBody.classList.remove("hidden");
        })
    }

    closeTable() {
        $on(this.$closeTable,'click', () => {
            this.$home.classList.add("hidden");
        })
    }

    expandScreen() {
        $on(this.$expandScreen,'click', () => {
            this.$tBody.requestFullscreen()
            .then(function() {
                // element has entered fullscreen mode successfully
            })
            .catch(function(error) {
                // element could not enter fullscreen mode
                // error message
                console.log(error.message);
            });
        })
    }
}