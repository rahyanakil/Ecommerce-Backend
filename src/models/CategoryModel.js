const mongoose =require('mongoose')
const DataSchema =mongoose.Schema({
    catagoryName:{type:String,unique:true},
    catagoryImg:{type:String,unique:true},

},
{timestamps:true,versionkey:false})


const CategoryModel =mongoose.model('catagories',DataSchema)

module.exports =CategoryModel;