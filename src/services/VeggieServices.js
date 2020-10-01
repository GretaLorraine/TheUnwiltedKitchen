import axios from 'axios';

const VEGGIE_API_BASE_URL = "http://localhost:2300/capstone/api/v1/veggies";
const PANTRY_API_BASE_URL = "http://localhost:2300/capstone/api/v1/pantry";

class VeggieServices {
    
    getVeggies() {
        return axios.get(VEGGIE_API_BASE_URL);
    }

    addVeggieToPantry(veggieId, userId){
        return axios.post(`${PANTRY_API_BASE_URL}/veggie?veggieId=${veggieId}&userId=${userId}`);
    }

    createPantry(pantry){
        return axios.post(VEGGIE_API_BASE_URL, pantry);
    }

    createVeggie(veggie) {
        return axios.post(VEGGIE_API_BASE_URL, veggie);
    }

    getVeggieById(veggieId) {
        return axios.post(VEGGIE_API_BASE_URL + "/"+ veggieId);
    }
    
    updateVeggie(veggie, veggieId) {
        return axios.put(VEGGIE_API_BASE_URL + "/" + veggieId, veggie);
    }

    deleteVeggie(pantryItemId) {
        return axios.delete(`${PANTRY_API_BASE_URL}?pantryItemId=${pantryItemId}`)
    }
}

export default new VeggieServices()