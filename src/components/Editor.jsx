import React, { useContext, useState } from 'react'
import { Box, styled } from '@mui/material'
import CloseFullscreenIcon from '@mui/icons-material/CloseFullscreen';

import '../App.css'


import {Controlled as ControlledEditor} from 'react-codemirror2'
import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/material.css';
import 'codemirror/mode/xml/xml'
import 'codemirror/mode/css/css'
import 'codemirror/mode/javascript/javascript'
import { DatatContext } from '../context/DataProvider';



const Heading = styled(Box)`
background: rgb(50,50,50);
padding: 5px;
display: flex;
color: white;
`
const Header = styled(Box)`
background: black;
display: flex;
justify-content: space-between;
color: white;
padding: 2px;
`

const Container = styled(Box)`
flex-grow: 1;
flex-basis:0;
display: flex;
flex-direction: column;
padding: 5px`


function Editor({heading, indicator, value, onChange}) {

    
const [open, setOpen] = useState(true)

    const handleChange = (editor, data, value)=>{
        onChange(value)
    }

    return (
        <>
            <Container style={{flexGrow: (open? null:'0'), borderRadius: 5} }>
                <Header style={{borderRadius: '5px', padding: 0}}>
                    <Heading style={{borderRadius: 5}}>
                    <Box component='span' 
                    style={{
                        display: 'flex',
                        width: 20,
                        height: 20,
                        background: 'red',
                        placeContent: 'center',
                        borderRadius: '5px',
                        marginRight: 5
                    }}> {indicator} </Box>
                    {heading}
                    </Heading>
                    <CloseFullscreenIcon 
                    onClick = {()=>{setOpen(prevState => !prevState)}}
                    fontSize='small'
                    style={{alignSelf: 'center'}}
                    />
                </Header>
                <ControlledEditor 
                value={value}
                onBeforeChange={handleChange}
                
                className='controlled-editor'
                options={{
                    theme: 'material',
                    lineNumbers: true

                }}
                />
                
            </Container>
        </>
    )
}

export default Editor
