import { styled } from "..";

export const Container = styled('div', {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    // justifyContent: 'center',
    maxHeight: '100vh',

    '@bp1':{
       marginTop: '2.5rem',
    }
})