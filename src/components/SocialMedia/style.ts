import { styled } from "@/styles";

export const SocialMediaContainer = styled('div', {
    position: 'fixed',
    top: '50%',
    left: 15,
    transform: 'translate(-50%, -50%)',

    ul: {
        display: 'flex',
        flexDirection: 'column',
        gap: 30,

        position: 'relative',
        left: 15,

    li: {
        transition: 'all .2s',
    '&:hover': {
        transform: 'scale(1.5)'
    }
    },

    a: {
    textDecoration: 'none',
    color: '$white',

    '&:hover': {
        color: '$green-700',
        }
    }
    }
})