import { Box, IconButton, Typography } from "@mui/material";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";

const TopBar = () => {
  return (
    <Box display="flex" justifyContent="space-between" p={2}>
      <Box display="flex">
        <Typography variant="h3" color="primary">Sojjo Energy</Typography>
      </Box>
      <Box display="flex">
        <IconButton>
          <DarkModeOutlinedIcon color="primary"/>
        </IconButton>
      </Box>
    </Box>
  );
};

export default TopBar;
