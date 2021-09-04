import { qs } from './helpers.js';

export default class AppViewer {

	constructor(template) {
		this.template = template;
		this.$container = qs('.container');//$ used as a selector
		this.$bikeApp = qs('.app-bike');//$ used as a selector
	}

	/**
	 * @param {String} url - address for the HTML to fetch
	 * @return {String} the resulting HTML string fragment
	 */
	async fetchHtmlAsText(url) {
		const response = await fetch(url);
		return await response.text();
	}

	/**
	 * @param {String} fileAddress 
	 */
	async loadContent(fileAddress) {
		this.$bikeApp.innerHTML = await this.fetchHtmlAsText(fileAddress);
	}
}
