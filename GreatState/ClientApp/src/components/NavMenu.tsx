import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { fade, makeStyles, withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Tooltip from '@material-ui/core/Tooltip';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import Badge from '@material-ui/core/Badge';
import MenuItem from '@material-ui/core/MenuItem';
import Menu, { MenuProps }from '@material-ui/core/Menu';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import AccountCircle from '@material-ui/icons/AccountCircle';
import NotificationsIcon from '@material-ui/icons/Notifications';
import MoreIcon from '@material-ui/icons/MoreVert';

const useStyles = makeStyles((theme) => ({
    grow: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    nav: {
        display: 'none',
        color: theme.palette.common.white,
        [theme.breakpoints.up('sm')]: {
            display: 'block',
        },
        textTransform: 'none'
    },
    submenu: {
        display: 'none',
        color: theme.palette.common.black,
        backgroundColor: theme.palette.common.white,
        [theme.breakpoints.up('sm')]: {
            display: 'block',
        },
        textTransform: 'none'
    },
    search: {
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: fade(theme.palette.common.white, 0.15),
        '&:hover': {
            backgroundColor: fade(theme.palette.common.white, 0.25),
        },
        marginRight: theme.spacing(2),
        marginLeft: 0,
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            marginLeft: theme.spacing(3),
            width: 'auto',
        },
    },
    searchIcon: {
        padding: theme.spacing(0, 2),
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    inputRoot: {
        color: 'inherit',
    },
    inputInput: {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('md')]: {
            width: '20ch',
        },
    },
    sectionDesktop: {
        display: 'none',
        [theme.breakpoints.up('md')]: {
            display: 'flex',
        },
    },
    sectionMobile: {
        display: 'flex',
        [theme.breakpoints.up('md')]: {
            display: 'none',
        },
    },
}));

const StyledMenu = withStyles({
    paper: {
        border: '1px solid #d3d4d5',
    },
})((props: MenuProps) => (
    <Menu
        elevation={0}
        getContentAnchorEl={null}
        anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'center',
        }}
        transformOrigin={{
            vertical: 'top',
            horizontal: 'center',
        }}
        {...props}
    />
));
const StyledMenuItem = withStyles((theme) => ({
    root: {
        '&:focus': {
            backgroundColor: theme.palette.primary.main,
            '& .MuiTypography-root': {
                backgroundColor: theme.palette.primary.main,
                color: theme.palette.common.white,
            },
        },
    },
}))(MenuItem);

