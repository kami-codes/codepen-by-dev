import React, { useContext, useEffect, useState } from 'react'
import { DatatContext } from '../context/DataProvider'
import { Box, styled } from '@mui/material'


function Result() {

const Container = styled(Box)`
height: 47.5vh;
`

    const [src, setSrc] = useState('')
    const {html, css, js} = useContext(DatatContext)
    const srcCode = `
    <html>
        <body>
             ${html}
        </body>
        <style>
            ${css}
        </style>
        <script>
             ${js}
        </script>
    </html>
    `

    useEffect(()=>{
       const timeout =  setTimeout(() => {
            setSrc(srcCode)
        }, 1000);

        return ()=> clearTimeout(timeout)
    }, [html, css, js])

    return (
        <>
            <Container>
                <iframe
                    srcDoc={src}
                    title='output'
                    sandbox='allow-scripts'
                    frameborder="0"
                    width='100%'
                    height='100%'
                />
            </Container>
        </>
    )
}

export default Result
