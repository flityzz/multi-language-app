import Translator from '../components/Translator'


const Article = () => (
    <article className="w-full sm:w-1/3 p-4 bg-white rounded-lg shadow-md mb-8 md:mb-0">
        <div className="relative h-56">
            <img src="https://picsum.photos/600/400" alt="article" className="w-full h-full object-cover rounded-t-lg" />
            <div className="absolute inset-0 bg-gray-900 bg-opacity-50 rounded-t-lg"></div>
            </div>
            <div className="p-4">
            <h2 className="text-2xl font-semibold mb-2"><Translator path={'article.title'}/></h2>
            <p className="text-gray-600 mb-8"><Translator path={'article.text'}/></p>
        </div>
    </article>
)

export default Article