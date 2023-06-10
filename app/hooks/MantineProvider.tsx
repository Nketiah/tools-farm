"use client"
import { MantineProvider as ManProvider } from '@mantine/core'
import { ReactNode, useEffect } from 'react'


export default function MantineProvider({children }: {children: ReactNode}) {
    
useEffect(() => {
document.documentElement.style.opacity = "1"
},[])


  return (
    <ManProvider theme={{
      colors: {
        'primary': ['#6C7293', '#FFD2D2', '#F8A2A3', '#F37171', '#EE4646', '#EC2C2B', '#EC1D1D', '#D20F11', '#BC060D', '#A50008'],
        'secondary': ['#F3F4F7', '#E5E5E7', '#C7C9CE', '#A7ABB7', '#8C92A2', '#7B8296', '#727A92', '#60687F', '#555C72', '#475066'],
      },
      fontFamily: 'Inter, sans-serif',
      primaryColor: 'primary',
      primaryShade: 0,
    }}>
      {children}
    </ManProvider>
  )
}