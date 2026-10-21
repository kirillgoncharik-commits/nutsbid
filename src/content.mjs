export const localeOrder = ["en", "ru", "sq", "cu", "la", "elf", "nut"];

const sharedExperience = [
  { year: "2008—", company: "GAME INDUSTRY", title: "Production leadership", body: "Kirill has worked across game production, publishing and technology since 2008." },
  { year: "NIVAL", company: "NIVAL", title: "Development leadership", body: "Led a 60+ person product organisation through a major product pivot and Early Access launch." },
  { year: "ARKADIUM", company: "ARKADIUM", title: "Flash → HTML5", body: "Led a game team through the browser transition; Bridge Online exceeded the Flash version’s revenue in month one." },
  { year: "TRUE LAB", company: "TRUE LAB", title: "iGaming production", body: "Rebuilt production, launched a reference product and led the organisation through a successful MGA audit." },
  { year: "2020—25", company: "NORD BEAVER", title: "Studio scale-up", body: "Co-founded and grew an international game-production business to teams of up to 80 and about $1.6M annual revenue." }
];

const russianExperience = [
  { year:"2008—", company:"GAME INDUSTRY", title:"Управление производством", body:"Кирилл работает в игровой индустрии — в продакшне, издательстве и технологиях — с 2008 года." },
  { year:"NIVAL", company:"NIVAL", title:"Руководство разработкой", body:"Руководил продуктовой организацией из 60+ человек во время крупного пивота и выхода в Early Access." },
  { year:"ARKADIUM", company:"ARKADIUM", title:"Flash → HTML5", body:"Провёл игровую команду через браузерный переход; Bridge Online в первый месяц превзошёл по выручке Flash-версию." },
  { year:"TRUE LAB", company:"TRUE LAB", title:"iGaming-продакшн", body:"Перестроил производство, запустил референсный продукт и провёл организацию через успешный аудит MGA." },
  { year:"2020—25", company:"NORD BEAVER", title:"Масштабирование студии", body:"Соосновал и развил международный игровой продакшн до команд численностью 80 человек и около $1,6 млн годовой выручки." }
];

const albanianExperience = [
  { year:"2008—", company:"GAME INDUSTRY", title:"Udhëheqje prodhimi", body:"Kirill punon në prodhim, publikim dhe teknologji lojërash që nga viti 2008." },
  { year:"NIVAL", company:"NIVAL", title:"Udhëheqje zhvillimi", body:"Drejtoi një organizatë produkti me mbi 60 persona gjatë një ndryshimi të madh dhe publikimit Early Access." },
  { year:"ARKADIUM", company:"ARKADIUM", title:"Flash → HTML5", body:"Udhëhoqi ekipin gjatë kalimit në browser; Bridge Online tejkaloi të ardhurat e versionit Flash në muajin e parë." },
  { year:"TRUE LAB", company:"TRUE LAB", title:"Prodhim iGaming", body:"Rindërtoi prodhimin, nisi një produkt reference dhe udhëhoqi organizatën në një audit të suksesshëm MGA." },
  { year:"2020—25", company:"NORD BEAVER", title:"Rritje studioje", body:"Bashkëthemeloi dhe rriti një biznes ndërkombëtar prodhimi lojërash deri në 80 persona dhe rreth $1.6M të ardhura vjetore." }
];

const latinExperience = [
  { year:"2008—", company:"LUDI", title:"Regimen productionis", body:"Kirill in productione, editione et technologia ludorum ab anno 2008 operatur." },
  { year:"NIVAL", company:"NIVAL", title:"Ductus evolutionis", body:"Ordinem producti plus sexaginta hominum per magnam mutationem et editionem Early Access duxit." },
  { year:"ARKADIUM", company:"ARKADIUM", title:"Flash → HTML5", body:"Turmam per transitum navigatorium duxit; Bridge Online reditus versionis Flash primo mense superavit." },
  { year:"TRUE LAB", company:"TRUE LAB", title:"Productio iGaming", body:"Productionem refecit, exemplar producti edidit atque societatem per auditum MGA prosperum duxit." },
  { year:"2020—25", company:"NORD BEAVER", title:"Incrementum studii", body:"Negotium internationale ludorum condidit et auxit ad turmas usque ad octoginta homines et circiter $1.6M reditus annuos." }
];

