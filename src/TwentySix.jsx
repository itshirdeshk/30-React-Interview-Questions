import React from 'react'
import { useLocalization } from './context/LocalizationContext'

function TwentySix() {
    const { localizedString, locale, setLocale } = useLocalization();
    const handleLocaleChange = (lang) => {
        setLocale(lang);
    }
    return (

        <div>
            <h1>Your Selected Language: {locale === 'en' ? 'English' : 'Spanish'}</h1>
            <h2>Greeting: {localizedString[locale].greeting}</h2>
            <h2>Greeting: {localizedString[locale].welcome}</h2>
            <button onClick={() => handleLocaleChange('en')}>English</button>
            <button onClick={() => handleLocaleChange('es')}>Espanol</button>
        </div>
    )
}

export default TwentySix