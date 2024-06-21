// Object property shorthand

const name = 'Amir'
const userAge = 21

const user = {
    // name: name,
    name,
    age: userAge,
    location: 'Tehran'
}

console.log(user)

// Object destructuring

const product = {
    lable: 'Red notebook',
    price: 3,
    stock: 201,
    salePrice: undefined
}

// const label = product.label
// const stock = product.stock
const {lable:productLable, stock, test, test2 = 0} = product

console.log(productLable)
console.log(stock)
console.log(test)
console.log(test2)

const transaction = (type, { lable, stock }) => {
    console.log(type, lable, stock)
}

transaction('order', product)
