import { styled } from "..";

export const ContactContainer = styled('main', {
    display: 'flex',
    alignItems: 'center',
    gap: 30,
    margin: '0 auto',
    paddingInline: '2rem',
    marginTop: '2rem',
    marginBottom: 125,

    '@bp1':{
        flexDirection: 'column-reverse',
        marginBottom: 0,

        img:{
            width: 300,
        }
    }
   })

   export const ContactColumn = styled('div', {
    maxWidth: 582,

       div:{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',

        span: {
            fontSize: 48,
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundImage: `linear-gradient(
                19deg, $blue-700 0%, $green-700 100%
                )`
            
        },
       },
  
        p:{     
            marginTop: 30,
            marginBottom: 15
        },

        img:{
            marginBottom: 15
        },

        '@bp1':{
            div:{
                span:{
                    fontSize: 24,
                }
            }
        }

   })

