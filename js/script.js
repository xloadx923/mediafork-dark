const burger = document.querySelector('.nav-burger');
console.log(burger)

burger.addEventListener('click', function(event){
    document.querySelector('.nav-list').style = "display: block; position: absolute;z-index: 100;";
});