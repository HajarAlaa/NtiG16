const deal =require("../helper/dealwithjson")
const showAllcustomers=(req,res)=>{
let customers =deal.readData()
res.render("showAll",{
    pagetitle:"show All",
 customers,
    isEmpty: customers.length==0? true:false

})
}
const  addcustomer =(req,res)=>{
  let customer={
      id:Date.now(),
      accNum:Date.now(),
      name:req.query.name,
      intialBalance:req.query.intialBalance,
      remainingBalance:req.query.remainingBalance,
      operations:[]
  }
  console.log(req.query)
  if (req.query.name &&req.query.intialBalance &&req.query.remainingBalance){
     let customers=deal.readData()
        
        customers.push(customer)
        deal.writeData(customers)
        console.log('test')
        res.redirect("/")

    }
    res.render("addcustomer",{
        pagetitle:"add customer"
    })
}
const addoperation=(req,res)=>{
    const accNum=req.params.accNum
    let allCustomers=deal.readData()
    var message= ""
    if (req.query.addop) {
        let index = allCustomers.findIndex(u => u.accNum == accNum)        
         if (req.query.optype == "withdraw") {
             if (Number(allCustomers[index].remainingBalance) < req.query.opvalue) {
                 message = "balance is not enough"
                 res.render("addoperation",{pagetitle:"add operation",message})
             }
             else allCustomers[index].remainBalance = Number(allCustomers[index].remainBalance) -Number(req.query.opvalue)
        
            }
            else if (req.query.optype == "add") {
                if (Number(req.query.opvalue > 6000)) {
                     message = "value must be less than 6000" 
                    res.render("addoperation", { pagetitle: "add operation", message })
                }
           else allCustomers[index].remainingBalance = Number(allCustomers[index].remainBalance) +Number(req.query.opvalue)
          
           
           }
             
}}