/* EXERCISE 1
 Write a function called "area" which receives 2 parameters (l1, l2) and calculates the area of the associated rectangle.
*/
const calculateArea = function(firstParemeter,secondParameter){
 let result= (firstParemeter*secondParameter)/2
 console.log("Are of Associated rectangle",result)

}
calculateArea(11,12)
/* EXERCISE 2
 Write a function called "crazySum" which receives two integers as parameters.
 It should return the sum of those two values, but if the two values are the same then it should return their sum multiplied by 3.
*/
const crazySum = function(firstParemeter,secondParameter){
 let result = firstParemeter+secondParameter
 if(firstParemeter===secondParameter)
 console.log("Multiply of two value",result*3)
 else
 {
   console.log(" Sum of two values", result)
 }
 
}
crazySum(12,13)
/* EXERCISE 3
 Write a function called "crazyDiff" that computes the absolute difference between a given number and 19.
 It should return triple their absolute difference if the given number is greater than 19.
*/
const crazyDiff = function(firstParemeter,secondParameter){
let result = firstParemeter-secondParameter
 if(firstParemeter-secondParameter >19)
 console.log("Return Triple of absolute difference",result*3)
 else
 {
   console.log("Compute difference of give number", result)
 }
}
crazyDiff(20,10)