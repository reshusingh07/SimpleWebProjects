console.log("Reshu");

const buttons = document.querySelectorAll('.color')
const body = document.querySelector('body')

buttons.forEach(function (button) {
    console.log(button);
    button.addEventListener('click', function(e) {
        console.log(e);
        console.log(e.target);
        if (e.target.id === 'grey') {
            body.style.backgroundColor = '#8a817c';
          }  
        if (e.target.id === 'green') {
            body.style.backgroundColor = '#01ff70';
          }  
        if (e.target.id === 'red') {
            body.style.backgroundColor = '#ff4136';
          }  
        if (e.target.id === 'purple') {
            body.style.backgroundColor =  '#8338ec';
          }  
        if (e.target.id === 'blue') {
            body.style.backgroundColor = '#a8dadc';
          }  

        console.log('jhhfhdh');
        
        
    })
})