const english = {
  code: "en", htmlLang: "en", route: "/", label: "EN", name: "English", indexable: true,
  metaTitle: "Nuts Games — Game Art, Animation & Co-Development",
  metaDescription: "Game art, animation and production support for studios that need experienced delivery, flexible capacity and modern workflows.",
  nav: ["What we do", "How we work", "Experience", "Work", "Why Nuts?", "Get a Bid"],
  hero: {
    eyebrow: "SERIOUS DELIVERY · SLIGHTLY UNHINGED",
    title: "Game Art. Game Development. A Little Bit of Madness.",
    body: "We help game studios create, build and ship — combining proven production leadership, creative talent and practical AI-assisted workflows.",
    primary: "Get a Bid", secondary: "What We Do",
    badges: ["B2B production", "Human-reviewed", "AI-aware"]
  },
  section: { services: "WHAT WE DO", process: "HOW WE WORK", experience: "EXPERIENCE BEHIND THE NUTS", work: "SELECTED CAPABILITIES", why: "WHY NUTS?", contact: "GET A BID" },
  servicesTitle: "Flexible production without the corporate shell game.",
  servicesIntro: "Start with a focused art brief. Expand into animation, co-development or production leadership when the project needs it.",
  services: [
    { n: "01", title: "Game Art & Animation", body: "2D characters, backgrounds, slot symbols, UI, Spine animation, adaptations and integration-ready asset packs.", tags: ["2D art", "Spine", "UI/UX"] },
    { n: "02", title: "iGaming Production", body: "Themes, visual systems, animation variants and additional content — with clear scope, review gates and partner coordination.", tags: ["Slot art", "Variants", "Production"] },
    { n: "03", title: "Co-Development", body: "HTML5 and browser games, interactive prototypes, technical production and development partnerships shaped to the actual brief.", tags: ["HTML5", "Prototypes", "Delivery"] },
    { n: "04", title: "AI-Powered Production", body: "Faster exploration, workflow automation, coding assistance and QA support — always under human review and client AI/IP rules.", tags: ["Concepting", "Automation", "QA"] }
  ],
  processTitle: "Clear from the first brief to the final file.",
  processIntro: "No invented capacity. No mystery milestones. We agree the team, tools and approval path before production begins.",
  process: ["Brief", "Scope", "Estimate", "Prototype / Production", "Review", "Delivery"],
  experienceTitle: "New studio. Experienced hands.",
  experienceIntro: "Nuts Games is an emerging studio. The credibility comes from the leadership experience brought into it — not from pretending past employers or companies were Nuts Games clients.",
  experience: sharedExperience,
  sourceNote: "Verified from Kirill Goncharik’s operating CV and public company references. Prior experience, not Nuts Games client work.",
  workTitle: "Built to show how we think.",
  workIntro: "Original illustrative concepts created for Nuts Games. They demonstrate visual range and production thinking; they are not shipped client titles.",
  workLabel: "Illustrative concept",
  work: [
    { title: "Character & reward language", body: "Expressive character design, readable silhouettes and animation-ready visual beats." },
    { title: "World & interaction", body: "A browser-first environment designed around strong focal points and modular production." },
    { title: "AI-assisted exploration", body: "Rapid visual search turned into a controlled, reviewable human production pipeline." }
  ],
  whyTitle: "Fun to work with. Serious about the handoff.",
  whyIntro: "We are building a right-sized studio around a simple idea: senior judgement should stay close to the work.",
  why: [
    ["Experienced leadership", "Production, budgets, clients and delivery are handled by people who have done the work before."],
    ["No theatre", "Lean communication, visible trade-offs and useful documentation instead of performative process."],
    ["Modern by default", "AI where appropriate, conventional craft where it wins, and project-specific IP safeguards."],
    ["Teams that fit", "A focused core plus verified specialists and delivery partners — scoped before we promise."]
  ],
  contactTitle: "Tell us what you’re building.",
  contactIntro: "Send the shape of the problem. We’ll come back with the right questions and a realistic path to scope.",
  form: {
    name: "Name", email: "Work email", company: "Company / studio", project: "Project type", details: "What do you need?", budget: "Budget range (optional)", timeline: "Expected timeline (optional)", consent: "I agree that Nuts Games may use these details to respond to my inquiry.", submit: "Send the brief", sending: "Sending…", success: "Brief received. We’ll get back to you soon.", error: "The form could not send. Please use LinkedIn while we fix the connection.", select: "Choose one", projects: ["Game art & animation", "iGaming production", "Co-development", "AI workflow", "Other"], budgets: ["Under €5k", "€5k–15k", "€15k–50k", "€50k+", "Not sure yet"]
  },
  altContact: "Prefer a direct route? Connect with Kirill on LinkedIn.",
  privacyLink: "Privacy", languageLabel: "Language", squirrelReplay: "Summon the squirrel", skip: "Skip intro",
  cookie: { text: "We use consent-based analytics to understand which pages help. No advertising tags.", accept: "Allow analytics", decline: "Essential only", link: "Privacy details" },
  privacy: {
    title: "Privacy Policy", updated: "Last updated: 21 October 2026",
    intro: "This page explains how the Nuts Games website handles information. The production contact channel will not be enabled until its receiving address and data-controller details are verified.",
    sections: [
      ["Contact inquiries", "When you submit the form, we process the details you provide only to review and respond to your business inquiry. Do not include confidential game data or credentials."],
      ["Analytics and consent", "Google Analytics 4 is loaded only after analytics consent. We do not send names, email addresses or project briefs to analytics."],
      ["Retention and recipients", "Inquiry retention, the receiving entity and any processors will be recorded here before the form is activated in production."],
      ["Your choices", "You can decline analytics and still use the site. Contact and data-rights details will be added after the operating entity is confirmed."]
    ], back: "Back to the site"
  }
};

