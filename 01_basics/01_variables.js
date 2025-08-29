const accountId = 144553
let accountEmail = "harshit@gmail.com"
var accountPassword = "1234"
accountCity = "Bokaro"
let accountState;

//accountId = 2 // not allowed

accountEmail = "hc@hc.com"
accountPassword = "212121"
accountCity = "Dhanbad"

console.log(accountId);
console.table([accountId,accountEmail,accountPassword,accountCity,accountState])

/* 
 Prefer not to use var 
 because of issue in block scope and functional scope.
*/