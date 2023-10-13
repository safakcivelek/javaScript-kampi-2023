function addToCart(quantity,productName="Elma") {
    
    console.log("Sepete eklendi : ürün : " + productName + " adet : " + quantity)
}
//addToCart()
addToCart(10)
//addToCart("15")

let sayHello = ()=>{
    console.log("Hello World!")
}
sayHello()

let sayHello2 = function () {
    console.log("Hello World2")
}
sayHello2()
//

function addToCart2(productName,quantity,unitPrice){

}
addToCart2("Elma",5,10)
addToCart2("Armut",2,20)
addToCart2("Limon",3,15)

let product1 = {productName:"Elma",unitPrice:10,quantity:5}
function addToCart3(product){
    console.log("Ürün : " + product.productName)
    console.log("Adet : " + product.quantity)
    console.log("Fiyat : " + product.unitPrice)
}
addToCart3(product1)

let product2 = {productName:"Elma",unitPrice:10,quantity:5}
let product3 = {productName:"Elma",unitPrice:10,quantity:5}
product2 = product3
product2.productName = "KARPUZ"
console.log(product3.productName)

let sayi1 = 10
let sayi2 = 20
sayi1 = sayi2
sayi2 = 100
console.log(sayi1)

function addToCart4(products) {
    console.log(products)
}

let products = [
    {productName:"Elma",unitPrice:10,quantity:5},
    {productName:"Armut",unitPrice:10,quantity:5},
    {productName:"Karpuz",unitPrice:10,quantity:5}
]
addToCart4(products)

//* rest 
// rest operatörü => bir fonksiyon içinde değişkenin önüne ... (üç nokta) yazılırsa bu bir rest operatörüdür.
// aşağıdaki fonksiyonda ...numbers ile şunu demiş olduk; parametre ( add(20, 30, 40) vb... ) ile gönderilen değerleri al bir diziye koy. Yani artık oluşan bu yeni array ile elimizdeki değerler ile işlemler yapabiliriz.
// Bu durumda arka taraf da şuna benzer bir dizi oluşur =>  let numbers = [20,30,40]  gibi...

function add(bisey,...numbers){ //rest
    let total = 0;
    for (let i = 0; i < numbers.length; i++) {
        total = total + numbers[i]
    }
    console.log(total)
    console.log(bisey)
}

//add(20,30,40)
//add(20,30,40,50)
add(20,30)

//* spread kavramı : örneğin bir dizi içindeki paremetreleri ayrı ayrı görüp işlem yapmamızı sağlar. Yani elimizdeki bir array'i ayrıştırıyoruz.

let numbers = [30,10,500,600,120]
//console.log(...numbers)
console.log(Math.max(...numbers))

// NOT => spread ayrıştırır, rest toparlar !!!

//* Destructuring => bir array'deki veya objedeki alanları farklı farklı değişkenlere atıp, uygulamanın devamında o değişken isimler ile kullanma yöntemidir.

let [icAnadolu,marmara,karadeniz,[icAnadoluSehirleri]] = [
    {name:"iç anadolu",populations:"20M"},
    {name:"Marmara",populations:"30M"},
    {name:"Karadeniz",populations:"10M"},
    [
        ["Ankara","Konya"],
        ["İstanbul","Bursa"],
        ["Sinop","Trabzon"]
    ]
]
//console.log(icAnadolu.name)
//console.log(icAnadolu.populations)
console.log(icAnadoluSehirleri)
//

let newProductName, newUnitPrice, newQuantity
({productName:newProductName,unitPrice:newUnitPrice,quantity:newQuantity} 
    = {productName:"Elma",unitPrice:10,quantity:5})

console.log(newProductName)
console.log(newUnitPrice)
console.log(newQuantity)