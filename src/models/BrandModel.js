const mongoose =require('mongoose')
const DataSchema =mongoose.Schema({
    brandName:{type:String,unique:true},
    brandImg:{type:String,unique:true},

},
{timestamps:true,versionkey:false})


const BrandModel =mongoose.model('brands',DataSchema)

module.exports =BrandModel;