const russian = {
  ...english, code: "ru", htmlLang: "ru", route: "/ru/", label: "RU", name: "Русский", indexable: true,
  metaTitle: "Nuts Games — игровой арт, анимация и co-development",
  metaDescription: "Игровой арт, анимация и производственная поддержка для студий: опытное управление, гибкие команды и современные пайплайны.",
  nav: ["Что делаем", "Как работаем", "Опыт", "Работы", "Почему Nuts?", "Получить оценку"],
  hero: { eyebrow: "СЕРЬЁЗНЫЙ DELIVERY · НЕМНОГО БЕЗУМИЯ", title: "Игровой арт. Разработка игр. И немного безумия.", body: "Помогаем игровым студиям создавать и выпускать проекты, соединяя производственный опыт, сильный креатив и практичные AI-инструменты.", primary: "Получить оценку", secondary: "Что мы делаем", badges: ["B2B-производство", "Проверка человеком", "AI с правилами"] },
  section: { services: "ЧТО МЫ ДЕЛАЕМ", process: "КАК МЫ РАБОТАЕМ", experience: "ОПЫТ ЗА ОРЕХАМИ", work: "ИЗБРАННЫЕ ВОЗМОЖНОСТИ", why: "ПОЧЕМУ NUTS?", contact: "ПОЛУЧИТЬ ОЦЕНКУ" },
  servicesTitle: "Гибкое производство без корпоративной скорлупы.", servicesIntro: "Можно начать с конкретной задачи по арту, а затем подключить анимацию, разработку или производственное управление.",
  services: [
    { n: "01", title: "Игровой арт и анимация", body: "2D-персонажи, фоны, символы для слотов, UI, Spine-анимация, адаптации и готовые к интеграции ассеты.", tags: ["2D-арт", "Spine", "UI/UX"] },
    { n: "02", title: "iGaming production", body: "Темы, визуальные системы, варианты анимаций и дополнительный контент — с понятным скоупом и этапами проверки.", tags: ["Slot art", "Варианты", "Продакшн"] },
    { n: "03", title: "Совместная разработка", body: "HTML5- и браузерные игры, интерактивные прототипы, технический продакшн и партнёрская разработка под реальную задачу.", tags: ["HTML5", "Прототипы", "Delivery"] },
    { n: "04", title: "AI в производстве", body: "Поиск концепций, автоматизация, помощь в коде и QA — под контролем людей и с учётом правил клиента по IP и AI.", tags: ["Концепты", "Автоматизация", "QA"] }
  ],
  processTitle: "Понятно от первого брифа до финального файла.", processIntro: "Не обещаем несуществующую команду и не прячем этапы. До старта фиксируем людей, инструменты и порядок согласований.", process: ["Бриф", "Скоуп", "Оценка", "Прототип / производство", "Проверка", "Передача"],
  experienceTitle: "Новая студия. Опытная команда.", experienceIntro: "Nuts Games — новая компания. Доверие строится на опыте её руководителей, а не на попытке выдать прошлые компании за клиентов Nuts Games.",
  experience: russianExperience,
  sourceNote: "Подтверждено операционным CV Кирилла Гончарика и открытыми источниками о компаниях. Это предшествующий опыт, а не клиентские проекты Nuts Games.",
  workTitle: "Показываем, как думаем.", workIntro: "Оригинальные иллюстративные концепты для Nuts Games. Они показывают визуальный диапазон и производственный подход, но не являются выпущенными клиентскими играми.", workLabel: "Иллюстративный концепт",
  work: [["Язык персонажей и наград", "Выразительные герои, читаемые силуэты и визуальные акценты, готовые к анимации."], ["Мир и взаимодействие", "Браузерное окружение с сильными фокусами и модульным производством."], ["AI-поиск", "Быстрый визуальный поиск, превращённый в управляемый и проверяемый человеком пайплайн."]].map(([title,body])=>({title,body})),
  whyTitle: "С нами весело работать. Передача результата — серьёзно.", whyIntro: "Строим компактную студию вокруг простой идеи: решения опытных людей должны быть рядом с работой.",
  why: [["Опытное руководство", "Продакшн, бюджеты, клиенты и поставка — в руках людей, которые уже проходили этот путь."], ["Без театра", "Короткая коммуникация, видимые компромиссы и полезные документы."], ["Современный подход", "AI там, где он помогает, классическое мастерство там, где оно сильнее, и защита IP для каждого проекта."], ["Команда по задаче", "Компактное ядро плюс проверенные специалисты и партнёры — состав фиксируем до обещаний."]],
  contactTitle: "Расскажите, что вы создаёте.", contactIntro: "Опишите задачу. Мы вернёмся с правильными вопросами и реалистичным планом оценки.",
  form: { name: "Имя", email: "Рабочая почта", company: "Компания / студия", project: "Тип проекта", details: "Что вам нужно?", budget: "Бюджет (необязательно)", timeline: "Ожидаемые сроки (необязательно)", consent: "Я согласен, что Nuts Games использует эти данные, чтобы ответить на запрос.", submit: "Отправить бриф", sending: "Отправляем…", success: "Бриф получен. Скоро свяжемся.", error: "Форма не отправилась. Пока мы чиним связь, напишите в LinkedIn.", select: "Выберите вариант", projects: ["Игровой арт и анимация", "iGaming production", "Совместная разработка", "AI-пайплайн", "Другое"], budgets: ["До €5 тыс.", "€5–15 тыс.", "€15–50 тыс.", "€50 тыс.+", "Пока не знаю"] },
  altContact: "Удобнее напрямую? Напишите Кириллу в LinkedIn.", privacyLink: "Конфиденциальность", languageLabel: "Язык", squirrelReplay: "Позвать белку", skip: "Пропустить",
  cookie: { text: "С вашего согласия мы используем аналитику, чтобы понимать, какие страницы полезны. Без рекламных тегов.", accept: "Разрешить аналитику", decline: "Только необходимое", link: "Подробнее" },
  privacy: { title: "Политика конфиденциальности", updated: "Обновлено 21 октября 2026", intro: "Здесь описано, как сайт Nuts Games работает с информацией. Контактный канал не будет включён, пока не подтверждены адрес получения и данные оператора.", sections: [["Контактные запросы", "Данные формы используются только для оценки и ответа на деловой запрос. Не отправляйте конфиденциальные материалы игры или доступы."], ["Аналитика и согласие", "Google Analytics 4 загружается только после согласия. Имена, email и описание проекта не передаются в аналитику."], ["Хранение и получатели", "Срок хранения, получающая организация и обработчики будут указаны до включения формы."], ["Ваш выбор", "Можно отказаться от аналитики и продолжить пользоваться сайтом. Контакты по защите данных появятся после подтверждения юридического лица."]], back: "Вернуться на сайт" }
};