export default function NavMenu() {
    const classes = useStyles();
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState<null | HTMLElement>(null);

    const isMenuOpen = Boolean(anchorEl);
    const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

    const handleAboutMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleMobileMenuClose = () => {
        setMobileMoreAnchorEl(null);
    };

    const handleAboutMenuClose = () => {
        setAnchorEl(null);
        handleMobileMenuClose();
    };

    const handleMobileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
        setMobileMoreAnchorEl(event.currentTarget);
    };

    const aboutMenuId = 'about-menu';
    const renderAboutMenu = (
        <StyledMenu
            anchorEl={anchorEl}
            anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
            id={aboutMenuId}
            keepMounted
            transformOrigin={{ vertical: 'top', horizontal: 'right' }}
            open={isMenuOpen}
            onClose={handleAboutMenuClose}
        >
            <StyledMenuItem onClick={handleAboutMenuClose}>
                <RouterLink to="/pricing">
                    <Typography className={classes.submenu} variant="h6" noWrap>
                        Membership Pricing
                    </Typography>
                </RouterLink>
            </StyledMenuItem>
            <StyledMenuItem onClick={handleAboutMenuClose}>
                <RouterLink to="/programs">
                    <Typography className={classes.submenu} variant="h6" noWrap>
                        Programs
                    </Typography>
                </RouterLink>
            </StyledMenuItem>
            <StyledMenuItem onClick={handleAboutMenuClose}>
                <RouterLink to="/schedule">
                    <Typography className={classes.submenu} variant="h6" noWrap>
                        Class Schedule
                    </Typography>
                </RouterLink>
            </StyledMenuItem>
            <StyledMenuItem onClick={handleAboutMenuClose}>
                <RouterLink to="/story">
                    <Typography className={classes.submenu} variant="h6" noWrap>
                        Our Story
                    </Typography>
                </RouterLink>
            </StyledMenuItem>
            <StyledMenuItem onClick={handleAboutMenuClose}>
                <RouterLink to="/facility">
                    <Typography className={classes.submenu} variant="h6" noWrap>
                        Our Facility
                    </Typography>
                </RouterLink>
            </StyledMenuItem>
            <StyledMenuItem onClick={handleAboutMenuClose}>
                <RouterLink to="/resources">
                    <Typography className={classes.submenu} variant="h6" noWrap>
                        Resources
                    </Typography>
                </RouterLink>
            </StyledMenuItem>
        </StyledMenu>
    );

    const mobileMenuId = 'primary-search-account-menu-mobile';
    const renderMobileMenu = (
        <StyledMenu
            anchorEl={mobileMoreAnchorEl}
            anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
            id={mobileMenuId}
            keepMounted
            transformOrigin={{ vertical: 'top', horizontal: 'right' }}
            open={isMobileMenuOpen}
            onClose={handleMobileMenuClose}
        >
            <MenuItem>
                <IconButton aria-label="show 11 new notifications" color="inherit">
                    <Badge badgeContent={11} color="secondary">
                        <NotificationsIcon />
                    </Badge>
                </IconButton>
                <p>Notifications</p>
            </MenuItem>
            <MenuItem onClick={handleAboutMenuOpen}>
                <IconButton
                    aria-label="account of current user"
                    aria-controls="primary-search-account-menu"
                    aria-haspopup="true"
                    color="inherit"
                >
                    <AccountCircle />
                </IconButton>
                <p>Profile</p>
            </MenuItem>
        </StyledMenu>
    );

    return (
            <div className={classes.grow}>
                <AppBar position="static">
                    <Toolbar>
                        <IconButton
                            edge="start"
                            className={classes.menuButton}
                            color="inherit"
                            aria-label="open drawer">
                            <MenuIcon />
                        </IconButton>
                        <Tooltip title="Home" arrow>
                            <RouterLink to="/">
                                <MenuItem>
                                <Typography className={classes.nav} variant="h6" noWrap>
                                    Great State
                                </Typography>
                                </MenuItem>
                            </RouterLink>
                        </Tooltip>
                        <div className={classes.search}>
                            <div className={classes.searchIcon}>
                                <SearchIcon />
                            </div>
                            <InputBase
                                placeholder="Search…"
                                classes={{
                                    root: classes.inputRoot,
                                    input: classes.inputInput,
                                }}
                                inputProps={{ 'aria-label': 'search' }}
                            />
                        </div>
                        <div className={classes.grow} />
                        <div className={classes.sectionDesktop}>
                            <Tooltip title="Getting Started" arrow>
                                <RouterLink to="/gettingstarted">
                                    <MenuItem>
                                        <Typography className={classes.nav} variant="h6" noWrap>
                                            Getting Started
                                        </Typography>
                                    </MenuItem>
                                </RouterLink>
                            </Tooltip>
                            <Tooltip title="Drop-Ins" arrow>
                                <RouterLink to="/dropin">
                                    <MenuItem>
                                        <Typography className={classes.nav} variant="h6" noWrap>
                                            Drop-Ins
                                        </Typography>
                                    </MenuItem>
                                </RouterLink>
                            </Tooltip>
                            <Tooltip title="Workout of the day" arrow>
                                <RouterLink to="/wod">
                                    <MenuItem>
                                        <Typography className={classes.nav} variant="h6" noWrap>
                                            WOD
                                        </Typography>
                                    </MenuItem>
                                </RouterLink>
                            </Tooltip>
                            <Tooltip title="Contact Us" arrow>
                                <RouterLink to="/contact">
                                    <MenuItem>
                                        <Typography className={classes.nav} variant="h6" noWrap>
                                            Contact Us
                                        </Typography>
                                    </MenuItem>
                                </RouterLink>
                            </Tooltip>
                            <Tooltip title="About Us" arrow>
                                <Button
                                    aria-controls={aboutMenuId}
                                    aria-haspopup="true"
                                    variant="contained"
                                    color="primary"
                                    onClick={handleAboutMenuOpen}
                                >
                                    <Typography className={classes.nav} variant="h6" noWrap>
                                        About Great State
                                     </Typography>
                                </Button>
                            </Tooltip>
                            {renderAboutMenu}
                            <IconButton aria-label="show 17 new notifications" color="inherit">
                                <Badge badgeContent={17} color="secondary">
                                    <NotificationsIcon />
                                </Badge>
                            </IconButton>
                            <Tooltip title="Login" arrow>
                                <RouterLink to="/login">
                                    <AccountCircle className={classes.nav} fontSize="large"/>
                                </RouterLink>
                            </Tooltip>
                        </div>
                        <div className={classes.sectionMobile}>
                            <IconButton
                                aria-label="show more"
                                aria-controls={mobileMenuId}
                                aria-haspopup="true"
                                onClick={handleMobileMenuOpen}
                                color="inherit">
                                <MoreIcon />
                            </IconButton>
                        </div>
                    </Toolbar>
                </AppBar>
                {renderMobileMenu}
            </div>
    );
}
