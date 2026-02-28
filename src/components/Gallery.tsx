export default function Gallery() {
  return (
    <section id="gallery" className="py-20 bg-gray-900">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-4">
          Galerie
        </h2>
        <p className="text-gray-400 text-center mb-16 max-w-2xl mx-auto">
          Découvrez mon univers professionnel et mes projets en images
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <div className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300">
            <img
              src="/bolt-portfolio/images/Topologie.png"
              alt="Workspace Setup"
              className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
              <p className="text-white font-semibold">Environnement de travail</p>
            </div>
          </div>

          <div className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300">
            <img
              src="/bolt-portfolio/images/topologie_fortinet.png"
              alt="Tech Setup"
              className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
              <p className="text-white font-semibold">Infrastructure technologique</p>
            </div>
          </div>

          <div className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 md:col-span-2 lg:col-span-1">
            <img
              src="https://images.pexels.com/photos/2148222/pexels-photo-2148222.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="Developer Workspace"
              className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
              <p className="text-white font-semibold">Espace de développement</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
