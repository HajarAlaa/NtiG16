const  users =require="./controller/user"
const yargs =require("yargs")
yargs.command(
    {
        command:"addcustomer",
        describe:"Used For Adding Customer",
        builder:{
            name:{
                type:String,
                
            },
            accNum:{

                type:Number,
                

            },
            intinalBalance:{
                type:Number,
                default:1000
            },
            remainingBalance:{
                type:Number,
                default:1000,
            },
            operation:{
                default:[]
            },
            handler:function(argv){
            let customerdata={
                name:argv.name,
                accNum:argv.accNum,
                intinalBalance:argv.intinalBalance,
               remainingBalance:argv.remainingBalance,
               operation:argv.operation,
               id:Date.now()
            } 
            user.addcustomer(userData)
        }
        }
    })
yargs.argv

















/*cutomers => name, accNum, intialBalance, remainigBalance, 
operations:[{opType:"with", val:100, at:"date"}]
on yargs 
add customer => {
    accNum:1,
    name:"marwa",
    intialBalance:1000,
    remainigBalance:1000,
    operations:[]
}
=> add Customer 
=> add operation => builder => opType, opValue
if withdraw remainigBalance> opValue
else add  opValue<6000
=> show user
name- ....
operation
- val: 100   type:add   time:-----
- val:200    type:with   time:----*/