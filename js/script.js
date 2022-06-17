const mobileButton = document.getElementById('mobile-button');
const mobileIcon = document.getElementById('mobile-icon');

const mainNav = document.getElementById('main-nav');
const mainLinks = mainNav.querySelector('li a');


function toggleClass(racine,obj,state){
    if(obj) racine.querySelector(obj).classList.toggle(state);
    else racine.classList.toggle(state)
}

/* BONUS POUR EVITER UN VILAIN GROS BOUTON ORANGE SUR LA VERSION MOBILE */
function modifButton(){
    const buttonScroll = document.querySelector('.button-scroll');
    buttonScroll.addEventListener('click', function(event){
        this.classList.add('active');
    });
}

function burgerToggle(){
    toggleClass(mobileIcon,false,"fa-bars");
    toggleClass(mobileIcon,false,"fa-chevron-up");
}
function toggleNav(){
    mainNav.classList.toggle('display');
    burgerToggle();
}

const services = document.querySelectorAll('#services .cards-list li');
function displayService(){
    services.forEach(function (service){
        service.addEventListener('click', function(event){
            const modalServices = document.querySelector('.modalServices');
            if(modalServices) modalServices.remove();
            let HTML = "";
            const contModal = document.createElement('div');
            contModal.classList.add('contModalServices');
            const modal = document.createElement('div');
            modal.classList.add('modalServices');
            const image =  service.querySelector('.card img');
            HTML += `<div class="close"><i class="fa fa-times" aria-hidden="true"></i></div>`;
            HTML += `<div class="backModalImage"><img src="${image.getAttribute('src')}"></div>`;
            HTML += `<div class="titleModal">${service.querySelector('.card-ttl').innerText}</div>`;
            HTML += `<div class="textModal">${service.querySelector('.card-ttl').dataset.text}</div>`;
            modal.innerHTML = HTML;

            contModal.appendChild(modal);
            this.parentElement.appendChild(contModal);
            document.querySelector('.contModalServices').addEventListener('click', () => contModal.remove());
        });
    });
}

mobileButton.addEventListener('click', toggleNav);

mainNav.addEventListener('click', function(event) {
    if(event.target.getAttribute('href')) toggleNav();
});

// window.addEventListener('resize', function(event){
//     if(window.innerWidth >= 768){

//     }
// });

modifButton(); /* BONUS */
displayService();