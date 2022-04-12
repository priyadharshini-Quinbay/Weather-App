
const weatherApi = {
    key: "8444ddf1b2bd03c2a92dfa8e8567aab0",
    baseUrl: "https://api.openweathermap.org/data/2.5/weather",
}

const searchBox = document.getElementById('inputbox');

searchBox.addEventListener('keypress', (event) => {

    if (event.keyCode == 13) {
        console.log(searchBox.value);
        getReport(searchBox.value);
        document.querySelector('.weatherbox').style.display = "block";
    }

});

function getReport(city) {
    fetch(`${weatherApi.baseUrl}?q=${city}&appid=${weatherApi.key}&units=metric`)
        .then((resp) => {
            if (!resp.ok) {
                NOTFOUND();

            }
            else {
                return resp.json();
            }
        })
        .then(showReport)
        .catch(function (error) {
            console.log(error);
        })

}



document.querySelector(".searchbutton").addEventListener("click", function () {
    getReport(searchBox.value);
    document.querySelector('.weatherbox').style.display = "block";

});

function showReport(weather) {
    let city = document.getElementById('city');
    city.innerText = `${weather.name}`;
    let temperature = document.getElementById('temp');
    temperature.innerHTML = `${weather.main.temp}&deg;C`;
    let minTemp = document.getElementById('min');
    minTemp.innerHTML = `Minimum Temperature - ${weather.main.temp_min}&deg`;
    let maxTemp = document.getElementById('max');
    maxTemp.innerHTML = `Maximum Temperature - ${weather.main.temp_max}&deg;C`;
    let weatherType = document.getElementById('weather');
    weatherType.innerText = `${weather.weather[0].main}`;
    let weatherImage = document.getElementById('img');
    let date = document.getElementById('date');
    let todayDate = new Date();
    date.innerText = dateManage(todayDate);
    document.body.style.backgroundSize = "1960px 1200px";
    if (weatherType.textContent == 'Clear') {
        document.body.style.backgroundImage = "url('https://images.fineartamerica.com/images/artworkimages/mediumlarge/2/green-field-over-blue-clear-sky-da-kuk.jpg')";
        weatherImage.src = "https://icons-for-free.com/iconfiles/png/512/sunny+temperature+weather+icon-1320196637430890623.png";

    } else if (weatherType.textContent == 'Clouds') {

        document.body.style.backgroundImage = "url('https://i.pinimg.com/originals/90/91/ed/9091ed414c1ea03f2bc5064d3b1bce13.jpg')";
        weatherImage.src = "https://cdn-icons-png.flaticon.com/512/252/252035.png";

    } else if (weatherType.textContent == 'Haze') {

        document.body.style.backgroundImage = "url('https://cdn.wallpapersafari.com/76/34/G4XuZy.jpg')";
        weatherImage.src = "https://cdn-icons-png.flaticon.com/512/4151/4151022.png";


    } else if (weatherType.textContent == 'Rain') {

        document.body.style.backgroundImage = "url('https://cdn.naturettl.com/wp-content/uploads/2018/11/22004259/bright-environment-flora-1463530-900x600.jpg')";
        weatherImage.src = "https://www.freeiconspng.com/thumbs/cloud-rain-icons/rain-cloud-icon-23.png";

    } else if (weatherType.textContent == 'Snow') {
        weatherImage.src = "https://www.freeiconspng.com/thumbs/snow-icon/blue-snow-icon-8.png";
        document.body.style.backgroundImage = "url('https://wallpaperaccess.com/full/1178523.jpgs')";

    } else if (weatherType.textContent == 'Thunderstorm') {
        weatherImage.src = "https://www.pngitem.com/pimgs/m/42-420107_cloud-clipart-thunderstorm-thunderstorm-weather-icon-hd-png.png";
        document.body.style.backgroundImage = "url('https://images.unsplash.com/photo-1504123010103-b1f3fe484a32?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dGh1bmRlcnxlbnwwfHwwfHw%3D&w=1000&q=80')";

    }
    else if (weatherType.textContent == 'Drizzle') {
        weatherImage.src = "https://static.thenounproject.com/png/12058-200.png";
        document.body.style.backgroundImage = "url('https://images.unsplash.com/photo-1556485689-33e55ab56127?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8ZHJpenpsZXxlbnwwfHwwfHw%3D&w=1000&q=80')";

    }
    else if (weatherType.textContent == 'Mist') {
        weatherImage.src = "https://cdn-icons-png.flaticon.com/512/3313/3313986.png";
        document.body.style.backgroundImage = "url('https://upload.wikimedia.org/wikipedia/commons/9/9d/%D0%97%D0%B0_%D1%81%D0%B5%D0%BB%D0%BE%D0%BC_2.jpg')";

    }
}
function NOTFOUND() {
    let city = document.getElementById('city');
    city.innerText = "Please Enter Valid City" + String.fromCodePoint(0x1F615);
    let temperature = document.getElementById('temp');
    temperature.innerHTML = "";
    let minMaxTemp = document.getElementById('min-max');
    minMaxTemp.innerHTML = "";
    let weatherType = document.getElementById('weather');
    weatherType.innerText = "";
    let date = document.getElementById('date');
    document.body.style.backgroundSize = "1960px 1200px";
    date.innerText = "";
    let weatherImage = document.getElementById('img');
 
    weatherImage.src = "https://i.pinimg.com/originals/b0/de/75/b0de755d2943b5f201c3702fd59f20f8.png";
    document.body.style.backgroundImage = "url('https://media.istockphoto.com/vectors/vector-grunge-textured-background-beautiful-abstract-decorative-red-vector-id1225740014?k=20&m=1225740014&s=612x612&w=0&h=HPhbN1L4GrzASzoewYMl_8avVBriyP2Q83v85eZ6W9M=')";
}

// Date manage
function dateManage(dateArg) {
    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    let year = dateArg.getFullYear();
    let month = months[dateArg.getMonth()];
    let date = dateArg.getDate();
    let day = days[dateArg.getDay()];
    return `${date} ${month} (${day}), ${year}`;
}



