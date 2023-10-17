import { BaseLogger, ElasticLogger } from "../crossCuttingConcerns/logging/logger.js"
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

console.log(userService.list())


userService.getById(1)
userService.list()


//prototyping
let customer = {id:1, firstName:"Engin"}

customer.lastName = "Demiroğ"

console.log(customer.lastName)

