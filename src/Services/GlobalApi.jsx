import axios from "axios";

const key = "b15f9e2617e94d92a970f629d1bcca21";
const axiosCreate = axios.create({
    baseURL: "https://api.rawg.io/api"
})

const getGenreList  = axiosCreate.get("/genres?key=" + key);
const getAllGames  = axiosCreate.get("/games?key=" + key);
const getGameListByGenresId = (id)=>axiosCreate.get("/games?key=" + key + "&genres=" + id);
export default{
    getGenreList,
    getAllGames,
    getGameListByGenresId
}
