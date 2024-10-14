import { createContext, useContext, useState } from "react";

const LocalizationContext = createContext();

const LocalizationProvider = ({ children }) => {
    const [locale, setLocale] = useState('en');
    const localizedString = {
        en: {
            greeting: 'Hello World',
            welcome: 'Welcome to our app'
        },
        es: {
            greeting: 'Hola mundo!',
            welcome: 'Bienvenido a mi aplicacion'
        }
    }
    return (
        <LocalizationContext.Provider value={{localizedString, locale, setLocale}}>{children}</LocalizationContext.Provider>
    )
}

const useLocalization = () => {
    return useContext(LocalizationContext)
}

export {useLocalization, LocalizationProvider}