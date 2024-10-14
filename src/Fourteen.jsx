import React, { useEffect, useState } from 'react'

function Fourteen() {
    const [weather, setWeather] = useState(0);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true);

        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition((pos) => {
                const latitude = pos.coords.latitude;
                const longitude = pos.coords.longitude;
                console.log(pos.coords.latitude, pos.coords.longitude);
                const url = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=017633a2e028726d8d41d34659f66bf2`;
                fetch(url)
                    .then((res) => res.json()
                    ).then((data) => { setWeather(data) })
                    .catch((err) => console.log(err))
            });
        }
    }, [])

    return (
        <div>{
            isLoading ? 'Loading' : (<h1>Weather of your area: {weather.main.temp}</h1>)
        }</div>
    )
}

export default Fourteen