import db from '../models/index'
import CRUDService from '../services/CRUDService'
let getHomePage = async (req, res) => {
    let data = await db.User.findAll()

    return res.render('homepage.ejs', {
        data: JSON.stringify(data)
    })
}

let getAboudPage = (req, res) => {
    return res.render('test/about.ejs')
}

let getCRUD = (req, res) => {
    return res.render('crud.ejs')
}

let postCRUD = async (req, res) => {
    let message = await CRUDService.createNewUser(req.body)
    console.log(message)
    return res.send('post crud from server')
}
module.exports = {
    getHomePage: getHomePage,
    getAboudPage: getAboudPage,
    getCRUD: getCRUD,
    postCRUD: postCRUD,
}