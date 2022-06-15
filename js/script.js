const burger = document.querySelector('.nav-burger');
burger.addEventListener('click', function(event){
    document.querySelector('body').style = "overflow:hidden;";
    document.querySelector('.nav-list').classList.toggle('active');
    document.querySelector('.header-container').classList.toggle('active');

    // document.querySelector('.nav-burger i').classList.add("fa");
    // document.querySelector('.nav-burger i').classList.add("fa-chevron-up");
});