let fruits = ["mango", "kiwi", "banana",]
console.log (fruits);  //output [ 'mango', 'kiwi', 'banana' ]


//'0 = mango, 1 = kiwi, 2 = banana'
//lets add element of an array, no remove any elements in this method 
fruits.splice(1, 0, "watermelon", "strawberry")
console.log(fruits) //output [ 'mango', 'watermelon', 'strawberry', 'kiwi', 'banana' ]

//let out of the element by using an slice method
let outPiece = fruits.slice(1); //0 = mango remove because u choice index no 1
console.log(outPiece);  //output [ 'watermelon', 'strawberry', 'kiwi', 'banana' ]