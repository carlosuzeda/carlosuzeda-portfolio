import { styled } from "@/styles";

export const HeaderContainer = styled('header', {
    padding: '2rem',
    width: '100%',
    maxWidth: 1180,
    margin: '0 auto',
    marginTop: '2rem',

    display: 'flex',
    justifyContent: 'space-between',

    backgroundColor: '$gray-800',
    borderRadius: 8,

    div: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between'
    },

    '@bp1':{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 10,
        flexDirection: 'column',
      '.close':{
        display: 'none',
        alignItems: 'center',
        justifyContent: 'center'
      },
      '.open': {
        ul:{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        }
      },

    }
})

export const NavContainer = styled('nav', {
    ul: {
        display: 'flex',
        gap: 15,

    a: {
        textDecoration: 'none',
        color: '$white',

        borderTop: '3px solid transparent',
        borderBottom: '3px solid transparent',
        transition: 'all .2s',

        '&:hover':{
        borderBottom: '3px solid $green-700'
        }
    },

    button: {
        backgroundColor: '$gray-900',
        padding: '0 1rem',    
        border: 0,
        borderRadius: 8,
        fontSize: 16,
        cursor: 'pointer',
        borderBottom: '3px solid transparent',
        transition: 'all .2s',

        '&:hover':{
            borderBottom: '3px solid $green-700'
            }
    }
    }
})

export const ButtonMobile = styled('button', {
    background: 'transparent',
    border: 'none',
    color: '$white',
    display: 'none',

    "@bp1":{
      display: 'block'
    },

    '&:hover': {
    cursor: 'pointer',
    color: '$green-700',
    
    }
})