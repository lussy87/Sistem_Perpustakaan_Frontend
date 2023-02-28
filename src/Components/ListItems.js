import * as React from 'react';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ListSubheader from '@mui/material/ListSubheader';
import HomeIcon from '@mui/icons-material/Home';
import PeopleIcon from '@mui/icons-material/People';
import InfoIcon from '@mui/icons-material/Info';
import HelpIcon from '@mui/icons-material/Help';
import AssignmentIcon from '@mui/icons-material/Assignment';
import PersonIcon from '@mui/icons-material/Person';
import GroupIcon from '@mui/icons-material/Group';
import { useNavigate, useParams, Link} from "react-router-dom";



export const mainListItems = (
 
  // const classes = useStyles();
  <React.Fragment>
    <ListItemButton component={Link} to='/dashboard' activeStyle={{ backgroundColor: 'blue' }}>
      <ListItemIcon>
        <HomeIcon />
      </ListItemIcon>
      <ListItemText primary="Home" />
    </ListItemButton>
    
    <ListItemButton component={Link} to="/staff">
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Staff" />
    </ListItemButton>
    <ListItemButton component={Link} to="/murid">
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Murid" />
    </ListItemButton>
    <ListItemButton component={Link} to="/buku">
      <ListItemIcon>
        <InfoIcon />
      </ListItemIcon>
      <ListItemText primary="Buku" />
    </ListItemButton>
   
  </React.Fragment>
);

