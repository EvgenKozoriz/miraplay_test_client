import React, { useState, useRef, useEffect } from "react";
import GameCard from "../gameCard/GameCard";
import styles from "./GameList.module.css";
import { fetchGames } from "../../redux/actions/games";
import { useQuery, useQueryClient } from "@tanstack/react-query";

const filterBtns = [
  "ALL",
  "FREE",
  "MOBA",
  "SHOOTERS",
  "LAUNCHERS",
  "MMORPG",
  "STRATEGY",
  "FIGHTING",
  "RACING",
  "SURVIVAL",
  "ONLINE",
];

const GameList = () => {
  const queryClient = useQueryClient();
  const filterBtnRef = useRef(null);

  useEffect(() => {
    filterBtnRef.current.focus();
  }, []);

  const [selectedGenre, setSelectedGenre] = useState(false);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);

  const { data, isLoading, isSuccess } = useQuery({
    queryFn: () => fetchGames(page, selectedGenre),
    queryKey: ["games", selectedGenre],
  });

  const handleChangeFilter = (genre) => {
    if (genre === "ALL") {
      setSelectedGenre(false);
    } else {
      setSelectedGenre(genre);
    }
    setPage(1);
    setHasMore(true);
  };

  const handleShowMore = async () => {
    const newPage = page + 1;
    const newData = await fetchGames(newPage, selectedGenre);

    if (newData.at(-1)._id === data.at(-1)._id) {
      setHasMore(false);
    }

    queryClient.setQueryData(["games", selectedGenre], () => [...newData]);
    setPage(newPage);
  };

  return (
    <div className={styles.gameList}>
      <h2 className={styles.title}>ВСІ ІГРИ</h2>
      <div className={styles.filterBlock}>
        {filterBtns.map((genre, ind) => (
          <button
            key={ind}
            className={styles.filterBtn}
            onClick={() => handleChangeFilter(genre)}
            ref={ind === 0 ? filterBtnRef : null}
          >
            {genre}
          </button>
        ))}
      </div>
      <div className={styles.games}>
        {isSuccess &&
          data.map((game) => <GameCard key={game._id} game={game} />)}
      </div>
      {hasMore && (
        <button className={styles.showMoreBtn} onClick={handleShowMore}>
          SHOW MORE
        </button>
      )}
    </div>
  );
};

export default GameList;
