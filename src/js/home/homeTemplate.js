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
            const bg = index % 2 == 0 ? 'background-color:#fff' : 'background-color:#1BE37E';// different color each row
			return `	<tr style="${bg}" data-id="${items.id}" id="${items.id}" >
							<td id="id">
								${items.id} 
							</td>
							<td id="createdAt">
								${items.createdAt}
							</td>
							<td id="name">
								${items.name}
							</td>
							<td id="country">   
								<div class="button-container">
									<span class="btn btn-modal dark" data-id="bounce-modal" class="hidden">
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
								<input type="button" value="DELETE" class="btn-delete"/>
							</td>
							<td class="edit">
								<input type="button" value="EDIT" class="btn-edit" />
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
