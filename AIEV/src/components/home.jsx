import { useEffect } from "react"
import homeStore from "../store/home.store"
const GOOGLE_KEY = 'AIzaSyDNQIK0w2pE7rTARkfAW77JcHmuSTW4EAI'
const WEATHER = 'fa5f58c900da47e99b121230252805'

export default function Home(){


    useEffect(el=>{
        const fetchData = async()=>{
            navigator.geolocation.getCurrentPosition(async(pos)=>{
                const lat = pos.coords.latitude;
                const lon = pos.coords.longitude;
                const timestamp = Date.now();

                // Fetch weather data
                const weatherRes = await fetch(
                    `https://api.weatherapi.com/v1/current.json?key=${WEATHER}&q=${lat},${lon}`
                )

                const weather = await weatherRes.json();
                const windSpeed = weather.current.wind_kph / 3.6;
                const windDeg = weather.current.wind_degree;
                console.log(weather)
                

                // Elevation data
                // const elevationRes = await fetch(
                //     `https://maps.googleapis.com/maps/api/elevation/json?locations=${lat},${lon}&key=${GOOGLE_KEY}`
                // )

                // const elevationData = await elevationRes.json();
                // const elevation = elevationData.result[0].elevation;
                // console.log(elevationData)

                const record = {
                    lat,
                    lon,
                    timestamp,
                    windSpeed: windSpeed.toFixed(2),
                    windDeg,
                    // elevation,
                };

                localStorage.setItem('rideData', JSON.stringify(record));

            })

            // DeviceMotion for vibration/posture detection
            // window.addEventListener('devicemotion', (event) => {
            //     const acc = event.acceleration;
            //     console.log('Acceleration Data:', acc);
            // });
        }
        fetchData()
    }, [])

    return(
        <div className="home">
            <button className="btn">Start data</button>
        </div>
    )
}