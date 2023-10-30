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
       <h1 className="text-5xl font-bold mb-4 animate-bounce">One-prompt golf</h1>
       <p className="mb-8 text-gray-600">landing page prompt on 
          OpenHermes-2-Mistral-7B. Hole in one!
       </p>
    </section>
    
    <section className="py-12">
       <div className="flex flex-wrap justify-center gap-4 md:gap-8 lg:gap-16 xl:gap-20">
          
          <article className="w-full sm:w-1/3 p-4 bg-white rounded-lg shadow-md mb-8 md:mb-0">
             <div className="relative h-56">
                <img src="https://picsum.photos/600/400" alt="Article 1 Image" className="w-full h-full object-cover rounded-t-lg" />
                <div className="absolute inset-0 bg-gray-900 bg-opacity-50 rounded-t-lg"></div>
             </div>
             <div className="p-4">
                <h2 className="text-2xl font-semibold mb-2">Article 1 Title</h2>
                <p className="text-gray-600 mb-8">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet erat vel augue sollicitudin malesuada.</p>
             </div>
          </article>
         
          <article className="w-full sm:w-1/3 p-4 bg-white rounded-lg shadow-md mb-8 md:mb-0">
             <div className="relative h-56">
                <img src="https://picsum.photos/600/400" alt="Article 2 Image" className="w-full h-full object-cover rounded-t-lg" />
                <div className="absolute inset-0 bg-gray-900 bg-opacity-50 rounded-t-lg"></div>
             </div>
             <div className="p-4">
                <h2 className="text-2xl font-semibold mb-2">Article 2 Title</h2>
                <p className="text-gray-600 mb-8">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet erat vel augue sollicitudin malesuada.</p>
             </div>
          </article>
          
          <article className="w-full sm:w-1/3 p-4 bg-white rounded-lg shadow-md">
             <div className="relative h-56">
                <img src="https://picsum.photos/600/400" alt="Article 3 Image" className="w-full h-full object-cover rounded-t-lg" />
                <div className="absolute inset-0 bg-gray-900 bg-opacity-50 rounded-t-lg"></div>
             </div>
             <div className="p-4">
                <h2 className="text-2xl font-semibold mb-2">Article 3 Title</h2>
                <p className="text-gray-600 mb-8">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet erat vel augue sollicitudin malesuada.</p>
             </div>
          </article>
          
          <article className="w-full sm:w-1/3 p-4 bg-white rounded-lg shadow-md">
             <div className="relative h-56">
                <img src="https://picsum.photos/600/400" alt="Article 4 Image" className="w-full h-full object-cover rounded-t-lg" />
                <div className="absolute inset-0 bg-gray-900 bg-opacity-50 rounded-t-lg"></div>
             </div>
             <div className="p-4">
                <h2 className="text-2xl font-semibold mb-2">Article 4 Title</h2>
                <p className="text-gray-600 mb-8">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet erat vel augue sollicitudin malesuada.</p>
             </div>
          </article>
       </div>
    </section>
    
    <section className="py-16 bg-gray-50">
       <div className="flex flex-col items-center justify-center max-w-screen-lg mx-auto p-8 space-y-12 sm:space-y-20 lg:max-w-screen-xl">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Join Us Today</h2>
          <p className="text-xl text-gray-600 max-w-lg">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium.</p>
          <a href="#" className="px-8 py-3 bg-gray-900 text-white font-semibold rounded-lg shadow hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-900 focus:ring-offset-1 focus:ring-offset-gray-800">Get Started</a>
       </div>
    </section>
    
    <section className="py-16 bg-white">
       <h2 className="text-3xl font-bold text-center mb-8">What Our Clients Say</h2>
       <div className="flex flex-wrap justify-center gap-4 md:gap-8 lg:gap-16 xl:gap-20">
          
          <article className="w-full sm:w-1/2 p-4 bg-white rounded-lg shadow-md mb-8 md:mb-0">
             <div className="flex items-center mb-4">
                <img src="https://picsum.photos/50" alt="Profile Picture" className="w-12 h-12 rounded-full object-cover mr-4" />
                <h3 className="text-xl font-semibold mb-2">John Doe</h3>
                <p className="text-gray-600 text-sm">CEO, Example Company</p>
             </div>
             <blockquote className="text-gray-800 max-w-lg mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium.</blockquote>
          </article>
          
          <article className="w-full sm:w-1/2 p-4 bg-white rounded-lg shadow-md">
             <div className="flex items-center mb-4">
                <img src="https://picsum.photos/50" alt="Profile Picture" className="w-12 h-12 rounded-full object-cover mr-4" />
                <h3 className="text-xl font-semibold mb-2">Jane Smith</h3>
                <p className="text-gray-600 text-sm">Marketing Manager, Example Company</p>
             </div>
             <blockquote className="text-gray-800 max-w-lg mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium.</blockquote>
          </article>
       </div>
    </section>
    
    <section className="py-16">
       <h2 className="text-3xl font-bold text-center mb-8">Contact Us</h2>
       <p className="text-gray-600 max-w-lg mx-auto mb-12">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium.</p>
       <form className="max-w-lg mx-auto p-4 bg-white rounded-lg shadow-md">
          <div className="flex flex-wrap -mb-4">
             <div className="w-full mb-4">
                <label className="block text-gray-600 font-semibold" for="name">Name</label>
                <input type="text" id="name" name="name" placeholder="Your Name" className="appearance-none border rounded-lg w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
             </div>
             <div className="w-full mb-4">
                <label className="block text-gray-600 font-semibold" for="email">Email</label>
                <input type="email" id="email" name="email" placeholder="Your Email" className="appearance-none border rounded-lg w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
             </div>
             <div className="w-full mb-4">
                <label className="block text-gray-600 font-semibold" for="message">Message</label>
                <textarea id="message" name="message" placeholder="Your Message" rows="5" className="appearance-none border rounded-lg w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"></textarea>
             </div>
             <div className="w-full mb-4 flex justify-center">
                <button type="submit" className="px-8 py-3 bg-gray-900 text-white font-semibold rounded-lg shadow hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-900 focus:ring-offset-1 focus:ring-offset-gray-800">Send Message</button>
             </div>
          </div>
       </form>
    </section>
 </div>

 <footer className="bg-gray-50 py-16">
    <div className="max-w-screen-lg mx-auto px-4 sm:px-8">
       <div className="flex flex-wrap justify-between mb-8">
         
          <div className="w-full md:w-1/3">
             <a href="#" className="text-2xl font-bold text-gray-800 mb-4">Startup</a>
             <p className="text-gray-600 max-w-lg mb-8">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium.</p>
             <div className="flex space-x-4 mb-8 md:mb-0">
                <a href="#" className="text-gray-600 hover:text-gray-900 transition duration-300 ease-in-out"><span className="sr-only">Social icon:</span> Facebook</a>
                <a href="#" className="text-gray-600 hover:text-gray-900 transition duration-300 ease-in-out"><span className="sr-only">Social icon:</span> Twitter</a>
                <a href="#" className="text-gray-600 hover:text-gray-900 transition duration-300 ease-in-out"><span className="sr-only">Social icon:</span> Instagram</a>
             </div>
          </div>
         
          <div className="w-full md:w-1/3">
             <h2 className="text-xl font-semibold text-gray-800 mb-8">Navigation</h2>
             <nav>
                <ul className="space-y-4 md:space-y-0 md:space-x-4">
                   <li><a href="#" className="text-gray-600 hover:text-gray-900 transition duration-300 ease-in-out">Home</a></li>
                   <li><a href="#" className="text-gray-600 hover:text-gray-900 transition duration-300 ease-in-out">About Us</a></li>
                   <li><a href="#" className="text-gray-600 hover:text-gray-900 transition duration-300 ease-in-out">Services</a></li>
                   <li><a href="#" className="text-gray-600 hover:text-gray-900 transition duration-300 ease-in-out">Contact Us</a></li>
                </ul>
             </nav>
          </div>
         
          <div className="w-full md:w-1/3">
             <h2 className="text-xl font-semibold text-gray-800 mb-4">Contact Us</h2>
             <p className="mb-4">Phone: (555) 123-4567</p>
             <p className="mb-4">Email: info@example.com</p>
             <p className="mb-8"><a href="#" className="text-gray-600 hover:text-gray-900 transition duration-300 ease-in-out">123 Main Street, Anytown USA</a></p>
          </div>
       </div>
    </div>
 </footer>
  </div>
  );
}

export default App;
