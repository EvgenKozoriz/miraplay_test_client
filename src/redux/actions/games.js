import axios from "axios";
import { setGames } from "../gamesSlice";

export const fetchGames = async (page, selectedGenre) => {
  try {
    const response = await axios.post(
      "https://api.miraplay.cloud/games/by_page",
      {
        page: page,
        isFreshGamesFirst: true,
        genre: selectedGenre,
        gamesToShow: 9,
      }
    );
    const newGames = response.data.games;
    return newGames
  } catch (error) {
    console.error("Error fetching games:", error);
    throw error;
  }
};

