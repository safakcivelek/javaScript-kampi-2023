class Customer{
    constructor(id,customerNumber){
        this.id=id;
        this.customerNumber=customerNumber;
    }
}

let customer = new Customer(1,"12345")
//prototyping => çok iyi anlaşılması gerekli!
customer.name="Murat Kurtboğan"
console.log(customer.name)

Customer.bisey = "Bişey"
console.log(Customer.bisey)

console.log(customer.customerNumber)

class IndividualCustomer extends Customer{
      constructor(firstName,id,customerNumber){
        super(id,customerNumber)
        this.firstName=firstName
      }
}

class CorporateCustomer extends Customer{
      constructor(companyName,id,customerNumber){
         super(id,customerNumber)
         this.companyName = companyName
      }

}

// Map - Filter - Reduce
// Bu 3 fonksiyona çok iyi hakim olunması gerekiyor !!!
// Engin hocanın Notu => Öncelikle şunu bir netleştirelim. Angular, React veya Vue gibi frontend kütüphaneleri veya frameworkleri'nin amacı ekrandaki veriyi elimizdeki dataya göre şekillendirmektir.

//* map => örneğin aşağıdaki listedeki elemanları, bir foreach gibi dönerek istediğmiz şekilde yazmamızı sağlar.

let products = [
    {id:1, name : "Acer Laptop", unitPrice:15000},
    {id:2, name : "Asus Laptop", unitPrice:16000},
    {id:3, name : "Hp Laptop", unitPrice:13000},
    {id:4, name : "Dell Laptop", unitPrice:12000},
    {id:5, name : "Casper Laptop", unitPrice:17000},
]

console.log("<ul>")
products.map(product=>console.log(`<li>${product.name}</li>`))
console.log("</ul>")

products.map(product=>{
    console.log(product)
    console.log(`<li>${product.name}</li>`)
})


//* filter => elimizdeki array'i filtrelemeye yarıyor. Yepyeni bir array oluşturuyor.

let filteredProducts = products.filter(product=>product.unitPrice > 12000)

console.log(filteredProducts)
// yukarıdaki filter fonksiyonu ile 12000'den büyük verileri alarak yeni bir array oluşturuyor ve bunun sonucunda bize 4 elemanlı bir dizi döner...

/**
 * filter NOT =>  filter, filtreden geçen eleman sayısı 0 bile olsa, bizim için yeni bir array oluşturur.
 * Peki bu niye önemli! çünkü Angular, React, Vue 'de StateManagment denilen bir olay var. Yani bir data değiştiğinde ekran yeniden şekilleniyor, yani render ediyoruz. Ekranın yeniden render edilmesi için, veri referans tipliyse referansın değişmesi gerekiyor.
 * Yani filter ile yeni bir array oluşturduğumuzdan dolayı referans değişiyor buda ekranın yeniden render edilmesini ve sonuc olarak bize yeni güncel verilen dönmesini sağlıyor.
 */

//* reduce => Örneğin hepsiburada.com'dayız ve sepetin Total'ini göstermek istiyoruz. Her bir ürünü alıp üst üste toplamamızı sağlar

let cartTotal = products.reduce((acc,product)=>acc + product.unitPrice,0 )
console.log(cartTotal)

let cartTotal2 = products
                 .filter(p=>p.unitPrice >13000)
                 .map(p=>{
                    p.unitPrice = p.unitPrice * 1.18
                    return p
                 })
                 .reduce((acc,p)=>acc + p.unitPrice,0)

console.log(cartTotal2)
// 13 Ekim Ders Sonu...                 