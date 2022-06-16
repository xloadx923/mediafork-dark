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
            let HTML = "";
            const modal = document.createElement('div');
            modal.classList.add('modalServices');
            HTML += `<div class="titleModal">${service.querySelector('.card-ttl').innerText}</div>`;
            HTML += `<div class="textModal">${service.querySelector('.card-ttl').dataset.text}</div>`;
            modal.innerHTML = HTML;
            this.parentElement.appendChild(modal);
        });
    });
}

burger.addEventListener('click', burgerToggle);

displayService();