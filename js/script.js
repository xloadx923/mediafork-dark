const burger = document.querySelector('.nav-burger');
const services = document.querySelectorAll('#services .cards-list li');

function toggleClass(racine,obj,state){
    if(obj) racine.querySelector(obj).classList.toggle(state);
    else racine.classList.toggle(state)
}

function burgerToggle(){
    toggleClass(document,'body','active');
    toggleClass(document,'.nav-list','active');
    
    toggleClass(this,'i',"fa-bars");
    toggleClass(this,'i',"fa-chevron-up");
}

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

burger.addEventListener('click', burgerToggle);

displayService();