import axios from "axios";

export const getAllTasks = async () => {
    try{
        const { data } = await axios.get("https://vine-goldenrod-sombrero.glitch.me/tasks");
        return data;
    }catch(error){
        console.log(error)
    }
};

export const createATask=async (payload)=>{
    try {
        const { data } = await axios.post("https://vine-goldenrod-sombrero.glitch.me/tasks", payload);
        return data;
    } catch (error) {
        console.log(error)
    }
}

export const editTask=async (id, payload)=>{
    try {
        const { data } = await axios.put(`https://vine-goldenrod-sombrero.glitch.me/tasks/${id}`, payload);
        return data;
    } catch (error) {
        console.log(error)
    }
}

export const deleteTask=async (id)=>{
    try {
        const { data } = await axios.delete(`https://vine-goldenrod-sombrero.glitch.me/tasks/${id}`);
        return data;
    } catch (error) {
        console.log(error)
    }
}