let cart = [
    {id:1, productName:"Telefon", quantity:3, unitPrice:4000},
    {id:2, productName:"Bardak", quantity:2, unitPrice:30},
    {id:3, productName:"Kalem", quantity:1, unitPrice:20},
    {id:4, productName:"Kitap", quantity:2, unitPrice:100},
    {id:5, productName:"Kahve", quantity:3, unitPrice:30},
    {id:6, productName:"Pot", quantity:5, unitPrice:150},
]

// map => örneğin cart dizisindeki elemanları, bir foreach gibi dönerek üzerinde istediğimiz işlemi yapmamızı ve yazmamızı sağlar.
console.log("<ul>")
cart.map(product=>console.log("<li>"+ product.productName + " : " + product.unitPrice*product.quantity +"</li>"))
console.log("</ul>")

// reduce => Örneğin hepsiburada.com'dayız ve sepetin Total'ini göstermek istiyoruz. Her bir ürünü alıp üst üste toplamamızı sağlar
let total = cart.reduce((acc,product) => acc + product.unitPrice * product.quantity,0)
console.log(total)
// 23.00 Dersteyiz

/** 
 * filter =>  filter, filtreden geçen eleman sayısı 0 bile olsa, bizim için yeni bir array oluşturur.
 * Peki bu niye önemli! çünkü Angular, React, Vue 'de StateManagment denilen bir olay var. Yani bir data değiştiğinde ekran yeniden şekilleniyor, yani render ediyoruz. Ekranın yeniden render edilmesi için, veri referans tipliyse referansın değişmesi gerekiyor.
 * Yani filter ile yeni bir array oluşturduğumuzdan dolayı referans değişiyor buda ekranın yeniden render edilmesini ve sonuc olarak bize yeni güncel verilen dönmesini sağlıyor.
 */
let quantityOver2= cart.filter(product=>product.quantity>2)
console.log(quantityOver2)

//
function addToCart(sepet) {
    sepet.push(cart.push({id:7, productName:"Ruhsat", quantity:1, unitPrice:20}))
}
addToCart(cart)
console.log(cart)

let sayi = 10
function sayiTopla (number) {
    number +=1
}
sayiTopla(sayi)
console.log(sayi)