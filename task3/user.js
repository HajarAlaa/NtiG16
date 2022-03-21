const validator=require("validator")
const chalk=require("chalk")
const dealwithjson=require("./app/helpers/dealwithjson")
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

const addOperation = (id,type,value)=> {
    const users=dealwithjson.readData()
    let user =users.find(u=>u.accNum==id)
    if(type=="withdraw"){
        if(users== -i) return console.log("User Not Found")
        if(type=="withdrow"){
            if(number>=6000)return console.log ('You Not withdrow Alot of 6000 EGP')
            else if(user.remainingBalance < number) return console.log ('Thats Enough ')
        
    else {
        user.remainingbalance -=number
        let userOp=user.op
        userOp.push({type: "withdraw",value:number,theDate:(new Date()).toUTString()})
    }
    }
else if(op=="add"){
    user.remainingBalance += number
    let userOp=user.op
    userOp.push({type:"Add",value:number,theDate:(new Date()).toUTCString()})}

    dealwithjson.writeData(users)
    console.log("Success")
}
const showOp = (userId)=> {
    const users = dealWithJson.readData()
    let user = users.find(u=> u.accNum == userId)
    if(!user) return console.log('User Not Found ');
    else {console.log(user.op);}
}
}
module.exports = { addUser ,addOp, showOp}