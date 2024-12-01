import { useState } from "react"
import Avatar from "../Avatar"
import BoschLogo from "../BoschLogo"
import Menu from "./Menu"
import styles from "./styles.module.css"

interface IHeaderProps {

}

/**
 * `Header` component: Displays a Bosch logo, a user avatar, and a menu.
 *
 * Features:
 * - Bosch logo on the left.
 * - User avatar with a tooltip and click-to-open menu functionality.
 * - Menu toggles visibility based on the `menuOpen` state.
 *
 * Notes:
 * - Uses `BoschLogo` for branding and `Avatar` for user interaction.
 * - The `Menu` component is displayed when the user clicks the avatar.
 */
const Header = ({  }:IHeaderProps) => {

    const [menuOpen, setMenuOpen] = useState(false);

    return(
        <>
            <header className={styles.header}>
                <BoschLogo/>

                <nav>
                    <Avatar 
                        username="Murylo Saladino"
                        onClick={() => setMenuOpen(true)}
                    />
                </nav>
            </header>

            <Menu
                open={menuOpen}
                handleClose={() => setMenuOpen(false)}
            />
        </>
    )
}

export default Header
