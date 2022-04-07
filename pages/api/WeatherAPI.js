import { authorizationHeaderInfo } from "./helper";
export const getWeatherData = async () => {
    try{
        const response = await fetch(`https://localhost:7290/api/Weather`, {
            method: 'GET',
            headers: authorizationHeaderInfo(),
            
        })
           

        const data = await response.json();
        console.log(data);
        return [null, data];


    } catch(error){
        return [error.message, null];
    }
}
