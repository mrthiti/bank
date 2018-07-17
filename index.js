const readline = require('readline-sync')

let rate = 5
let account = []

const createAccount = () => {
  console.log("--- Create Account ---")
  let accountName = readline.question("Enter account name: ")

  account.push({
    name: accountName,
    balance: 0
  })
}

const depositMoney = () => {
  console.log("--- Deposit Account ---")
  let accountName = readline.question("Enter account name: ")
  let money = parseInt(readline.question("Enter money: "))

  account.map(item => {
    if (item.name == accountName) return item.balance = money

    return item
  })
}

const checkBalance = () => {
  console.log("--- Check balance ---")
  let accountName = readline.question("Enter your account name: ")
  let balance = account.find(item=>item.name == accountName)
  console.log(balance)
}

const increaseYear = () => {
  console.log("--- Increase Account ---")
  let year = parseInt(readline.question("Enter num of year: "))

  account.map(item => {
    item.balance = item.balance *  (Math.pow((100.00 + rate) / 100.00, year))

    return item
  })
}

while (true) {
  console.log(" ");
  console.log("---------------------------------------------");

  console.log("1. Create Account")
  console.log("2. Deposit money")
  console.log("4. Check balance")
  console.log("6. Increase year")
  let option = readline.question("Enter option number: ")

  switch (option) {
    case "1":
      createAccount()
      break
    case "2":
      depositMoney()
      break
    case "4":
      checkBalance()
      break
    case "6":
      increaseYear()
      break
  }
}



// console.log("Hi " + name + ", nice to meet you.");



// var stdin = process.stdin;
// console.log(stdin)