import React from 'react';
import { Link as RouterLink  } from 'gatsby';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Tooltip from '@material-ui/core/Tooltip';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import Badge from '@material-ui/core/Badge';
import MenuItem, { MenuItemProps } from '@material-ui/core/MenuItem';
import Menu, { MenuProps }from '@material-ui/core/Menu';
import MenuIcon from '@material-ui/icons/Menu';
import AccountCircle from '@material-ui/icons/AccountCircle';
import NotificationsIcon from '@material-ui/icons/Notifications';


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
})(React.forwardRef((props: MenuProps, ref) => (
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
        ref={ref}
    />
)));
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
    const [anchorEla, setAnchorEla] = React.useState<null | HTMLElement>(null);
    const [anchorElc, setAnchorElc] = React.useState<null | HTMLElement>(null);

    const isAboutMenuOpen = Boolean(anchorEla);
    const isCovidMenuOpen = Boolean(anchorElc);

    const handleAboutMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEla(event.currentTarget);
    };
    const handleAboutMenuClose = () => {
        setAnchorEla(null);
    };
    const handleCovidMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElc(event.currentTarget);
    };
    const handleCovidMenuClose = () => {
        setAnchorElc(null);
    };

    const aboutMenuId = 'about-menu';
    const renderAboutMenu = (
        <StyledMenu
            anchorEl={anchorEla}
            anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
            id={aboutMenuId}
            keepMounted
            transformOrigin={{ vertical: 'top', horizontal: 'right' }}
            open={isAboutMenuOpen}
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

    const covidMenuId = 'covid-menu';
    const renderCovidMenu = (
        <StyledMenu
            anchorEl={anchorElc}
            anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
            id={covidMenuId}
            keepMounted
            transformOrigin={{ vertical: 'top', horizontal: 'right' }}
            open={isCovidMenuOpen}
            onClose={handleCovidMenuClose}
        >
            <StyledMenuItem onClick={handleCovidMenuClose}>
                <RouterLink to="/covid-19/status">
                    <Typography className={classes.submenu} variant="h6" noWrap>
                        Status
                    </Typography>
                </RouterLink>
            </StyledMenuItem>
            <StyledMenuItem onClick={handleCovidMenuClose}>
                <RouterLink to="/covid-19/testing">
                    <Typography className={classes.submenu} variant="h6" noWrap>
                        Testing Sites
                    </Typography>
                </RouterLink>
            </StyledMenuItem>
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
                            <Tooltip title="Weights" arrow>
                                <RouterLink to="/weights">
                                    <MenuItem>
                                        <Typography className={classes.nav} variant="h6" noWrap>
                                            Weights
                                        </Typography>
                                    </MenuItem>
                                </RouterLink>
                            </Tooltip>
                            <Tooltip title="Michael" arrow>
                                <RouterLink to="/michael">
                                    <MenuItem>
                                        <Typography className={classes.nav} variant="h6" noWrap>
                                            Michael
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
                            <Tooltip title="Covid-19" arrow>
                                <Button
                                    aria-controls={aboutMenuId}
                                    aria-haspopup="true"
                                    variant="contained"
                                    color="primary"
                                    onClick={handleCovidMenuOpen}
                                >
                                    <Typography className={classes.nav} variant="h6" noWrap>
                                        Covid-19
                                     </Typography>
                                </Button>
                            </Tooltip>
                            {renderCovidMenu}
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
                    </Toolbar>
                </AppBar>
            </div>
    );
}
