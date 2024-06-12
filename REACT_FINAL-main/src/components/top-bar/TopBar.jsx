import SearchIcon from '@mui/icons-material/Search';
import MenuIcon from '@mui/icons-material/Menu';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import PersonIcon from '@mui/icons-material/Person';
import styles from './TopBar.module.css';
import {IconButton} from "@mui/material";
import {useNavigate} from "react-router-dom";


function TopBar() {
    const navigate = useNavigate();
    const handleCartClick = () => navigate('/cart');

    return (
        <>
            <div className={styles.top__bar}>
                <div className={`${styles.top__bar_container} center`}>
                    <div className={styles.top__bar_left}>
                        <IconButton
                            color="primary"
                            sx={{p: '10px'}}
                            href={"/"}
                            aria-label="directions">
                            <img src="/src/static/img/logo.png" alt="logo" />
                        </IconButton>
                        <IconButton
                            color="primary"
                            sx={{p: '10px'}}
                            aria-label="directions">
                            <SearchIcon/>
                        </IconButton>
                    </div>
                    <div className="top__bar_right">
                        <IconButton
                            color="primary"
                            sx={{p: '10px'}}
                            aria-label="directions">
                            <MenuIcon/>
                        </IconButton>
                        <IconButton
                            color="primary"
                            sx={{p: '10px'}}
                            aria-label="directions">
                            <PersonIcon/>
                        </IconButton>
                        <IconButton
                            color="primary"
                            sx={{p: '10px'}}
                            aria-label="directions"
                            onClick={handleCartClick}>
                            <ShoppingCartIcon/>
                        </IconButton>
                    </div>
                </div>
            </div>
        </>
    )
}

export default TopBar;