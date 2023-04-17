import { Toolbar } from '@material-ui/core';
import { Box } from '@mui/system';
import { NavBar } from '../components/NavBar';
import { SideBar } from '../components/SideBar';

const drawerWidth = 240;

export const HouseSaleLayout = ({children}:{children:any}) => {
    return (
        <Box sx={{display: 'flex'}}>
            <NavBar drawerWidth={drawerWidth}/>
            <SideBar drawerWidth={drawerWidth}/>
            <Box
            component='main'
            sx={{flexGrow: 1, p:3}}
            >
                <Toolbar/>
                {children}
            </Box>
        </Box>
    )
}
