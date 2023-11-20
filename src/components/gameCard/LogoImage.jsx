import React from "react";
import ea from "../../assets/ea-logo.svg";
import steam from "../../assets/steam-logo.svg";
import epicGames from "../../assets/epicGames-logo.svg";
import battleNet from "../../assets/battlenet-logo.svg";
import wargaming from "../../assets/wargaming-logo.svg";
import styles from "./GameCard.module.css";

const logos = {
  EA: ea,
  Steam: steam,
  "Epic Games": epicGames,
  "battle.net": battleNet,
  Wargaming: wargaming,
};

const LogoImage = ({ gameLaunchers }) => {
  return (
    <div className={styles.logoImage}>
      <img src={logos[gameLaunchers]} />
    </div>
  );
};

export default LogoImage;
