import Styles from './Header.module.css'

import igniteLogo from '../assets/Ignite-logo.svg'

console.log(igniteLogo)
export function Header(){
    return(
        <header className={Styles.header}>
            <img src={igniteLogo} alt="logotipo do ignite" />
        </header>
    );
}