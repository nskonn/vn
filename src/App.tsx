import { Mail, Send } from 'lucide-react';
import logo from './assets/img/logo.png'

const App = () => {
    return (
        <div className="min-h-screen bg-[#FDFBF7] text-stone-900 font-sans selection:bg-stone-200 flex flex-col items-center justify-center relative p-6 md:p-12">
            {/* Top Left: Logo */}
            <div className="absolute top-6 left-6 md:top-12 md:left-12 flex items-center gap-3">
                <div className="w-12 h-12 flex items-center justify-center text-stone-50">
                    <img src={logo} />
                </div>
                <div className="flex flex-col">
                    <span className="text-lg font-bold tracking-tighter uppercase leading-none">
                        Владислав
                    </span>
                    <span className="text-lg font-bold tracking-tighter uppercase leading-none">
                        Насонов
                    </span>
                </div>
            </div>

            {/* Center Content */}
            <main className="flex flex-col items-center text-center w-full max-w-2xl mt-20 md:mt-0">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tighter leading-[0.9] mb-8 uppercase text-stone-900">
                    Сайт в разработке
                </h1>

                <p className="text-lg md:text-xl text-stone-600 font-serif italic max-w-lg leading-relaxed mb-12 px-4">
                    Архивы проповедей, статьи и информация о событиях будут доступны в ближайшее
                    время.
                </p>

                <div className="flex flex-col gap-6 items-center w-full">
                    <p className="text-xs font-mono uppercase tracking-widest text-stone-400">
                        Связаться со мной
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center w-full sm:w-auto">
                        <a
                            href="https://t.me/exegetik"
                            target="_blank"
                            rel="noreferrer"
                            className="flex items-center justify-center gap-2 px-8 py-4 border border-stone-300 hover:border-stone-900 hover:bg-stone-900 hover:text-white transition-all font-bold text-sm uppercase tracking-widest"
                        >
                            <Send size={18} /> Telegram
                        </a>
                        <a
                            href="mailto:exegetik@gmail.com"
                            className="flex items-center justify-center gap-2 px-8 py-4 border border-stone-300 hover:border-stone-900 hover:bg-stone-900 hover:text-white transition-all font-bold text-sm uppercase tracking-widest"
                        >
                            <Mail size={18} /> Email
                        </a>
                    </div>
                </div>
            </main>

            {/* Bottom Right: Developer Info */}
            <div className="absolute bottom-6 right-6 md:bottom-12 md:right-12 text-right">
                <a
                    href="https://webzella.ru"
                    target="_blank"
                    rel="noreferrer"
                    className="text-stone-400 hover:text-stone-900 text-xs font-mono tracking-widest transition-colors"
                >
                    Разработка: webzella.ru
                </a>
            </div>
        </div>
    );
};

export default App;