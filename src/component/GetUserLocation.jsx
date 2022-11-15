import React from 'react';
import { useEffect,useState } from 'react';
import { Link } from 'react-router-dom';
import '../css/GeoLocation.css';
const GetUserLocation = () => {

    
    const [data,setData]=useState([]);


    const [location, setLocation] = useState({
        loaded:false,
        coordinates:{lat:"", lng:""}
    });
    
    const onSuccess=location=>{
        setLocation({
            loaded:true,
            coordinates:{
                lat:location.coords.latitude,
                lng:location.coords.longitude,
            },
            
        });
    };
    const onError = error =>{
        setLocation({
            loaded:true,
            error,
        });
    }
    useEffect(()=>{
        if(!("geolocation" in navigator))
        {
            onError({
                code:0,
                message: "Geolocation not supported",
            });
        }
        navigator.geolocation.getCurrentPosition(onSuccess,onError);
    },[])
    

    return (
              <>
                    <nav className='nav'>
                        <ul>
                                <li><Link to="/" className='back'>Back</Link></li>
                        </ul>
                    </nav>
                    <div className='container'> 
                    <div >
                    <lable>Latitude</lable>
                    <h1>{location.coordinates.lat}</h1>
                    </div>
                    <div >
                    <lable>Longitude</lable>
                    <h1>{location.coordinates.lng}</h1>
                    </div>
                    <div >
                    <a href='https://www.google.com/maps/@location.coordinates.lat,location.coordinates.lng'>Location Map</a>
                    </div>
                    </div>
                
                </>
    );
}

export default GetUserLocation;