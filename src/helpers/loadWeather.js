export const loadWeather = async(value)=>{
    const url = `https://secret-ocean-49799.herokuapp.com/https://www.metaweather.com/api/location/${value}`;
    try {
        const resp = await fetch (url, {method:"GET"});
        if (resp.ok) {
            const data = await resp.json();
            return data;
        }else{
            throw await resp.json();
        }
    } catch (error) {
        throw error;
    }
}