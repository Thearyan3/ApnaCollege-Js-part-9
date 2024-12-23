// DOM(Document Object Model) --> The DOM represents a document with a logical tree.It allows us to manipulate/change WebPage content (HTML Elements).  
// (1). Selecting Elements 
// --> (i). getElementById = Returns the element as an object or null (if not found).
// for Ex: document.getElementById('mainImg');
// --> (ii). getElementByClassName = Returns the element as an HTML Collection or null (if not found).
let smallImage = document.getElementsByClassName('oldImg');
for(let i=0; i<smallImage.length; i++){
    console.dir(smallImage[i].src);
}