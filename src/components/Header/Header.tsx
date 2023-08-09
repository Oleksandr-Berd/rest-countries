import { BsSun } from 'react-icons/bs'

import * as SC from "./HeaderStyled"

import { ReactComponent as DarkThemeSvg } from "../../assets/icons/iconoir_half-moon.svg"
import { useContext } from 'react'
import ThemeContext from '../../context/themeContext'


const Header: React.FC = (): JSX.Element => {
const {toggle, theme} = useContext(ThemeContext)


    const mode = theme === "light" ? "Dark Mode" : "Light Mode"
    
    const toggleTheme = () => {
        toggle(theme)
        
    }

    console.log(toggle);


    return (<SC.HeaderStyled>
        <SC.Title>Where in the world?</SC.Title>
        <SC.SwitchButton  onClick={toggleTheme}>
            {theme === "light" ? <DarkThemeSvg /> : <BsSun/>} 
            <SC.SwitchButtonText >{mode}</SC.SwitchButtonText>
        </SC.SwitchButton>
    </SC.HeaderStyled> );
}
 
export default Header;