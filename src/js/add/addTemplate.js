import Template from '../template.js';

export default class AddTemplate extends Template {

	constructor(template) {
		super(template);
	}

	/**
	 * 
	 * @param {Object} items 
	 */
	itemTemplate(items,index) {
            const bg = index % 2 == 0 ? 'background-color:#fff' : 'background-color:#1BE37E';// different color each row
			return `	
					`;
	} 

	/**
	 * Format the contents of a domain list.
	 *
	 * @param {Array} items
	 * @returns {String} Contents for a domain list
	 * 
	 */
	itemListTemplate(items) {
		return items.reduce((a, item, index) => a + this.itemTemplate(item, index + 1), '');
	}
}
