const readline = require('readline-sync')

let rate = 5
let account = []

const createAccount = () => {
  console.log("--- Create Account ---")
  let accountName = readline.question("Enter account name: ")

  if (account.some((item) => accountName == item.name)) {
    console.log('Account name is already.')
    return
  }

  account.push({
    name: accountName,
    balance: 0
  })

  console.log('Account create.')
}

const depositMoney = () => {
  console.log("--- Deposit Money ---")
  let accountName = readline.question("Enter account name: ")
  let money = parseInt(readline.question("Enter money: "))

  if (!account.some((item) => accountName == item.name)) {
    console.log('No Account!!!')
    return
  }

  account.map(item => {
    if (item.name == accountName) return item.balance = money

    return item
  })
}

const withdrawMoney = () => {
  console.log("--- Withdraw Money ---")
  let accountName = readline.question("Enter account name: ")
  let money = parseInt(readline.question("Enter money: "))

  if (!account.some((item) => accountName == item.name)) {
    console.log('No Account!!!')
    return
  }

  account.map(item => {
    if (item.name == accountName) return item.balance -= money

    return item
  })
}

const checkBalance = () => {
  console.log("--- Check balance ---")
  let accountName = readline.question("Enter your account name: ")

  if (!account.some((item) => accountName == item.name)) {
    console.log('No Account!!!')
    return
  }

  let balance = account.find(item=>item.name == accountName)
  console.log(`Amount ${balance.balance}`)
}

const displayAccountDetail = () => {
  console.log("--- Display account deatil ---")
  let accountName = readline.question("Enter your account name: ")
  let accountDatail = account.find(item => item.name == accountName)

  if (!account.some((item) => accountName == item.name)) {
    console.log('No Account!!!')
    return
  }

  console.log(accountDatail)
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
  console.log("3. Withdraw money")
  console.log("4. Check balance")
  console.log("5. Display account detail")
  console.log("6. Increase year")
  let option = readline.question("Enter option number: ")

  switch (option) {
    case "1":
      createAccount()
      break
    case "2":
      depositMoney()
      break
    case "3":
      withdrawMoney()
      break
    case "4":
      checkBalance()
      break
    case "5":
      displayAccountDetail()
      break
    case "6":
      increaseYear()
      break
    default:
      console.log("No option!!!")
  }
}