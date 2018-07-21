

interface Product1 {
    title: string,
    price: number
}

class Product2 {
    constructor(public title: string, public price: number ) {  }
}


let product1: Product2 = {
    title: 'some title',
    price: 125
}