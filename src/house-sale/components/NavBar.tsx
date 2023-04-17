import { LogoutOutlined, MenuOutlined } from '@mui/icons-material'
import { AppBar, Grid, IconButton, Toolbar, Typography } from '@mui/material'
import React from 'react'
import { useAuthStore } from '../../hooks/useAuthStore';

export const NavBar = ({ drawerWidth = 240}: { drawerWidth: number }) => {
    const {startLogout} = useAuthStore();
    return (
        <AppBar
            position='fixed'
            sx={{ 
                width: { sm: `calc(100% - ${drawerWidth}px)`},
                ml:{sm: `${drawerWidth}px`}
            }}>
            <Toolbar>
                <IconButton
                color='inherit'
                edge="start"
                sx={{mr:2, display:{sm:'none'}}}>
                    <MenuOutlined />
                </IconButton>
                <Grid 
                container 
                direction="row"
                justifyContent="space-around"
                >
                    <Typography variant='h6' noWrap component="div">Collector</Typography>
                    <IconButton color="error" onClick={startLogout}>
                        <LogoutOutlined />
                        Salir
                    </IconButton>
                </Grid>
            </Toolbar>
        </AppBar>
    )
}
