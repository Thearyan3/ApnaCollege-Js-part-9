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


// 3. Setting content in Objects using Properties and methods :- 
// (i). innerText - shows the visible text contained in a Node.
// (ii). textcontent - shows all the full text. 
// (iii). innerHTML - shows all the full Markup. 

// 4. Manipulating Attributes - To manipulate or change the attributes using DOM, we have to follow two basic steps which are : 
// (i). obj.getAttribute(attr); it is used to get/access the attribute.
// (i). obj.setAttribute(attr, value); it is used to set/change the attribute value.
// We shouldn't use setAttribute to change our style or classes because it can only provide one class to any object, means if an object has more than one classes and you have given the CSS for that object using all those classes then you will lose all the classes at the time you use setAttribute to change the classes and there will be only one class that will be set afterwards. 
// For ex: Before setAttribute -> <h1 class="green underline"></h1> 
// h1.setAttribute('class', 'black');
// after setAttribute -> <h1 class="black"></h1> 


// 5. Manipulating Style (with style attribute) - To change or manipulate the attributes using DOM, we have to use the given syntax :
// Obj.style();
// * Important Points : 
// (i). When we are manipulating attributes using style property in DOM, then we don't have to use hyphen and the very second word's first letter should be capital. 
// For ex: In CSS, background-color: "";
// whereas, In DOM, backgroundColor: ""; 
// (ii). To select the specific tags like a inside an element like div or span, we have to give the class or id name preceding the tag name inside the paranthesis(). 
// For Ex: document.querySelectorAll('.box a');
// (iii). Through DOM, It is not possible to access the styling given inside the CSS page, the DOM can only access and manipulate the inline styling of any tag or Element.  

// 6. Manipulating Styles (classlist property) - We can use the classes of any element by classList.
// To check all the classes inside an Object. We use Obj.classList();
// let img = document.querySelector('img');
// console.log(img.classList);
// To change or manipulate the classes of an object, we can use several mehtods as follows: 
// (i). classList.add() to add new classes.
// (ii). classList.remove() to remove new classes.
// (iii). classList.contains() to check if classes exist.
// (iv). classList.toggle() to toggle between add & remove classes.

// 7. Navigation 
// (i). parentElement(Single) - to check the parent of an Element. 
// (ii). children(multiple) - to check the children of an Element. 
// (iii). previousElementsibling/nextElementsibling

// 8. Adding Elements - To add any element to any html page, we can use following methods of DOM which are: 
// document.createElement('p'); - used to add the element. 
// body.appendChild(element); - used to insert the element as a child inside any parent element.
// body.append(element); - used to insert the element, string or text inside any element.
// body.prepend(element); - used to insert the element before the parent element. 
// body.inserAdjacentElement('where', 'element'); - used to insert the item as instructed. 

// 9. Removing Elements - We can also remove the elements similar to adding them. There are two methods to do this : 
// (i). RemoveChild(element);
// (ii). Remove(element);

// 10. Practice Qs :- Add the following elements to the container using only JavaScripts and the DOM Methods.
// (i). a <p> with red text that says "Hey I'm red!"
// (ii). an <h3> with blue text that says "I'm blue h3!";
// (iii). an <div> with a black border and pink background color with the following elements inside of it: 
// * another <h1> that says "I'm in a div"
// * a <p> that says "ME TOO"