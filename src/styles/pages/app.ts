import { styled } from "..";

export const Container = styled('div', {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    padding: '0 2rem',
    // justifyContent: 'center',
    // minHeight: '100vh',

    '@bp1':{
       marginTop: '2.5rem',
       padding: '2rem',
    }
})

export const FragmentStyle = styled('div', {
    fontSize: "2rem",
    color: "$gray-800"
   })