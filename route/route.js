const express=require('express')
const appRoute=express.Router()
const control=require('../controller/controller')

appRoute.route('/').get(control.home)
appRoute.route('/create').get(control.create)
appRoute.route('/create').post(control.newProduct)
appRoute.route('/edit/:name').get(control.edit)
appRoute.route('/update/:name').post(control.update)
appRoute.route('/delete/:name').get(control.delete)

module.exports=appRoute;