const albanian = {
  ...english, code: "sq", htmlLang: "sq", route: "/sq/", label: "SQ", name: "Shqip", indexable: true,
  metaTitle: "Nuts Games — Art, animacion dhe bashkëzhvillim lojërash",
  metaDescription: "Art lojërash, animacion dhe mbështetje prodhimi për studio që kërkojnë përvojë, kapacitet fleksibël dhe rrjedha moderne pune.",
  nav: ["Çfarë bëjmë", "Si punojmë", "Përvoja", "Punët", "Pse Nuts?", "Kërko ofertë"],
  hero: { eyebrow: "PRODHIM SERIOZ · PAK ÇMENDURI", title: "Art lojërash. Zhvillim lojërash. Dhe pak çmenduri.", body: "Ndihmojmë studiot të krijojnë, ndërtojnë dhe publikojnë — me udhëheqje të provuar, talent krijues dhe mjete praktike të mbështetura nga AI.", primary: "Kërko ofertë", secondary: "Çfarë bëjmë", badges: ["Prodhim B2B", "Kontroll njerëzor", "AI me rregulla"] },
  section: { services: "ÇFARË BËJMË", process: "SI PUNOJMË", experience: "PËRVOJA PAS NUTS", work: "AFTËSI TË PËRZGJEDHURA", why: "PSE NUTS?", contact: "KËRKO OFERTË" },
  servicesTitle: "Prodhim fleksibël, pa guaskë korporative.", servicesIntro: "Filloni me një detyrë të qartë arti; shtoni animacion, bashkëzhvillim ose udhëheqje prodhimi kur projekti e kërkon.",
  services: [
    { n:"01", title:"Art dhe animacion", body:"Personazhe 2D, sfonde, simbole sloti, UI, animacion Spine, përshtatje dhe paketa gati për integrim.", tags:["Art 2D","Spine","UI/UX"] },
    { n:"02", title:"Prodhim iGaming", body:"Tema, sisteme vizuale, variante animacioni dhe përmbajtje shtesë, me fushë pune dhe kontrolle të qarta.", tags:["Slot art","Variante","Prodhim"] },
    { n:"03", title:"Bashkëzhvillim", body:"Lojëra HTML5 dhe browser, prototipa interaktivë, prodhim teknik dhe partneritete zhvillimi sipas brief-it.", tags:["HTML5","Prototipa","Dorëzim"] },
    { n:"04", title:"Prodhim me AI", body:"Eksplorim konceptesh, automatizim, ndihmë në kod dhe QA — nën kontroll njerëzor dhe rregullat e klientit.", tags:["Koncepte","Automatizim","QA"] }
  ],
  processTitle: "Qartësi nga brief-i te skedari final.", processIntro: "Nuk shpikim kapacitet dhe nuk fshehim etapa. Para fillimit biem dakord për ekipin, mjetet dhe miratimet.", process:["Brief","Fusha","Vlerësimi","Prototip / prodhim","Rishikim","Dorëzim"],
  experienceTitle:"Studio e re. Duar me përvojë.", experienceIntro:"Nuts Games është studio në fillim. Besueshmëria vjen nga përvoja që sjell udhëheqja, jo nga paraqitja e punëdhënësve të kaluar si klientë të Nuts Games.",
  experience: albanianExperience,
  sourceNote:"Verifikuar nga CV-ja operative e Kirill Goncharik dhe burimet publike të kompanive. Përvojë e mëparshme, jo punë klientësh të Nuts Games.",
  workTitle:"Tregojmë si mendojmë.", workIntro:"Koncepte origjinale ilustruese për Nuts Games. Tregojnë gamën vizuale dhe mënyrën e prodhimit; nuk janë lojëra klientësh të publikuara.", workLabel:"Koncept ilustrues",
  work:[{title:"Personazhe dhe shpërblime",body:"Dizajn shprehës, silueta të lexueshme dhe momente gati për animacion."},{title:"Botë dhe ndërveprim",body:"Mjedis browser-first me pika fokale dhe prodhim modular."},{title:"Eksplorim me AI",body:"Kërkim i shpejtë vizual i kthyer në rrjedhë të kontrolluar nga njerëzit."}],
  whyTitle:"Argëtues në bashkëpunim. Serioz në dorëzim.", whyIntro:"Po ndërtojmë një studio të përmasës së duhur ku gjykimi senior qëndron pranë punës.",
  why:[["Udhëheqje me përvojë","Prodhimi, buxheti, klienti dhe dorëzimi menaxhohen nga njerëz që e kanë bërë më parë."],["Pa teatër","Komunikim i thjeshtë, kompromise të dukshme dhe dokumente të dobishme."],["Modern si standard","AI kur ka kuptim, zanat klasik kur fiton, dhe mbrojtje IP për çdo projekt."],["Ekipi i duhur","Bërthamë e fokusuar plus specialistë dhe partnerë të verifikuar, të përcaktuar para premtimeve."]],
  contactTitle:"Na tregoni çfarë po ndërtoni.", contactIntro:"Dërgoni formën e problemit. Do të kthehemi me pyetjet e duhura dhe një rrugë reale vlerësimi.",
  form:{name:"Emri",email:"Email pune",company:"Kompania / studio",project:"Lloji i projektit",details:"Çfarë ju duhet?",budget:"Buxheti (opsional)",timeline:"Afati (opsional)",consent:"Pranoj që Nuts Games t’i përdorë këto të dhëna për t’iu përgjigjur kërkesës.",submit:"Dërgo brief-in",sending:"Po dërgohet…",success:"Brief-i u mor. Do t’ju kontaktojmë së shpejti.",error:"Formulari nuk u dërgua. Na kontaktoni në LinkedIn ndërkohë.",select:"Zgjidhni",projects:["Art dhe animacion","Prodhim iGaming","Bashkëzhvillim","Rrjedhë AI","Tjetër"],budgets:["Nën €5k","€5k–15k","€15k–50k","€50k+","Ende pa vendosur"]},
  altContact:"Preferoni drejtpërdrejt? Lidheni me Kirill në LinkedIn.", privacyLink:"Privatësia", languageLabel:"Gjuha", squirrelReplay:"Thirr ketrin", skip:"Kalo hyrjen",
  cookie:{text:"Me pëlqimin tuaj përdorim analitikë për të kuptuar cilat faqe ndihmojnë. Pa etiketa reklamash.",accept:"Lejo analitikën",decline:"Vetëm thelbësoret",link:"Detajet"},
  privacy:{title:"Politika e privatësisë",updated:"Përditësuar më 21 tetor 2026",intro:"Kjo faqe shpjegon si trajton informacionin faqja Nuts Games. Kanali i kontaktit nuk do të aktivizohet pa verifikuar adresën marrëse dhe kontrolluesin e të dhënave.",sections:[["Kërkesat e kontaktit","Të dhënat përdoren vetëm për të shqyrtuar dhe përgjigjur kërkesës. Mos dërgoni materiale konfidenciale ose kredenciale."],["Analitika dhe pëlqimi","Google Analytics 4 ngarkohet vetëm pas pëlqimit. Emrat, email-et dhe brief-et nuk dërgohen në analitikë."],["Ruajtja dhe marrësit","Afati i ruajtjes, subjekti marrës dhe përpunuesit do të publikohen para aktivizimit të formularit."],["Zgjedhjet tuaja","Mund të refuzoni analitikën dhe të përdorni faqen. Kontaktet për të drejtat e të dhënave do të shtohen pas konfirmimit të subjektit ligjor."]],back:"Kthehu te faqja"}
};

