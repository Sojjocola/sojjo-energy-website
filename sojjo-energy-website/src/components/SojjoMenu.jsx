import { useState } from "react";
import { Sidebar, Menu, MenuItem, useProSidebar, MenuItemStyles, menuClasses } from "react-pro-sidebar";
import { useTheme } from '@mui/material/styles';
import { Typography} from "@mui/material";
import { Link } from "react-router-dom";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import SsidChartOutlinedIcon from '@mui/icons-material/SsidChartOutlined';


const Item = ({ title, to, icon, selected, setSelected }) => {
  return (
    <MenuItem
      active={selected === title}
      style={{
        color: "primary",
      }}
      onClick={() => setSelected(title)}
      icon={icon}
      component={<Link to={to} />}
    >
      <Typography>{title}</Typography>
      
    </MenuItem>
  );
};

const SojjoMenu = () => {
  const { collapseSidebar, collapsed } = useProSidebar();
  const [selected, setSelected] = useState("Dashboard");
  const theme = useTheme();

  const menuItemStyles: MenuItemStyles = {
    root: {
      fontSize: '13px',
      fontWeight: 400,
    },
    icon: {
      color: theme.palette.secondary.main,
      [`&.${menuClasses.disabled}`]: {
        color: theme.palette.grey[400],
      },
    },
    SubMenuExpandIcon: {
      color: '#b6b7b9',
    },
    subMenuContent: ({ level }) => ({
      backgroundColor:
        level === 0
          ? theme.palette.primary.main
          : 'transparent',
    }),
    button: {
      [`&.${menuClasses.disabled}`]: {
        color: theme.palette.primary.main,
      },
      '&:hover': {
        backgroundColor: theme.palette.grey[200],
        color: theme.palette.secondary.dark,
      },
    },
    label: ({ open }) => ({
      fontWeight: open ? 600 : undefined,
    }),
  };





  return (
    <Sidebar style={{ height: "100vh" }} backgroundColor="#090D0B" rootStyles={{
      color: theme.palette.primary.main,
      borderColor : 'black'
    }}>
    <div style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
      <Menu menuItemStyles={menuItemStyles}>
        <MenuItem onClick={() => {collapseSidebar()}} icon={<MenuOutlinedIcon />}><Typography variant="h4">Sojjo Energy</Typography></MenuItem>
        <div style={{ flex: 1, marginBottom: '32px' }}>
       
        <div style={{ padding: '0 24px', marginBottom: '6px', marginTop: '8px' }}>
              <Typography
                variant="body1"
                fontWeight={600}
                style={{ opacity: collapsed ? 0 : 0.7, letterSpacing: '0.5px' ,color: theme.palette.secondary.dark}}
              >
                General
              </Typography>
            </div>
        <Item  title="Dashboard" to="/" icon={<HomeOutlinedIcon />} selected={selected} setSelected={setSelected}/>
        <Item  title="Live Data" to="/livedata" icon={<SsidChartOutlinedIcon />} selected={selected} setSelected={setSelected}/>
        <div style={{ padding: '0 24px', marginBottom: '6px', marginTop: '8px' }}>
        <Typography
          variant="body1"
          fontWeight={600}
          style={{ opacity: collapsed ? 0 : 0.7, letterSpacing: '0.5px', color: theme.palette.secondary.dark }}
          
        >
          Admin
        </Typography>
      </div>
        <Item  title="Settings" to="/settings" icon={<SettingsOutlinedIcon />} selected={selected} setSelected={setSelected}/>
        </div>
      </Menu>
      </div>
    </Sidebar>
  );
};

export default SojjoMenu;
