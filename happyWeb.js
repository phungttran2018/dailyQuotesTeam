var mainText = document.querySelector("#comment");
var submitBtn = document.querySelector("#submit");
var p1Message = document.querySelector("#displayComment");
var quoteList = document.querySelector("#quoteList");

var retrieveRef = firebase.database().ref();
var childRef = retrieveRef.child("User");

childRef.on('value', function(snapshot) {
/*
    quoteList.innerHTML = "";
    snapshot.forEach((quote) => {
        var quoteItem = document.createElement('li');
        quoteItem.innerText = quote.val();
        quoteList.appendChild(quoteItem);
    });
*/
    let result = "";
    snapshot.forEach((quote) => {
      result = '>> ' + quote.val() + "\n"  + result  ;
    });
    p1Message.innerText = result;
});


function submitClick() {

    var databaseRef = firebase.database().ref();
    var messageText = mainText.value;

    databaseRef.child("User").push().set(messageText);
    mainText.innerText = "";
   

}

