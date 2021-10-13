const url1 = 'https://proyecto-express-james.herokuapp.com'

const getClientsAsync = async ()=>{
    try{
        const resClient = await fetch(url1+'/registerclient')
        const dataClient = await resClient.json();
        return dataClient;    
    }catch(err){
        console.log(err)
    }
}

const getProvidersAsync = async ()=>{
    try{
        const resProvider = await fetch(url1+'/registerprovider')
        const dataProvider = await resProvider.json();
        return dataProvider;    
    }catch(err){
        console.log(err)
    }
}

const getCategoriesAsync = async ()=>{
    try{
        const resCategory = await fetch(url1+'/registercategory')
        const dataCategory = await resCategory.json();
        return dataCategory;    
    }catch(err){
        console.log(err)
    }
}

const getProductsAsync = async ()=>{
    try{
        const resProduct = await fetch(url1+'/registerproduct')
        const dataProduct = await resProduct.json();
        return dataProduct;    
    }catch(err){
        console.log(err)
    }
}

export default{
    getClientsAsync,
    getProvidersAsync,
    getCategoriesAsync,
    getProductsAsync
}