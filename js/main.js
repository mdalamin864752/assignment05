document.getElementById("input-amount1")
    .addEventListener("input", function(event) {
        event.preventDefault();
         let value = event.target.value;
         if (value < 0) {
        event.target.value = ""; 
         }
});

document.getElementById('donate-btn1')
    .addEventListener('click', function(event){
        event.preventDefault();
        const inputValue = getInputValueById('input-amount1');
        if(isNaN(inputValue)){
            return;
        }
        const donateBalance = getDonateBalanceById('donate-balance1'); 
        const finalBalance = donateBalance + inputValue
        document.getElementById('donate-balance1').innerText =finalBalance;

        const mainBalance = getDonateBalanceById('main-balance'); 
        const finalMainBalance = mainBalance - inputValue;
        document.getElementById('main-balance').innerText = finalMainBalance ;
        
        // popup function
        let popup = document.getElementById('popup');
        popup.classList.add('open-popup');

})


// added the blog btn
document.getElementById('blog-btn')
    .addEventListener('click', function(){
        window.location.href = 'anotherindex.html';
});
// donate card -02
document.getElementById("input-amount2")
    .addEventListener("input", function(event) {
        event.preventDefault();
         let value = event.target.value;
         if (value < 0) {
        event.target.value = ""; 
         }
});

document.getElementById('donate-btn2')
    .addEventListener('click', function(event){
        event.preventDefault();
        const inputValue = getInputValueById('input-amount2');
        if(isNaN(inputValue)){
            return;
        }
        const donateBalance = getDonateBalanceById('donate-balance2'); 
        const finalBalance = donateBalance + inputValue
        document.getElementById('donate-balance2').innerText =finalBalance;

        const mainBalance = getDonateBalanceById('main-balance'); 
        const finalMainBalance = mainBalance - inputValue;
        document.getElementById('main-balance').innerText = finalMainBalance ;
        
        // popup function
        let popup = document.getElementById('popup');
        popup.classList.add('open-popup');

});

// donation card-03
document.getElementById("input-amount3")
    .addEventListener("input", function(event) {
        event.preventDefault();
         let value = event.target.value;
         if (value < 0) {
        event.target.value = ""; 
         }
});

document.getElementById('donate-btn3')
    .addEventListener('click', function(event){
        event.preventDefault();
        const inputValue = getInputValueById('input-amount3');
        if(isNaN(inputValue)){
            return;
        }
        const donateBalance = getDonateBalanceById('donate-balance3'); 
        const finalBalance = donateBalance + inputValue
        document.getElementById('donate-balance3').innerText =finalBalance;

        const mainBalance = getDonateBalanceById('main-balance'); 
        const finalMainBalance = mainBalance - inputValue;
        document.getElementById('main-balance').innerText = finalMainBalance ;
        
        // popup function
        let popup = document.getElementById('popup');
        popup.classList.add('open-popup');

})

