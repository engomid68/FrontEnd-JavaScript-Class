import AppViewer from './appViewer.js';

export default class ManageEvent {
   
        /**
     * @param {AppViewer} appViewer 
     */
    constructor (appViewer) {
        this.appViewer = appViewer;

        if (!!(window.addEventListener('load', (e) => {}))) {
            this.startGetting();
        }

        document.addEventListener('click' , (e) => {
            if ((e.target.className) === "delete") {
                let id = e.target.id;
                this.checkingDel(e,id);
            } else if ((e.target.id) === "btn-edit") {
                let id = e.target.className;
                this.checkingEdit(e,id);
            }
        })

    }

    startGetting() {     
        return this.appViewer.appStart();
    }
    
    checkingDel(e,id) {
        e.target.value = "Deleting...";
        e.target.disabled = true;
        alert("Your Request For Deleting is Successfully Sent With This ID = "+ id);
        return this.appViewer.appStart(id);
    }
    
    checkingEdit(e,id) {
        e.target.value = "Editing...";
        e.target.disabled = true;
        alert("Your Request For Editing is Successfully Sent With This ID = "+ id);
        return this.appViewer.appStart(id);
    }
}
