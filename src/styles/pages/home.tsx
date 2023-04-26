import { styled } from "..";
import { keyframes } from '@stitches/react'

const vertMove = keyframes({
    '0%':
     { 
        transform: 'translateY(0)'
     },
    '100%':
     { 
        transform: 'translateY(-10px)'
     }

  })

export const ContainerHome = styled('main', {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '2rem',
    margin: '0 auto',
    height: '81vh',
    gap: 15,
    img:{
        animation: `${vertMove} 1s infinite alternate`,
    },
    div: {
        flexDirection: 'column',
    },
    strong: {
        fontSize: 48,
    },

    '@bp1':{
        flexDirection: 'column-reverse',

        img:{
            width: 250,
        },
        strong: {
            fontSize: 24,
        },
    }
})

export const InfoHome = styled('main', {
    display: 'flex',
    flexDirection: 'column',
    fontSize: 48,

    span: {
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    backgroundImage: `linear-gradient(
        19deg, $blue-700 0%, $green-700 100%
        )`
},
    strong: {
        fontSize: 48,
    },
    '@bp1':{
        fontSize: 24,
        strong: {
            fontSize: 24,
        },
    }
})


export const FragmentStyle = styled('p', {
 fontSize: "2rem",
 color: "$gray-800"
})