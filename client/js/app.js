//REST API URL
const baseURL = "https://restcountries.eu/rest/v2/all";

const dropDown = document.querySelector('.form__dropdown--content');
const selectRegion = document.querySelector('.form__dropdown--btn');
const darkMode = document.querySelector('.navbar__mode--link');
const body = document.querySelector('body');
const countrySection = document.querySelector('.country__section');



selectRegion.addEventListener('click', showDropdown);
darkMode.addEventListener('click', switchMode);

function showDropdown(e){
    //show and hide drop down
    dropDown.classList.toggle('hide');

    //rotate span
    document.querySelector('.dropdown__icon').classList.toggle('rotate');
   
   console.log(e.target)
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
    //get data from api
    getData(baseURL)
    //manipulate DOM with Data
    .then(function(data){
        for (i = 0; i < data.length; i++) {
            const countryDiv = document.createElement('div');
            countryDiv.className = 'country__box';
            countrySection.appendChild(countryDiv);
            //create image or flag and append
            const flag = document.createElement('img');
            flag.src = data[i].flag;
            flag.alt = 'flag';
            flag.style.width = '100%';
            flag.style.height = '50%';
            flag.style.objectFit = 'cover';
            countryDiv.appendChild(flag);
            //create name
            const name = document.createElement('h2');
            name.className = 'country__heading';
            name.textContent = data[i].name;
            countryDiv.appendChild(name);
            //create paragraph details
            //population
            const population = document.createElement('p');
            population.className = 'country__paragraph'
            pop = `Population: <span> ${data[i].population} </span>`;
            population.innerHTML = pop;
            countryDiv.appendChild(population);
            //capital
            const capital = document.createElement('p');
            capital.className = 'country__paragraph'
            pop = `Capital: <span> ${data[i].capital} </span>`;
            capital.innerHTML = pop;
            countryDiv.appendChild(capital);
            //callingcodes
            const callingCodes = document.createElement('p');
            callingCodes.className = 'country__paragraph'
            pop = `Calling Codes: <span> ${data[i].callingCodes} </span>`;
            callingCodes.innerHTML = pop;
            countryDiv.appendChild(callingCodes);
            //Region
            const region = document.createElement('p');
            region.className = 'country__paragraph'
            pop = `Region: <span> ${data[i].region} </span>`;
            region.innerHTML = pop;
            countryDiv.appendChild(region);
          }
         
    })
}
countries();
  
