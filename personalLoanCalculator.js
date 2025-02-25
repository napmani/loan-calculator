function loanAmountRange(){
    document.getElementById('loanAmount').value=document.getElementById('loanAmountRange').value
}
function loanAmountText(){
    document.getElementById('loanAmountRange').value=document.getElementById('loanAmount').value
}
function numberOfYears(){
    document.getElementById('numberofyearsRange').value=document.getElementById('numberOfYears').value
}
function numberofyearsRange(){
    document.getElementById('numberOfYears').value=document.getElementById('numberofyearsRange').value
}
function interestRate(){
    document.getElementById('interestRateRange').value=document.getElementById('interestRate').value
}
function interestRateRange(){
    document.getElementById('interestRate').value=document.getElementById('interestRateRange').value
}
function result(){
    var p=document.getElementById('loanAmount').value;
    var P=parseInt(p)
    var r=document.getElementById('interestRate').value;
    var R=r/12/100;
    var n=document.getElementById('numberOfYears').value;
    var N=n*12;
    var result=(P*R*Math.pow(1+R,N))/((Math.pow(1+R,N))-1);
    document.getElementById('finalResult').innerHTML="<span>Your Monthly EMI will be<span><b><font color=blue>"+" "+"<i>&#8377</i>"+parseInt(result)+" "+"</font></b></span><span>Per Month.</span>";
    console.log(parseInt(result))
}