const churchSlavonic = {
  ...english, code:"cu", htmlLang:"cu", route:"/cu/", label:"OCS", name:"Словѣньскъ", indexable:false, experimental:true,
  metaTitle:"Nuts Games — художьство игръ и дѣлание", metaDescription:"Творьство и устроение игръ съ опытомъ, человѣчьскымъ судомъ и новыми орудии.",
  nav:["Дѣла наша","Чинъ труда","Опытъ","Образы","Почто Nuts?","Испроси цѣну"],
  hero:{eyebrow:"ТВРЬДО ДѢЛО · МАЛО БЕЗУМИѦ",title:"Художьство игръ. Дѣлание игръ. И мало безумиѧ.",body:"Помагаемъ творьцемъ игры съзидати и до конца доводити — опытомъ, художьствомъ и разумьно употребляемыми орудии ИИ.",primary:"Испроси цѣну",secondary:"Виждь дѣла",badges:["Дѣло B2B","Судъ человѣчьскъ","ИИ съ уставомъ"]},
  section:{services:"ДѢЛА НАША",process:"ЧИНЪ ТРУДА",experience:"ОПЫТЪ ЗА ОРѢХЫ",work:"ОБРАЗЫ УМѢНИѦ",why:"ПОЧТО NUTS?",contact:"ИСПРОСИ ЦѢНУ"},
  servicesTitle:"Гибко дѣлание, безъ тяжькыѧ скорлупы.",servicesIntro:"Начьни отъ явьнаго художьнаго дѣла; приложи движенье, съдѣлание или водительство егда потреба.",
  services:[{n:"01",title:"Художьство и движенье",body:"Лица и мѣста 2D, знамения, устроение UI, Spine-движенье и готовыя къ вложению части.",tags:["2D","Spine","UI/UX"]},{n:"02",title:"iGaming дѣлание",body:"Темы, зрительныя устроения, варианты движениѧ и новый составъ съ явьными мѣрами и смотрениемъ.",tags:["Slot art","Варианты","Продакшн"]},{n:"03",title:"Съдѣлание игръ",body:"HTML5 и браузерныя игры, опыты, техническое водительство и союзная разработка по истиньному заданию.",tags:["HTML5","Опыты","Предание"]},{n:"04",title:"Дѣлание съ ИИ",body:"Скоро искание образовъ, автоматизациѧ, помощь коду и QA — подъ судомъ человѣка и уставомъ клиента.",tags:["Образы","Автоматизациѧ","QA"]}],
  processTitle:"Ясно отъ сказаниѧ до послѣдьняго файла.",processIntro:"Не лжемъ о силѣ команды. Прѣжде начала утверждаемъ люди, орудиѧ и чинъ смотрения.",process:["Сказание","Мѣра","Цѣна","Опытъ / дѣло","Смотрение","Предание"],
  experienceTitle:"Нова студиѧ. Опытны руцѣ.",experienceIntro:"Nuts Games есть ново начинание. Довѣрие отъ опыта водителей, не отъ наречениѧ прежьнихъ обществъ клиентами Nuts Games.",
  experience: sharedExperience.map((item) => ({ ...item, title: "Прежьнее водительство", body: `Опытъ ${item.company}: ${item.body}` })),
  sourceNote:"Провѣрено по дѣловому писанию Кирилла и явьнымъ источникомъ. Се прежьний опытъ, не клиентьско дѣло Nuts Games.",
  workTitle:"Показуемъ, како мыслимъ.",workIntro:"Самобытны испытательны образы Nuts Games. Суть показание умѣниѧ, а не изданныя клиентьскыя игры.",workLabel:"Испытательнъ образъ",
  work:[{title:"Лица и награды",body:"Живы лица, ясны силуэты и части, удобны движению."},{title:"Миръ и дѣйство",body:"Браузерьный миръ съ сильными средоточии и модульнымъ строениемъ."},{title:"ИИ-искание",body:"Скорое зрительное искание, введено въ человѣчьски смотримый чинъ."}],
  whyTitle:"Весело съ нами. Твьрдо въ предании.",whyIntro:"Съзиждемъ малу и мѣрну студию, идеже опытный судъ близъ самаго дѣла.",why:[["Опытно водительство","Дѣло, цѣна, клиентъ и предание въ рукахъ знающихъ людии."],["Безъ лицедѣйства","Кратко общение, явьны уступы и пользьны писания."],["Нова орудиѧ","ИИ идеже полезенъ, ремесло идеже сильнѣе, и хранение IP."],["Команда по мѣрѣ","Мало ядро и провѣрены умѣльци, наречены прѣжде обѣта."]],
  contactTitle:"Повѣждь, что съзиждеши.",contactIntro:"Посли образъ задачи. Отвѣтимъ правыми вопросы и истиньною оцѣною.",
  form:{...english.form,name:"Имѧ",email:"Дѣловая почта",company:"Общество / студиѧ",project:"Родъ дѣла",details:"Что потребно?",budget:"Цѣна (по волѣ)",timeline:"Срокъ (по волѣ)",consent:"Согласенъ есмь, да Nuts Games употребитъ си данные единственно къ отвѣту.",submit:"Послати сказание",sending:"Посылаемо…",success:"Сказание приято. Скоро отвѣтимъ.",error:"Форма не послася. Пиши въ LinkedIn.",select:"Избери"},
  altContact:"Хощеши прямо? Свяжися съ Кирилломъ въ LinkedIn.",privacyLink:"О хранении данныхъ",languageLabel:"Языкъ",squirrelReplay:"Призови вѣверицу",skip:"Минѫти",
  cookie:{text:"Съ твоимъ соизволениемъ мѣримъ пользу страницъ. Рекламныхъ знаменъ нѣсть.",accept:"Соизволяю",decline:"Токмо нужное",link:"О хранении"},creativeNote:"Творьческо приближение, не ученая реконструкциѧ",
  privacy:{...english.privacy,title:"О хранении данныхъ",updated:"Обновлено 21 октября 2026",back:"Назадъ"}
};

