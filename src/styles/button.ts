import { styled } from ".";

export const Button = styled('button',{
    border: '1px solid transparent',
    borderRadius: 8,
    padding: '1rem',
   
    cursor: 'pointer',
    transition: 'all .2s',
    a:{
      textDecoration: 'none',
      color: '$white'
    },
    variants: {
        color: {
          gray: {
            backgroundColor: '$gray-800',
            color: 'white',
            fontSize: 16,
            width: '100%',
            '&:hover': {
              backgroundColor: '$gray-900',
              border: '1px solid $gray-800',
            },
          },
          black: {
            backgroundColor: '$gray-900',
            color: 'white',
            fontSize: 16,
            '&:hover': {
              backgroundColor: '$gray-800',
              border: '1px solid $gray-900',
            },
          },
        }
    }
})