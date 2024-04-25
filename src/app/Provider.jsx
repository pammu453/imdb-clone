import { ThemeProvider } from 'next-themes'

const Provider = ({ children }) => {
    return (
        <ThemeProvider>
            <div className='select-none'>
                {children}
            </div>
        </ThemeProvider>
    )
}

export default Provider
