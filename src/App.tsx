import React, { useState, useEffect } from 'react';
import {
    Book,
    Mic,
    PenTool,
    Layout,
    ArrowUpRight,
    Mail,
    Instagram,
    Youtube,
    Menu,
    X,
    ChevronRight,
    User,
    Send,
    Play,
    Pause,
    Volume2,
    ArrowLeft,
    Share2,
    ChevronLeft,
    MapPin,
    Calendar,
    Clock,
    Download,
} from 'lucide-react';
import zeroImg from './assets/img/vn-zero.jpg'
import life1 from './assets/img/vn-lifq-1.jpg'
import life2 from './assets/img/vn-life-2.jpg'

const Portfolio = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [playingSermon, setPlayingSermon] = useState<number | null>(null);
    const [activeArticle, setActiveArticle] = useState<any | null>(null);
    const [activeEvent, setActiveEvent] = useState<any | null>(null);
    const [currentAboutSlide, setCurrentAboutSlide] = useState(0);

    // Handle scroll for navbar styling
    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Scroll to top when opening an article or event
    useEffect(() => {
        if (activeArticle || activeEvent) {
            window.scrollTo(0, 0);
        }
    }, [activeArticle, activeEvent]);

    const toggleSermon = (id: number) => {
        if (playingSermon === id) {
            setPlayingSermon(null);
        } else {
            setPlayingSermon(id);
        }
    };

    const navigation = [
        { name: 'Обо мне', href: '#about' },
        { name: 'События', href: '#events' },
        { name: 'Книги', href: '#books' },
        { name: 'Проповеди', href: '#sermons' },
        { name: 'Публикации', href: '#publications' },
        { name: 'Контакты', href: '#contact' },
    ];

    // Footer grouped navigation
    const navMain = [
        { name: 'Обо мне', href: '#about' },
        { name: 'События', href: '#events' },
        { name: 'Контакты', href: '#contact' },
    ];

    const navResources = [
        { name: 'Книги', href: '#books' },
        { name: 'Проповеди', href: '#sermons' },
        { name: 'Публикации', href: '#publications' },
    ];

    // Mock Data
    const experience = [
        { year: '2015 — н.в.', role: 'Пастор', place: 'Церковь «Свет Мира»' },
        { year: '2010 — 2015', role: 'Лидер молодежного служения', place: 'Объединение церквей' },
        { year: '2008 — 2012', role: 'Магистр Богословия', place: 'Семинария' },
    ];

    const interests = [
        'Горный туризм',
        'Пленочная фотография',
        'История искусства',
        'Классическая музыка',
    ];

    const aboutSlides = [
        {
            url: life2,
            label: 'Портрет',
            sub: 'Фото из личного архива',
        },
        {
            url: life1,
            label: 'Семья',
            sub: 'Главная ценность',
        },
        {
            url: zeroImg,
            label: 'Путешествия',
            sub: 'Вдохновение природой',
        },
    ];

    const nextAboutSlide = () => {
        setCurrentAboutSlide(prev => (prev + 1) % aboutSlides.length);
    };

    const prevAboutSlide = () => {
        setCurrentAboutSlide(prev => (prev - 1 + aboutSlides.length) % aboutSlides.length);
    };

    // --- EVENTS DATA ---
    const events = [
        {
            id: 1,
            title: 'Семейный лагерь «Светлая юность»',
            location: 'Краснодарский край',
            date: 'Июль 2023',
            tag: 'Лагерь',
            image: 'https://images.unsplash.com/photo-1478131143081-80f7f84ca84d?q=80&w=2670&auto=format&fit=crop',
            content: [
                'Лето 2023 года запомнится нам надолго. Семейный лагерь «Светлая юность» собрал более 150 участников из разных уголков страны. Это было время глубокого погружения в Слово, искреннего общения и восстановления семейных связей.',
                'Каждое утро начиналось с общей молитвы и размышления над Писанием. Мы говорили о том, как строить крепкие отношения в браке, как воспитывать детей в вере и как сохранять мир в сердце посреди жизненных бурь.',
                'Особенным моментом стали вечерние костры. Под звездным небом звучали песни прославления, свидетельства и простые, но важные разговоры. Многие семьи свидетельствовали о том, что этот лагерь стал для них новым началом.',
                'Мы благодарны Богу за каждого участника, за команду служителей и за ту атмосферу любви и принятия, которую удалось создать. Ждем встречи в следующем году!',
            ],
        },
        {
            id: 2,
            title: 'Семинар «Основы душепопечения»',
            location: 'г. Белореченск',
            date: 'Май 2023',
            tag: 'Семинар',
            image: 'https://images.unsplash.com/photo-1544531586-fde5298cdd40?q=80&w=2670&auto=format&fit=crop',
            content: [
                'В Белореченске прошел двухдневный семинар, посвященный вопросам душепопечения в современной церкви. Более 50 служителей собрались, чтобы обсудить актуальные проблемы и найти библейские ответы на вызовы времени.',
                'Основной темой стала помощь людям, переживающим кризис и утрату. Мы разбирали библейские примеры утешения, учились слушать и слышать боль ближнего, не давая поспешных советов.',
                'Семинар включал в себя не только лекции, но и практические занятия в малых группах. Участники могли поделиться своим опытом, задать сложные вопросы и помолиться друг за друга.',
                'Важно помнить, что душепопечение — это не просто техника консультирования, это проявление Христовой любви к израненным сердцам.',
            ],
        },
        {
            id: 3,
            title: 'Миссионерская поездка',
            location: 'г. Казань',
            date: 'Март 2023',
            tag: 'Командировка',
            image: 'https://images.unsplash.com/photo-1565516706915-0552528178df?q=80&w=2574&auto=format&fit=crop',
            content: [
                'Поездка в Казань стала важным этапом в нашем служении. Этот город с богатой историей и культурой встретил нас своим гостеприимством и открытостью к диалогу.',
                'Мы провели ряд встреч с местными общинами, участвовали в межконфессиональных диалогах и делились опытом социального служения. Было удивительно видеть, как Бог действует в сердцах людей, независимо от культурных различий.',
                'Особое впечатление произвела архитектура города и сочетание традиций. Это напомнило нам о том, что Евангелие — это весть для всех народов и культур.',
                'Мы вернулись домой вдохновленными и полными новых идей для развития нашего служения.',
            ],
        },
        {
            id: 4,
            title: 'Рождественский благотворительный вечер',
            location: 'Церковь «Свет Мира»',
            date: 'Январь 2023',
            tag: 'Праздник',
            image: 'https://images.unsplash.com/photo-1511268594014-0e9d3451cf0f?q=80&w=2670&auto=format&fit=crop',
            content: [
                'Рождество — это время дарить надежду. В этом году мы организовали благотворительный вечер для семей, оказавшихся в трудной жизненной ситуации.',
                'Гости смогли насладиться прекрасным концертом классической музыки, теплой атмосферой и вкусным ужином. Но самое главное — каждый ребенок получил подарок, а родители — продуктовую помощь и слова поддержки.',
                'Мы верим, что такие события не только приносят радость, но и свидетельствуют о Божьей любви на деле. Спасибо всем волонтерам и жертвователям, которые сделали этот праздник возможным!',
                'Пусть свет Рождества сияет в наших сердцах круглый год.',
            ],
        },
    ];

    const books = [
        {
            id: 1,
            title: 'Путь к Тишине',
            subtitle: 'Размышления о молитве в современном мире',
            year: '2023',
            coverColor: 'bg-stone-800',
        },
        {
            id: 2,
            title: 'Основание Веры',
            subtitle: 'Апологетика для начинающих',
            year: '2021',
            coverColor: 'bg-stone-600',
        },
    ];

    const sermons = [
        {
            id: 1,
            date: '15 Окт 2023',
            title: 'Сила смирения',
            scripture: 'Иакова 4:6',
            duration: '45:00',
        },
        {
            id: 2,
            date: '08 Окт 2023',
            title: 'Как слышать голос Бога',
            scripture: 'Иоанна 10:27',
            duration: '38:20',
        },
        {
            id: 3,
            date: '01 Окт 2023',
            title: 'Любовь, изгоняющая страх',
            scripture: '1 Иоанна 4:18',
            duration: '52:15',
        },
    ];

    const publications = [
        {
            id: 1,
            title: 'Роль церкви в эпоху цифровых технологий',
            tags: ['#Технологии', '#Церковь'],
            date: 'Сентябрь 2023',
            content: [
                'Мир стремительно меняется. Технологии проникают во все сферы нашей жизни, и церковь не является исключением. Сегодня мы стоим перед вызовом: как сохранить вечные истины в эпоху цифры, когда внимание человека рассеяно тысячами уведомлений?',
                'Цифровое пространство — это новый ареопаг. Подобно апостолу Павлу, проповедовавшему в Афинах, мы призваны нести Слово туда, где находятся люди. Социальные сети, подкасты, онлайн-трансляции — это не просто инструменты маркетинга, это кафедры XXI века.',
                'Однако опасность заключается в подмене реального общения виртуальным. Экран никогда не заменит теплоты рукопожатия, совместного преломления хлеба и общей молитвы. Технологии должны служить мостом к живому общению, а не его заменой.',
                'Важно помнить, что алгоритмы соцсетей настроены на удержание внимания, часто через провокацию эмоций. Христианский контент должен отличаться: не хайп, но глубина; не спор, но диалог; не осуждение, но любовь. Наша задача — создавать островки тишины и смысла в океане информационного шума.',
            ],
        },
        {
            id: 2,
            title: 'Этика труда: библейский взгляд',
            tags: ['#Работа', '#Призвание'],
            date: 'Август 2023',
            content: [
                'Работа — это не проклятие, а благословение. Еще в Эдемском саду человеку было поручено возделывать и хранить его. Труд — это способ, которым мы подражаем Творцу, продолжая Его дело созидания в этом мире.',
                'Библейская этика труда строится на принципе «Coram Deo» — жизни перед лицом Бога. Это значит, что качество нашей работы не зависит от того, видит ли нас начальник. Мы работаем для Господа.',
                'Современная культура часто колеблется между двумя крайностями: трудоголизмом, где карьера становится идолом, и леностью, где работа воспринимается как неизбежное зло. Писание предлагает третий путь: усердный труд, соединенный с регулярным отдыхом (шаббатом).',
                'Отдых — это акт доверия. Останавливаясь, мы признаем, что мир не рухнет без наших усилий, потому что его держит Бог. Это освобождает нас от тревоги и позволяет трудиться с радостью, а не из страха.',
            ],
        },
        {
            id: 3,
            title: 'Воспитание детей в вере',
            tags: ['#Семья', '#Дети'],
            date: 'Июль 2023',
            content: [
                'Самая важная проповедь, которую услышат наши дети, — это наша жизнь. Слова назидают, но примеры влекут. Если мы говорим о любви Бога, но в доме царит атмосфера раздражения, наши слова теряют силу.',
                'Передача веры — это не загрузка информации, а зажжение огня. Это происходит в повседневности: в разговорах за ужином, в совместном чтении, в том, как мы реагируем на трудности и ошибки.',
                'Не бойтесь детских вопросов. Сомнения подростка — это признак того, что его вера становится личной, а не просто унаследованной. Наша задача — быть рядом, слушать и направлять, а не навязывать готовые ответы.',
                'Молитва за детей — это труд, который приносит плод в вечности. Как говорила мать блаженного Августина: «Сын таких слез не может погибнуть».',
            ],
        },
        {
            id: 4,
            title: 'Одиночество в большом городе',
            tags: ['#Город', '#Общество'],
            date: 'Июнь 2023',
            content: [
                'Мегаполис — парадоксальное место. Ты окружен миллионами людей, но можешь чувствовать себя совершенно одиноким. Это экзистенциальное одиночество знакомо многим современным жителям.',
                'Церковь призвана быть ответом на этот вызов. Она должна быть не просто местом воскресных собраний, но настоящей семьей, где каждый замечен и принят. Малые группы, домашние общения — это кровеносная система церковного организма.',
                'Однако важно различать изоляцию и уединение. Иисус часто уходил в пустынные места для молитвы. Нам тоже нужно учиться практике тишины, чтобы в шуме города слышать тихий голос Бога.',
                'Преодоление одиночества начинается с шага навстречу другому. Иногда достаточно простого вопроса «Как дела?», чтобы разрушить стену отчуждения и подарить надежду.',
            ],
        },
        {
            id: 5,
            title: 'Искусство прощать',
            tags: ['#Духовность', '#Отношения'],
            date: 'Май 2023',
            content: [
                'Прощение — это, пожалуй, одна из самых сложных заповедей. Когда нас ранят, естественная реакция — защититься или отомстить. Но Евангелие предлагает радикально иной путь.',
                'Простить — не значит забыть или оправдать зло. Это значит отпустить узника, и вдруг обнаружить, что этим узником был ты сам. Непрощение — это яд, который мы пьем в надежде, что умрет другой.',
                'Клайв Льюис писал: «Все говорят, что прощение — прекрасная идея, пока им самим не приходится кого-то прощать». Это труд души, часто долгий и болезненный, но он ведет к истинной свободе.',
                'Мы способны прощать только потому, что сами прощены. Крест Христа — это источник силы, позволяющий разорвать порочный круг обид и восстановить разрушенные отношения.',
            ],
        },
        {
            id: 6,
            title: 'Библия и культура: точки соприкосновения',
            tags: ['#Культура', '#Искусство'],
            date: 'Апрель 2023',
            content: [
                'Часто верующие воспринимают светскую культуру враждебно, уходя в «духовное гетто». Однако история показывает, что христианство всегда находилось в диалоге с культурой своего времени.',
                'Искусство, литература, кино — все это отражает тоску человека по смыслу, красоте и искуплению. В лучших произведениях культуры мы можем увидеть отблески Божьей истины, «семена Слова», как говорили ранние отцы церкви.',
                'Наша задача — не отвергать культуру огульно, но научиться смотреть на нее через призму Евангелия. Мы можем находить точки соприкосновения, чтобы говорить с современниками на понятном им языке.',
                'Как апостол Павел цитировал греческих поэтов в Афинах, так и мы можем использовать образы современной культуры, чтобы указывать на Того, Кто является источником всякой подлинной красоты.',
            ],
        },
        {
            id: 7,
            title: 'Лидерство как служение',
            tags: ['#Служение', '#Лидерство'],
            date: 'Март 2023',
            content: [
                'Мирское понимание лидерства часто связано с властью, статусом и контролем. Библейская модель переворачивает эту пирамиду: «Кто хочет быть первым, будь всем слугой».',
                'Истинный лидер — это не тот, кто стоит на вершине и раздает приказы, а тот, кто, подобно Христу, берет полотенце и умывает ноги другим. Это лидерство, основанное на смирении и жертвенности.',
                'Служащее лидерство не означает слабость. Напротив, требуется огромная внутренняя сила, чтобы поставить интересы других выше своих собственных и вести людей не принуждением, а примером.',
                'В церкви, семье или бизнесе — принцип остается тем же. Мы призваны созидать людей, помогать им раскрывать свой потенциал и направлять их к общей цели во славу Божью.',
            ],
        },
    ];

    // --- Article View Component ---
    if (activeArticle) {
        return (
            <div className="min-h-screen bg-[#FDFBF7] text-stone-900 font-sans selection:bg-stone-200 animate-in fade-in duration-300">
                <nav className="fixed w-full z-50 bg-[#FDFBF7]/90 backdrop-blur-md border-b border-stone-200 py-4">
                    <div className="container mx-auto px-6 flex justify-between items-center">
                        <button
                            onClick={() => setActiveArticle(null)}
                            className="group flex items-center gap-2 text-stone-600 hover:text-stone-900 transition-colors"
                        >
                            <ArrowLeft
                                size={20}
                                className="group-hover:-translate-x-1 transition-transform"
                            />
                            <span className="text-sm font-bold uppercase tracking-widest">
                                Назад к списку
                            </span>
                        </button>
                        <div className="hidden md:flex items-center gap-2 opacity-50">
                            <svg
                                width="20"
                                height="20"
                                viewBox="0 0 24 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                                className="stroke-current stroke-[2]"
                            >
                                <path
                                    d="M3 7L8 20L13 7"
                                    strokeLinecap="square"
                                    strokeLinejoin="bevel"
                                />
                                <path
                                    d="M16 20V7L22 20V7"
                                    strokeLinecap="square"
                                    strokeLinejoin="bevel"
                                />
                            </svg>
                        </div>
                    </div>
                </nav>
                <article className="pt-32 pb-24 px-6">
                    <div className="container mx-auto max-w-3xl">
                        <header className="mb-12 md:mb-16 text-center">
                            <div className="flex items-center justify-center gap-4 text-xs font-mono uppercase tracking-widest text-stone-500 mb-6">
                                <span>{activeArticle.date}</span>
                                {activeArticle.tags && (
                                    <>
                                        <span className="w-1 h-1 bg-stone-400 rounded-full"></span>
                                        <div className="flex gap-2">
                                            {activeArticle.tags.map((tag: string, i: number) => (
                                                <span key={i}>{tag}</span>
                                            ))}
                                        </div>
                                    </>
                                )}
                            </div>
                            <h1 className="text-3xl md:text-5xl font-bold leading-tight mb-8">
                                {activeArticle.title}
                            </h1>
                            <div className="w-16 h-1 bg-stone-900 mx-auto"></div>
                        </header>
                        <div className="prose prose-stone prose-lg md:prose-xl mx-auto">
                            {activeArticle.content &&
                                activeArticle.content.map((paragraph: string, idx: number) => (
                                    <p
                                        key={idx}
                                        className={`text-stone-800 font-serif leading-loose mb-6 ${idx === 0 ? 'first-letter:text-5xl first-letter:font-bold first-letter:text-stone-900 first-letter:mr-3 first-letter:float-left' : ''}`}
                                    >
                                        {paragraph}
                                    </p>
                                ))}
                        </div>
                        <div className="mt-16 pt-8 border-t border-stone-200 flex justify-between items-center">
                            <div className="flex gap-4">
                                <button className="flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-stone-500 hover:text-stone-900 transition-colors">
                                    <Share2 size={18} />
                                    Поделиться
                                </button>
                            </div>
                            <div className="text-right">
                                <p className="text-xs font-mono text-stone-400 mb-1">Автор</p>
                                <p className="font-bold">Владислав Насонов</p>
                            </div>
                        </div>
                        <div
                            className="mt-20 bg-stone-100 p-8 md:p-12 text-center hover:bg-stone-200 transition-colors cursor-pointer"
                            onClick={() => {
                                const currentIndex = publications.findIndex(
                                    p => p.id === activeArticle.id,
                                );
                                const nextArticle =
                                    publications[(currentIndex + 1) % publications.length];
                                setActiveArticle(nextArticle);
                                window.scrollTo(0, 0);
                            }}
                        >
                            <p className="text-xs font-mono uppercase tracking-widest text-stone-500 mb-2">
                                Читать далее
                            </p>
                            <h3 className="text-2xl font-bold">
                                {
                                    publications[
                                        (publications.findIndex(p => p.id === activeArticle.id) +
                                            1) %
                                            publications.length
                                    ].title
                                }
                            </h3>
                        </div>
                    </div>
                </article>
            </div>
        );
    }

    // --- Event View Component ---
    if (activeEvent) {
        return (
            <div className="min-h-screen bg-[#FDFBF7] text-stone-900 font-sans selection:bg-stone-200 animate-in fade-in duration-300">
                {/* Nav for Event Mode */}
                <nav className="fixed w-full z-50 bg-[#FDFBF7]/90 backdrop-blur-md border-b border-stone-200 py-4">
                    <div className="container mx-auto px-6 flex justify-between items-center">
                        <button
                            onClick={() => setActiveEvent(null)}
                            className="group flex items-center gap-2 text-stone-600 hover:text-stone-900 transition-colors"
                        >
                            <ArrowLeft
                                size={20}
                                className="group-hover:-translate-x-1 transition-transform"
                            />
                            <span className="text-sm font-bold uppercase tracking-widest">
                                Назад к событиям
                            </span>
                        </button>
                        <div className="hidden md:flex items-center gap-2 opacity-50">
                            <svg
                                width="20"
                                height="20"
                                viewBox="0 0 24 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                                className="stroke-current stroke-[2]"
                            >
                                <path
                                    d="M3 7L8 20L13 7"
                                    strokeLinecap="square"
                                    strokeLinejoin="bevel"
                                />
                                <path
                                    d="M16 20V7L22 20V7"
                                    strokeLinecap="square"
                                    strokeLinejoin="bevel"
                                />
                            </svg>
                        </div>
                    </div>
                </nav>

                <article className="pt-24 pb-24">
                    <div className="container mx-auto px-6 max-w-5xl">
                        {/* Header Info */}
                        <div className="mb-10 text-center max-w-3xl mx-auto">
                            <div className="flex flex-wrap items-center justify-center gap-4 text-xs font-mono uppercase tracking-widest text-stone-500 mb-6">
                                <span className="bg-stone-100 px-2 py-1 rounded text-stone-900">
                                    {activeEvent.tag}
                                </span>
                                <span className="flex items-center gap-1">
                                    <Calendar size={12} /> {activeEvent.date}
                                </span>
                                <span className="flex items-center gap-1">
                                    <MapPin size={12} /> {activeEvent.location}
                                </span>
                            </div>
                            <h1 className="text-3xl md:text-5xl lg:text-6xl font-black uppercase tracking-tight leading-none mb-6">
                                {activeEvent.title}
                            </h1>
                        </div>

                        {/* Hero Image */}
                        <div className="mb-16 aspect-[21/9] w-full bg-stone-200 overflow-hidden relative">
                            <img
                                src={activeEvent.image}
                                alt={activeEvent.title}
                                className="w-full h-full object-cover"
                            />
                        </div>

                        {/* Content Body */}
                        <div className="max-w-3xl mx-auto">
                            <div className="prose prose-stone prose-lg md:prose-xl mx-auto">
                                {activeEvent.content &&
                                    activeEvent.content.map((paragraph: string, idx: number) => (
                                        <p
                                            key={idx}
                                            className="text-stone-800 font-serif leading-loose mb-6"
                                        >
                                            {paragraph}
                                        </p>
                                    ))}
                            </div>

                            {/* Meta Footer */}
                            <div className="mt-16 pt-8 border-t border-stone-200 flex justify-between items-center">
                                <div className="flex gap-4">
                                    <button className="flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-stone-500 hover:text-stone-900 transition-colors">
                                        <Share2 size={18} />
                                        Поделиться
                                    </button>
                                </div>
                            </div>
                        </div>

                        {/* Next Event */}
                        <div className="mt-20 border-t border-stone-200 pt-12">
                            <p className="text-center text-xs font-mono uppercase tracking-widest text-stone-400 mb-8">
                                Следующее событие
                            </p>
                            <div
                                className="max-w-3xl mx-auto bg-stone-50 hover:bg-stone-100 transition-colors cursor-pointer group p-8 md:p-12 flex flex-col md:flex-row gap-8 items-center"
                                onClick={() => {
                                    const currentIndex = events.findIndex(
                                        e => e.id === activeEvent.id,
                                    );
                                    const nextEvent = events[(currentIndex + 1) % events.length];
                                    setActiveEvent(nextEvent);
                                    window.scrollTo(0, 0);
                                }}
                            >
                                <div className="w-full md:w-48 aspect-[4/3] bg-stone-300 shrink-0 overflow-hidden">
                                    <img
                                        src={
                                            events[
                                                (events.findIndex(e => e.id === activeEvent.id) +
                                                    1) %
                                                    events.length
                                            ].image
                                        }
                                        className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all"
                                        alt="Next event"
                                    />
                                </div>
                                <div className="text-center md:text-left">
                                    <h3 className="text-2xl font-bold mb-2 group-hover:underline decoration-2 underline-offset-4 decoration-stone-300">
                                        {
                                            events[
                                                (events.findIndex(e => e.id === activeEvent.id) +
                                                    1) %
                                                    events.length
                                            ].title
                                        }
                                    </h3>
                                    <p className="text-stone-500 font-mono text-xs uppercase tracking-widest">
                                        {
                                            events[
                                                (events.findIndex(e => e.id === activeEvent.id) +
                                                    1) %
                                                    events.length
                                            ].date
                                        }
                                    </p>
                                </div>
                                <div className="hidden md:block ml-auto">
                                    <ChevronRight className="text-stone-400 group-hover:text-stone-900 transition-colors" />
                                </div>
                            </div>
                        </div>
                    </div>
                </article>
            </div>
        );
    }

    // --- Main Site Render ---
    return (
        <div className="min-h-screen bg-[#FDFBF7] text-stone-900 font-sans selection:bg-stone-200">
            {/* Navigation */}
            <nav
                className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-[#FDFBF7]/90 backdrop-blur-md py-4 border-b border-stone-200' : 'bg-transparent py-8'}`}
            >
                <div className="container mx-auto px-6 flex justify-between items-center">
                    {/* LOGO BLOCK */}
                    <a href="#" className="flex items-center gap-3 group">
                        <div className="w-10 h-10 border-2 border-stone-900 flex items-center justify-center relative bg-stone-900 text-stone-50 group-hover:bg-transparent group-hover:text-stone-900 transition-colors">
                            {/* VN Monogram SVG - Side by Side */}
                            <svg
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                                className="stroke-current stroke-[2]"
                            >
                                {/* V */}
                                <path
                                    d="M3 7L8 20L13 7"
                                    strokeLinecap="square"
                                    strokeLinejoin="bevel"
                                />
                                {/* N */}
                                <path
                                    d="M16 20V7L22 20V7"
                                    strokeLinecap="square"
                                    strokeLinejoin="bevel"
                                />
                            </svg>
                        </div>
                        <div className="flex flex-col">
                            <span className="text-lg font-bold tracking-tighter uppercase leading-none">
                                Владислав
                            </span>
                            <span className="text-lg font-bold tracking-tighter uppercase leading-none">
                                Насонов
                            </span>
                        </div>
                    </a>

                    <div className="hidden md:flex space-x-8">
                        {navigation.map(item => (
                            <a
                                key={item.name}
                                href={item.href}
                                className="text-sm uppercase tracking-widest hover:opacity-50 transition-opacity"
                            >
                                {item.name}
                            </a>
                        ))}
                    </div>

                    <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                        {isMenuOpen ? <X /> : <Menu />}
                    </button>
                </div>

                {/* Mobile Menu */}
                {isMenuOpen && (
                    <div className="absolute top-full left-0 w-full bg-[#FDFBF7] border-b border-stone-200 p-6 md:hidden flex flex-col space-y-4">
                        {navigation.map(item => (
                            <a
                                key={item.name}
                                href={item.href}
                                className="text-lg font-medium"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                {item.name}
                            </a>
                        ))}
                    </div>
                )}
            </nav>

            {/* Hero Section */}
            <header className="relative pt-24 md:pt-32 border-b border-stone-200 bg-[#FDFBF7]">
                <div className="container mx-auto px-6 h-full">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 min-h-[85vh] items-center pb-20 md:pb-32">
                        {/* Left Content */}
                        <div className="flex flex-col justify-center relative z-10 pt-10 md:pt-0">
                            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter leading-[0.9] mb-8 uppercase text-stone-900">
                                Вера.
                                <br />
                                Служение.
                                <br />
                                Наследие.
                            </h1>
                            <p className="text-lg md:text-xl text-stone-600 font-light max-w-lg leading-relaxed mb-8">
                                Личный сайт Владислава Насонова. <br />
                                Проекты, направленные на созидание общества и проповедь Евангелия.
                            </p>

                            <div className="flex items-center gap-4">
                                <a
                                    href="#events"
                                    className="px-8 py-3 bg-stone-900 text-stone-50 font-bold uppercase tracking-widest text-xs hover:bg-stone-700 transition-colors"
                                >
                                    Смотреть события
                                </a>
                            </div>
                        </div>

                        {/* Right Image */}
                        <div className="relative h-[50vh] md:h-full w-full">
                            <div className="absolute inset-0 w-full h-full bg-stone-200">
                                <img
                                    src={zeroImg}
                                    alt="Свет и тень"
                                    className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000 ease-in-out"
                                />
                                {/* Decorative Frame */}
                                <div className="absolute inset-4 border border-white/20 pointer-events-none"></div>
                            </div>

                            {/* Floating Badge */}
                            <div className="absolute -bottom-6 -left-6 bg-stone-900 text-stone-50 p-6 hidden md:block z-20">
                                <p className="text-xs font-mono uppercase tracking-widest opacity-60 mb-1">
                                    Обновлено
                                </p>
                                <p className="text-xl font-bold">Февраль 2026</p>
                            </div>
                        </div>
                    </div>
                </div>
            </header>

            {/* About Section */}
            <section id="about" className="border-b border-stone-200">
                <div className="container mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-12">
                        <div className="md:col-span-3 p-6 md:p-12 border-b md:border-b-0 md:border-r border-stone-200">
                            <div className="sticky top-32">
                                <span className="flex items-center gap-2 text-stone-400 mb-4">
                                    <User size={20} />
                                    <span className="text-xs font-mono uppercase tracking-widest">
                                        Раздел 01
                                    </span>
                                </span>
                                <h2 className="text-4xl font-bold uppercase tracking-tight">
                                    Обо мне
                                </h2>
                            </div>
                        </div>
                        <div className="md:col-span-9 p-6 md:p-12">
                            <div className="max-w-4xl">
                                {/* --- SLIDER BLOCK START --- */}
                                <div className="mb-16 relative group">
                                    <div className="aspect-[16/9] w-full bg-stone-200 overflow-hidden relative">
                                        {/* Slides */}
                                        {aboutSlides.map((slide, index) => (
                                            <img
                                                key={index}
                                                src={slide.url}
                                                alt={slide.label}
                                                className={`absolute inset-0 w-full h-full object-cover filter grayscale group-hover:grayscale-0 transition-all duration-700 ease-in-out ${index === currentAboutSlide ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}
                                            />
                                        ))}
                                    </div>

                                    {/* Controls & Captions Bar */}
                                    <div className="mt-4 flex justify-between items-end border-t border-stone-200 pt-4">
                                        {/* Caption */}
                                        <div>
                                            <p className="text-xs font-mono uppercase tracking-widest text-stone-400 mb-1">
                                                {aboutSlides[currentAboutSlide].label}
                                            </p>
                                            <p className="text-sm font-serif italic text-stone-600">
                                                {aboutSlides[currentAboutSlide].sub}
                                            </p>
                                        </div>

                                        {/* Navigation */}
                                        <div className="flex items-center gap-6">
                                            <button
                                                onClick={prevAboutSlide}
                                                className="text-stone-400 hover:text-stone-900 transition-colors"
                                            >
                                                <ChevronLeft size={20} />
                                            </button>

                                            <div className="font-mono text-xs tracking-widest text-stone-900">
                                                0{currentAboutSlide + 1}{' '}
                                                <span className="text-stone-400">
                                                    / 0{aboutSlides.length}
                                                </span>
                                            </div>

                                            <button
                                                onClick={nextAboutSlide}
                                                className="text-stone-400 hover:text-stone-900 transition-colors"
                                            >
                                                <ChevronRight size={20} />
                                            </button>
                                        </div>
                                    </div>
                                </div>
                                {/* --- SLIDER BLOCK END --- */}

                                <p className="text-2xl md:text-3xl font-serif italic text-stone-700 mb-12 leading-relaxed border-l-4 border-stone-900 pl-6 md:pl-8">
                                    «Мое призвание — строить мосты между вечными истинами и
                                    современным человеком, служа Богу через творчество, слово и
                                    созидание общин.»
                                </p>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24">
                                    <div>
                                        <h3 className="text-lg font-bold uppercase tracking-widest mb-6 border-b border-stone-200 pb-2">
                                            Путь и Служение
                                        </h3>
                                        <div className="space-y-8">
                                            {experience.map((exp, i) => (
                                                <div key={i}>
                                                    <span className="text-sm font-mono text-stone-500 block mb-1">
                                                        {exp.year}
                                                    </span>
                                                    <h4 className="text-xl font-bold leading-tight mb-1">
                                                        {exp.role}
                                                    </h4>
                                                    <p className="text-stone-600 font-serif italic">
                                                        {exp.place}
                                                    </p>
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                    <div>
                                        <h3 className="text-lg font-bold uppercase tracking-widest mb-6 border-b border-stone-200 pb-2">
                                            Личное
                                        </h3>
                                        <p className="text-lg text-stone-700 mb-8 leading-relaxed">
                                            Счастлив в браке, отец троих детей. Убежден, что
                                            служение начинается в семье и продолжается в обществе. В
                                            свободное время ищу вдохновение в тишине природы.
                                        </p>
                                        <div>
                                            <h4 className="font-bold text-sm uppercase tracking-wider text-stone-500 mb-4">
                                                Увлечения
                                            </h4>
                                            <div className="flex flex-wrap gap-2">
                                                {interests.map((interest, i) => (
                                                    <span
                                                        key={i}
                                                        className="px-4 py-2 bg-white text-stone-800 text-sm border border-stone-300 rounded-full hover:bg-stone-900 hover:text-white hover:border-stone-900 transition-colors cursor-default"
                                                    >
                                                        {interest}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Events / Blog Section (Formerly Projects) */}
            <section id="events" className="border-b border-stone-200">
                <div className="container mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-12">
                        <div className="md:col-span-3 p-6 md:p-12 border-b md:border-b-0 md:border-r border-stone-200">
                            <div className="sticky top-32">
                                <span className="flex items-center gap-2 text-stone-400 mb-4">
                                    <Layout size={20} />
                                    <span className="text-xs font-mono uppercase tracking-widest">
                                        Раздел 02
                                    </span>
                                </span>
                                <h2 className="text-4xl font-bold uppercase tracking-tight">
                                    События
                                </h2>
                            </div>
                        </div>
                        <div className="md:col-span-9 p-6 md:p-12">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                {events.map(event => (
                                    <div
                                        key={event.id}
                                        onClick={() => setActiveEvent(event)}
                                        className="group cursor-pointer flex flex-col h-full"
                                    >
                                        {/* Image Container */}
                                        <div className="relative aspect-[3/2] overflow-hidden bg-stone-200 mb-6">
                                            <img
                                                src={event.image}
                                                alt={event.title}
                                                className="w-full h-full object-cover filter grayscale group-hover:grayscale-0 transition-all duration-700 ease-in-out transform group-hover:scale-105"
                                            />
                                            {/* Tag overlay */}
                                            <div className="absolute top-4 left-4 bg-white/90 px-3 py-1 text-xs font-bold uppercase tracking-widest text-stone-900">
                                                {event.tag}
                                            </div>
                                        </div>

                                        {/* Text Content */}
                                        <div className="flex flex-col flex-grow">
                                            <div className="flex items-center gap-4 text-xs font-mono uppercase tracking-widest text-stone-500 mb-3">
                                                <span className="flex items-center gap-1">
                                                    <Calendar size={12} /> {event.date}
                                                </span>
                                                <span className="w-1 h-1 bg-stone-300 rounded-full"></span>
                                                <span className="flex items-center gap-1">
                                                    <MapPin size={12} /> {event.location}
                                                </span>
                                            </div>

                                            <h3 className="text-xl font-bold leading-tight group-hover:underline decoration-2 underline-offset-4 decoration-stone-400 mb-auto">
                                                {event.title}
                                            </h3>

                                            <div className="mt-6 border-t border-stone-200 pt-4 flex justify-between items-center opacity-0 group-hover:opacity-100 transition-opacity">
                                                <span className="text-xs font-bold uppercase tracking-widest text-stone-400">
                                                    Подробнее
                                                </span>
                                                <ArrowUpRight
                                                    size={16}
                                                    className="text-stone-900"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            {/* All Events Button */}
                            <div className="mt-16 text-center">
                                <button className="text-sm font-bold uppercase tracking-widest border-b-2 border-stone-900 pb-1 hover:text-stone-600 hover:border-stone-400 transition-colors">
                                    Смотреть все события
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Books Section */}
            <section id="books" className="border-b border-stone-200 bg-stone-900 text-stone-50">
                <div className="container mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-12">
                        <div className="md:col-span-3 p-6 md:p-12 border-b md:border-b-0 md:border-r border-stone-800">
                            <div className="sticky top-32">
                                <span className="flex items-center gap-2 text-stone-500 mb-4">
                                    <Book size={20} />
                                    <span className="text-xs font-mono uppercase tracking-widest">
                                        Раздел 03
                                    </span>
                                </span>
                                <h2 className="text-4xl font-bold uppercase tracking-tight">
                                    Книги
                                </h2>
                            </div>
                        </div>
                        <div className="md:col-span-9 grid grid-cols-1 md:grid-cols-2">
                            {books.map((book, index) => (
                                <div
                                    key={book.id}
                                    className={`p-8 md:p-16 flex flex-col justify-between min-h-[500px] border-b md:border-b-0 border-stone-800 ${index % 2 === 0 ? 'md:border-r' : ''}`}
                                >
                                    <div
                                        className={`w-full aspect-[3/4] ${book.coverColor} mb-8 shadow-2xl flex items-center justify-center relative group overflow-hidden`}
                                    >
                                        {/* Placeholder for Book Cover */}
                                        <div className="text-center p-4">
                                            <span className="block text-2xl font-serif italic opacity-50">
                                                Cover Art
                                            </span>
                                        </div>
                                        <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                                            <span className="bg-white text-black px-6 py-2 rounded-full font-bold text-sm uppercase">
                                                Подробнее
                                            </span>
                                        </div>
                                    </div>
                                    <div>
                                        <h3 className="text-2xl font-bold mb-2">{book.title}</h3>
                                        <p className="text-stone-400 font-serif italic mb-4">
                                            {book.subtitle}
                                        </p>
                                        <div className="flex justify-between items-center border-t border-stone-800 pt-4">
                                            <span className="text-sm font-mono text-stone-500">
                                                {book.year}
                                            </span>
                                            <button className="text-sm uppercase tracking-widest hover:text-stone-300">
                                                Купить
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Sermons Section - Interactive Player */}
            <section id="sermons" className="border-b border-stone-200">
                <div className="container mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-12">
                        <div className="md:col-span-3 p-6 md:p-12 border-b md:border-b-0 md:border-r border-stone-200">
                            <div className="sticky top-32">
                                <span className="flex items-center gap-2 text-stone-400 mb-4">
                                    <Mic size={20} />
                                    <span className="text-xs font-mono uppercase tracking-widest">
                                        Раздел 04
                                    </span>
                                </span>
                                <h2 className="text-4xl font-bold uppercase tracking-tight">
                                    Слово
                                </h2>
                            </div>
                        </div>
                        <div className="md:col-span-9 p-0">
                            <div className="grid grid-cols-1">
                                {sermons.map(sermon => {
                                    const isPlaying = playingSermon === sermon.id;

                                    return (
                                        <div
                                            key={sermon.id}
                                            className={`group relative p-6 md:p-10 border-b border-stone-200 transition-all duration-500 ease-in-out flex flex-col md:flex-row items-center gap-6 overflow-hidden ${isPlaying ? 'bg-stone-900 text-white' : 'hover:bg-stone-50 text-stone-900'}`}
                                        >
                                            {/* Progress Bar (Visible only when playing) */}
                                            <div
                                                className={`absolute bottom-0 left-0 h-1 bg-stone-700 w-full transition-opacity duration-300 ${isPlaying ? 'opacity-100' : 'opacity-0'}`}
                                            >
                                                <div className="h-full bg-white w-[35%]"></div>
                                            </div>

                                            {/* Play/Pause Button */}
                                            <button
                                                onClick={() => toggleSermon(sermon.id)}
                                                className={`w-16 h-16 rounded-full flex items-center justify-center shrink-0 transition-all duration-300 z-10 ${isPlaying ? 'bg-white text-stone-900 scale-110' : 'bg-stone-200 text-stone-900 group-hover:bg-stone-900 group-hover:text-white'}`}
                                            >
                                                {isPlaying ? (
                                                    <Pause fill="currentColor" size={24} />
                                                ) : (
                                                    <Play
                                                        fill="currentColor"
                                                        size={24}
                                                        className="ml-1"
                                                    />
                                                )}
                                            </button>

                                            {/* Content */}
                                            <div className="flex-grow text-center md:text-left z-10 w-full md:w-auto">
                                                <h4 className="text-xl font-bold">
                                                    {sermon.title}
                                                </h4>
                                                {isPlaying ? (
                                                    // Player Controls View
                                                    <div className="flex items-center justify-center md:justify-start gap-4 mt-2 animate-in fade-in slide-in-from-bottom-2 duration-300">
                                                        <span className="text-xs font-mono opacity-80">
                                                            14:20 / {sermon.duration}
                                                        </span>
                                                        {/* Mock Waveform */}
                                                        <div className="flex gap-1 items-end h-4">
                                                            {[40, 60, 30, 80, 50, 90, 40, 60].map(
                                                                (h, i) => (
                                                                    <div
                                                                        key={i}
                                                                        className="w-1 bg-white/50 rounded-full"
                                                                        style={{ height: `${h}%` }}
                                                                    ></div>
                                                                ),
                                                            )}
                                                        </div>
                                                    </div>
                                                ) : (
                                                    // Default View
                                                    <p className="text-stone-500 font-serif italic mt-1 group-hover:text-stone-600 transition-colors">
                                                        {sermon.scripture}
                                                    </p>
                                                )}
                                            </div>

                                            {/* Right Meta or Volume */}
                                            <div className="text-center md:text-right shrink-0 z-10 min-w-[120px] flex flex-col items-center md:items-end gap-2">
                                                {isPlaying ? (
                                                    <div className="flex gap-4">
                                                        <button
                                                            className="opacity-70 hover:opacity-100 transition-opacity"
                                                            title="Скачать"
                                                        >
                                                            <Download size={20} />
                                                        </button>
                                                        <Volume2
                                                            size={20}
                                                            className="opacity-70 hover:opacity-100 cursor-pointer"
                                                        />
                                                    </div>
                                                ) : (
                                                    <>
                                                        <span className="block text-sm font-bold uppercase text-stone-400">
                                                            {sermon.date}
                                                        </span>
                                                        <div className="flex items-center gap-3 justify-center md:justify-end">
                                                            <button
                                                                className="text-stone-400 hover:text-stone-900 transition-colors"
                                                                title="Скачать"
                                                            >
                                                                <Download size={16} />
                                                            </button>
                                                            <span className="text-xs font-mono bg-stone-100 px-2 py-1 rounded text-stone-900">
                                                                {sermon.duration}
                                                            </span>
                                                        </div>
                                                    </>
                                                )}
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                            <div className="p-8 text-center">
                                <button className="text-sm font-bold uppercase tracking-widest border-b-2 border-black pb-1 hover:text-stone-600 hover:border-stone-400 transition-colors">
                                    Слушать архив
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Publications/Blog */}
            <section id="publications" className="border-b border-stone-200">
                <div className="container mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-12">
                        <div className="md:col-span-3 p-6 md:p-12 border-b md:border-b-0 md:border-r border-stone-300">
                            <div className="sticky top-32">
                                <span className="flex items-center gap-2 text-stone-400 mb-4">
                                    <PenTool size={20} />
                                    <span className="text-xs font-mono uppercase tracking-widest">
                                        Раздел 05
                                    </span>
                                </span>
                                <h2 className="text-4xl font-bold uppercase tracking-tight">
                                    Тексты
                                </h2>
                            </div>
                        </div>
                        <div className="md:col-span-9 bg-stone-300">
                            {' '}
                            {/* Container background for borders */}
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px border border-stone-300 bg-stone-300">
                                {publications.map((pub, index) => (
                                    <div
                                        key={pub.id}
                                        onClick={() => setActiveArticle(pub)}
                                        className="group p-8 block h-full bg-[#FDFBF7] hover:bg-white transition-colors cursor-pointer flex flex-col justify-between"
                                    >
                                        <div>
                                            <span className="text-xs font-mono text-stone-500 mb-4 block">
                                                {pub.date}
                                            </span>
                                            <h3 className="text-xl font-bold leading-tight mb-8 group-hover:underline decoration-2 underline-offset-4">
                                                {pub.title}
                                            </h3>
                                        </div>
                                        <div className="flex justify-between items-end mt-4">
                                            <div className="flex flex-wrap gap-2">
                                                {pub.tags.map((tag, i) => (
                                                    <span
                                                        key={i}
                                                        className="text-xs font-bold uppercase tracking-widest text-stone-400"
                                                    >
                                                        {tag}
                                                    </span>
                                                ))}
                                            </div>
                                            <ChevronRight
                                                size={16}
                                                className="opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all shrink-0"
                                            />
                                        </div>
                                    </div>
                                ))}
                            </div>
                            {/* All Publications Button */}
                            <div className="bg-[#FDFBF7] pt-16 pb-12 text-center border-t border-stone-300">
                                <button className="text-sm font-bold uppercase tracking-widest border-b-2 border-stone-900 pb-1 hover:text-stone-600 hover:border-stone-400 transition-colors">
                                    Смотреть все публикации
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Footer / Contact */}
            <footer id="contact" className="bg-stone-900 text-stone-400 py-20 px-6">
                <div className="container mx-auto">
                    <div className="mb-16 border-b border-stone-800 pb-16">
                        <h2 className="text-white text-5xl md:text-7xl font-bold tracking-tighter uppercase mb-8">
                            Связаться
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <p className="text-lg font-serif italic max-w-md text-stone-400">
                                Всегда открыт к живому диалогу и новым идеям. Буду рад обсудить
                                совместные проекты, ответить на вопросы или просто познакомиться.
                            </p>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-20">
                        {/* Telegram Block */}
                        <a
                            href="https://t.me/exegetik"
                            target="_blank"
                            rel="noreferrer"
                            className="group bg-stone-800 p-8 md:p-12 flex flex-col justify-between min-h-[240px] hover:bg-[#2AABEE] hover:text-white transition-all duration-300"
                        >
                            <div className="flex justify-between items-start">
                                <Send size={40} />
                                <ArrowUpRight
                                    size={32}
                                    className="opacity-50 group-hover:opacity-100 transition-opacity"
                                />
                            </div>
                            <div>
                                <h3 className="text-3xl font-bold text-white mb-2">Telegram</h3>
                                <p className="font-mono opacity-60 group-hover:opacity-100">
                                    @exegetik
                                </p>
                            </div>
                        </a>

                        {/* Email Block */}
                        <a
                            href="mailto:exegetik@yandex.ru"
                            className="group bg-stone-800 p-8 md:p-12 flex flex-col justify-between min-h-[240px] hover:bg-stone-200 hover:text-stone-900 transition-all duration-300"
                        >
                            <div className="flex justify-between items-start">
                                <Mail size={40} />
                                <ArrowUpRight
                                    size={32}
                                    className="opacity-50 group-hover:opacity-100 transition-opacity"
                                />
                            </div>
                            <div>
                                <h3 className="text-3xl font-bold text-white group-hover:text-stone-900 mb-2">
                                    Email
                                </h3>
                                <p className="font-mono opacity-60 group-hover:opacity-100">
                                    exegetik@yandex.ru
                                </p>
                            </div>
                        </a>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-4 gap-12 pt-8 border-t border-stone-800">
                        <div>
                            <h4 className="text-white font-bold uppercase tracking-widest text-sm mb-4">
                                О главном
                            </h4>
                            <ul className="space-y-2 text-sm">
                                {navMain.map(item => (
                                    <li key={item.name}>
                                        <a
                                            href={item.href}
                                            className="hover:text-white transition-colors"
                                        >
                                            {item.name}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div>
                            <h4 className="text-white font-bold uppercase tracking-widest text-sm mb-4">
                                Материалы
                            </h4>
                            <ul className="space-y-2 text-sm">
                                {navResources.map(item => (
                                    <li key={item.name}>
                                        <a
                                            href={item.href}
                                            className="hover:text-white transition-colors"
                                        >
                                            {item.name}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div>
                            <h4 className="text-white font-bold uppercase tracking-widest text-sm mb-4">
                                Соцсети
                            </h4>
                            <ul className="space-y-2 text-sm">
                                <li>
                                    <a
                                        href="https://t.me/exegetik"
                                        target="_blank"
                                        rel="noreferrer"
                                        className="hover:text-white transition-colors"
                                    >
                                        Telegram
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div className="md:col-span-1 md:text-right text-xs font-mono uppercase tracking-widest opacity-50 flex flex-col justify-end">
                            <p>&copy; 2026 Владислав Насонов. Все права защищены</p>
                            <p className="mt-2">
                                <a
                                    href="https://webzella.ru"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="hover:text-stone-200 transition-colors"
                                >
                                    Разработка: webzella.ru
                                </a>
                            </p>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Portfolio;
