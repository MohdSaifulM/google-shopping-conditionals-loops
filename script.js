const { kind } = require('./products');
// requre products from './products'
const products = require('./products')
console.log(products.totalItems)

// Go through the items and find all results that have kind of shopping#product. 
// Print the count of these results. Where else is this count information stored in the search results?

function countOccurrance(place, what, place2){
    let count = 0;
    for (const key in place) {
        if(place[key].place2 != what){
            count ++;
        }  
    }
    return count;
}
console.log(countOccurrance(products.items, kind, "shopping#product"));

// Print the title of all items with a backorder availability in inventories.

function backOrder(products){
    let availItems = [];
    for (const key in products.items) {
            if(products.items[key].product.inventories[0].availability == "backorder"){
            availItems.push(products.items[key].product.title);
            }
        }
return availItems;
}
console.log(backOrder(products));

// Print the title of all items with more than one image link.

function prntTitle(products){
    let titleArr = [];
    let titleArr2 = [];
    let count = 0;
    for (const key in products.items) {
        let goToImage = products.items[key].product.images;
            count = countOccurrance(goToImage, "link");
            if(count > 1){
            titleArr.push(products.items[key].product.title);
            }
        for(i = 0;i < titleArr.length; i++){
            if(!titleArr2.includes(titleArr[i])){
                titleArr2.push(titleArr[i]);
            }
        }
    }
return titleArr2;
}
console.log(prntTitle(products));

// Print all "Canon" products in the items (careful with case sensitivity).

function prntCanon(products){
   let canonArr = [];
   for (const key in products.items) {
       let toBrand = products.items[key].product.brand;
       if(toBrand.includes("Canon")){
           canonArr.push(products.items[key].product)
       }
   } 
   return canonArr;
}
console.log(prntCanon(products));

// Print all items that have an author name of "eBay" and are brand "Canon".

let itemArr = [];
for (const key in products.items) {
    let toAuthorName = products.items[key].product.author.name;
    if(toAuthorName.includes("eBay")){
        itemArr.push(products.items[key].product)
    }
}
let comArray = itemArr.concat(prntCanon(products));
console.log(comArray);

// Print all the products with their brand, price, and an image link

for (const key in products.items) {
    console.log(products.items[key].product.title);
    console.log(products.items[key].product.brand);
    console.log(products.items[key].product.inventories[0].price);
    console.log(products.items[key].product.images[0].link);
}


