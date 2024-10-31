document.getElementById("input-amount")
    .addEventListener("input", function(event) {
        event.preventDefault();
         let value = event.target.value;
         if (value < 0) {
        event.target.value = ""; 
         }
});



document.getElementById('donate-btn')
    .addEventListener('click', function(event){
        event.preventDefault();
        const inputValue = document.getElementById('input-amount').value;
    
        const convetedInputValue = parseFloat(inputValue);
        
        if(isNaN(convetedInputValue)){
            return;
        }
       
        const donateBalance = document.getElementById('donate-balance').innerText ;
        const convertedDonateBalance = parseFloat(donateBalance);
        const finalAmount = convertedDonateBalance + convetedInputValue;
        document.getElementById('donate-balance').innerText = finalAmount;
        const mainBalance = document.getElementById('main-balance').innerText;
        const finalMainBalance = mainBalance - convetedInputValue;
        document.getElementById('main-balance').innerText = finalMainBalance;
        
})