import React from "react";
import classes from "./Champ.module.css";
import slugify from "../utils/slugify";

const Champ = ({ champ }) => {
  const champUrl = slugify(champ.name);

  return (
    <a href={champUrl} target='_blank'>
    <div className={classes.container}>
      <div className={classes.img}>
        <img src={champ.icon} alt={champ.name} />
      </div>
      <div className={classes.name}>
        <h1>{champ.name}</h1>
      </div>
      <div className={classes.title}>
        <p>{champ.title}</p>
      </div>
      <div className={classes.type}>
        <section>{champ.tags[0]}</section>
      </div>
      <div className={classes.description}>
        <p>{champ.description}</p>
      </div>
      <div className={classes.stats}>
        <section>Hp: {champ.stats.hp}</section>
      </div>
      <div className={classes.stats}>
        <section>Attack Damage: {champ.stats.attackdamage}</section>
      </div>
      <div className={classes.stats}>
        <section>Armor: {champ.stats.armor}</section>
      </div>
    </div>
    </a>
  );
};

export default Champ;
