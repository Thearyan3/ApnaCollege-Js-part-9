// DOM(Document Object Model) --> The DOM represents a document with a logical tree.It allows us to manipulate/change WebPage content (HTML Elements).  
// (1). Selecting Elements 
// --> (i). getElementById = Returns the element as an object or null (if not found).
// for Ex: document.getElementById('mainImg');
// --> (ii). getElementByClassName = Returns the element as an HTML Collection or null (if not found).
// 1). To print the image source on the console dir. 
// let smallImage = document.getElementsByClassName('oldImg');
// for(let i=0; i<smallImage.length; i++){
//     console.dir(smallImage[i].src);
// }
// 2). To change the image source of the web page and log it on the console.
let smallImage = document.getElementsByClassName('oldImg');
for(let i=0; i<smallImage.length; i++){
    smallImage[i].src = "creation_1.png";
    console.log(`value of image no. ${i} is changed`);
} 