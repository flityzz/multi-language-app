import { useTranslation } from 'react-i18next'
import { BrasilFlag, EuaFlag } from './assets'

import Flag from './components/Flag'
import Translator from './components/Translator'

function App() {

  const { i18n } = useTranslation()
  const selectedLanguage = i18n.language

  function handleChangeLanguage(language) {
    i18n.changeLanguage(language)
  }
  
  return (
    <div className="App">
      <div className="flags-container">
        <Flag
          image={BrasilFlag}
          isSelected={selectedLanguage === 'pt-BR'} 
          onClick={() => handleChangeLanguage('pt-BR')} 
        />
        
        <Flag
          image={EuaFlag}
          isSelected={selectedLanguage === 'en-US'} 
          onClick={() => handleChangeLanguage('en-US')} 
        />
      </div>
      
      <div>
        <Translator path="home.message"/>
      </div>
    </div>
  );
}

export default App;
