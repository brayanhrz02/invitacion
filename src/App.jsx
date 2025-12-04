import { useState, useEffect } from 'react'
import { Cross, Calendar, MapPin, Clock, DollarSign, Star } from 'lucide-react'
import './App.css'

import yasielPhoto from './assets/yasielon2.jpg'

function App() {
    const [isVisible, setIsVisible] = useState(false);
    const [sparkles, setSparkles] = useState([]);
    const [timeLeft, setTimeLeft] = useState({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0
    });

    useEffect(() => {
        // eslint-disable-next-line react-hooks/set-state-in-effect
        setIsVisible(true);
        // Crear estrellas decorativas aleatorias
        const newSparkles = Array.from({ length: 20 }, (_, i) => ({
            id: i,
            left: Math.random() * 100,
            top: Math.random() * 100,
            delay: Math.random() * 2,
            duration: 2 + Math.random() * 2
        }));
        setSparkles(newSparkles);

        // Contador regresivo
        const targetDate = new Date('2025-12-27T14:00:00').getTime();

        const timer = setInterval(() => {
            const now = new Date().getTime();
            const difference = targetDate - now;

            if (difference > 0) {
                setTimeLeft({
                    days: Math.floor(difference / (1000 * 60 * 60 * 24)),
                    hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
                    minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
                    seconds: Math.floor((difference % (1000 * 60)) / 1000)
                });
            } else {
                setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
                clearInterval(timer);
            }
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-900 via-blue-600 to-blue-400 flex items-center justify-center p-4 relative overflow-hidden">
            {/* Estrellas de fondo animadas */}
            {sparkles.map(sparkle => (
                <div
                    key={sparkle.id}
                    className="absolute w-1 h-1 bg-white rounded-full animate-pulse"
                    style={{
                        left: `${sparkle.left}%`,
                        top: `${sparkle.top}%`,
                        animationDelay: `${sparkle.delay}s`,
                        animationDuration: `${sparkle.duration}s`
                    }}
                />
            ))}

            <div
                className={`max-w-3xl w-full bg-white rounded-3xl shadow-2xl overflow-hidden transition-all duration-1000 transform ${
                    isVisible ? 'opacity-100 scale-100 rotate-0' : 'opacity-0 scale-90 rotate-3'
                }`}
                style={{
                    boxShadow: '0 25px 50px -12px rgba(30, 58, 138, 0.5), 0 0 0 8px rgba(30, 58, 138, 0.1)'
                }}
            >
                {/* Borde decorativo superior con patrón charro */}
                <div className="h-4 bg-gradient-to-r from-blue-800 via-blue-600 to-blue-800 relative">
                    <div className="absolute inset-0 flex justify-around items-center">
                        {[...Array(15)].map((_, i) => (
                            <div key={i} className="w-1 h-1 bg-white rounded-full opacity-60"></div>
                        ))}
                    </div>
                </div>

                {/* Sección de foto del bebé */}
                <div className="bg-gradient-to-b from-blue-400 to-blue-300 p-8 flex justify-center">
                    <div className="relative">
                        {/* Marco decorativo */}
                        <div className="absolute -inset-4 bg-white rounded-full opacity-20 blur-xl"></div>
                        <div className="absolute -inset-2 bg-white rounded-full"></div>
                        <div className="absolute -inset-1 bg-gradient-to-br from-blue-300 to-blue-100 rounded-full"></div>

                        {/* Contenedor de la imagen */}
                        <div className="relative w-48 h-48 rounded-full overflow-hidden border-4 border-white shadow-2xl">
                            <img
                                src={yasielPhoto}
                                alt="Yasiel"
                                className="w-full h-full object-cover"
                                onError={(e) => {
                                    e.target.style.display = 'none';
                                    e.target.nextSibling.style.display = 'flex';
                                }}
                            />
                            {/* Placeholder si no hay imagen */}
                            <div className="absolute inset-0 bg-gradient-to-br from-blue-200 to-blue-300 flex items-center justify-center" style={{display: 'none'}}>
                                <span className="text-6xl">👶</span>
                            </div>
                        </div>

                        {/* Decoración de estrellitas alrededor */}
                        <Star className="absolute -top-2 -right-2 w-8 h-8 text-yellow-300 fill-yellow-300 animate-pulse" />
                        <Star className="absolute -bottom-2 -left-2 w-6 h-6 text-yellow-200 fill-yellow-200 animate-pulse" style={{animationDelay: '0.5s'}} />
                    </div>
                </div>

                {/* Header elegante con patrón de bordado */}
                <div className="bg-gradient-to-br from-blue-400 via-blue-300 to-blue-400 p-10 text-center relative overflow-hidden">
                    {/* Patrón de fondo estilo bordado mexicano */}
                    <div className="absolute inset-0 opacity-10">
                        <div className="absolute top-0 left-0 w-full h-full" style={{
                            backgroundImage: `radial-gradient(circle, white 1px, transparent 1px)`,
                            backgroundSize: '30px 30px'
                        }}></div>
                    </div>

                    {/* Decoración de esquinas estilo filigrana */}
                    <div className="absolute top-4 left-4 text-white opacity-30 text-4xl">❋</div>
                    <div className="absolute top-4 right-4 text-white opacity-30 text-4xl">❋</div>
                    <div className="absolute bottom-4 left-4 text-white opacity-30 text-4xl">❋</div>
                    <div className="absolute bottom-4 right-4 text-white opacity-30 text-4xl">❋</div>

                    {/* Botonadura superior estilo charro */}
                    <div className="flex justify-center gap-3 mb-6 relative z-10">
                        {[...Array(7)].map((_, i) => (
                            <div
                                key={i}
                                className="w-4 h-4 rounded-full bg-white border-3 shadow-lg relative"
                                style={{
                                    boxShadow: '0 0 10px rgba(255,255,255,0.5), inset 0 2px 4px rgba(0,0,0,0.2)',
                                    border: '2px solid rgba(191, 219, 254, 0.8)'
                                }}
                            >
                                <div className="absolute inset-0.5 rounded-full bg-gradient-to-br from-blue-100 to-white"></div>
                            </div>
                        ))}
                    </div>

                    {/* Cruz con resplandor */}
                    <div className="relative inline-block mb-5">
                        <div className="absolute inset-0 blur-xl bg-white opacity-40 scale-150"></div>
                        <Cross className="w-20 h-20 mx-auto text-white relative z-10" strokeWidth={1.5} />
                    </div>

                    <h1 className="text-5xl font-serif text-white mb-3 relative z-10 tracking-wide" style={{
                        textShadow: '2px 2px 4px rgba(0,0,0,0.3)'
                    }}>
                        Mi Bautizo
                    </h1>

                    <div className="flex justify-center items-center gap-3 mb-3">
                        <div className="w-16 h-0.5 bg-white rounded-full opacity-70"></div>
                        <Star className="w-5 h-5 text-white fill-white" />
                        <div className="w-16 h-0.5 bg-white rounded-full opacity-70"></div>
                    </div>

                    {/* Botonadura inferior */}
                    <div className="flex justify-center gap-3 mt-6 relative z-10">
                        {[...Array(7)].map((_, i) => (
                            <div
                                key={i}
                                className="w-4 h-4 rounded-full bg-white border-3 shadow-lg relative"
                                style={{
                                    boxShadow: '0 0 10px rgba(255,255,255,0.5), inset 0 2px 4px rgba(0,0,0,0.2)',
                                    border: '2px solid rgba(191, 219, 254, 0.8)'
                                }}
                            >
                                <div className="absolute inset-0.5 rounded-full bg-gradient-to-br from-blue-100 to-white"></div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Contador Regresivo */}
                <div className="bg-gradient-to-r from-blue-300 to-blue-400 py-8 px-6">
                    <h3 className="text-white text-2xl font-serif text-center mb-6">Faltan</h3>
                    <div className="flex justify-center gap-4 flex-wrap">
                        <div className="bg-white rounded-xl p-4 min-w-[80px] shadow-lg">
                            <div className="text-4xl font-bold text-blue-700">{timeLeft.days}</div>
                            <div className="text-sm text-gray-600 uppercase">Días</div>
                        </div>
                        <div className="bg-white rounded-xl p-4 min-w-[80px] shadow-lg">
                            <div className="text-4xl font-bold text-blue-700">{timeLeft.hours}</div>
                            <div className="text-sm text-gray-600 uppercase">Horas</div>
                        </div>
                        <div className="bg-white rounded-xl p-4 min-w-[80px] shadow-lg">
                            <div className="text-4xl font-bold text-blue-700">{timeLeft.minutes}</div>
                            <div className="text-sm text-gray-600 uppercase">Min</div>
                        </div>
                        <div className="bg-white rounded-xl p-4 min-w-[80px] shadow-lg">
                            <div className="text-4xl font-bold text-blue-700">{timeLeft.seconds}</div>
                            <div className="text-sm text-gray-600 uppercase">Seg</div>
                        </div>
                    </div>
                </div>

                {/* Contenido principal con diseño mejorado */}
                <div className="p-10 text-center bg-gradient-to-b from-white to-blue-50">
                    <p className="text-gray-600 text-xl mb-8 font-light tracking-wide">
                        Con mucha alegría te invitamos a celebrar el bautizo de
                    </p>

                    {/* Nombre del bebé con diseño especial */}
                    <div className="relative mb-10">
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-100 to-transparent opacity-30 blur-2xl"></div>
                        <h2 className="text-6xl font-serif text-blue-900 mb-2 relative tracking-wide" style={{
                            textShadow: '0 2px 10px rgba(30, 58, 138, 0.1)'
                        }}>
                            Yasiel Soto Ramirez
                        </h2>
                        <div className="flex justify-center items-center gap-2 mt-4">
                            <div className="w-12 h-0.5 bg-gradient-to-r from-transparent to-blue-400"></div>
                            <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                            <div className="w-24 h-0.5 bg-blue-400"></div>
                            <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                            <div className="w-12 h-0.5 bg-gradient-to-l from-transparent to-blue-400"></div>
                        </div>
                    </div>

                    {/* Padrino con diseño elegante */}
                    <div className="bg-gradient-to-br from-blue-300 to-blue-400 rounded-2xl p-8 mb-8 text-white shadow-xl relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-white opacity-5 rounded-full -mr-16 -mt-16"></div>
                        <div className="absolute bottom-0 left-0 w-32 h-32 bg-white opacity-5 rounded-full -ml-16 -mb-16"></div>
                        <div className="relative z-10">
                            <div className="flex justify-center gap-2 mb-4">
                                {[...Array(5)].map((_, i) => (
                                    <div key={i} className="w-2 h-2 rounded-full bg-white opacity-50"></div>
                                ))}
                            </div>
                            <h3 className="text-2xl font-serif mb-4 tracking-wide">Padrino</h3>
                            <p className="text-xl font-semibold tracking-wide">Joaquín Alvarado Pérez</p>
                            <div className="flex justify-center gap-2 mt-4">
                                {[...Array(5)].map((_, i) => (
                                    <div key={i} className="w-2 h-2 rounded-full bg-white opacity-50"></div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Papás con diseño sofisticado */}
                    <div className="bg-white rounded-2xl p-8 mb-8 border-2 border-blue-200 shadow-lg">
                        <h3 className="text-2xl font-serif text-blue-800 mb-5 tracking-wide">Padres</h3>
                        <div className="space-y-2">
                            <p className="text-xl text-gray-800 font-semibold">Francisco Soto Toro</p>
                            <div className="flex justify-center items-center gap-2">
                                <div className="w-8 h-0.5 bg-blue-300"></div>
                                <span className="text-blue-500 text-2xl">♥</span>
                                <div className="w-8 h-0.5 bg-blue-300"></div>
                            </div>
                            <p className="text-xl text-gray-800 font-semibold">Ana Cristina Ramirez Carrera</p>
                        </div>
                    </div>

                    {/* Detalles del evento con iconos mejorados */}
                    <div className="bg-gradient-to-r from-blue-50 to-white rounded-2xl p-8 mb-8 border-2 border-blue-100 shadow-inner">
                        <div className="space-y-5">
                            <div className="flex items-center justify-center gap-4 text-gray-700 group hover:scale-105 transition-transform">
                                <div className="bg-blue-400 p-3 rounded-full shadow-lg">
                                    <Calendar className="w-6 h-6 text-white" />
                                </div>
                                <span className="text-lg font-semibold">27 de Diciembre de 2025</span>
                            </div>

                            <div className="flex items-center justify-center gap-4 text-gray-700 group hover:scale-105 transition-transform">
                                <div className="bg-blue-400 p-3 rounded-full shadow-lg">
                                    <Clock className="w-6 h-6 text-white" />
                                </div>
                                <span className="text-lg font-semibold">2:00 PM</span>
                            </div>

                            <div className="flex items-start justify-center gap-4 text-gray-700 group hover:scale-105 transition-transform">
                                <div className="bg-blue-400 p-3 rounded-full shadow-lg flex-shrink-0">
                                    <MapPin className="w-6 h-6 text-white" />
                                </div>
                                <div className="text-center">
                                    <p className="text-lg font-semibold text-blue-800">Lugar Loma de Guadalupe Yanga </p>
                                    <p className="text-sm text-gray-600 mt-1">frente al campo deportivo</p>
                                </div>
                            </div>

                            {/* Mapa de Google Maps */}
                            <div className="mt-6 rounded-xl overflow-hidden shadow-lg border-2 border-blue-200">
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!4v1764648964728!6m8!1m7!1sdnNicSeoIhCzs0EitiqCnA!2m2!1d18.81233985106054!2d-96.82187684447186!3f197.3032516944697!4f-9.839075451013372!5f0.7820865974627469"
                                    width="100%"
                                    height="300"
                                    style={{ border: 0 }}
                                    allowFullScreen=""
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                    className="w-full"
                                ></iframe>
                            </div>
                        </div>
                    </div>

                    {/* Lluvia de sobres con diseño premium */}
                    <div className="relative bg-gradient-to-br from-blue-400 via-blue-300 to-blue-400 rounded-2xl p-8 mb-8 text-white shadow-2xl overflow-hidden">
                        <div className="absolute top-0 left-0 w-full h-full opacity-10">
                            <div className="absolute top-4 left-4 text-6xl">💰</div>
                            <div className="absolute bottom-4 right-4 text-6xl">💰</div>
                            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-8xl opacity-5">💵</div>
                        </div>
                        <div className="relative z-10">
                            <div className="flex items-center justify-center gap-4 mb-4">

                                <h3 className="text-3xl font-serif tracking-wide">✉ Lluvia de Sobres ✉</h3>
                            </div>
                            <div className="w-32 h-1 bg-white mx-auto rounded-full mb-4 opacity-50"></div>
                            <p className="text-lg text-blue-50 leading-relaxed max-w-xl mx-auto">
                                Tu presencia es nuestro mayor regalo, pero si deseas bendecir a nuestro pequeño con un regalo, puedes hacerlo dentro de un sobre
                            </p>
                        </div>
                    </div>

                    {/* Mensaje final elegante */}
                    <div className="mb-8">
                        <div className="flex justify-center items-center gap-3 mb-3">
                            <div className="w-16 h-0.5 bg-gradient-to-r from-transparent to-blue-300"></div>
                            <Star className="w-4 h-4 text-blue-500 fill-blue-500" />
                            <div className="w-16 h-0.5 bg-gradient-to-l from-transparent to-blue-300"></div>
                        </div>
                        <p className="text-gray-600 italic text-xl font-light">
                            ¡Acompáñanos con tu mejor toque vaquero!🤠
                        </p>
                        <div className="flex justify-center items-center gap-3 mt-3">
                            <div className="w-16 h-0.5 bg-gradient-to-r from-transparent to-blue-300"></div>
                            <Star className="w-4 h-4 text-blue-500 fill-blue-500" />
                            <div className="w-16 h-0.5 bg-gradient-to-l from-transparent to-blue-300"></div>
                        </div>
                    </div>

                    {/* Confirmación con diseño especial */}
                    <div className="bg-white rounded-2xl p-6 border-2 border-blue-200 shadow-lg">
                        <p className="text-sm text-gray-600 mb-3 uppercase tracking-wider">Confirma tu asistencia</p>
                        <a
                            href="https://wa.me/+12029755683?text=Confirmo%20asistencia%20al%20bautizo%20de%20Yasiel"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center justify-center gap-2 hover:scale-105 transition-transform cursor-pointer"
                        >
                            <span className="text-3xl">📱</span>
                            <p className="text-2xl text-blue-700 font-bold tracking-wide hover:text-blue-800">
                                Presiona para confirmar
                            </p>
                        </a>
                    </div>
                </div>

                {/* Footer decorativo mejorado */}
                <div className="bg-gradient-to-r from-blue-800 via-blue-600 to-blue-800 py-4 relative overflow-hidden">
                    <div className="absolute inset-0 opacity-20" style={{
                        backgroundImage: `repeating-linear-gradient(90deg, transparent, transparent 10px, white 10px, white 11px)`
                    }}></div>
                    <div className="flex justify-center gap-4 relative z-10">
                        {[...Array(9)].map((_, i) => (
                            <div
                                key={i}
                                className="w-5 h-5 rounded-full bg-white shadow-lg relative"
                                style={{
                                    boxShadow: '0 0 15px rgba(255,255,255,0.6), inset 0 2px 4px rgba(0,0,0,0.2)',
                                    border: '2px solid rgba(191, 219, 254, 0.8)'
                                }}
                            >
                                <div className="absolute inset-0.5 rounded-full bg-gradient-to-br from-blue-100 to-white"></div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Borde decorativo inferior */}
                <div className="h-4 bg-gradient-to-r from-blue-800 via-blue-600 to-blue-800 relative">
                    <div className="absolute inset-0 flex justify-around items-center">
                        {[...Array(15)].map((_, i) => (
                            <div key={i} className="w-1 h-1 bg-white rounded-full opacity-60"></div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App
