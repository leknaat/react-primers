import React from 'react'
// import banana from './banana' - used in question 1, commented out for question 4
// import { apple } from './apple' -- used in question 2, commented out for question 4
import myFunctions from './myFunctions'
import fruits, { apple, banana } from './fruits'
import pieMenu, {applePie, blueberryPie} from './pies'

console.log(banana)
console.log(apple)
console.log(myFunctions(2, 9)) // should print 11
console.log(fruits)
console.log(apple)
console.log(banana)
console.log(pieMenu)
// prints "Apple Pie, Blueberry Pie"
console.log(applePie)
// prints "Apple Pie"
console.log(blueberryPie)
// prints "Blueberry Pie"
var catNames = require('cat-names')
console.log(catNames.random())
