

function generatePin(){
    const generatePin = Math.round(Math.random()*10000)
    return generatePin;
}

function getPin(){
    const pin = generatePin()
    const pinString = pin + ''
    if(pinString.length == 4){
        return pin
    }else{
        return getPin();
    }
}

document.getElementById('generate-pin').addEventListener('click' ,()=>{
    
        const pin = getPin()
        const displayPin = document.getElementById('display-pin')
        displayPin.value = pin
    
   
})

document.getElementById('calculator').addEventListener('click', (e)=>{
    const number = e.target.innerText
    const typedNumber = document.getElementById('typed-number')
    
    if(isNaN(number)){
        if(number == "C"){
            typedNumber.value = ''
        }else if (number == "<"){
            const previousTypedNumber = typedNumber.value
            const typedNumberArr = previousTypedNumber.split('')
            typedNumberArr.pop()
            const joinedNumber = typedNumberArr.join('')
           typedNumber.value = joinedNumber
        }
    }else{
        
        typedNumber.value += number
    }
})

document.getElementById("submit").addEventListener('click', ()=>{
    const displayPin = document.getElementById('display-pin')
    const typedNumber = document.getElementById('typed-number')
    const success = document.getElementById('success') 
    const failed = document.getElementById('failed') 
    if(displayPin.value === typedNumber.value){
        success.style.display = 'block'
        failed.style.display = "none"
    }else{
        failed.style.display = 'block'
        success.style.display = "none"
    }
    typedNumber.value = ''
    displayPin.value = ''
})