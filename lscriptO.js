console.log("New lscript.js");
//Take care to name things in an ordered and clean way

// to display date                
var today = new Date();
var day = today.getDate();
var month = today.getMonth() + 1;
var year = today.getFullYear();
/*document.write(today + "<br> <br>" + "<b>Date is</b> " + day + "/" + month + "/" + year + "<br> <br>");*/

var h = today.getHours();                  // variable today stores the same full Date
var m = today.getMinutes();
var s = today.getSeconds();
/*document.write("Time is: " + h + ":" + m + ":" + s);*/

console.log(today);
//


//displaying dynamic clock
window.onload = function () { getTime(); }
function getTime() {
    var today = new Date();         //java script is case sensitive
    var hrs = today.getHours();
    var min = today.getMinutes();
    var sec = today.getSeconds();
    var milsec = today.getMilliseconds();
    min = checkTime(min);
    sec = checkTime(sec);
    milsec = checkTime(milsec);

    document.getElementById('crtime').innerHTML = hrs + ":" + min + ":" + sec;

    setTimeout(function () { getTime() }, 1000);    //setTimeout(function(){function_name},num) performs the task in the first argument after milliseconds of second argument's number
}

function checkTime(i) {
    if (i < 10) {
        i = "0" + i;           //adding a string "0" if num is <10 for time digits 
    }
    return i;
}
//


//Confirm button
function confir() {
    var v = confirm("You want to confirm");
    if (v == true) {
        alert("Done");
    }
    else {
        alert("Cancel");
    }
}
//



//Comment button
var flag = true;
function showCommentForm() {
    var content = '<form> <br>Name: <div><input type="text"></div> <br> comment: <div><textarea cols="30" rows="5"></textarea></div><div> <input type="button" value="post"></div> </form>';
    if (flag) {
        document.getElementById('id13').innerHTML = content;
        flag = false;
    }
    else {
        document.getElementById('id13').innerHTML = "";
        flag = true;
    }
}
//


//Close Button
function closebutton() {
    window.close();
}
//


//try-catch 
/*try{
var a= 1000;
var b= 2000;
document.write(a+b);
}
catch(error1){
    document.write("Error found "+error1);
}*/



//Examining the document object (Document Object Model)
//console.dir(document);

console.dir(document.domain);
console.dir(document.URL);
console.dir(document.title);

//the entire document itself is an object with various properties and values which can be altered just like a normal js object  var obj={name:"Name",num:132};
//document.title = 123; //can alter various properties of document here

console.log(document.head);
console.log(document.body);

console.log(document.forms);
console.log(document.images);

console.log(document.getElementById('main-title'));
//document.getElementById('main-title').innerText= "DOMDOM";
console.log(document.getElementById('main-title').innerText);


document.getElementById('main-title').style.border = 'solid hidden 2px black'; //using DOM to style


var items = document.getElementsByClassName('box');
console.log(items);

//document.getElementById('main-title').style.color = 'orange'; //using DOM to style


//DOM can be used as a replacement for jQuery using the
//Query selector
var que = document.querySelector('#main-title');     //use .querySelector instead of $ in jQuery

que.style.textDecoration = 'underline';


//inside .querySelector('') the () can contain same selectors as in CSS

//.querySelectorAll('') can select all the things selected by the selector inside







