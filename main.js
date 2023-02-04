import './style.css'

//SLIDER LOGIC
let sliderCheckEl = document.getElementById('--app-mode-checkbox');
let sliderTextEl = document.getElementById('slider-text')
let sliderText = {
    darkMode:false
}

function cssToggle(mode){
  const conversionTableEl = document.getElementById('conversion-table-container')
  const conversionContainersEl = document.getElementsByClassName('conversion-containers')
  const conversionContainersArray = [...conversionContainersEl]
  const conversionTitleEl = document.getElementsByClassName('conversion-title');
  const conversionTitlesArray = [...conversionTitleEl];
  const conSpanEl = document.getElementsByClassName('spans-container')
  const conSpanArray = [...conSpanEl]
  

  if(mode === 'light'){
    conversionTableEl.classList.remove('dark-mode-conversion-table-container');
    conversionTableEl.classList.add('light-mode-conversion-table-container');
    conversionContainersArray.map(item=>{
      item.classList.remove('dark-mode-conversion-containers');
      item.classList.add('light-mode-conversion-containers');
    })
    conversionTitlesArray.map(item=>{
      item.classList.remove('dark-mode-conversion-title');
      item.classList.add('light-mode-conversion-title');
    })
    conSpanArray.map(item=>{
      item.classList.remove('dark-mode-spans-container');
      item.classList.add('light-mode-spans-container');
    })
  } else {
    conversionTableEl.classList.remove('light-mode-conversion-table-container');
    conversionTableEl.classList.add('dark-mode-conversion-table-container');
    conversionContainersArray.map(item=>{
      item.classList.remove('light-mode-conversion-containers');
      item.classList.add('dark-mode-conversion-containers');
    })
    conversionTitlesArray.map(item=>{
      item.classList.remove('light-mode-conversion-title');
      item.classList.add('dark-mode-conversion-title');
    })
    conSpanArray.map(item=>{
      item.classList.remove('light-mode-spans-container');
      item.classList.add('dark-mode-spans-container');
    })
  }
}

function handleToggle(){
  if(sliderText.darkMode){
      sliderText.darkMode = !sliderText.darkMode;
      sliderTextEl.textContent = 'Light'
      cssToggle('light')
  } else {
      sliderText.darkMode = !sliderText.darkMode;
      sliderTextEl.textContent = 'Dark'
      cssToggle("dark")
  }
}

sliderCheckEl.addEventListener('click', handleToggle);

//USER INPUT
const userInputEl = document.getElementById('user-input-value')
let userInput = null;

userInputEl.addEventListener('change', ()=>{
  userInput = userInputEl.value;
  // console.log(userInput)
})

const convertBTN = document.getElementById('convert-btn')
convertBTN.addEventListener('click',()=>{
  let feet = convertMeterToFeet();
  let meter = convertFeetToMeter();
  let gallon = convertLiterToGallon();
  let liter = convertGallonToLiter();
  let pound = convertKiloToPounds();
  let kilo = convertPoundToKilo();
  updateDOM(feet, meter, gallon, liter, pound, kilo)
  // console.log(`F:${f}, M:${m}, G:${g}, L:${l}, P:${p}, K:${k}`)
})

const meterToFeet = 3.281;;
const literToGallon = 0.264;
const kilogramToPound =  2.204;

function convertMeterToFeet(){
  return userInput * meterToFeet;
}

function convertFeetToMeter(){
  return userInput/meterToFeet;
}

function convertLiterToGallon(){
  return userInput * literToGallon;
}

function convertGallonToLiter(){
  return userInput/literToGallon;
}

function convertKiloToPounds(){
  return userInput*kilogramToPound;
}

function convertPoundToKilo(){
  return userInput/kilogramToPound;
}

const feetEl = document.getElementById('m2f');
const meterEl = document.getElementById('f2m');
const gallonEl = document.getElementById('l2g');
const literEl = document.getElementById('g2l');
const poundEl = document.getElementById('k2p');
const kiloEl = document.getElementById('p2k');


function updateDOM(f,m,g,l,p,k){
  console.log(typeof f)
  feetEl.textContent = `${userInput} meters = ${f.toFixed(2)} feet`
  meterEl.textContent = `${userInput} feet = ${m.toFixed(2)} meters`
  gallonEl.textContent = `${userInput} liters = ${g.toFixed(2)} gallons`
  literEl.textContent = `${userInput} gallons = ${l.toFixed(2)} liters`
  poundEl.textContent = `${userInput} kilograms = ${p.toFixed(2)} pounds`
  kiloEl.textContent = `${userInput} pounds = ${k.toFixed(2)} kilograms`
}