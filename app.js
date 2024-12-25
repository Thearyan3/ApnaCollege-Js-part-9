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
// let smallImage = document.getElementsByClassName('oldImg');
// for(let i=0; i<smallImage.length; i++){
//     smallImage[i].src = "creation_1.png";
//     console.log(`value of image no. ${i} is changed`);
// } 

// (iii). getElementsByTagName - Returns the Elements as an HTML Collection and empty if not found.
// For Ex : document.getElementsByTagName("p")[1].innerHTML = "abc". 
// It means we are targeting the very first paragraph tag of the HTML Document and changing its innerHTML to abc.

// 2. Query Selectors 
// (i). document.queryselector("p") //Selects the first p element.
// (i). document.queryselector("#myid") //Selects the first element with id = myid.
// (i). document.queryselector(".myclass") //Selects the first element with class = myclass.
// (i). document.queryselectorAll("p") //Selects all p elements.