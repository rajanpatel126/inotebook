const express = require('express')
const router = express.Router()

router.get('/',(req,res)=>{
    // obj = {
    //     a:'this is it',
    //     number: 23
    // }
    res.json([])
})

module.exports = router