const latin = {
  ...english, code:"la", htmlLang:"la", route:"/la/", label:"LA", name:"Latine", indexable:false, experimental:true,
  metaTitle:"Nuts Games — Ars ludorum et cooperatio",metaDescription:"Ars, animatio et subsidium productionis ludorum, cum experientia et instrumentis novis.",
  nav:["Quid agimus","Quomodo agimus","Experientia","Opera","Cur nuces?","Pretium pete"],
  hero:{eyebrow:"OPUS SERIUM · PAULLUM INSANIAE",title:"Ars ludorum. Ludorum fabricatio. Paullumque insaniae.",body:"Studia ludorum adiuvamus ut fingant, aedificent atque edant — experientia productionis, ingenio creativo et instrumentis AI prudenter adhibitis.",primary:"Pretium pete",secondary:"Quid agimus",badges:["Productio B2B","Iudicium humanum","AI cum regulis"]},
  section:{services:"QUID AGIMUS",process:"QUOMODO AGIMUS",experience:"EXPERIENTIA POST NUCES",work:"FACULTATES ELECTAE",why:"CUR NUCES?",contact:"PRETIUM PETE"},
  servicesTitle:"Productio flexibilis sine cortice corporato.",servicesIntro:"Ab arte definita incipe; animationem, cooperationem technicam aut regimen productionis adde ubi opus postulat.",
  services:[{n:"01",title:"Ars et animatio ludorum",body:"Personae 2D, scaenae, symbola, UI, animatio Spine, adaptationes atque res ad integrationem paratae.",tags:["Ars 2D","Spine","UI/UX"]},{n:"02",title:"Productio iGaming",body:"Themata, systemata visualia, varietates animationis et materia nova, finibus atque inspectionibus claris.",tags:["Slot art","Varietates","Productio"]},{n:"03",title:"Cooperatio technica",body:"Ludi HTML5 et navigatorii, prototypa interactiva, productio technica et societates ad mandatum verum compositae.",tags:["HTML5","Prototypa","Traditio"]},{n:"04",title:"Productio ope AI",body:"Exploratio notionum, automatio, auxilium codicis et QA — semper iudicio humano et regulis clientis subiecta.",tags:["Notiones","Automatio","QA"]}],
  processTitle:"A mandato primo ad fasciculum ultimum perspicuum.",processIntro:"Neque copias fingimus neque gradus occultamus. Homines, instrumenta et probationes ante initium constituimus.",process:["Mandatum","Fines","Aestimatio","Prototypum / productio","Recognitio","Traditio"],
  experienceTitle:"Novum studium. Manus peritae.",experienceIntro:"Nuts Games recens studium est. Fides ex experientia ducum nascitur, non ex prioribus societatibus falso clientibus appellatis.",
  experience: latinExperience,
  sourceNote:"Ex curriculum Kirill Goncharik et fontibus publicis verificatum. Experientia prior, non opera clientium Nuts Games.",
  workTitle:"Ostendimus quomodo cogitemus.",workIntro:"Notiones originales ad Nuts Games factae. Amplitudinem artis et rationem productionis monstrant; tituli clientium editi non sunt.",workLabel:"Notio illustrativa",
  work:[{title:"Personae et praemia",body:"Personae expressivae, formae perspicuae et motus animationi parati."},{title:"Mundus et actio",body:"Ambitus navigatorius cum focis validis et productione modulari."},{title:"Exploratio ope AI",body:"Investigatio visualis celeris in ordinem humanum et recognoscendum conversa."}],
  whyTitle:"Iucundi in opere. Serii in traditione.",whyIntro:"Studium congruae magnitudinis aedificamus, ubi iudicium seniorum operi proximum manet.",why:[["Ductus peritus","Productio, pecunia, clientes et traditio a peritis reguntur."],["Sine theatro","Sermo brevis, concessiones manifestae et documenta utilia."],["Instrumenta moderna","AI ubi prodest, ars tradita ubi vincit, tutela IP pro singulis operibus."],["Turma apta","Nucleus intentus cum peritis et sociis probatis, ante promissa definitus."]],
  contactTitle:"Dic nobis quid aedifices.",contactIntro:"Formam quaestionis mitte. Cum quaestionibus rectis et via aestimationis reali redibimus.",
  form:{...english.form,name:"Nomen",email:"Epistula electronica operis",company:"Societas / studium",project:"Genus operis",details:"Quid opus est?",budget:"Sumptus (si vis)",timeline:"Tempus (si vis)",consent:"Consentio ut Nuts Games his datis ad rogationem respondendam utatur.",submit:"Mandatum mitte",sending:"Mittitur…",success:"Mandatum receptum est. Mox respondebimus.",error:"Forma mitti non potuit. Per LinkedIn scribe.",select:"Elige"},
  altContact:"Viam directam mavis? Cum Kirill in LinkedIn coniungere.",privacyLink:"De secreto",languageLabel:"Lingua",squirrelReplay:"Sciurum evoca",skip:"Praeteri",
  cookie:{text:"Tuo consensu analytica ad paginas utiles intellegendas utimur. Nulla nota ad vendendum.",accept:"Analytica permitte",decline:"Necessaria tantum",link:"Plura"},creativeNote:"Adaptatio Latina creativa",
  privacy:{...english.privacy,title:"De secreto",updated:"Renovatum die XXI Octobris MMXXVI",back:"Ad situm redi"}
};

