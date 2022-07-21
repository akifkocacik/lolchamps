const slugify = (name) => {
  const champName = name.toLowerCase().split(" ").join("-");

  let url = "https://www.mobafire.com/league-of-legends/champion/" + champName;

  return url;
};

export default slugify;
