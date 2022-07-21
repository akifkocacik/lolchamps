import ChampList from "./components/ChampList";
import classes from "./App.module.css";

const App = () => {
  return (
    <div className={classes.container}>
      <ChampList />
    </div>
  );
};

export default App;
