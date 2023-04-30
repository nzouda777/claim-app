import { ref } from "vue"
import axios from 'axios'


axios.defaults.baseURL = "url"

export default function useClaims(){

    
    const claim = ref([])
    const errors = ref([])

    
    const storeClaim = async (data) => {
        try{
            await axios.post("claim", data)
        }catch(error){
            if (error.response.status === 422) {
                errors.value = error.response.data.errors
            }
        }
    }
    
    return{
        claim,
        errors 

    }
}