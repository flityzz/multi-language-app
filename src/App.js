import { useTranslation } from 'react-i18next'
import { useNavigate, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { BrasilFlag, EuaFlag } from './assets'

import Flag from './components/Flag'
import Translator from './components/Translator'
import Article from './components/Article';

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
    <div className="bg-gray-200 text-gray-800 ">

    <div className='flex items-center justify-end'>
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

    <div className="max-w-screen-lg mx-auto p-4 sm:p-6">
    
    <section className="py-16">
       <h1 className="text-5xl font-bold mb-4 animate-bounce"><Translator path={'home.title'}/></h1>
       <p className="mb-8 text-gray-600"><Translator path={'home.subTitle'}/></p>
    </section>
    
    <section className="py-12">
       <div className="flex flex-wrap justify-center gap-4 md:gap-8 lg:gap-16 xl:gap-20">
          
       {Array(4).fill(<Article />)}
         
       </div>
    </section>
    
    <section className="py-16 bg-gray-50">
       <div className="flex flex-col items-center justify-center max-w-screen-lg mx-auto p-8 space-y-12 sm:space-y-20 lg:max-w-screen-xl">
          <h2 className="text-4xl font-bold text-gray-800 mb-4"><Translator path={'joinUs.title'}/></h2>
          <p className="text-xl text-gray-600 max-w-lg"><Translator path={'joinUs.text'}/></p>
          <p  className="px-8 py-3 bg-gray-900 text-white font-semibold rounded-lg shadow hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-900 focus:ring-offset-1 focus:ring-offset-gray-800"><Translator path={'joinUs.getStarted'}/></p>
       </div>
    </section>
    
      <section className="py-16 bg-white">
        <h2 className="text-3xl font-bold text-center mb-8"><Translator path={'opinions.title'}/></h2>
        <div className="flex flex-wrap justify-center gap-4 md:gap-8 lg:gap-16 xl:gap-20">
            
            <article className="w-full sm:w-1/2 p-4 bg-white rounded-lg shadow-md mb-8 md:mb-0">
              <div className="flex-column items-center mb-4">
                  <img src="https://picsum.photos/50" alt="Profile" className="w-12 h-12 rounded-full object-cover mr-4" />
                  <h3 className="text-xl font-semibold mb-2">John Doe</h3>
                  <p className="text-gray-600 text-sm">CEO, Example Company</p>
              </div>
              <blockquote className="text-gray-800 max-w-lg mb-4"><Translator path={'opinions.text'}/></blockquote>
            </article>
            
            <article className="w-full sm:w-1/2 p-4 bg-white rounded-lg shadow-md">
              <div className="flex-column items-center mb-4">
                  <img src="https://picsum.photos/50" alt="Profile" className="w-12 h-12 rounded-full object-cover mr-4" />
                  <h3 className="text-xl font-semibold mb-2">Jane Smith</h3>
                  <p className="text-gray-600 text-sm">Marketing Manager, Example Company</p>
              </div>
              <blockquote className="text-gray-800 max-w-lg mb-4"><Translator path={'opinions.text'}/></blockquote>
            </article>
        </div>
      </section>
      
      <section className="py-16">
        <h2 className="text-3xl font-bold text-center mb-8"><Translator path={'contactUs.title'}/></h2>
        <p className="text-gray-600 max-w-lg mx-auto mb-12"><Translator path={'contactUs.text'}/></p>
        <form className="max-w-lg mx-auto p-4 bg-white rounded-lg shadow-md">
            <div className="flex flex-wrap -mb-4">
              <div className="w-full mb-4">
                  <label className="block text-gray-600 font-semibold" htmlFor="name"><Translator path={'contactUs.name'}/></label>
                  <input type="text" id="name" name="name" placeholder={<Translator path={'contactUs.namePlaceholder'}/>} className="appearance-none border rounded-lg w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
              </div>
              <div className="w-full mb-4">
                  <label className="block text-gray-600 font-semibold" htmlFor="email"><Translator path={'contactUs.email'}/></label>
                  <input type="email" id="email" name="email" placeholder={<Translator path={'contactUs.emailPlaceholder'}/>} className="appearance-none border rounded-lg w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
              </div>
              <div className="w-full mb-4">
                  <label className="block text-gray-600 font-semibold" htmlFor="message"><Translator path={'contactUs.message'}/></label>
                  <textarea id="message" name="message" placeholder={<Translator path={'contactUs.messagePlaceholder'}/>} rows="5" className="appearance-none border rounded-lg w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"></textarea>
              </div>
              <div className="w-full mb-4 flex justify-center">
                  <button type="submit" className="px-8 py-3 bg-gray-900 text-white font-semibold rounded-lg shadow hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-900 focus:ring-offset-1 focus:ring-offset-gray-800"><Translator path={'contactUs.buttonSendMessage'}/></button>
              </div>
            </div>
        </form>
      </section>
    </div>

    <footer className="bg-gray-50 py-16">
        <div className="max-w-screen-lg mx-auto px-4 sm:px-8">
          <div className="flex flex-wrap justify-between mb-8">
            
              <div className="w-full md:w-1/3">
                <p className="text-2xl font-bold text-gray-800 mb-4">Startup</p>
                <p className="text-gray-600 max-w-lg mb-8"><Translator path={'joinUs.text'}/></p>
                <div className="flex space-x-4 mb-8 md:mb-0">
                    <p className="text-gray-600 hover:text-gray-900 transition duration-300 ease-in-out"><span className="sr-only">Social icon:</span> Facebook</p>
                    <p className="text-gray-600 hover:text-gray-900 transition duration-300 ease-in-out"><span className="sr-only">Social icon:</span> Twitter</p>
                    <p className="text-gray-600 hover:text-gray-900 transition duration-300 ease-in-out"><span className="sr-only">Social icon:</span> Instagram</p>
                </div>
              </div>
            
              <div className="w-full md:w-1/3">
                <h2 className="text-xl font-semibold text-gray-800 mb-4"><Translator path={'contactUs.title'}/></h2>
                <p className="mb-4"><Translator path={'contactUs.phone'}/>: (555) 123-4567</p>
                <p className="mb-4"><Translator path={'contactUs.email'}/>: SHB@SHB.com</p>
                <p className="mb-8 text-gray-600 hover:text-gray-900 transition duration-300 ease-in-out"><Translator path={'contactUs.address'}/></p>
              </div>
          </div>
        </div>
    </footer>
 
  </div>
  );
}

export default App;
