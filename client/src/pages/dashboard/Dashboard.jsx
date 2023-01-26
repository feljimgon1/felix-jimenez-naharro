import React from 'react'
import { styled, useTheme } from '@mui/material/styles';
import './Dashboard.scss'
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { Link, NavLink, Outlet } from 'react-router-dom';
import DashboardToolbar from '../../components/drawerComponent/dashboardToolbar/DashboardToolbar';

const drawerWidth = 240;

const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: `-${drawerWidth}px`,
    ...(open && {
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: 0,
    }),
  }),
);

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: 'flex-end',
}));

const situationTables = [
  { name: 'Balance de situación', path: 'balance' },
  { name: 'Cuenta de pérdidas y ganancias', path: 'cuenta-perdidas-ganancias' },
];

const steps = [
  { name: 'Estrategia de mercado', path: 'estrategia-mercado' },
  { name: 'Política de inversión', path: 'politica-inversion' },
  { name: 'Política de financiación', path: 'politica-financiacion' },
  { name: 'Estrategia de circulante', path: 'estrategia-circulante' }
];

const results = [
  { name: 'Resultados', path: 'resultados' }
];

export default function DrawerComponent() {

  const theme = useTheme();
  const [open, setOpen] = React.useState(true);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Box sx={{ display: 'flex'}}>
        <CssBaseline />
        <DashboardToolbar drawerWidth={drawerWidth} open={open} handleDrawerOpen={handleDrawerOpen}></DashboardToolbar>
        <Drawer
          sx={{
            width: drawerWidth,
            flexShrink: 0,
            '& .MuiDrawer-paper': {
              width: drawerWidth,
              boxSizing: 'border-box',
            },
          }}
          variant="persistent"
          anchor="left"
          open={open}
        >
          <DrawerHeader className='drawer-header-container'>
            <Link to='' className='drawer-header-title'>Dashboard</Link>
            <IconButton onClick={handleDrawerClose}>
              {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
            </IconButton>
          </DrawerHeader>
          <Divider />
          <div className="nav-menu">
            {situationTables.map((table, index) => (
              <NavLink key={index} className="nav-link" to={table.path}>
                {table.name}
              </NavLink>
            ))}
          </div>
          <Divider />
          <div className="nav-menu">
            {steps.map((table, index) => (
              <NavLink key={index} className="nav-link" to={table.path}>
                {table.name}
              </NavLink>
            ))}
          </div>
          <Divider />
          <div className="nav-menu">
            {results.map((table, index) => (
              <NavLink key={index} className="nav-link" to={table.path}>
                {table.name}
              </NavLink>
            ))}
          </div>
        </Drawer>
        <Main open={open} className='main-container'>
          <DrawerHeader />
          <Outlet />
        </Main>
      </Box>
    </div >
  )
}
