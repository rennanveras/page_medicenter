const menu = document.querySelector('.menuMobile');
const menuArea = document.querySelector('.menu nav ul');

function menuToggle(){
    if(menuArea.style.display === 'block'){
        menuArea.style.display = 'none';
    }else{
        menuArea.style.display = 'block';
    }
}

menu.addEventListener('click', () => {
    menuToggle();
})