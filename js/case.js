document.getElementById("case-plus").addEventListener("click",function(){
    const caseNumberElement=document.getElementById("case-number");
    const caseNumberElementString=caseNumberElement.value;
    const previousCaseValue=parseInt(caseNumberElementString);
    const newCaseValue=previousCaseValue+1;
    caseNumberElement.value=newCaseValue;
})