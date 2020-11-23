import React from 'react';
import { Link } from 'next/link';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Tooltip, { TooltipProps } from '@material-ui/core/Tooltip';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import Badge from '@material-ui/core/Badge';
import MenuItem from '@material-ui/core/MenuItem';
import Menu, { MenuProps }from '@material-ui/core/Menu';
import MenuIcon from '@material-ui/icons/Menu';
import AccountCircle from '@material-ui/icons/AccountCircle';
import NotificationsIcon from '@material-ui/icons/Notifications';

import {ErrorBoundary, FallbackProps} from 'react-error-boundary'
;
type ErrorMessage = {
    message: string
}
const errorFallback = ({error}: FallbackProps) => {
    return (
      <div role="alert">
        <p>Something went wrong:</p>
        <pre style={{color: 'red'}}>{error ? error.message : ''}</pre>
      </div>
    )
  }

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
                <Link href="/pricing">
                    <a>
                        <Typography className={classes.submenu} variant="h6" noWrap>
                            Membership Pricing
                        </Typography>
                    </a>
                </Link>
            </StyledMenuItem>
            <StyledMenuItem onClick={handleAboutMenuClose}>
                <Link href="/programs">
                    <a>
                        <Typography className={classes.submenu} variant="h6" noWrap>
                            Programs
                        </Typography>
                    </a>
                </Link>
            </StyledMenuItem>
            <StyledMenuItem onClick={handleAboutMenuClose}>
                <Link href="/schedule">
                    <a>
                        <Typography className={classes.submenu} variant="h6" noWrap>
                            Class Schedule
                        </Typography>
                    </a>
                </Link>
            </StyledMenuItem>
            <StyledMenuItem onClick={handleAboutMenuClose}>
                <Link href="/story">
                    <a>
                        <Typography className={classes.submenu} variant="h6" noWrap>
                            Our Story
                        </Typography>
                    </a>
                </Link>
            </StyledMenuItem>
            <StyledMenuItem onClick={handleAboutMenuClose}>
                <Link href="/facility">
                    <a>
                        <Typography className={classes.submenu} variant="h6" noWrap>
                            Our Facility
                        </Typography>
                    </a>
                </Link>
            </StyledMenuItem>
            <StyledMenuItem onClick={handleAboutMenuClose}>
                <Link href="/resources">
                    <a>
                        <Typography className={classes.submenu} variant="h6" noWrap>
                            Resources
                        </Typography>
                    </a>
                </Link>
            </StyledMenuItem>
        </StyledMenu>
        );

    return (
        <div className={classes.grow}>
            <React.StrictMode>
                <ErrorBoundary FallbackComponent={errorFallback}>
                <AppBar position="static">
                    <Toolbar>
                        <IconButton
                            edge="start"
                            className={classes.menuButton}
                            color="inherit"
                            aria-label="open drawer">
                            <MenuIcon />
                        </IconButton>
                            <Link href="/">
                                <a>
                                    <MenuItem>
                                        <Typography className={classes.nav} variant="h6" noWrap>
                                            Great State
                                        </Typography>
                                    </MenuItem>
                                </a>
                            </Link>
                        <div className={classes.grow} />
                        <div className={classes.sectionDesktop}>
                                <Link href="/gettingstarted">
                                    <a>
                                        <MenuItem>
                                            <Typography className={classes.nav} variant="h6" noWrap>
                                                Getting Started
                                            </Typography>
                                        </MenuItem>
                                    </a>
                                </Link>
                                <Link href="/weights">
                                    <a>
                                        <MenuItem>
                                            <Typography className={classes.nav} variant="h6" noWrap>
                                                Weights
                                            </Typography>
                                        </MenuItem>
                                    </a>
                                </Link>
                                <Link href="/michael">
                                    <a>
                                        <MenuItem>
                                            <Typography className={classes.nav} variant="h6" noWrap>
                                                Michael
                                            </Typography>
                                        </MenuItem>
                                   </a> 
                                </Link>
                                <Link href="/dropin">
                                    <a>
                                        <MenuItem>
                                            <Typography className={classes.nav} variant="h6" noWrap>
                                                Drop-Ins
                                            </Typography>
                                        </MenuItem>
                                    </a>
                                </Link>
                                <Link href="/wod">
                                    <a>
                                        <MenuItem>
                                            <Typography className={classes.nav} variant="h6" noWrap>
                                                WOD
                                            </Typography>
                                        </MenuItem>
                                    </a>
                                </Link>
                                <Link href="/contact">
                                    <a>
                                        <MenuItem>
                                            <Typography className={classes.nav} variant="h6" noWrap>
                                                Contact Us
                                            </Typography>
                                        </MenuItem>
                                    </a>
                                </Link>
                                <Link href="/covid">
                                    <a>
                                        <MenuItem>
                                            <Typography className={classes.nav} variant="h6" noWrap>
                                                Covid
                                            </Typography>
                                        </MenuItem>
                                    </a>
                                </Link>
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
                            {renderAboutMenu}
                            <IconButton aria-label="show 17 new notifications" color="inherit">
                                <Badge badgeContent={17} color="secondary">
                                    <NotificationsIcon />
                                </Badge>
                            </IconButton>
                                <Link href="/login">
                                    <AccountCircle className={classes.nav} fontSize="large"/>
                                </Link>
                        </div>
                    </Toolbar>
                </AppBar>
                </ErrorBoundary>
            </React.StrictMode>
        </div>
    );
}
