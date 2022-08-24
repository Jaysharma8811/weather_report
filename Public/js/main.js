const cityName = document.getElementById('cityName');
// const async = require("hbs/lib/async");

const submitBtn = document.getElementById('submitBtn');
const city_name = document.getElementById('city_name');
const temp_real = document.getElementById('temp_real');
const temp_status = document.getElementById('temp_status');
const datahide= document.querySelector('.mid_layer');
const getinfo =async(event) =>{
    event.preventDefault()
    let cityVal = cityName.value;

if(cityVal == ""){
    city_name.innerText= 'plz write city name ';
    datahide.classList.add('data_hide');
}else{
    try{
    let url= `https://api.openweathermap.org/data/2.5/weather?q=${cityVal}&units=metric&appid=aeac80eec860dfb05770fc4ffe48bd74`;
     const response = await fetch(url);
     const data = await response.json();
    const arrData = [data];

    city_name.innerText = `${arrData[0].name}, ${arrData[0].sys.country}`;
    temp_real.innerText = arrData[0].main.temp;
    // temp_status.innerText = arrData[0].weather[0].main;

    const tempmood =arrData[0].weather[0].main;
    // conditions to check weather condition
        if(tempmood == "Clear"){
            temp_status.innerHTML =
            "<i class ='fas fa-sun' style='color: yellow;'> </i>";
        } 
       else if(tempmood == "Clouds"){
            temp_status.innerHTML =
            "<i class ='fas fa-cloud' style='color: #f1f2f6;'> </i>";
        }
      else if(tempmood == "Rain"){
            temp_status.innerHTML =
            "<i class ='fas fa-cloud-rain' style='color: #a4b0be;'> </i>";
        }
        // else if(tempmood == "Mist"){
        //         temp_status.innerHTML =
        //         "<i class ='fas fa-cloud-fog' style='color:#a4b0be;'> </i>";
        //     }
             else{
                temp_status.innerHTML =
                '<i class="fas fa-sun"></i>';
            }
        
    datahide.classList.remove('data_hide');


    }
    catch
    {
        city_name.innerText = "pls enter the city name properly";
        datahide.classList.add('data_hide');

    }
}
}
submitBtn.addEventListener('click', getinfo);