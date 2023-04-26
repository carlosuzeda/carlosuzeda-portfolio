import { styled } from "..";

export const Container = styled('div', {
    display: 'flex',
    maxWidth: 1180,
    margin: '0 auto',
    flexDirection: 'column',
    alignItems: 'flex-start',
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