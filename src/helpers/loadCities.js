export const loadCities = async(value)=>{
    const url = `https://secret-ocean-49799.herokuapp.com/https://www.metaweather.com/api/location/search/?query=${value}`;
    try {
        const resp = await fetch (url, {method:"GET"});
        if (resp.ok) {
            const cloudResp = await resp.json();
            const options = cloudResp.map(row=>{
                return { value : row.woeid, label : row.title }
            })
            return options;
        }else{
            throw await resp.json();
        }
    } catch (error) {
        throw error;
    }
}