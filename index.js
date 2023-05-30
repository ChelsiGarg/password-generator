let passwordEl = document.getElementById("password")

let upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
let lowerCase = "abcdefghijklmnopqrstuvwxyz"
let number = "0123456789"
let symbol = "~!@#$%^&*()_-=+[]{}?/|<>,.;':"
let allCharacters = upperCase + lowerCase + number + symbol


function generate(){
//  I am creating password of length 12

//at first I am ensuring that the password has upperCase, lowerCase, number & a symbol. After I have added each one of these, I am running a while loop to make sure that the length of password is 12

    let password = ""
    password+= upperCase[Math.floor(Math.random()*upperCase.length)]
    password+= lowerCase[Math.floor(Math.random()*lowerCase.length)]
    password+= number[Math.floor(Math.random()*number.length)]
    password+= symbol[Math.floor(Math.random()*symbol.length)]

    while(password.length!=12)
    password+= allCharacters[Math.floor(Math.random()*allCharacters.length)]

    passwordEl.textContent = password
}