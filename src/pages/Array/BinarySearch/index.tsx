import { Box, Container, ContainerProps, Grid, GridProps, styled } from '@mui/material'
import React, { useEffect, useState } from 'react'
import Sketch from 'react-p5'
import p5Types from 'p5'

const SubSectionContainer = styled(Grid)<GridProps>(({ theme }) => ({
  position: 'relative',
  zIndex: -1,
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'start',

  //   '& .MuiBox-root': {
  //     marginTop: '1rem',
  //   },
}))

function BinarySearch() {
  const [p5, setP5] = useState(undefined as any)
  const setup = (p5: any, canvasParentRef: Element) => {
    setP5(p5)
    p5.createCanvas(700, 500).parent(canvasParentRef)
  }

  const draw = (p5: p5Types) => {
    // setP5(p5)
    p5.background(255, 130, 20)
    p5.ellipse(100, 100, 100)
    p5.ellipse(300, 100, 100)
    p5.square(300, 300, 50)
  }

  useEffect(() => {
    window.addEventListener('resize', windowResized)

    return () => window.removeEventListener('resize', windowResized)
  }, [])
  function windowResized() {
    // keep in mind, `p5` can be `undefined`
    // so check it before using

    if (p5) {
      console.log(window.innerHeight, window.innerWidth)

      //   p5.resizeCanvas(window.innerWidth, window.innerHeight)
    }
  }
  return (
    <SubSectionContainer maxWidth='xl' id='sub-section-container' container>
      <Grid item width={'700px'}>
        <Sketch setup={setup} draw={draw} />
      </Grid>
    </SubSectionContainer>
  )
}

export default BinarySearch
