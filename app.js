function updateProductNumber(product, price, increasing){
    const productInput = document.getElementById(product + '-field');
    let productCount = productInput.value;
    if(increasing){
        productCount = parseInt(productCount) + 1;
    }
    else if(productCount > 0){
        productCount = parseInt(productCount)  - 1;
    }
    productInput.value = productCount
    const totalProduct = document.getElementById(product +'-total');
    totalProduct.innerText = productCount * price;
    
    calculateTotal()
}

function getInputValue(product){
    const productInput = document.getElementById(product + '-field');
    const productInputValue = parseInt(productInput.value);
    return productInputValue;
}

function calculateTotal(){
    
    const phoneTotal = getInputValue('phone') * 1219;
    const caseTotal = getInputValue('case') * 59;
    const subTotal = phoneTotal + caseTotal;
   document.getElementById("subtotal").innerText = subTotal;
   const tex = subTotal / 10;
   document.getElementById('texAmount').innerText = tex;
   const totalAmount = subTotal + tex;
   document.getElementById('total').innerText = totalAmount;
}


document.getElementById('plus-phone').addEventListener('click', function(){
    updateProductNumber('phone',1219, true)
})
document.getElementById('minus-phone').addEventListener('click', function(){
    updateProductNumber('phone',1219, false)
})

document.getElementById('add-button').addEventListener('click', function(){
    
    updateProductNumber('case',59, true)
   
})

document.getElementById('minus-button').addEventListener('click', function(){
    
    updateProductNumber('case',59, false)
    
})

 


