import { styled } from "..";
import { keyframes } from '@stitches/react'

const vertMove = keyframes({
    '0%':
     { 
        transform: 'translateX(-110%)'
     },
    '100%':
     { 
        transform: 'translateY(0%)'
     }

  })

export const AboutContainer = styled('main', {
    display: 'flex',
    alignItems: 'center',
    gap: 30,
    margin: '0 auto',
    paddingInline: '2rem',
    marginBottom: 125,

    '@bp1':{
        flexDirection: 'column',
        marginBottom: 0,
    }
   })

   export const AboutColumn = styled('div', {
    maxWidth: 495,
    div:{
        display: 'flex',
        alignItems: 'center',
        span: {
            fontSize: 48,
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundImage: `linear-gradient(
                19deg, $blue-700 0%, $green-700 100%
                )`
        },
    },
    
    'p + p':{
        marginBottom: 15,
    },

    p:{
    a:{
        textDecoration: 'none',
        color: "$green-700",
    }
    }
   })

   
   export const SkillsColumn = styled('div', {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: 15,

    li:{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        gap: 15,

        '@bp1':{
            flexDirection: 'column',
            gap: 0
        }
    },

    '@bp1':{
        'li + li':{
            marginTop: 15
        }
    },
    
   })

   export const Status = styled('div', {
        width: 435,
        height: 7, 
        backgroundColor: '$gray-800',
        overflow: 'hidden',
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-start',
        paddingInline: '.4rem',
        '@bp1':{
            width: 300,  
        },
        '&::before': {
            content: '',
            width: '97%',
      
            animation: `${vertMove} 1s ease-in`,
            height: 2,  
            position: 'absolute',
            borderRadius: 8,
            backgroundColor: "$red-700",

        },
        variants:{
            color: {
                yellow: {
                    '&::before': {
                        backgroundColor: "$yellow-700",
                        width: '80%',
                    },
                },
                red: {
                    '&::before': {
                        backgroundColor: "$red-700",
                        width: '75%',
                    },
                },
                blue: {
                    '&::before': {
                        backgroundColor: "$blue-700",
                        width: '80%',
                    },
                },
                green: {
                    '&::before': {
                        backgroundColor: "$green-700",
                        width: '72%',
                    },
                },
              }
        }
   })
