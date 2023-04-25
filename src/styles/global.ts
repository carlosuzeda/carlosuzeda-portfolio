import { globalCss } from ".";

export const globalStyles = globalCss({
    '*': {
        margin: 0,
        padding: 0,
        listStyle: 'none',
        boxSizing: 'border-box',
    },

    body: {
        backgroundColor: '$gray-900',
        '-webkit-font-smoothing': 'antialiased',
    },

    'body, input, textarea, button': {
        fontFamily: 'Inter',
        color: '$white',
        fontWeight: 400,
    }
})