import { styled } from ".";

export const Button = styled('div',{
  a:{
    display: 'block',
    border: '1px solid transparent',
    textAlign: 'center',
    borderRadius: 8,
    padding: '1rem',
   
    cursor: 'pointer',
    transition: 'all .2s',

      textDecoration: 'none',
      color: '$white'
    },
    variants: {
        color: {
          gray: {
            a:{
              backgroundColor: '$gray-800',
              color: 'white',
              fontSize: 16,
              width: '100%',
              '&:hover': {
                backgroundColor: '$gray-900',
                border: '1px solid $gray-800',
              },
            }
         
          },
          black: {
            a:{
              backgroundColor: '$gray-900',
              color: 'white',
              fontSize: 16,
              '&:hover': {
                backgroundColor: '$gray-800',
                border: '1px solid $gray-900',
              },
            }
          
          },
        }
    }
})