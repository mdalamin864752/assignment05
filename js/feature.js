document.getElementById('button1')
    .addEventListener('click', function(){
        const section1 = document.getElementById('section1');
        const section2 = document.getElementById('section2');
        section1.classList.remove('hidden');
        section2.classList.add('hidden');
});
document.getElementById('button2')
    .addEventListener('click', function(){
        const section1 = document.getElementById('section1');
        const section2 = document.getElementById('section2');
        section1.classList.add('hidden');
        section2.classList.remove('hidden');
});