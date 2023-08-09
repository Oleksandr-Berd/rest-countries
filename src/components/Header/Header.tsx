import { BsSun } from 'react-icons/bs'

import * as SC from "./HeaderStyled"

import { ReactComponent as DarkThemeSvg } from "../../assets/icons/iconoir_half-moon.svg"


const Header: React.FC = (): JSX.Element => {

    const theme = "light"
    
    const toggleTheme = () => {
        console.log("theme toggled");
        
    }

    return (<SC.HeaderStyled>
        <SC.Title>Where in the world?</SC.Title>
        <SC.SwitchButton type="button">
            <BsSun size={16} />
            <SC.SwitchButtonText onClick={toggleTheme}>Light Mode</SC.SwitchButtonText>
        </SC.SwitchButton>
    </SC.HeaderStyled> );
}
 
export default Header;