import Template from '../template.js';

export default class HomeTemplate extends Template {

	constructor(template) {
		super(template);
	}

	/**
	 * 
	 * @param {Object} items 
	 */
	itemTemplate(items,index) {
            const bg = index % 2 == 0 ? 'background-color:rgba(0,0,0,0.05)' : 'background-color:#fff';// different color each row
			return `	<tr scope= "row" style="${bg}" data-id="${items.id}" class="bike-item-${items.id}" >
							<td id="id">
								${items.id} 
							</td>
							<td id="createdAt">
								<span>
									${items.createdAt}
								</span>
							</td>
							<td id="name">
								${items.name}
							</td>
							<td id="country">   
								<div class="button-container">
									<span class="btn btn-modal dark hide" data-id="${items.id}">
										...
									</span>
									<span class="EditContent__a">
										${items.country}
									</span>
								</div>
							</td>
							<td class="color">
								${items.color} 
							</td>
							<td class="delete">
								<img class="btn-delete imageBtn" src="././assets/Delete.png" alt="Delete"/><!-- hidden -->
							</td>
							<td class="edit">
								<img class="btn-edit imageBtn" src="././assets/Edit.png" alt="Edit" />
							</td>
						</tr>
					`;
	} 

	/**
	 * Format the contents of a Home list.
	 *
	 * @param {Array} items
	 * @returns {String} Contents for a Home list
	 * 
	 */
	itemListTemplate(items) {
		return items.reduce((a, item, index) => a + this.itemTemplate(item, index + 1), '');
	}
}
