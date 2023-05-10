import React, { useContext } from 'react'
import Editor from './Editor'
import { Box, styled } from '@mui/material'
import { DatatContext } from '../context/DataProvider'

const Container = styled(Box)`
display: flex;
background: black;`

function Code() {

    const {html, setHtml, css, setCss, js, setJs} = useContext(DatatContext)
  return (
    <Container>
    <Editor  heading='HTML' indicator='<>' value={html} onChange={setHtml} />
    <Editor heading='CSS' indicator='*' value={css} onChange={setCss}/>
    <Editor heading='JavaScript' indicator='{}' value={js} onChange={setJs}/>
    </Container>
  )
}

export default Code
