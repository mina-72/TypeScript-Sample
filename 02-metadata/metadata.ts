import 'reflect-metadata'

const car = {
    color: 'red'
}

//model feature is metadata and it's invisible in car obj
Reflect.defineMetadata('model', 'benz', car)
Reflect.defineMetadata('speed', 160, car)


const model = Reflect.getMetadata( 'model', car )
console.log("model is: ",model)

const speed = Reflect.getMetadata( 'speed', car )
console.log("speed is: ",speed)


// create metadata for color property that is exist in obj car
Reflect.defineMetadata( 'newColor', 'blue', car, 'color')
const newColor = Reflect.getMetadata( 'newColor', car, 'color')
console.log("new color is: ",newColor)


console.log("car is: ",car)