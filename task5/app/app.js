const express = require("express")
const app = express()
const path = require("path")
const hbs = require("hbs")
const viewDir=path.join(__dirname,"../resourses/views")
const layoutDir=path.join(__dirname,"../resourses/layouts")
const staticDir=path.join(__dirname,"assets")
const userRoutes=require("../routes/user.routes")
app.use(express.static(staticDir))
app.use(express.urlencoded({extended:true}))
app.set("view engine", "hbs")
app.set("views", viewDir)
hbs.registerPartials(layoutDir)

app.use(userRoutes)
module.exports = app