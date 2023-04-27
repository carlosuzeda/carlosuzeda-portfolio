import { styled } from "..";

export const WorkContainer = styled('div', {
    display: 'flex',
    width: '100%',
    maxWidth: 'calc(100vw - ((100vw - 1180px) / 2))',
    marginLeft: 'auto',
    marginBottom: 30,
  
    '@bp1': {
      padding: '2rem',
    },
  })

  export const WorkItems = styled('div', {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',

    backgroundColor: '$gray-800',
    height: 372,
    width: 305,
    img: {
      // objectFit: 'cover',
      borderRadius: '100%'
    },
    footer:{
      display: 'flex',
      flexDirection: 'column',
      gap: 15,
      alignItems: 'center',
      textAlign: 'center',

      a:{
        textDecoration: 'none',
        color: '$white'
      }
    },

    '@bp1':{
      width: '90%',
      margin: '0 auto'
    }
  })

  export const WorkHeader = styled('div', {
        display: 'flex',
        alignItems: 'center',

        maxWidth: 1180,
        margin: '0 auto',
        marginBottom: 30,
        marginTop: 30,
        span: {
            fontSize: 48,
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundImage: `linear-gradient(
                19deg, $blue-700 0%, $green-700 100%
                )`
        },

  })