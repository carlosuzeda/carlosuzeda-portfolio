import { createStitches } from '@stitches/react'

export const {
    config,
    styled,
    css,
    globalCss,
    keyframes,
    getCssText,
    theme,
    createTheme
} = createStitches({
    theme: {
        colors: {
            white: '#fff',
            'gray-600': '#323238',
            'gray-800': '#202024',
            'gray-900': '#121214',
            
            'yellow-700': '#B39600',
            'red-700': '#B30000',
            'blue-700': '#0068B3',
            'green-700': '#00B37E',
            'purple-700': '#B3008C'
        }
    },
    media: {
        bp0: '(max-width: 480px)',
        bp1: '(max-width: 660px)',
        bp2: '(max-width: 900px)',
        bp3: '(max-width: 1024px)',
      },
})