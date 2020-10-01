import axios from 'axios';

const FRUIT_API_BASE_URL = "http://localhost:2300/capstone/api/v1/fruits";
const PANTRY_API_BASE_URL = "http://localhost:2300/capstone/api/v1/pantry";

class FruitServices {
    
    getFruits() {
        return axios.get(FRUIT_API_BASE_URL);
    }

    addFruitToPantry(fruitId, userId){
        return axios.post(`${PANTRY_API_BASE_URL}/fruit?fruitId=${fruitId}&userId=${userId}`)
    }

    createPantry(pantry){
        return axios.post(FRUIT_API_BASE_URL, pantry);
    }

    createFruit(fruit) {
        return axios.post(FRUIT_API_BASE_URL, fruit);
    }

    getFruitById(fruitId) {
        return axios.post(FRUIT_API_BASE_URL + "/"+ fruitId);
    }
    
    updateFruit(fruit, fruitId) {
        return axios.put(FRUIT_API_BASE_URL + "/" + fruitId, fruit);
    }

    deleteFruit(pantryItemId) {
        return axios.delete(`${PANTRY_API_BASE_URL}?pantryItemId=${pantryItemId}`)
    }

}

export default new FruitServices()