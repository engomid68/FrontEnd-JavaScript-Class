
window.onload = function(e){
    document.getElementById("btn-delete").addEventListener("click", function() {
        alert("Hello World!");
    });
            //console.log("say hi: " + element); 
            // var listener= document.getElementById("btn-delete").addEventListener('click',function(event){                          
            //     console.log("say hi: " + listener); 
            // }); 
}
// window.onload = function(e){ 
//     let clickButton = document.getElementById('btn-delete');
//     clickButton.addEventListener("click", function() {
//         document.getElementById("response").innerHTML = "Hello World";
//     });
// }



// function getFromAPI(url, callback){
//   var obj;
//   fetch(url)
//     .then(res => res.json())
//     .then(data => obj = data)
//     .then(() => callback(obj))
//  }

// getFromAPI('https://5fb619bb36e2fa00166a4e3f.mockapi.io/api/v1/bikes', getData);

// function getData(arrOfObjs){
//   var results = "";
//   arrOfObjs.forEach( (x) => {
//     results += "<p> Id: " + x.id + "<ul>"
//     Object.keys(x).forEach( (p) => {
//         results += "<li>" + (p + ": " + x[p]) + "</li>";
//     });
//     results += "</ul> </p> <hr>"
//   })
//   results += "";
//   document.getElementById("myDiv").innerHTML = results;
// }
