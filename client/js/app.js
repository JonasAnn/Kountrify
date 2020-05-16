const baseURL = "https://restcountries.eu/rest/v2/all";

const dropDown = document.querySelector('.form__dropdown--content');
const selectRegion = document.querySelector('.form__dropdown--btn');
const darkMode = document.querySelector('.navbar__mode--link');
const body = document.querySelector('body');



selectRegion.addEventListener('click', showDropdown);
darkMode.addEventListener('click', switchMode);

function showDropdown(e){
    //show and hide drop down
    dropDown.classList.toggle('hide');

    //rotate span
    document.querySelector('.dropdown__icon').classList.toggle('rotate');
   
   
}


darkMode.addEventListener('click', switchMode);

function switchMode(e){
    if(body.classList.contains('bg--dark') == false){
        body.classList.add('bg--dark')
    } else{
        body.classList.remove('bg--dark')
    }

    console.log('clicked');

    }
function countries(){
    getData(baseURL)
    .then(function(data){
        for (i = 0; i < data.length; i++) {
            console.log(i);
          }
    })
}
countries();
  
