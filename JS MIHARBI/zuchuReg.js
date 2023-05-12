
// // select exactly word in regular expression

// let words = /@gmail/;

// let story = words.test("Nilienda kwenye show ya zuchu");

// //console.log(story);

// // select atleast one number with the range from 0-5

// let number = /[0-5]/

// let check = number.test("74");

// //console.log(check);

// // select atleast one letter with the range from a-z

// let herufi = /[a-z]/i  // i means ignore either capital or small letter

// let chesleter = herufi.test("ZAINAB");

// //console.log(chesleter);


// let a = /^[aeiou]/

// let b = a.test("shph");

// // console.log(b);

// let c = /a{2}/

// let d = c.test("shuphaa");

// console.log(d);
let btn = document.getElementById("zuchu");

btn.addEventListener('click',function(){


let username = document.getElementById("user").value;

let password = document.getElementById("pass").value;

let good = document.getElementById("good");

let letter = /[a-z]/i

//let check = letter.test("") 

if(letter.test(username)){
    //console.log("Good username");
    good.innerHTML = `This username is amazing`;
}else{
    console.log("Not valid");
}

});

//console.log(username);

//console.log(password);




