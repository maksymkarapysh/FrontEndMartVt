// интерфейс описывает generic функцию, которая принимает один параметр и возвращает значение такого же как параметр типа
interface GenericFunc<T> {
    <T>(arg: T): T
}

function testFunc<T>(arg: T) : T {
    return arg;
}

let myGenericFunc : GenericFunc<number> = testFunc;

myGenericFunc(10);