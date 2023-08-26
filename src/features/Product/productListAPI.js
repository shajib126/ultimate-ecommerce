export function fetchAllProducts(){
    return new Promise(async (resolve)=>{
        const res = await fetch('https://dummyjson.com/products')
        const data = await res.json()
        resolve(data.products)
    })
}