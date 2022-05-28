import { createTheme } from '@mui/material/styles'


const theme = createTheme({
    typography: {
        button: {
            textTransform: 'none',
        },
        tinyFaded: {
            opacity: '40%',
            wordSpacing: '3px'
        },
        slantText: {
            fontStyle: 'italic',
        },
        yellowHeader: {
            fontWeight: 100,
            color: '#FFBC28',
            padding: 0,
            margin: 0,
        },
        yellowTitle: {
            fontSize: '1.2rem',
            color: '#FFBC28',
            fontWeight: 600,
            opacity: '90%'
        },
        specialLargerText: {
            fontWeight: 500,
            fontSize: 26,
        },
        h1style: {
            color: '#FFBC28',
        },
        h3style: {
            color: '#FFBC28', 
            fontWeight: 100, 
            whiteSpace: 'nowrap'
        },
        stressedOpaqueHeader: {
            fontSize: 32,
            fontWeight: 100,
            marginTop: '12px',
        },
        listStyle: {
            margin: 0,
            // padding: 0,
            padding: '0 18px',
            opacity: '80%',
            // listStyle: 'none',
        },
        bigTabPanelHeader: {
            fontSize: '56px', 
            color: 'white', 
            margin: '20px auto', 
            opacity: '30%',
            fontWeight: 500,
            width: '100%'
        }
    },
    palette: {
        primary: {
            main: '#2b2b2b',
        },
        secondary:{ 
            main:'#3b3b3b',
            contrastText: '#FFBC28',
        },
        info: {
            main: '#FFBC28'
        },
        success: {
            main: '#FFFFFF',
        }
    }
})

export default theme;