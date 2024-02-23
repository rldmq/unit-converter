// Meter to Feet
const feet = 3.281
// Feet to Meter
const meter = 0.305

// Liter to Gallon
const gallon = 0.264
// Gallon to Liter
const liter = 3.785

// Kilogram to Pound
const pound = 2.204
// Pound to Kilogram
const kilogram = 0.454

const userInput = document.getElementById("user-input")
const lengthConv = document.getElementById("length-conversion")
const volumeConv = document.getElementById("volume-conversion")
const massConv = document.getElementById("mass-conversion")
const btn = document.getElementById("convert")

function convert(val,ratio){
    return val * ratio
}

function convertRender(input){
    lengthConv.innerText = `${input.value} meters = ${convert(input.value, feet).toFixed(3)} feet | ${input.value} feet = ${convert(input.value, meter).toFixed(3)} meters`

    volumeConv.innerText = `${input.value} liters = ${convert(input.value, gallon).toFixed(3)} gallons | ${input.value} gallons = ${convert(input.value, liter).toFixed(3)} liters`

    massConv.innerText = `${input.value} kilos = ${convert(input.value, pound).toFixed(3)} pounds | ${input.value} pounds = ${convert(input.value, kilogram).toFixed(3)} kilos`
}

btn.addEventListener("click",function(){
    if(userInput.value < 0){
        userInput.value = 0
        convertRender({value: 0})
    }else{
        convertRender(userInput)
    }
})

// Display units on open
convertRender(userInput)

// create dark mode switch