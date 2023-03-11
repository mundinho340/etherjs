const ethers = require('ethers')
const fs = require('fs')
require('dotenv').config()

async function main(){
  const wallet = new ethers.Wallet(process.env.PRIVATE_KEY)
  const encryptedJSonKey=await wallet.encrypt(
    process.env.PRIVATE_KEY_PASSWORD,
    process.env.PRIVATE_KEY
  )

  console.log(encryptedJSonKey)
  fs.writeFileSync('./.encryptKey.json', encryptedJSonKey)
}

main()