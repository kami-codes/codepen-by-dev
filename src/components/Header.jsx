import React from 'react'
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import {styled} from '@mui/material/';

const Container = styled(AppBar)`
background: rgb(25,25,25);
`

function Header() {
  return (
    <>
    <Container position='static'>
        <Toolbar>
            Codepen-by-Dev
        </Toolbar>
    </Container>
    </>
  )
}

export default Header
