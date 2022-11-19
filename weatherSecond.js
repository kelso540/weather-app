let primary = {
    apiKey: "0ae40ad0cb46cfc0c77a6b0eecda3979",
    iconId: "http://openweathermap.org/img/wn/10d@2x.png",
    limit: 1, 
    lat: 0, 
    lon: 0, 
    unix: 0, 
    city: "", 
    state: "", 
    country: "",
    day: 0, 
    decider: true,
    timeInDegrees: 0, 
    stateOrCountry: true,
  };
  let cast = {
    sunrise: 0, 
    sunset: 0,
    dayMid: 0,  
    newTimes: [], 
    currentWeather: {},
    day1: {},
    day2: {},
    day3: {},
    day4: {},
    day5: {},
    day6: {},
    day7: {},
    hour1: {}, 
    hour2: {},
    hour3: {},
    hour4: {},
    hour5: {},
    hour6: {},
    hour7: {},
    hour8: {},
    hour9: {},
    hour10: {},
  };
  
  let HTML = {
    mid: document.querySelector(".mid"),
    meter: document.querySelector(".meter"),
    changeSearch: document.querySelector(".changeSearch"),
    changeSearchZip: document.querySelector(".changeSearchZip"),
    changeSearchMobile: document.querySelector(".changeSearchMobile"),
    changeSearchZipMobile: document.querySelector(".changeSearchZipMobile"),
    searchBar: document.querySelector(".searchBar"), 
    searchBarCity: document.querySelector(".searchBarCity"),
    iFrame: document.querySelector(".frame"),
    cityState: document.querySelector(".cityState"),     
    current: document.querySelector(".infoDiv"),
    day: document.querySelector(".dayDiv"),
    hour: document.querySelector(".hourDiv"),  
    loading: document.querySelector(".loading"),
    nav: document.querySelector("nav"),
    dropMenu: document.getElementById("dropDiv"),
    threeLines: document.querySelector(".threeLines"),
    dailyForecastTextHeader: document.querySelector(".radar2"),
    currentForecastTextHeader: document.querySelector(".radar"),
    days: [
      document.querySelector(".infoInfo1"),
      document.querySelector(".infoInfo2"),
      document.querySelector(".infoInfo3"),
      document.querySelector(".infoInfo4"),
      document.querySelector(".infoInfo5"),
      document.querySelector(".infoInfo6"),
      document.querySelector(".infoInfo7")
    ],
    arrowRight: document.querySelector(".arrowB"), 
    arrowLeft: document.querySelector(".arrowA"), 
    containerDiv: document.querySelector(".container"),
    startContainer: document.querySelector(".startContainer"),      
    search: document.getElementById("search"),
    searchBtn: document.getElementById("searchBtn"), 
    searchCity: document.getElementById("searchCity"),
    searchBtnCity: document.getElementById("searchBtnCity"),    
    city: document.getElementById("city"), 
    state: document.getElementById("state"), 
    sunrise: document.getElementById("sunrise"), 
    time: document.getElementById("time"), 
    sunset: document.getElementById("sunset"),
    uv: document.getElementById("uV"), 
    feelsLike: document.getElementById("feelsLike"),
    windSpeed: document.getElementById("windSpeed"),
    windGust: document.getElementById("windGust"),
    temp: document.getElementById("temp"),
    mainIconPic: document.querySelector(".mainIconPic"),
    main: document.getElementById("main"),
    humidity: document.getElementById("humidity"),
    dewPoint: document.getElementById("dewPoint"),
    description: document.getElementById("description"),
    highTemp: document.getElementById("highTemp"),
    midTemp: document.getElementById("midTemp"),
    lowTemp: document.getElementById("lowTemp"),
    dayOfWeek1: document.getElementById("dayOfWeek1"),
    temp1: document.getElementById("temp1"),
    icon1: document.getElementById("icon1"),
    descriptionDay1: document.getElementById("descriptionDay1"),
    textDay1: document.getElementById("textDay1"),
    rainPercent1: document.getElementById("rainPercent1"), 
    windSpeed1: document.getElementById("windSpeed1"),
    humidity1: document.getElementById("humidity1"),
    dewPoint1: document.getElementById("dewPoint1"),
    uv1: document.getElementById("uV1"),
    highTemp1: document.getElementById("highTemp1"),
    lowTemp1: document.getElementById("lowTemp1"),
    dayOfWeek2: document.getElementById("dayOfWeek2"),
    temp2: document.getElementById("temp2"),
    icon2: document.getElementById("icon2"),
    descriptionDay2: document.getElementById("descriptionDay2"),
    textDay2: document.getElementById("textDay2"),
    rainPercent2: document.getElementById("rainPercent2"),
    windSpeed2: document.getElementById("windSpeed2"),
    humidity2: document.getElementById("humidity2"),
    dewPoint2: document.getElementById("dewPoint2"),
    uv2: document.getElementById("uV2"),
    highTemp2: document.getElementById("highTemp2"),
    lowTemp2: document.getElementById("lowTemp2"),
    dayOfWeek3: document.getElementById("dayOfWeek3"),
    temp3: document.getElementById("temp3"),
    icon3: document.getElementById("icon3"),
    descriptionDay3: document.getElementById("descriptionDay3"),
    textDay3: document.getElementById("textDay3"),
    rainPercent3: document.getElementById("rainPercent3"),
    windSpeed3: document.getElementById("windSpeed3"),
    humidity3: document.getElementById("humidity3"),
    dewPoint3: document.getElementById("dewPoint3"),
    uv3: document.getElementById("uV3"),
    highTemp3: document.getElementById("highTemp3"),
    lowTemp3: document.getElementById("lowTemp3"),
    dayOfWeek4: document.getElementById("dayOfWeek4"),
    temp4: document.getElementById("temp4"),
    icon4: document.getElementById("icon4"),
    descriptionDay4: document.getElementById("descriptionDay4"),
    textDay4: document.getElementById("textDay4"),
    rainPercent4: document.getElementById("rainPercent4"),
    windSpeed4: document.getElementById("windSpeed4"),
    humidity4: document.getElementById("humidity4"),
    dewPoint4: document.getElementById("dewPoint4"),
    uv4: document.getElementById("uV4"),
    highTemp4: document.getElementById("highTemp4"),
    lowTemp4: document.getElementById("lowTemp4"),
    dayOfWeek5: document.getElementById("dayOfWeek5"),
    temp5: document.getElementById("temp5"),
    icon5: document.getElementById("icon5"),
    descriptionDay5: document.getElementById("descriptionDay5"),
    textDay5: document.getElementById("textDay5"),
    rainPercent5: document.getElementById("rainPercent5"),
    windSpeed5: document.getElementById("windSpeed5"),
    humidity5: document.getElementById("humidity5"),
    dewPoint5: document.getElementById("dewPoint5"),
    uv5: document.getElementById("uV5"),
    highTemp5: document.getElementById("highTemp5"),
    lowTemp5: document.getElementById("lowTemp5"),
    dayOfWeek6: document.getElementById("dayOfWeek6"),
    temp6: document.getElementById("temp6"),
    icon6: document.getElementById("icon6"),
    descriptionDay6: document.getElementById("descriptionDay6"),
    textDay6: document.getElementById("textDay6"),
    rainPercent6: document.getElementById("rainPercent6"), 
    windSpeed6: document.getElementById("windSpeed6"),
    humidity6: document.getElementById("humidity6"),
    dewPoint6: document.getElementById("dewPoint6"),
    uv6: document.getElementById("uV6"),
    highTemp6: document.getElementById("highTemp6"),
    lowTemp6: document.getElementById("lowTemp6"),    
    dayOfWeek7: document.getElementById("dayOfWeek7"),
    temp7: document.getElementById("temp7"),
    icon7: document.getElementById("icon7"),
    descriptionDay7: document.getElementById("descriptionDay7"),
    textDay7: document.getElementById("textDay7"),
    rainPercent7: document.getElementById("rainPercent7"),
    windSpeed7: document.getElementById("windSpeed7"),
    humidity7: document.getElementById("humidity7"),
    dewPoint7: document.getElementById("dewPoint7"),
    uv7: document.getElementById("uV7"),
    highTemp7: document.getElementById("highTemp7"),
    lowTemp7: document.getElementById("lowTemp7"),   
    hourTime1: document.getElementById("hourTime1"),
    hourTemp1: document.getElementById("hourTemp1"),
    hourIcon1: document.getElementById("hourIcon1"),
    hourRainPercent1: document.getElementById("hourRainPercent1"),
    humid1: document.getElementById("humid1"),
    wind1: document.getElementById("wind1"),
    hourTime2: document.getElementById("hourTime2"),
    hourTemp2: document.getElementById("hourTemp2"),
    hourIcon2: document.getElementById("hourIcon2"),
    hourRainPercent2: document.getElementById("hourRainPercent2"),
    humid2: document.getElementById("humid2"),
    wind2: document.getElementById("wind2"),     
    hourTime3: document.getElementById("hourTime3"),
    hourTemp3: document.getElementById("hourTemp3"),
    hourIcon3: document.getElementById("hourIcon3"),
    hourRainPercent3: document.getElementById("hourRainPercent3"),
    humid3: document.getElementById("humid3"),
    wind3: document.getElementById("wind3"),
    hourTime4: document.getElementById("hourTime4"),
    hourTemp4: document.getElementById("hourTemp4"),
    hourIcon4: document.getElementById("hourIcon4"),
    hourRainPercent4: document.getElementById("hourRainPercent4"),
    humid4: document.getElementById("humid4"),
    wind4: document.getElementById("wind4"),
    hourTime5: document.getElementById("hourTime5"),
    hourTemp5: document.getElementById("hourTemp5"),
    hourIcon5: document.getElementById("hourIcon5"),
    hourRainPercent5: document.getElementById("hourRainPercent5"),
    humid5: document.getElementById("humid5"),
    wind5: document.getElementById("wind5"),
    hourTime6: document.getElementById("hourTime6"),
    hourTemp6: document.getElementById("hourTemp6"),
    hourIcon6: document.getElementById("hourIcon6"),
    hourRainPercent6: document.getElementById("hourRainPercent6"),
    humid6: document.getElementById("humid6"),
    wind6: document.getElementById("wind6"),
    hourTime7: document.getElementById("hourTime7"),
    hourTemp7: document.getElementById("hourTemp7"),
    hourIcon7: document.getElementById("hourIcon7"),
    hourRainPercent7: document.getElementById("hourRainPercent7"),
    humid7: document.getElementById("humid7"),
    wind7: document.getElementById("wind7"),
    hourTime8: document.getElementById("hourTime8"),
    hourTemp8: document.getElementById("hourTemp8"),
    hourIcon8: document.getElementById("hourIcon8"),
    hourRainPercent8: document.getElementById("hourRainPercent8"),
    humid8: document.getElementById("humid8"),
    wind8: document.getElementById("wind8"),
    hourTime9: document.getElementById("hourTime9"),
    hourTemp9: document.getElementById("hourTemp9"),
    hourIcon9: document.getElementById("hourIcon9"),
    hourRainPercent9: document.getElementById("hourRainPercent9"),
    humid9: document.getElementById("humid9"),
    wind9: document.getElementById("wind9"),
    hourTime10: document.getElementById("hourTime10"),
    hourTemp10: document.getElementById("hourTemp10"),
    hourIcon10: document.getElementById("hourIcon10"),
    hourRainPercent10: document.getElementById("hourRainPercent10"),
    humid10: document.getElementById("humid10"),
    wind10: document.getElementById("wind10"), 
  };
  
  class WeatherCall {
    constructor(time, temp, type, description, feelsLike, humidity, windSpeed, windGust, icon, rain, dew, uv, high, low){
      this.time = time;
      this.temp = temp; 
      this.type = type; 
      this.description = description; 
      this.feelsLike = feelsLike; 
      this.humidity = humidity; 
      this.windSpeed = windSpeed; 
      this.windGust = windGust;  
      this.icon = icon; 
      this.rain = rain;
      this.dew = dew; 
      this.uv = uv; 
      this.high = high; 
      this.low = low;  
    }
  }
  
  class Time {
    constructor(unix){
      this.unix = unix; 
      this.timeNow = new Date(this.unix * 1000);
      this.timeList = this.timeNow.toString().split(" ");  
    }
  }
  class TodaysTime {
    constructor(){
      this.timeNow = new Date();
      this.timeList = this.timeNow.toString().split(" ");  
    }
  }

  const changeToZip = () => {
    HTML.changeSearch.style.display = "inline";
    HTML.changeSearchZip.style.display = "none"; 
    HTML.searchBarCity.style.display = "none";
    HTML.searchBar.style.display = "flex";
  }
  
  const changeToCity = () => {
    HTML.changeSearch.style.display = "none";
    HTML.changeSearchZip.style.display = "inline"; 
    HTML.searchBarCity.style.display = "flex";
    HTML.searchBar.style.display = "none";
  }

  const changeToZipMobile = () => {
    HTML.changeSearchMobile.style.display = "inline";
    HTML.changeSearchZipMobile.style.display = "none"; 
    HTML.searchBarCity.style.display = "none";
    HTML.searchBar.style.display = "flex";
  }
  
  const changeToCityMobile = () => {
    HTML.changeSearchMobile.style.display = "none";
    HTML.changeSearchZipMobile.style.display = "inline"; 
    HTML.searchBarCity.style.display = "flex";
    HTML.searchBar.style.display = "none";
  }
  
  const runTime = () => {
  let todayDate = new TodaysTime();
  document.getElementById("time").innerHTML = todayDate.timeList[0] + " " + todayDate.timeList[1] + " " + todayDate.timeList[2] + " " + todayDate.timeList[3];
  document.getElementById("time2").innerHTML = todayDate.timeList[0] + " " + todayDate.timeList[1] + " " + todayDate.timeList[2] + " " + todayDate.timeList[3];
  }
  
  let fillHTML = () => {
              HTML.city.innerHTML = primary.city;
              if(primary.stateOrCountry === true){
                HTML.state.innerHTML = primary.country;
              } else {
                HTML.state.innerHTML = primary.state;
              }
              HTML.dewPoint.innerHTML = cast.currentWeather.dew; 
              HTML.uv.innerHTML = cast.currentWeather.uv; 
              HTML.sunrise.innerHTML = cast.newTimes[0];
              let mainTime = new Time(cast.currentWeather.time); 
              HTML.time.innerHTML = mainTime.timeList[0] + " " + mainTime.timeList[1] + " " + mainTime.timeList[2] + " " + mainTime.timeList[3]; 
              HTML.sunset.innerHTML = cast.newTimes[1];
              HTML.feelsLike.innerHTML = cast.currentWeather.feelsLike; 
              HTML.windSpeed.innerHTML = cast.currentWeather.windSpeed;
              HTML.windGust.innerHTML = cast.currentWeather.windGust; 
              HTML.temp.innerHTML = cast.currentWeather.temp;
              HTML.mainIconPic.src = `https://openweathermap.org/img/wn/${cast.currentWeather.icon}@2x.png`; 
              HTML.main.innerHTML = cast.currentWeather.type; 
              HTML.humidity.innerHTML = cast.currentWeather.humidity;
              HTML.description.innerHTML = cast.currentWeather.description;
              HTML.highTemp.innerHTML = cast.currentWeather.high;
              HTML.midTemp.innerHTML = Math.floor(cast.currentWeather.rain * 100);
              HTML.lowTemp.innerHTML = cast.currentWeather.low;
              changeCurrentWeatherBackground(cast.currentWeather, HTML.current); 
          
              let hourT1 = new Time(cast.day1.time); 
              HTML.dayOfWeek1.innerHTML = hourT1.timeList[0];
              HTML.temp1.innerHTML = cast.day1.temp;
              HTML.icon1.src = `https://openweathermap.org/img/wn/${cast.day1.icon}@4x.png`;
              HTML.descriptionDay1.innerHTML = cast.day1.type;
              HTML.textDay1.innerHTML = cast.day1.description;
              HTML.rainPercent1.innerHTML = Math.floor(cast.day1.rain * 100);
              HTML.windSpeed1.innerHTML = cast.day1.windSpeed;
              HTML.humidity1.innerHTML = cast.day1.humidity;
              HTML.dewPoint1.innerHTML = cast.day1.dew; 
              HTML.uv1.innerHTML = cast.day1.uv; 
              HTML.highTemp1.innerHTML = cast.day1.high;
              HTML.lowTemp1.innerHTML = cast.day1.low;
              changeWeatherBackground(cast.day1, HTML.day);  
          
              let hourT2 = new Time(cast.day2.time); 
              HTML.dayOfWeek2.innerHTML = hourT2.timeList[0];
              HTML.temp2.innerHTML = cast.day2.temp;
              HTML.icon2.src = `https://openweathermap.org/img/wn/${cast.day2.icon}@4x.png`;
              HTML.descriptionDay2.innerHTML = cast.day2.type;
              HTML.textDay2.innerHTML = cast.day2.description;
              HTML.rainPercent2.innerHTML = Math.floor(cast.day2.rain * 100);
              HTML.windSpeed2.innerHTML = cast.day2.windSpeed;
              HTML.humidity2.innerHTML = cast.day2.humidity;
              HTML.dewPoint2.innerHTML = cast.day2.dew; 
              HTML.uv2.innerHTML = cast.day2.uv; 
              HTML.highTemp2.innerHTML = cast.day2.high;
              HTML.lowTemp2.innerHTML = cast.day2.low;
          
              let hourT3 = new Time(cast.day3.time); 
              HTML.dayOfWeek3.innerHTML = hourT3.timeList[0];
              HTML.temp3.innerHTML = cast.day3.temp;
              HTML.icon3.src = `https://openweathermap.org/img/wn/${cast.day3.icon}@4x.png`;
              HTML.descriptionDay3.innerHTML = cast.day3.type;
              HTML.textDay3.innerHTML = cast.day3.description;
              HTML.rainPercent3.innerHTML = Math.floor(cast.day3.rain * 100);
              HTML.windSpeed3.innerHTML = cast.day3.windSpeed;
              HTML.humidity3.innerHTML = cast.day3.humidity;
              HTML.dewPoint3.innerHTML = cast.day3.dew; 
              HTML.uv3.innerHTML = cast.day3.uv; 
              HTML.highTemp3.innerHTML = cast.day3.high;
              HTML.lowTemp3.innerHTML = cast.day3.low;
          
              let hourT4 = new Time(cast.day4.time); 
              HTML.dayOfWeek4.innerHTML = hourT4.timeList[0];
              HTML.temp4.innerHTML = cast.day4.temp;
              HTML.icon4.src = `https://openweathermap.org/img/wn/${cast.day4.icon}@4x.png`;
              HTML.descriptionDay4.innerHTML = cast.day4.type;
              HTML.textDay4.innerHTML = cast.day4.description;
              HTML.rainPercent4.innerHTML = Math.floor(cast.day4.rain * 100);
              HTML.windSpeed4.innerHTML = cast.day4.windSpeed;
              HTML.humidity4.innerHTML = cast.day4.humidity;
              HTML.dewPoint4.innerHTML = cast.day4.dew; 
              HTML.uv4.innerHTML = cast.day4.uv; 
              HTML.highTemp4.innerHTML = cast.day4.high;
              HTML.lowTemp4.innerHTML = cast.day4.low;
          
              let hourT5 = new Time(cast.day5.time); 
              HTML.dayOfWeek5.innerHTML = hourT5.timeList[0];
              HTML.temp5.innerHTML = cast.day5.temp;
              HTML.icon5.src = `https://openweathermap.org/img/wn/${cast.day5.icon}@4x.png`;
              HTML.descriptionDay5.innerHTML = cast.day5.type;
              HTML.textDay5.innerHTML = cast.day5.description;
              HTML.rainPercent5.innerHTML = Math.floor(cast.day5.rain * 100);
              HTML.windSpeed5.innerHTML = cast.day5.windSpeed;
              HTML.humidity5.innerHTML = cast.day5.humidity;
              HTML.dewPoint5.innerHTML = cast.day5.dew; 
              HTML.uv5.innerHTML = cast.day5.uv; 
              HTML.highTemp5.innerHTML = cast.day5.high;
              HTML.lowTemp5.innerHTML = cast.day5.low;
          
              let hourT6 = new Time(cast.day6.time); 
              HTML.dayOfWeek6.innerHTML = hourT6.timeList[0];
              HTML.temp6.innerHTML = cast.day6.temp;
              HTML.icon6.src = `https://openweathermap.org/img/wn/${cast.day6.icon}@4x.png`;
              HTML.descriptionDay6.innerHTML = cast.day6.type;
              HTML.textDay6.innerHTML = cast.day6.description;
              HTML.rainPercent6.innerHTML = Math.floor(cast.day6.rain * 100);
              HTML.windSpeed6.innerHTML = cast.day6.windSpeed;
              HTML.humidity6.innerHTML = cast.day6.humidity;
              HTML.dewPoint6.innerHTML = cast.day6.dew; 
              HTML.uv6.innerHTML = cast.day6.uv; 
              HTML.highTemp6.innerHTML = cast.day6.high;
              HTML.lowTemp6.innerHTML = cast.day6.low;
          
              let hourT7 = new Time(cast.day7.time); 
              HTML.dayOfWeek7.innerHTML = hourT7.timeList[0];
              HTML.temp7.innerHTML = cast.day7.temp;
              HTML.icon7.src = `https://openweathermap.org/img/wn/${cast.day7.icon}@4x.png`;
              HTML.descriptionDay7.innerHTML = cast.day7.type;
              HTML.textDay7.innerHTML = cast.day7.description;
              HTML.rainPercent7.innerHTML = Math.floor(cast.day7.rain * 100);
              HTML.windSpeed7.innerHTML = cast.day7.windSpeed;
              HTML.humidity7.innerHTML = cast.day7.humidity;
              HTML.dewPoint7.innerHTML = cast.day7.dew; 
              HTML.uv7.innerHTML = cast.day7.uv; 
              HTML.highTemp7.innerHTML = cast.day7.high;
              HTML.lowTemp7.innerHTML = cast.day7.low;
          
              HTML.hourTime1.innerHTML = cast.newTimes[2];
              HTML.hourTemp1.innerHTML = cast.hour1.temp;
              HTML.hourIcon1.src = `https://openweathermap.org/img/wn/${cast.hour1.icon}@2x.png`;
              HTML.hourRainPercent1.innerHTML = Math.floor(cast.hour1.rain * 100);
              HTML.humid1.innerHTML = cast.hour1.humidity; 
              HTML.wind1.innerHTML = cast.hour1.windSpeed; 
          
              HTML.hourTime2.innerHTML = cast.newTimes[3];
              HTML.hourTemp2.innerHTML = cast.hour2.temp;
              HTML.hourIcon2.src = `https://openweathermap.org/img/wn/${cast.hour2.icon}@2x.png`;
              HTML.hourRainPercent2.innerHTML = Math.floor(cast.hour2.rain * 100);
              HTML.humid2.innerHTML = cast.hour2.humidity; 
              HTML.wind2.innerHTML = cast.hour2.windSpeed; 
          
              HTML.hourTime3.innerHTML = cast.newTimes[4];
              HTML.hourTemp3.innerHTML = cast.hour3.temp;
              HTML.hourIcon3.src = `https://openweathermap.org/img/wn/${cast.hour3.icon}@2x.png`;
              HTML.hourRainPercent3.innerHTML = Math.floor(cast.hour3.rain * 100);
              HTML.humid3.innerHTML = cast.hour3.humidity; 
              HTML.wind3.innerHTML = cast.hour3.windSpeed; 
          
              HTML.hourTime4.innerHTML = cast.newTimes[5];
              HTML.hourTemp4.innerHTML = cast.hour4.temp;
              HTML.hourIcon4.src = `https://openweathermap.org/img/wn/${cast.hour4.icon}@2x.png`;
              HTML.hourRainPercent4.innerHTML = Math.floor(cast.hour4.rain * 100);
              HTML.humid4.innerHTML = cast.hour4.humidity; 
              HTML.wind4.innerHTML = cast.hour4.windSpeed; 
          
              HTML.hourTime5.innerHTML = cast.newTimes[6];
              HTML.hourTemp5.innerHTML = cast.hour5.temp;
              HTML.hourIcon5.src = `https://openweathermap.org/img/wn/${cast.hour5.icon}@2x.png`;
              HTML.hourRainPercent5.innerHTML = Math.floor(cast.hour5.rain * 100);
              HTML.humid5.innerHTML = cast.hour5.humidity; 
              HTML.wind5.innerHTML = cast.hour5.windSpeed; 
          
              HTML.hourTime6.innerHTML = cast.newTimes[7];
              HTML.hourTemp6.innerHTML = cast.hour6.temp;
              HTML.hourIcon6.src = `https://openweathermap.org/img/wn/${cast.hour6.icon}@2x.png`;
              HTML.hourRainPercent6.innerHTML = Math.floor(cast.hour6.rain * 100);
              HTML.humid6.innerHTML = cast.hour6.humidity; 
              HTML.wind6.innerHTML = cast.hour6.windSpeed; 
          
              HTML.hourTime7.innerHTML = cast.newTimes[8];
              HTML.hourTemp7.innerHTML = cast.hour7.temp;
              HTML.hourIcon7.src = `https://openweathermap.org/img/wn/${cast.hour7.icon}@2x.png`;
              HTML.hourRainPercent7.innerHTML = Math.floor(cast.hour7.rain * 100);
              HTML.humid7.innerHTML = cast.hour7.humidity; 
              HTML.wind7.innerHTML = cast.hour7.windSpeed; 
          
              HTML.hourTime8.innerHTML = cast.newTimes[9];
              HTML.hourTemp8.innerHTML = cast.hour8.temp;
              HTML.hourIcon8.src = `https://openweathermap.org/img/wn/${cast.hour8.icon}@2x.png`;
              HTML.hourRainPercent8.innerHTML = Math.floor(cast.hour8.rain * 100);
              HTML.humid8.innerHTML = cast.hour8.humidity; 
              HTML.wind8.innerHTML = cast.hour8.windSpeed; 
          
              HTML.hourTime9.innerHTML = cast.newTimes[10];
              HTML.hourTemp9.innerHTML = cast.hour9.temp;
              HTML.hourIcon9.src = `https://openweathermap.org/img/wn/${cast.hour9.icon}@2x.png`;
              HTML.hourRainPercent9.innerHTML = Math.floor(cast.hour9.rain * 100);
              HTML.humid9.innerHTML = cast.hour9.humidity; 
              HTML.wind9.innerHTML = cast.hour9.windSpeed; 
          
              HTML.hourTime10.innerHTML = cast.newTimes[11];
              HTML.hourTemp10.innerHTML = cast.hour10.temp;
              HTML.hourIcon10.src = `https://openweathermap.org/img/wn/${cast.hour10.icon}@2x.png`;
              HTML.hourRainPercent10.innerHTML = Math.floor(cast.hour10.rain * 100);
              HTML.humid10.innerHTML = cast.hour10.humidity; 
              HTML.wind10.innerHTML = cast.hour10.windSpeed;
              functions.reset();  
  }; 
  
  let fillTimes = () => {
          let times = [
              new Time(cast.sunrise),
              new Time(cast.sunset),
              new Time(cast.hour1.time),
              new Time(cast.hour2.time),
              new Time(cast.hour3.time),
              new Time(cast.hour4.time),
              new Time(cast.hour5.time),
              new Time(cast.hour6.time),
              new Time(cast.hour7.time),
              new Time(cast.hour8.time),
              new Time(cast.hour9.time),
              new Time(cast.hour10.time),
          ];
          for(let i = 0; i < times.length; i++){ //try to make times with no 0 in front of single hrs.
            let cut = times[i].timeList[4].toString().split(":");
            let amPM = "AM";
            let zero = "0";  
            if (cut[0] < 12){ 
              amPM = "AM";
            }
            if (cut[0] >= 12){
            amPM = "PM";
            cut[0] -= 12;
            if(cut[0] < 10){
                cut[0] = zero + cut[0];
            }
            }
            if(cut[0] <= 0){
              cut[0] = 12; 
            }
            let newTime = cut[0] + ":" + cut[1] + " " + amPM; 
            cast.newTimes.push(newTime); 
          };
          fillHTML();  
  };
  
  let getWeather = {
  
    clear: function () {
      cast.newTimes = [];
      cast.currentWeather = {};
      cast.day1 = {};
      cast.day2 = {};
      cast.day3 = {};
      cast.day4 = {};
      cast.day5 = {};
      cast.day6 = {};
      cast.day7 = {};
      cast.hour1 = {}; 
      cast.hour2 = {};
      cast.hour3 = {};
      cast.hour4 = {};
      cast.hour5 = {};
      cast.hour6 = {};
      cast.hour7 = {};
      cast.hour8 = {};
      cast.hour9 = {};
      cast.hour10 = {};
      HTML.cityState.style.display = "none";
      HTML.iFrame.style.display = "none"; 
      HTML.current.style.display = "none";
      HTML.day.style.display = "none";
      HTML.hour.style.display = "none";
      HTML.loading.style.display = "flex";
      HTML.containerDiv.style.display = "grid";
      HTML.startContainer.style.display = "none"; 
      document.querySelector(".errDiv").style.display = "none";
      document.querySelector(".errDivCity").style.display = "none";
      primary.stateOrCountry = true; 
      getWeather.getLatLon(); 
    },

    clearCity: function () {
      cast.newTimes = [];
      cast.currentWeather = {};
      cast.day1 = {};
      cast.day2 = {};
      cast.day3 = {};
      cast.day4 = {};
      cast.day5 = {};
      cast.day6 = {};
      cast.day7 = {};
      cast.hour1 = {}; 
      cast.hour2 = {};
      cast.hour3 = {};
      cast.hour4 = {};
      cast.hour5 = {};
      cast.hour6 = {};
      cast.hour7 = {};
      cast.hour8 = {};
      cast.hour9 = {};
      cast.hour10 = {};
      HTML.cityState.style.display = "none";
      HTML.iFrame.style.display = "none"; 
      HTML.current.style.display = "none";
      HTML.day.style.display = "none";
      HTML.hour.style.display = "none";
      HTML.loading.style.display = "flex";
      HTML.containerDiv.style.display = "grid";
      HTML.startContainer.style.display = "none"; 
      document.querySelector(".errDiv").style.display = "none";
      document.querySelector(".errDivCity").style.display = "none";
      primary.stateOrCountry = false;
      getWeather.getLatLonCity(); 
    },
  
    getLatLonCity: function () {
        fetch("https://api.openweathermap.org/geo/1.0/direct?q=" + HTML.searchCity.value + "&limit=" + primary.limit + "&appid=" + primary.apiKey)
        .then(async response => {
          if(!response.ok) {
            const text = await response.text();
            throw new Error(text);
           }
          else {
           return response.json();
         }    
        })
        .then((data) => {
          console.log(data)
          getWeather.fillLatLonCity(data)
        })
        .catch(err => {
          console.log('caught it!',err);
          HTML.loading.style.display = "none";
          document.querySelector(".errDivCity").style.display = "flex";
       });
    },

    getLatLon: function () {
      fetch("https://api.openweathermap.org/geo/1.0/zip?zip=" + HTML.search.value + "&appid=" + primary.apiKey)
      .then(async response => {
        if(!response.ok) {
          const text = await response.text();
          throw new Error(text);
         }
        else {
         return response.json();
       }    
      })
      .then((data) => {
        getWeather.fillLatLon(data)
      })
      .catch(err => {
        console.log('caught it!',err);
        HTML.loading.style.display = "none";
        document.querySelector(".errDiv").style.display = "flex";
     });
  },
  
    fillLatLon: function (data){
      primary.lat = data.lat;
      primary.lon = data.lon;
      primary.city = data.name; 
      primary.state = data.state; 
      primary.country = data.country; 
      console.log(primary.lat);   
      getWeather.getForecast();
    },

    fillLatLonCity: function (data){
      primary.lat = data[0].lat;
      primary.lon = data[0].lon;
      primary.city = data[0].name; 
      primary.state = data[0].state; 
      primary.country = data[0].country; 
      console.log(primary.lat);   
      getWeather.getForecast();
    },

    getForecast: function () {
      fetch("https://api.openweathermap.org/data/2.5/onecall?units=imperial&exclude=minutely&lat=" + primary.lat + "&lon=" + primary.lon + "&appid=" + primary.apiKey)
      .then((response) => response.json())
      .then((data) => getWeather.fillWeather(data)); 
    },
  
    fillWeather: function (data) {
      cast.sunrise = data.current.sunrise; 
      cast.sunset = data.current.sunset;
      cast.currentWeather = new WeatherCall(data.current.dt, Math.floor(data.current.temp), data.current.weather[0].main, data.current.weather[0].description, Math.floor(data.current.feels_like), data.current.humidity, Math.floor(data.current.wind_speed), Math.floor(data.current.wind_gust), data.current.weather[0].icon, data.hourly[0].pop, Math.floor(data.current.dew_point), Math.floor(data.current.uvi), Math.floor(data.daily[0].temp.day), Math.floor(data.daily[0].temp.night));
      cast.day1 = new WeatherCall(data.daily[1].dt, Math.floor(data.daily[1].temp.max), data.daily[1].weather[0].main, data.daily[1].weather[0].description, Math.floor(data.daily[1].feels_like.day), Math.floor(data.daily[1].humidity), Math.floor(data.daily[1].wind_speed), Math.floor(data.daily[1].wind_gust), data.daily[1].weather[0].icon, data.daily[1].pop, Math.floor(data.daily[1].dew_point), Math.floor(data.daily[1].uvi), Math.floor(data.daily[1].temp.day), Math.floor(data.daily[1].temp.night));
      cast.day2 = new WeatherCall(data.daily[2].dt, Math.floor(data.daily[2].temp.max), data.daily[2].weather[0].main, data.daily[2].weather[0].description, Math.floor(data.daily[2].feels_like.day), Math.floor(data.daily[2].humidity), Math.floor(data.daily[2].wind_speed), Math.floor(data.daily[2].wind_gust), data.daily[2].weather[0].icon, data.daily[2].pop, Math.floor(data.daily[2].dew_point), Math.floor(data.daily[2].uvi), Math.floor(data.daily[2].temp.day), Math.floor(data.daily[2].temp.night));
      cast.day3 = new WeatherCall(data.daily[3].dt, Math.floor(data.daily[3].temp.max), data.daily[3].weather[0].main, data.daily[3].weather[0].description, Math.floor(data.daily[3].feels_like.day), Math.floor(data.daily[3].humidity), Math.floor(data.daily[3].wind_speed), Math.floor(data.daily[3].wind_gust), data.daily[3].weather[0].icon, data.daily[3].pop, Math.floor(data.daily[3].dew_point), Math.floor(data.daily[3].uvi), Math.floor(data.daily[3].temp.day), Math.floor(data.daily[3].temp.night));
      cast.day4 = new WeatherCall(data.daily[4].dt, Math.floor(data.daily[4].temp.max), data.daily[4].weather[0].main, data.daily[4].weather[0].description, Math.floor(data.daily[4].feels_like.day), Math.floor(data.daily[4].humidity), Math.floor(data.daily[4].wind_speed), Math.floor(data.daily[4].wind_gust), data.daily[4].weather[0].icon, data.daily[4].pop, Math.floor(data.daily[4].dew_point), Math.floor(data.daily[4].uvi), Math.floor(data.daily[4].temp.day), Math.floor(data.daily[4].temp.night));
      cast.day5 = new WeatherCall(data.daily[5].dt, Math.floor(data.daily[5].temp.max), data.daily[5].weather[0].main, data.daily[5].weather[0].description, Math.floor(data.daily[5].feels_like.day), Math.floor(data.daily[5].humidity), Math.floor(data.daily[5].wind_speed), Math.floor(data.daily[5].wind_gust), data.daily[5].weather[0].icon, data.daily[5].pop, Math.floor(data.daily[5].dew_point), Math.floor(data.daily[5].uvi), Math.floor(data.daily[5].temp.day), Math.floor(data.daily[5].temp.night));
      cast.day6 = new WeatherCall(data.daily[6].dt, Math.floor(data.daily[6].temp.max), data.daily[6].weather[0].main, data.daily[6].weather[0].description, Math.floor(data.daily[6].feels_like.day), Math.floor(data.daily[6].humidity), Math.floor(data.daily[6].wind_speed), Math.floor(data.daily[6].wind_gust), data.daily[6].weather[0].icon, data.daily[6].pop, Math.floor(data.daily[6].dew_point), Math.floor(data.daily[6].uvi), Math.floor(data.daily[6].temp.day), Math.floor(data.daily[6].temp.night));
      cast.day7 = new WeatherCall(data.daily[7].dt, Math.floor(data.daily[7].temp.max), data.daily[7].weather[0].main, data.daily[7].weather[0].description, Math.floor(data.daily[7].feels_like.day), Math.floor(data.daily[7].humidity), Math.floor(data.daily[7].wind_speed), Math.floor(data.daily[7].wind_gust), data.daily[7].weather[0].icon, data.daily[7].pop, Math.floor(data.daily[7].dew_point), Math.floor(data.daily[7].uvi), Math.floor(data.daily[7].temp.day), Math.floor(data.daily[7].temp.night));
      cast.hour1 = new WeatherCall(data.hourly[1].dt, Math.floor(data.hourly[1].temp), data.hourly[1].weather[0].main, data.hourly[1].weather[0].description, Math.floor(data.hourly[1].feels_like), Math.floor(data.hourly[1].humidity), Math.floor(data.hourly[1].wind_speed), Math.floor(data.hourly[1].wind_gust), data.hourly[1].weather[0].icon, data.hourly[1].pop); 
      cast.hour2 = new WeatherCall(data.hourly[2].dt, Math.floor(data.hourly[2].temp), data.hourly[2].weather[0].main, data.hourly[2].weather[0].description, Math.floor(data.hourly[2].feels_like), Math.floor(data.hourly[2].humidity), Math.floor(data.hourly[2].wind_speed), Math.floor(data.hourly[2].wind_gust), data.hourly[2].weather[0].icon, data.hourly[2].pop);
      cast.hour3 = new WeatherCall(data.hourly[3].dt, Math.floor(data.hourly[3].temp), data.hourly[3].weather[0].main, data.hourly[3].weather[0].description, Math.floor(data.hourly[3].feels_like), Math.floor(data.hourly[3].humidity), Math.floor(data.hourly[3].wind_speed), Math.floor(data.hourly[3].wind_gust), data.hourly[3].weather[0].icon, data.hourly[3].pop);
      cast.hour4 = new WeatherCall(data.hourly[4].dt, Math.floor(data.hourly[4].temp), data.hourly[4].weather[0].main, data.hourly[4].weather[0].description, Math.floor(data.hourly[4].feels_like), Math.floor(data.hourly[4].humidity), Math.floor(data.hourly[4].wind_speed), Math.floor(data.hourly[4].wind_gust), data.hourly[4].weather[0].icon, data.hourly[4].pop);
      cast.hour5 = new WeatherCall(data.hourly[5].dt, Math.floor(data.hourly[5].temp), data.hourly[5].weather[0].main, data.hourly[5].weather[0].description, Math.floor(data.hourly[5].feels_like), Math.floor(data.hourly[5].humidity), Math.floor(data.hourly[5].wind_speed), Math.floor(data.hourly[5].wind_gust), data.hourly[5].weather[0].icon, data.hourly[5].pop);
      cast.hour6 = new WeatherCall(data.hourly[6].dt, Math.floor(data.hourly[6].temp), data.hourly[6].weather[0].main, data.hourly[6].weather[0].description, Math.floor(data.hourly[6].feels_like), Math.floor(data.hourly[6].humidity), Math.floor(data.hourly[6].wind_speed), Math.floor(data.hourly[6].wind_gust), data.hourly[6].weather[0].icon, data.hourly[6].pop);
      cast.hour7 = new WeatherCall(data.hourly[7].dt, Math.floor(data.hourly[7].temp), data.hourly[7].weather[0].main, data.hourly[7].weather[0].description, Math.floor(data.hourly[7].feels_like), Math.floor(data.hourly[7].humidity), Math.floor(data.hourly[7].wind_speed), Math.floor(data.hourly[7].wind_gust), data.hourly[7].weather[0].icon, data.hourly[7].pop);
      cast.hour8 = new WeatherCall(data.hourly[8].dt, Math.floor(data.hourly[8].temp), data.hourly[8].weather[0].main, data.hourly[8].weather[0].description, Math.floor(data.hourly[8].feels_like), Math.floor(data.hourly[8].humidity), Math.floor(data.hourly[8].wind_speed), Math.floor(data.hourly[8].wind_gust), data.hourly[8].weather[0].icon, data.hourly[8].pop);
      cast.hour9 = new WeatherCall(data.hourly[9].dt, Math.floor(data.hourly[9].temp), data.hourly[9].weather[0].main, data.hourly[9].weather[0].description, Math.floor(data.hourly[9].feels_like), Math.floor(data.hourly[9].humidity), Math.floor(data.hourly[9].wind_speed), Math.floor(data.hourly[9].wind_gust), data.hourly[9].weather[0].icon, data.hourly[9].pop);
      cast.hour10 = new WeatherCall(data.hourly[10].dt, Math.floor(data.hourly[10].temp), data.hourly[10].weather[0].main, data.hourly[10].weather[0].description, Math.floor(data.hourly[10].feels_like), Math.floor(data.hourly[10].humidity), Math.floor(data.hourly[10].wind_speed), Math.floor(data.hourly[10].wind_gust), data.hourly[10].weather[0].icon, data.hourly[10].pop);
      HTML.cityState.style.display = "flex";
      HTML.current.style.display = "flex";
      HTML.day.style.display = "flex";
      HTML.hour.style.display = "flex";
      HTML.iFrame.style.display = "flex";
      HTML.loading.style.display = "none";                          
      fillTimes();                                                  
    },                                                              
  };
  
  let changeSizeBig = () => { 
    primary.decider = !primary.decider;    
    if(primary.decider === false){  
      HTML.dropMenu.classList.toggle("grow");
      HTML.nav.classList.toggle("border-radius");
      HTML.threeLines.classList.remove("fa-bars");
      HTML.threeLines.classList.add("fa-x"); 
    }
    if(primary.decider === true){
      HTML.dropMenu.classList.toggle("grow");
      HTML.nav.classList.toggle("border-radius");
      HTML.threeLines.classList.remove("fa-x");
      HTML.threeLines.classList.add("fa-bars");
    }
  };
  
  let changeDayUp = () => {
    let days = [cast.day1, cast.day2, cast.day3, cast.day4, cast.day5, cast.day6, cast.day7]; 
    primary.day++;
    if(primary.day >= 6){
      primary.day = 6; 
    } 
    for(let i = 0; i < HTML.days.length; i++){ 
      if(i === primary.day){
        HTML.days[i].style.display = "flex"; 
      }
      if(i !== primary.day){
        HTML.days[i].style.display = "none";
      }
  }     
  changeWeatherBackground(days[primary.day], HTML.day);
  };
  let changeDayDwn = () => {
    let days = [cast.day1, cast.day2, cast.day3, cast.day4, cast.day5, cast.day6, cast.day7];
    primary.day--;
    if(primary.day <= 0){
      primary.day = 0; 
    } 
    console.log(primary.day); 
    for(let i = 0; i < HTML.days.length; i++){ 
      if(i === primary.day){
        HTML.days[i].style.display = "flex"; 
      }
      if(i !== primary.day){
        HTML.days[i].style.display = "none";
      }
  }
  changeWeatherBackground(days[primary.day], HTML.day);
  };
  
  let changeWeatherBackground = (weather, divD) => {
    console.log(weather.type);
    if(weather.type === "Clear"){
      divD.style.backgroundImage = "url('https://images.unsplash.com/photo-1622278647429-71bc97e904e8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1548&q=80')"; 
      divD.style.color = "black";
      HTML.dailyForecastTextHeader.style.color = "black";
    }
    if(weather.type === "Clouds"){
      divD.style.backgroundImage = "url('https://images.unsplash.com/uploads/1412750321034baa5d127/d35c5980?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1630&q=80')";
      divD.style.color = "black";
      HTML.dailyForecastTextHeader.style.color = "black"
    }
    if(weather.type === "Drizzle"){
      divD.style.backgroundImage = "url('https://images.unsplash.com/photo-1534274988757-a28bf1a57c17?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80')";
      divD.style.color = "white";
      HTML.dailyForecastTextHeader.style.color = "white";
    }
    if(weather.type === "Rain"){
      divD.style.backgroundImage = "url('https://images.unsplash.com/photo-1534274988757-a28bf1a57c17?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80')";
      divD.style.color = "white";
      HTML.dailyForecastTextHeader.style.color = "white";
    }
    if(weather.type === "Thunderstorm"){
      divD.style.backgroundImage = "url('https://images.unsplash.com/photo-1492011221367-f47e3ccd77a0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1587&q=80')";
      divD.style.color = "white";
      HTML.dailyForecastTextHeader.style.color = "white";
    }
    if(weather.type === "Snow"){
      divD.style.backgroundImage = "url('https://images.unsplash.com/photo-1547754980-3df97fed72a8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80')";
      divD.style.color = "black";
      HTML.dailyForecastTextHeader.style.color = "black";
    }
    if(weather.type === "Atmosphere"){
      divD.style.backgroundImage = "url('https://images.unsplash.com/photo-1561484930-974554019ade?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80')";
      divD.style.color = "black";
      HTML.dailyForecastTextHeader.style.color = "black";
    }
    if(weather.type === "Fog"){
      divD.style.backgroundImage = "url('https://images.unsplash.com/photo-1510596713412-56030de252c8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1587&q=80')";
      divD.style.color = "white";
      HTML.dailyForecastTextHeader.style.color = "white";
    }
    if(weather.type === "Mist"){
      divD.style.backgroundImage = "url('https://images.unsplash.com/photo-1462040700793-fcd2dbc0edf0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80')";
      divD.style.color = "white";
      HTML.dailyForecastTextHeader.style.color = "white";
    }
  }
  
  let changeCurrentWeatherBackground = (weather, divD) => {
    if(weather.type === "Clear"){
      divD.style.backgroundImage = "url('https://images.unsplash.com/photo-1622278647429-71bc97e904e8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1548&q=80')"; 
      divD.style.color = "black";
      HTML.currentForecastTextHeader.style.color = "black";
      HTML.mid.style.color = "black";
    }
    if(weather.type === "Clouds"){
      divD.style.backgroundImage = "url('https://images.unsplash.com/uploads/1412750321034baa5d127/d35c5980?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1630&q=80')";
      divD.style.color = "black";
      HTML.currentForecastTextHeader.style.color = "black";
      HTML.mid.style.color = "black";
    }
    if(weather.type === "Drizzle"){
      divD.style.backgroundImage = "url('https://images.unsplash.com/photo-1534274988757-a28bf1a57c17?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80')";
      divD.style.color = "white";
      HTML.currentForecastTextHeader.style.color = "white";
      HTML.mid.style.color = "white"; 
    }
    if(weather.type === "Rain"){
      divD.style.backgroundImage = "url('https://images.unsplash.com/photo-1534274988757-a28bf1a57c17?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80')";
      divD.style.color = "white";
      HTML.currentForecastTextHeader.style.color = "white";
      HTML.mid.style.color = "white"; 
    }
    if(weather.type === "Thunderstorm"){
      divD.style.backgroundImage = "url('https://images.unsplash.com/photo-1492011221367-f47e3ccd77a0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1587&q=80')";
      divD.style.color = "white";
      HTML.currentForecastTextHeader.style.color = "white";
      HTML.mid.style.color = "white"; 
    }
    if(weather.type === "Snow"){
      divD.style.backgroundImage = "url('https://images.unsplash.com/photo-1547754980-3df97fed72a8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80')";
      divD.style.color = "black";
     HTML.currentForecastTextHeader.style.color = "black";
     HTML.mid.style.color = "black"; 
    }
    if(weather.type === "Atmosphere"){
      divD.style.backgroundImage = "url('https://images.unsplash.com/photo-1561484930-974554019ade?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80')";
      divD.style.color = "black";
     HTML.currentForecastTextHeader.style.color = "black";
     HTML.mid.style.color = "black"; 
    } 
    if(weather.type === "Fog"){
      divD.style.backgroundImage = "url('https://images.unsplash.com/photo-1510596713412-56030de252c8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1587&q=80')";
      divD.style.color = "white";
      HTML.dailyForecastTextHeader.style.color = "white";
      HTML.mid.style.color = "white";
    }
    if(weather.type === "Mist"){
      divD.style.backgroundImage = "url('https://images.unsplash.com/photo-1462040700793-fcd2dbc0edf0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80')";
      divD.style.color = "white";
      HTML.dailyForecastTextHeader.style.color = "white";
      HTML.mid.style.color = "white";
    }
  }
  
  const functions = { //handles sunrise meter
    reset: function () {
        HTML.meter.classList.remove("animate"); 
        console.log("success");
        setTimeout(functions.getSunDegrees, 500);
    }, 
    getSunDegrees: function () { //170 is difference between visible degrees 45 and 215 on meter.
      const current = new Date(); //Fri Oct 21 2022 00:24:13 GMT-0400 (Eastern Daylight Time)
      console.log(current); 
      const up = new Time(cast.sunrise); //6:00
      const dwn = new Time(cast.sunset); //20:00
      const one = up.timeList[4].toString().split(":"); //[2, 00]
      const two = dwn.timeList[4].toString().split(":"); //[11, 00]
      console.log(one); 
      console.log(two);
      const cur = current.toString().split(" "); //[Fri, Oct, 21, 2022, 00:24:13 GMT-0400 (Eastern Daylight Time)]
      const now = cur[4].toString().split(":"); //[00, 24, 13]
      const diff = Number(two[0]) - Number(one[0]); //11 - 2 = 9, hrs between sunrise and sunset.
      const hr = Math.floor(170 / diff); //18, 170/9 to get even segments between visible degrees.   
      const upDif = Number(now[0]) - Number(one[0]); //00 - 2 = -2, hrs between sunrise and current time.
      const multi = Math.floor(hr * upDif); //60, time converted to degrees. 
      primary.timeInDegrees = multi + 45;
      if(primary.timeInDegrees >= 215 || primary.timeInDegrees <= 0){
        primary.timeInDegrees = 225;    
      }
      if(primary.timeInDegrees > 0 && primary.timeInDegrees <= 45){
        primary.timeInDegrees = 45;    
      }
      functions.getInput(); 
    },
    getInput: function () {
      root = document.documentElement;
      root.style.setProperty('--deg', "45" + "deg");
      root.style.setProperty('--deg', primary.timeInDegrees + "deg");
      HTML.meter.classList.add("animate");  
  },
  }
  
  //https://source.unsplash.com/random/?weatherClear to search random picture.
  
  
  HTML.searchBtn.addEventListener("click", getWeather.clear);
  HTML.search .addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
      event.preventDefault();
      getWeather.clear(); 
    }
  });
  HTML.searchBtnCity.addEventListener("click", getWeather.clearCity);
  HTML.searchCity .addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
      event.preventDefault();
      getWeather.clearCity(); 
    }
  });
  HTML.threeLines.addEventListener("click", changeSizeBig); 
  HTML.arrowLeft.addEventListener("click", changeDayDwn);
  HTML.arrowRight.addEventListener("click", changeDayUp);
  runTime(); 