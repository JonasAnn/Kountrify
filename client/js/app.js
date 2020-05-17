//REST API URL
const baseURL = "https://restcountries.eu/rest/v2/all";

const dropDown = document.querySelector('.form__dropdown--content');
const selectRegion = document.querySelector('.form__dropdown--btn');
const darkMode = document.querySelector('.navbar__mode--link');
const body = document.querySelector('body');
const countryHolder = document.querySelector('.country__holder');
const countryDetails = document.querySelector('.country__details');
const inputFilter = document.querySelector('.form__input');
const pageNav = document.querySelector('.form__box');

selectRegion.addEventListener('click', showDropdown);
darkMode.addEventListener('click', switchMode);
dropDown.addEventListener('click', filterRegion);
inputFilter.addEventListener('keyup', filterResult);


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
    //get data from api
    getData(baseURL)
    //manipulate DOM with Data
    .then(function(data){
        for (i = 0; i < data.length; i++) {
            const countryDiv = document.createElement('div');
            countryDiv.className = 'country__box';
            countryHolder.appendChild(countryDiv);
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
            let pop = `Population: <span> ${data[i].population} </span>`;
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
            region.className = 'country__paragraph';
            pop = `Region: <span> ${data[i].region} </span>`;
            region.innerHTML = pop;
            countryDiv.id = data[i].region.toLowerCase();
            countryDiv.appendChild(region);
          }

          const countryBoxes = document.querySelectorAll(".country__box").forEach(box => {
              box.addEventListener('click', detailBox);
              function detailBox(e){
                  countryHolder.classList.add('hide');
                  pageNav.classList.add('hide');
                  countryDetails.classList.remove('hide');
                  console.log(e.target.parentElement);

                  //create the ul elements for the details box
                  const firstList = document.createElement('ul');
                  firstList.className = 'first--list';

                  const secondList = document.createElement('ul');
                  secondList.className = 'second--list';

                
                  if(e.target.parentElement.classList.contains('country__box')){
                      
                      const imageDetails = e.target.parentElement.children[0]; 
                      const header = e.target.parentElement.children[1];
                        // header.style.margin-bottom = '2rem';
                      imageDetails.style.height = 'auto' 
                    document.querySelector('.details--imagebox').appendChild(imageDetails);
                    const textBox = document.querySelector('.details--text');
                    textBox.appendChild(header);

                    textBox.appendChild(firstList);
                  }    
                    for (let j = 0; j < 5; j++) {
                       const firstItem = document.createElement('li');
                       firstItem.className = 'second--item';
                      
                       console.log(e.target);

                       for (i = 0; i < data.length; i++){

                    //        if(e.target.parentElement.children[1].textContent == data[i].name){
                    //    let firstText = `Native Name: <span> ${data[i].nativeName} </span>`;
                    //    firstItem[j].innerHTML = firstText;
                    //     console.log(firstItem)
                    // };
                       }

                       firstList.appendChild(firstItem);

                    }
                    
                    
                    
                  
               
              }
          });
    })
   
}

countries();
  
function filterRegion(e){
    const target = e.target.textContent.toLowerCase();

    document.querySelectorAll(".country__box").forEach((country) => {    
        country.id === target ? country.classList.remove('hide') 
        : country.classList.add('hide');
        console.log( country.id);
    })

}

function filterResult(e){
    const inputValue = e.target.value.toLowerCase();
    document.querySelectorAll(".country__box").forEach((country) => {   
        const heading = country.children[1].textContent.toLowerCase();
        heading.startsWith(inputValue) ? country.classList.remove('hide')
        : country.classList.add('hide');
    })
    
   console.log(inputValue);
}
