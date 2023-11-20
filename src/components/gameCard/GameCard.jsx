import React from "react";
import styles from "./GameCard.module.css";
import LogoImage from "./LogoImage";

const GameCard = ({ game }) => {
  const {
    commonGameName,
    gameDescription,
    gameImage,
    genre,
    inTop,
    gameClass,
    gameLaunchers,
  } = game;
  return (
    <div className={styles.gameCard}>
      <div className={styles.topCard}>
        <img
          src={gameImage}
          alt={commonGameName}
          className={styles.gameImage}
        />
        <div className={styles.topGendeBlock}>
          {inTop && <div className={styles.top}>TOP</div>}
          <div className={styles.gende}>{genre}</div>
        </div>
        {gameClass === "STANDART" && <div className={styles.free}>FREE</div>}
        <LogoImage gameLaunchers={gameLaunchers[0]}/>
      </div>
      <div className={styles.bottomCard}>
        <h2 className={styles.gameName}>{commonGameName}</h2>
        <p className={styles.gameDescription}>{gameDescription}</p>
      </div>
      <img className={styles.logoLauncher} />
    </div>
  );
};

export default GameCard;