const elvish = {
  ...english, code:"elf", htmlLang:"qaa-x-nuts-elf", route:"/elf/", label:"ELF", name:"Veyrûn", indexable:false, experimental:true,
  metaTitle:"Nuts Games — Vaela gamecraft",metaDescription:"An original fantasy-language edition of the Nuts Games production studio site.",
  nav:["Vaela sen","Talan sen","Orin","Seyra","Nae Nûts?","Bid vae"],
  hero:{eyebrow:"DURAN CRAFT · LIRA VEY",title:"Vaela art. Vaela forge. Lira veyra.",body:"Sen tal game-forgers na make, build ar sail — orin-led craft, bright hands, ar AI tools bound by clear law.",primary:"Bid vae",secondary:"Vaela sen",badges:["Guild craft","Hand-seen","AI lawbound"]},
  section:{services:"VAELA SEN",process:"TALAN SEN",experience:"ORIN BEHIND NÛTS",work:"SEYRA CRAFT",why:"NAE NÛTS?",contact:"BID VAE"},
  servicesTitle:"Swift craft, no iron court-shell.",servicesIntro:"Begin with one clear art-seed. Add motion, co-forging or production command when the quest asks.",
  services:[{n:"01",title:"Game art ar motion",body:"2D kin, worlds, slot sigils, UI, Spine motion, reshaping and forge-ready asset sets.",tags:["2D art","Spine","UI/UX"]},{n:"02",title:"iGaming forge",body:"Themes, sight-systems, motion variants and added content with clear bounds and review gates.",tags:["Slot art","Variants","Forge"]},{n:"03",title:"Co-forging",body:"HTML5 and browser realms, living prototypes, technical command and development alliances shaped to the true brief.",tags:["HTML5","Prototypes","Sail"]},{n:"04",title:"AI-aided craft",body:"Fast vision search, automation, code aid and QA — hand-reviewed and bound to client IP law.",tags:["Vision","Automation","QA"]}],
  processTitle:"Clear from first word to final rune.",processIntro:"No phantom hosts. No hidden milestones. We bind the team, tools and review path before the forge is lit.",process:["Word","Bounds","Count","Prototype / forge","Seeing","Sail"],
  experienceTitle:"New guild. Seasoned hands.",experienceIntro:"Nuts Games is a young banner. Trust comes from the leaders’ prior journeys, never from naming old realms as Nuts Games clients.",
  experience: sharedExperience.map((item) => ({ ...item, title: "Old-road command", body: `${item.company} orin-path: ${item.body}` })),
  sourceNote:"Grounded in Kirill’s operating record and open company lore. Old-road experience, never Nuts Games client work.",
  workTitle:"See how our minds forge.",workIntro:"Original vision-studies made for Nuts Games. They show range and craft-thinking; they are not shipped client realms.",workLabel:"Vision study",
  work:[{title:"Kin ar reward",body:"Bright characters, clear shadows and motion-ready story beats."},{title:"Realm ar touch",body:"A browser-first world with strong stars and modular craft."},{title:"AI vision-search",body:"Fast sight-finding shaped into a controlled, hand-seen production path."}],
  whyTitle:"Bright companions. Steady delivery.",whyIntro:"We build a right-sized guild where seasoned judgement stays beside the craft.",why:[["Seasoned command","Craft, coin, clients and delivery stay with hands that know the road."],["No court-play","Lean words, visible trade-offs and useful records."],["New tools, clear law","AI where fitting, classic craft where stronger, project-bound IP shields."],["The fitting party","A focused core plus verified specialists and allies, named before the vow."]],
  contactTitle:"Speak the realm you would build.",contactIntro:"Send the shape of your quest. We return with true questions and a grounded scope path.",
  form:{...english.form,name:"Your name",email:"Guild mail",company:"Guild / studio",project:"Quest kind",details:"What must be forged?",budget:"Coin range (optional)",timeline:"Moon-path (optional)",consent:"I allow Nuts Games to use these words only to answer my quest.",submit:"Send the word",sending:"Sending…",success:"Word received. We answer soon.",error:"The sending rune failed. Find us on LinkedIn.",select:"Choose"},
  altContact:"Prefer the straight path? Find Kirill on LinkedIn.",privacyLink:"Data oath",languageLabel:"Tongue",squirrelReplay:"Call the tail-runner",skip:"Pass",
  cookie:{text:"With leave, we count useful paths. No ad-runes.",accept:"Allow counting",decline:"Needful only",link:"Read the oath"},creativeNote:"Original fantasy language · not Tolkien canon",
  privacy:{...english.privacy,title:"Data oath",updated:"Renewed on 21 October 2026",back:"Return to the hall"}
};

