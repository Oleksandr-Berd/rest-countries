import { Switch } from "@blueprintjs/core";
import { BsSun } from 'react-icons/bs'

import * as SC from "./HeaderStyled"

import { ReactComponent as DarkThemeSvg } from "../../assets/icons/iconoir_half-moon.svg"


const Header: React.FC = (): JSX.Element => {

    const theme = "light"
    
    const toggleTheme = () => {
        console.log("theme toggled");
        
    }

    return (<SC.HeaderStyled>
        <h3>Where in the world?</h3>
        <div>
            <Switch labelElement={theme === "light" ? <BsSun size={20}  /> : <DarkThemeSvg width={20}  />} onChange={toggleTheme}  />
        </div>
    </SC.HeaderStyled> );
}
 
export default Header;