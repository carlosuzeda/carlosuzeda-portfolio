import { styled } from "..";

export const ContainerHome = styled('main', {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    margin: '0 auto',
    height: '81vh',
    gap: 15,
    strong: {
        fontSize: 48,
    },
    img: {
        alignSelf: 'flex-start'
    },
    '@bp1':{
        strong: {
            fontSize: 24,
        },
    }
})

export const InfoHome = styled('main', {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
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