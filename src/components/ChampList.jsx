import champs  from '../json/champs.json'
import Champ from './Champ.jsx'
import classes from './/ChampList.module.css'

const ChampList = () => {
    return (
        <div className={classes.champlist}> 
        {champs.map(champ => ( <Champ champ={champ} /> ))} 
        </div>
    )
    }

export default ChampList