const burger = document.querySelector('.nav-burger');


function toggleClass(racine,obj,state){
    racine.querySelector(obj).classList.toggle(state);
}
function burgerToggle(){
    toggleClass(document,'body','active');
    toggleClass(document,'.nav-list','active');
    toggleClass(this,'i',"fa-bars");
    toggleClass(this,'i',"fa-chevron-up");
}

burger.addEventListener('click', burgerToggle);