import { useState } from "react";
import { Sidebar, Menu, MenuItem, useProSidebar } from "react-pro-sidebar";
import { Typography} from "@mui/material";
import { Link } from "react-router-dom";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";

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
  const { collapseSidebar } = useProSidebar();
  const [selected, setSelected] = useState("Dashboard");

  return (
    <Sidebar style={{ height: "100vh" }}>
      
      <Menu>
        <MenuItem onClick={() => {collapseSidebar()}} icon={<MenuOutlinedIcon />}><Typography variant="h4">Sojjo Energy</Typography></MenuItem>
        <Item  title="Dashboard" to="/" icon={<HomeOutlinedIcon />} selected={selected} setSelected={setSelected}/>
        <Item  title="Live Data" to="/livedata" icon={<HomeOutlinedIcon />} selected={selected} setSelected={setSelected}/>
        <Item  title="Settings" to="/settings" icon={<HomeOutlinedIcon />} selected={selected} setSelected={setSelected}/>
      </Menu>
    </Sidebar>
  );
};

export default SojjoMenu;
