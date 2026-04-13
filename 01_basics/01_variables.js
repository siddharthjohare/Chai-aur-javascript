const accountId = 144553
let accountEmail = "sid@gmail.com"
var accountPassword = "1234"
accountCity ="Jaipur"
let accountState;

//accountId = 99 not allowed 
console.log(accountId);

accountEmail = "sj@sj.com"
accountCity ="Pune"
var accountPassword = "9999"

console.table([accountEmail,accountCity,accountPassword,accountState]);


/*
Prefer not to use var
because of issue in block scope and functional scope
*/