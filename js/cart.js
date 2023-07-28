function increaseOrDecreaseItem(elementId,currentNumber,currentPrice){
    document.getElementById(elementId).addEventListener("click", function () {
      const NumberElement = document.getElementById(currentNumber);
      const NumberElementString = NumberElement.value;
      const previousValue = parseInt(NumberElementString);
      const priceElement = document.getElementById(currentPrice);
      const priceElementString=priceElement.innerText;
      const previousPrice=parseFloat(priceElementString);
      if(elementId=="case-plus" || elementId=="phone-plus"){
        let eachPrice=0;
        if(elementId=="case-plus"){
           eachPrice=59;
        }
        else if(elementId=="phone-plus"){
          eachPrice=1219;
        }
        const newValue = previousValue + 1;
        NumberElement.value = newValue;
        const newPrice = eachPrice * newValue;
        priceElement.innerText = newPrice;
        
      } else if(elementId=="case-minus" || elementId=="phone-minus"){
        let eachPrice=0;
        if (elementId == "case-minus") {
          eachPrice = 59;
        } else if (elementId == "phone-minus") {
          eachPrice = 1219;
        }
        const newValue = previousValue - 1;
        NumberElement.value = newValue;
        const newPrice =  eachPrice*newValue;
        priceElement.innerText = newPrice;
      }
      function getValuefromElement(elementId){
        const element=document.getElementById(elementId);
        const elementString=element.innerText;
        const elementValue=parseInt(elementString);
        return elementValue;
      }
      const phonePriceNumber= getValuefromElement("phone-price");
      const casePriceNumber=getValuefromElement("case-price");
      
      function totalAndSet(firstNumber,secondNumber,Id){
        const total=firstNumber+secondNumber;
        const totalElement=document.getElementById(Id);
        totalElement.innerText=total;
      }
      totalAndSet(phonePriceNumber,casePriceNumber,"sub-total");
      const subTotalGet=getValuefromElement("sub-total");
      const taxElement= document.getElementById("tax");
      const taxAmount=  (subTotalGet*0.01).toFixed(2);
      const taxAmountNumber=parseFloat(taxAmount);
      taxElement.innerText=taxAmount;
      totalAndSet(subTotalGet,taxAmountNumber,"total");
    });
}

increaseOrDecreaseItem("case-plus","case-number","case-price");
increaseOrDecreaseItem("phone-plus","phone-number","phone-price");
increaseOrDecreaseItem("case-minus","case-number","case-price");
increaseOrDecreaseItem("phone-minus","phone-number","phone-price");
