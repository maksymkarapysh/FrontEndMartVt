interface Product {
    title: string,
    price_usd: number,
    description: string,
    readonly id: string; // readonly свойство может быть установленно только в момент создания объекта
}

let iPad: Product = { 
    title: 'Планшет Apple iPad 2017 Wi-Fi 32Gb Space Gray', 
    price_usd: 374,
    description: 'description',
    id: '7srx2zt3zj2lnmi'
};

// iPad.id = 100; // ошибка

