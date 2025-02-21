// colorName for give a name of rgb() backgroundColor
const colorName = document.querySelector("h1")

// button for change backgroundColor
const buttonColorChanger = document.querySelector('button')

// box which you want to backgroundColor
const boxColor = document.getElementsByClassName('box')[0]

buttonColorChanger.addEventListener('click',()=>{
    let random1Color = `${Math.floor(Math.random()*226)}`
    let random2Color = `${Math.floor(Math.random()*226)}`
    let random3Color = `${Math.floor(Math.random()*226)}`
    // colorCombination is combination of three backgroundColor rgb()
    let colorCombination = `rgb(${random1Color},${random2Color},${random3Color})`
    // Give backgroundColor name
    colorName.innerText = colorCombination
    // Insert backgroundColor to the boxColor
    boxColor.style.backgroundColor = colorCombination
})