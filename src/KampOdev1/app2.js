// 12 Ekim Ödeve Başla :
// Ödev => Java&React Kampı 10.Video izle!

/** Not:
 * npm install => package.json 'daki gerekli paketlerin yüklenmesini sağlar.
 * typeScript => Microsoft' un etkisiyle JavaScript tip güvenli hale getirilerek ve ek özellikler eklenerek üst seviye bir dil geliştirildi, işte o dilin adı " typeScript ".
 * üst seviye bir dil derken, yani typeScript ile yazılan kodlar saf JavaScript koduna dönüştürülüyor.
 */

let sayi1 = 10;
sayi1 = "Engin Demiroğ";
let student = {id:1, name:"Engin"}
console.log(student);

function save(puan=10,ogrenci) {
    console.log(ogrenci.name + " : " + puan)
}
save(undefined,student);

let students = ["Engin","Halit","Şafak","Büşra"]
//console.log(students)

// Rest - Spread - Destructure 

//rest kavramı - Js
//params       - C#
//varArgs      - Java
let students2 = [student,{id:2,name:"Halit"},"Ankara",{city:"İstanbul"}]
console.log(students2)

let showProducts = function (id,...products){
    console.log(id)
    console.log(products[0])
}
//console.log(typeof showProducts)
//showProducts(10,["Elma","Armut","Karpuz"])

// spread kavramı : örneğin bir dizi içindeki paremetreleri ayrı ayrı görüp işlem yapmamızı sağlar. Yani elimizdeki bir array'i ayrıştırıyoruz.
let points = [1,2,3,4,55,4,66,14]
console.log(...points)
console.log(Math.max(...points))
console.log(..."ABC","D",..."EFG","H")

// Destructuring kavramı : bu konu hayati çünkü React dünyasında aşırı derecede kullanılıyor.
// Destructuring elimizdeki array'in değerlerini değişkenlere atama yöntemidir.
let populations = [10000,20000,30000,[4000,1000]]
let [small,medium,high,[veryHigh,maximum]] = populations // populations dizisinin her elmanını sırasıyla small,medium,high değerlerine aktar demiş oldum. Yani bu bir Destrcuturing işlemidir.
console.log(small)
console.log(medium)
console.log(high)
console.log(veryHigh)
console.log(maximum)

function someFunction([small1],number){
    console.log(small1)
}

someFunction(populations)

let category = {id:1, name:"İçecek"}
console.log(category.id)
console.log(category["name"])

let {id,name} = category
console.log(id)
console.log(name)