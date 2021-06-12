import React from 'react'

const themes = {
    dark: {
        backgroundColor: 'grey',
        color: 'white'
    },
    light: {
        backgroundColor: 'cadetblue',
        color: 'white'
    }
}

const initialState = {
    dark: false,
    theme: themes.light,
    toggled: () => {}
}
const ThemeContext = React.createContext(initialState)

function ThemeProvider({ children }) {
    const [dark, setDark] = React.useState(false) // Default theme is light

    // On mount, read the preferred theme from the persistence
    React.useEffect(() => {
        const isDark = localStorage.getItem('dark') === 'true'
        setDark(isDark)
    }, [dark])

    // To toggle between dark and light modes
    const toggled = () => {
        const isDark = !dark
        localStorage.setItem('dark', JSON.stringify(isDark))
        setDark(isDark)
    }

    const theme = dark ? themes.dark : themes.light

    return (
        <ThemeContext.Provider value={{ theme, dark, toggled }}>
            {children}
        </ThemeContext.Provider>
    )
}

export { ThemeProvider, ThemeContext }
