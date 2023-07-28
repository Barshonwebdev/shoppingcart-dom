function increaseOrDecreaseItem(elementId,currentNumber,currentPrice){
    document.getElementById(elementId).addEventListener("click", function () {
      const NumberElement = document.getElementById(currentNumber);
      const NumberElementString = NumberElement.value;
      const previousValue = parseInt(NumberElementString);
      const priceElement = document.getElementById(currentPrice);
      const priceElementString=priceElement.innerText;
      const previousPrice=parseFloat(priceElementString);
      if(elementId=="case-plus" || elementId=="phone-plus"){
        const newValue = previousValue + 1;
        NumberElement.value = newValue;
        const newPrice=previousPrice * newValue;
        priceElement.innerText=newPrice;
      } else{
        const newValue = previousValue - 1;
        NumberElement.value = newValue;
        const newPrice = previousPrice / newValue;
        priceElement.innerText = newPrice;
        if(NumberElement.value<0){
            alert("please select positive amount of items")
            NumberElement.value=0;
        }
      }
    });
}

increaseOrDecreaseItem("case-plus","case-number","case-price");
increaseOrDecreaseItem("phone-plus","phone-number","phone-price");
increaseOrDecreaseItem("case-minus","case-number","case-price");
increaseOrDecreaseItem("phone-minus","phone-number","phone-price");