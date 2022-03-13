/*const customeradd =document.querySelector("#add")
const tableBody = document.querySelector("#tableBody")
const taskHeads =['name', 'accountbank','intialbalance','address']
const readDataFormStorage =(storageKey)=>{
    let data
    try{
        data=JSON.parse(localStorage.getItem(storageKey)) || []
        if(!Array.isArray(data)) throw "empty";
    }
    catch(err){
        data=[]
    }
    return data
    
}
const writeDataToStorage = (data, storageKey)=>{
    localStorage.setItem(storageKey, JSON.stringify(data))

}
const formSubmit =function(e){
e.preventDefault()
let task = {}
taskHeads.forEach(head=>{
    console.log(head)
    task[head]= this.elements[head].value
})
const customer = readDataFormStorage("list")
    customer.push(task)
    writeDataToStorage (customer,"list")
    this.reset()
    window.location.href="index.html"
}
const createMyOwnElements =(parent,element,txt,classes)=>{
    const myElement=document.createElement(element)
    parent.appendChild(myElement)
    if(txt) myElement.textContent = txt
    if(classes) myElement.className = classes
    return myElement
}
const delTask =(customer ,i)=>{
    customer.splice(i,1)
    writeDataToStorage(customer,"customer")
    showAll()
}

const showSingle =()*/
const add =document.querySelector("#add")
const tableBody=document.getElementById("#tablebody")
const readDataFormStorage=(storage)=>{
    let data 
    try{
        data=JSON.parse(localStorage.getItem(storage)) ||[]
        if (!Array.isArray(data)) throw new Error("not array")
    }
    catch(error){
        data=[]
    }
    return data
}
const writeDataToStorage=(data,storage)=>{
localStorage.setItem(storage,JSON.stringify(data))
}
const createMyOwnElements =(parent,element,txt,classes)=>{
    const myElement=document.createElement(element)
    parent.appendChild(myElement)
    if(txt) myElement.textContent = txt
    if(classes) myElement.className = classes
    return myElement

}
deletefunction=(tabledata,i)=>{
tabledata.splice(i,1)
writedatalocalstorage(tabledata,"customers")
showtabledata()
}
editfunc(tabledata,i) => { 

}
Eventt= (link,i,type) => {
    
    localStorage.setItem(type, index)
    window.open(link, '_blank')
}
showrowdata = (rowdata,index,tabledata,tableBody) => {
    const row = createmyownelement(tableBody, "tr", null, null)
        createmyownelement(row, "td", index+1, null)
        createmyownelement(row, "td", rowdata.accNum, null)
        data.forEach(element => createmyownelement(row, "td",rowdata[element], null));
        const tdbuttons = createmyownelement(row, "td", null, null)
        const deletebtn=createmyownelement(tdbuttons, "button", "delete", "btn btn-danger me-2")
        const editbtn=createmyownelement(tdbuttons, "button", "edit", "btn btn-warning me-2")
        const showbtn = createmyownelement(tdbuttons, "button", "show", "btn btn-primary me-2")
        deletebtn.addEventListener("click", () => { deletefunc(tabledata, index) })
        editbtn.addEventListener("click",  () => {Event("edit.html",index,"showitem") })
        showbtn.addEventListener("click", () => {Event("showtableelement.html",index,"edititem") })
}
showtabledata = () => {
    tableBody.innerHTML = ""
    const tabledata = readfromlocaldstorage("customers")
    tabledata.forEach((rowdata,i) => {
          showrowdata(rowdata,i,tabledata,tableBody)
    });
    

}
const formSubmit =function(event){
    event.preventDefault()
    let task={id:Date.now(),createAt:new Date()}
    taskHeads.forEach(head =>task[head])=this.elements[head].value);
    const tasks=readfromlocaldstorage("customers")
    console.log(customers)
    customers.push(customer)
    console.log(customers)
    writedatalocalstorage(customer,"customers")
    this.reset()
    showtabledata()
}
if(customer) customer.addEventListener("submit", submitform)
if (tableBody) showtabledata()
const show=document.querySelector("#show")
if(show){
const tabledata = readfromlocaldstorage("customers") 
const itemindex = parseInt(localStorage.getItem("showitem"))
const item=tabledata[itemindex]
console.log(item)
showrowdata(item,itemindex,tabledata,rowshow)
}
const editform=document.querySelector("#editform")
if (editform) {
   
    const customers = readfromlocaldstorage("customers")
  const itemindex = parseInt(localStorage.getItem("edititem"))
  data.forEach(element => {
      editform.elements[element].value=customers[itemindex][element]
  })
  editform.addEventListener("submit", function(e) {
      e.preventDefault()
      data.forEach(element => customers[itemindex][element] = e.target.elements[element].value)  
      writedatatolocalstorage(customers, "customers")
      this.reset()
      window.location.href="index.html"
  })
  
     
}