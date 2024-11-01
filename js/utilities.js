
function getInputValueById (id){
    const inputValue = document.getElementById(id).value;
    const convertedInputValue = parseFloat(inputValue);
    return convertedInputValue;
}

function getDonateBalanceById (id){
    const donateBalance = document.getElementById(id).innerText;
    const convertedDonateBalance = parseFloat(donateBalance);
    return convertedDonateBalance;
}
function getMainBalanceById (id){
    const mainBalance = document.getElementById(id).innerText;
    const convertedMainBalance = parseFloat(mainBalance);
    return convertedMainBalance;
}

// popup function 
document.getElementById('close-popup-btn').addEventListener('click', function(){
    popup.classList.remove('open-popup');
    
});