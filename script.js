const url = "https://api.openweathermap.org/data/2.5/weather?units=metric"
        const apikey = "6f3b3d8e754d7ff9752982b10e864d5d"
        const search = document.querySelector("input")
        const btn = document.querySelector("button")
        const video = document.querySelector(".backvideo");
        const videoSource = document.querySelector("source");
        async function weather(cityname) {
            let response = await fetch(url + `&q=${cityname}` + `&appid=${apikey}`)
            var data = await response.json()
            document.querySelector(".city").innerText = data.name
            document.querySelector(".temperature").innerText = Math.round(data.main.temp) + "°C"
            document.querySelector(".humiditypercent").innerText = data.main.humidity + "%"
            document.querySelector(".windkmp").innerText = data.wind.speed + "km/hr"
            var curWeatherpic = data.weather[0].main
            console.log(data)
            console.log(curWeatherpic)
             if (curWeatherpic === "Clouds") {
                document.querySelector("#weatherimg").src = "clouds.png"
                videoSource.src = "856171-hd_1920_1080_30fps.mp4"
                video.load()
            }
            else if (curWeatherpic === "Clear") {
                document.querySelector("#weatherimg").src = "clear.png"
                videoSource.src = "mixkit-eagle-gliding-in-a-clear-sky-bottom-view-1706-hd-ready.mp4"
                video.load()

            }
            else if (curWeatherpic === "Snow") {
                document.querySelector("#weatherimg").src = "snow.png"
                document.querySelector("source").src = "4514641-hd_1920_1080_30fps.mp4"
                video.load()
            }
            else if (curWeatherpic === "Rain") {
                document.querySelector("#weatherimg").src = "rain.png"
                videoSource.src = "1841455-hd_1280_720_25fps.mp4"
                video.load()
            }
            else if (curWeatherpic === "Mist") {
                document.querySelector("#weatherimg").src = "mist.png"
            }
        }


        btn.addEventListener("click", () => {
            let cityname = search.value
            weather(cityname)
        })
        weather("Hyderabad")
