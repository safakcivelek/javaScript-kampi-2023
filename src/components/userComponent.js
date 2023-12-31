import { BaseLogger, ElasticLogger } from "../crossCuttingConcerns/logging/logger.js"
import Customer from "../models/customer.js"
import User from "../models/user.js"
import UserService from "../services/userService.js"

console.log("User component yüklendi")

let logger1 = new ElasticLogger()
let userService = new UserService(logger1)

let user1 = new User(1,"Engin","Demiroğ","Ankara")
let user2 = new User(2,"Baran","Gökçekli","Muğla")
let user3 = new User(3,"Şafak","Civelek","Kastamonu")

userService.add(user1)
userService.add(user2)
userService.add(user3)

//console.log(userService.list())
//console.log(userService.getById(2))

let customer = {id:1, firstName:"Engin"}

//prototyping
customer.lastName = "Demiroğ"

console.log(customer.lastName)

console.log("-------------------------------")
userService.load()


let customerToAdd = new Customer(1,"Seda","Yılmaz","Ankara","fdfsdf")
customerToAdd.type = "customer"

userService.add(customerToAdd)
console.log(userService.customers)
console.log(userService.employees)
console.log(userService.errors)
console.log(userService.getCustomersSorted())

// Commit-21.10.2023 / Proje adı değişimi Gerçekleşti
