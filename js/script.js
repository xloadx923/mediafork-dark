const burger = document.querySelector('.nav-burger');

burger.addEventListener('click', function(event){
    document.querySelector('body').classList.toggle('active');
    document.querySelector('.nav-list').classList.toggle('active');
    burger.querySelector('i').classList.toggle("fa-bars");
    burger.querySelector('i').classList.toggle("fa-chevron-up");
});