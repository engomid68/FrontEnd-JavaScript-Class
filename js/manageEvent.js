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
            e.stopPropagation();
            if ((e.target.className) === "delete") {
                let id = e.target.id;
                this.checkingDel(e,id);
            } else if ((e.target.id) === "btn-edit") {
                let id = e.target.className;
                this.checkingEdit(e,id);
            } if (!!((e.target.className) === "Aaa")) {
                e.preventDefault();
                let id = document.getElementById('n1').value;
                let createdAt = document.getElementById('n2').value;
                let name = document.getElementById('n3').value;
                let country = document.getElementById('n4').value;
                let color = document.getElementById('n5').value;
                const Bbody = { id,
                                createdAt ,                        
                                name,
                                country,
                                color
                             }
                console.log(Bbody);
                this.checkingPost(Bbody);
                // this.checkingEdit(e,id);
            }
        })
    }

    startGetting() {     
        this.appViewer.appStart();
    }
    
    checkingDel(e,id) {
        e.target.value = "Deleting...";
        e.target.disabled = true;
        alert("Your Request For Deleting is Successfully Sent With This ID = "+ id);
        this.appViewer.deleteData(id);
    }
    
    checkingEdit(e,id) {
        e.target.value = "Editing...";
        e.target.disabled = true;
        alert("Your Request For Editing is Successfully Sent With This ID = "+ id);
        return this.appViewer.editData(id);
    }

    checkingPost(data) {
        let idx = this.appViewer.arr.findIndex((req) => req.id === data.id);
        if (!!(idx === -1)) {
            alert("Your Request For Adding is Successfully Sent With This ID = "+ data.id);
            this.appViewer.postData(data);
        } else {
            alert("This id is duplicate");
        }
    }
}
