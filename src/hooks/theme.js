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
        h1style: {
            color: '#FFBC28',
            padding: '4px 8px 0 0' 
        },
        h3style: {
            color: '#FFBC28', 
            fontWeight: 100, 
            padding: '40px 0px 0px', 
            whiteSpace: 'nowrap'
        },
        stressedOpaqueHeader: {
            fontSize: 32,
            fontWeight: 100,
            marginTop: '12px',
        },
        listStyle: {
            margin: 0,
            padding: '0 18px',
            opacity: '40%',
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