const nuttish = {
  ...english, code:"nut", htmlLang:"qaa-x-nuttish", route:"/nut/", label:"NUT", name:"Nuttish", indexable:false, experimental:true,
  metaTitle:"Nuts Games — Kraka, forge & boom",metaDescription:"The original Nuttish-language edition of the Nuts Games studio site.",
  nav:["Wot we kraka","How we roll","Old shells","Shiny work","Why nuts?","Gimme bid"],
  hero:{eyebrow:"HARD SHELL · WILD SPARK",title:"Game kraka. Code forge. Tiny boom-cha.",body:"We help game-folk dream, build and ship — old-shell wisdom, bright paws and AI tools that stay on the leash.",primary:"Gimme bid",secondary:"See the kraka",badges:["Biz-nuts", "Paw-checked", "AI leashed"]},
  section:{services:"WOT WE KRAKA",process:"HOW WE ROLL",experience:"OLD SHELLS, REAL MILES",work:"SHINY WORK",why:"WHY NUTS?",contact:"GIMME BID"},
  servicesTitle:"Big craft. Light shell. Zero blah-blah.",servicesIntro:"Start with one crunchy art brief. Add wiggle, code or a bigger nut-crew when the build needs it.",
  services:[{n:"01",title:"Pretty bits & wiggles",body:"2D folk, lands, slot shinies, UI, Spine wiggles, resizing and assets ready for the code-hole.",tags:["2D kraka","Spine","UI/UX"]},{n:"02",title:"iGaming batch",body:"Themes, look-systems, wiggle variants and extra content with clear piles, checks and handoffs.",tags:["Slot shine","Variants","Batch"]},{n:"03",title:"Code-cobuild",body:"HTML5 and browser games, clicky prototypes, tech production and partner builds fitted to the real ask.",tags:["HTML5","Proto","Ship"]},{n:"04",title:"AI nut-engine",body:"Fast idea sniffing, task automation, code help and QA — always paw-checked and inside client rules.",tags:["Sniff","Auto","QA"]}],
  processTitle:"No fog between hello and shipped.",processIntro:"No ghost crews. No mystery piles. We name the paws, tools and check-gates before the first crack.",process:["Tell", "Pile", "Count", "Make", "Sniff-check", "Ship"],
  experienceTitle:"Fresh bag. Seasoned nuts.",experienceIntro:"Nuts Games is new. The miles belong to its leaders’ earlier roads; old companies never become Nuts Games clients by magic.",
  experience: sharedExperience.map((item) => ({ ...item, title: "Old-shell miles", body: `${item.company} trail: ${item.body}` })),
  sourceNote:"Sniff-checked against Kirill’s operating CV and open company records. Old-shell miles, not Nuts Games client work.",
  workTitle:"Look at our brain-crunch.",workIntro:"Fresh concept shinies made for Nuts Games. They show range and process, not imaginary shipped client games.",workLabel:"Concept shiny",
  work:[{title:"Folk & shinies",body:"Loud characters, clear shapes and wiggle-ready moments."},{title:"World & click",body:"A browser-first playground built from tidy reusable chunks."},{title:"AI sniff-lab",body:"Fast visual searching turned into a safe, paw-checked craft line."}],
  whyTitle:"Good chaos. Clean handoff.",whyIntro:"We keep the crew right-sized so old-shell judgement stays close to the actual pixels.",why:[["Old-shell wisdom","Scope, coins, clients and shipping are handled by paws that know the trail."],["No blah-blah","Short talk, visible trade-offs and docs that earn their acorns."],["New tricks, clear rules","AI when useful, hand-craft when better, IP kept in its own jar."],["Right nut-crew","A tight core plus checked specialists and partners — counted before promises."]],
  contactTitle:"Whatcha building, nut-friend?",contactIntro:"Toss us the shape of it. We come back with sharp questions and a real scope-count.",
  form:{...english.form,name:"Your call-name",email:"Work ping",company:"Nut-house / studio",project:"Build kind",details:"What needs cracking?",budget:"Coin pile (optional)",timeline:"When-ish? (optional)",consent:"Yup — Nuts Games may use this only to answer my ping.",submit:"Toss the brief",sending:"Tossing…",success:"Caught it. We’ll ping back soon.",error:"Brief bounced. Use LinkedIn while we fix the chute.",select:"Pick one"},
  altContact:"Want the short tunnel? Ping Kirill on LinkedIn.",privacyLink:"Secret jar",languageLabel:"Lingo",squirrelReplay:"Summon tail-zoom",skip:"Skip-a",cookie:{text:"Say yes and we count which pages help. No ad-goblins.",accept:"Count away",decline:"Bare nuts only",link:"Secret jar"},creativeNote:"Nuttish v1.0 · original house language",
  privacy:{...english.privacy,title:"The secret jar",updated:"Repacked 21 October 2026",back:"Back to the treehouse"}
};

export const locales = { en: english, ru: russian, sq: albanian, cu: churchSlavonic, la: latin, elf: elvish, nut: nuttish };

