const validator=require("validator")
const chalk=require("chalk")
const dealwithjson=require("./dealwithjson")
const addcustomer =(userData)=>{
    try{
     
        userData.id=Date.now()
        const users=dealwithjson.readData()
        users.push(userData)
        dealwithjson.writeData(users)
        console.log(chalk.blue("User Added"))

    }
catch(error){
console.log(chalk.red(e.message))
}
}

const addOperation=(id,type,value)
=>{
    const users=dealwithjson.readData()
    const isArray=users.findIndex(u=>u.id==id)
    if(type=="withdraw"){
        if(users[i])["remainingbalance"]<value)  return console.log("your balance is not enough")
        users[i]["remainingbalance"]=Number(users[i]["remainingbalance"])-value
    }
    else if(type=="add"){
        users[i]["remainingbalance"]=Number(users[i]["remainingbalance"])-value
    }
    dealwithjson.writeData(users)
    console.log(dealwithjson.readData())
}
