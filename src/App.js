import { useTranslation } from 'react-i18next'
import { useNavigate, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { BrasilFlag, EuaFlag } from './assets'

import Flag from './components/Flag'
import Translator from './components/Translator'

import './app.css'


function App() {
  
  const { i18n } = useTranslation()
  const selectedLanguage = i18n.language

  const navigate = useNavigate();
  const location = useLocation();

  const [selectedFlag, setSelectedFlag] = useState(null);

  useEffect(() => {
    const languageFromPath = location.pathname.slice(1);
    
    if (languageFromPath.toUpperCase() === 'EN-US') {
      setSelectedFlag('en-US');
    } else {
      setSelectedFlag('pt-BR'); 
    }

    
    if (languageFromPath !== selectedLanguage) {
      i18n.changeLanguage(languageFromPath);
    }
  }, [location, i18n, selectedLanguage]);

  return (
    <div className="app">
      <div className="flags-container">
        <Flag
          image={BrasilFlag}
          isSelected={selectedFlag === 'pt-BR'}
          onClick={() => navigate('/pt-BR')}
        />
        <Flag
          image={EuaFlag}
          isSelected={selectedFlag === 'en-US'}
          onClick={() => navigate('/en-US')}
        />
      </div>

      <div className="content">
        <Translator path="home.message" />
      </div>
    </div>
  );
}

export default App;
