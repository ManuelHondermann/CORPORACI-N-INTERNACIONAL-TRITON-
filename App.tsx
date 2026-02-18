
import React, { useState, useEffect } from 'react';
import { HashRouter as Router, Routes, Route as RouterRoute, Link, useLocation } from 'react-router-dom';
import { 
  Menu, X, Phone, MapPin, Tractor, Hammer, Construction, 
  ShieldCheck, ArrowRight, Layout, Award, Star, FileText, Globe,
  CheckCircle2, Facebook, Linkedin, Instagram, Mail,
  ChevronDown, ChevronUp, Clock, Target, Rocket, Send, Check,
  AlertTriangle, HardHat, Navigation, Mountain, Droplets,
  Search, Info, FileCheck, Building2, Truck, Plus, History,
  Route as RouteIcon, Cog, Zap, Activity, ShieldPlus, Layers, Cpu,
  ExternalLink, MousePointer2, Pickaxe, Waves, Factory, Sun, Trophy, Trash2
} from 'lucide-react';

// --- Utilidades ---
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const ScrollProgress = () => {
  const [scroll, setScroll] = useState(0);
  useEffect(() => {
    const onScroll = () => {
      const winScroll = document.documentElement.scrollTop;
      const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      setScroll((winScroll / height) * 100);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return <div className="fixed top-0 left-0 w-full h-1.5 z-[110] pointer-events-none"><div className="h-full bg-[#e67e22] shadow-[0_0_10px_#e67e22] transition-all duration-150" style={{ width: `${scroll}%` }} /></div>;
};

// --- Header ---
const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const links = [
    { name: 'Inicio', path: '/' },
    { name: 'Servicios', path: '/servicios' },
    { name: 'Proyectos', path: '/proyectos' },
    { name: 'Nosotros', path: '/nosotros' },
    { name: 'Recursos', path: '/recursos' },
    { name: 'Contacto', path: '/contacto' },
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white/95 backdrop-blur-md h-28 shadow-lg border-b-2 border-[#e67e22]/10 transition-all duration-300">
      <div className="container mx-auto px-6 h-full flex items-center justify-between">
        <Link to="/" className="group flex items-center gap-6">
          <div className="relative h-20 w-auto flex items-center justify-center transition-all duration-500 group-hover:scale-110">
            <img 
              src="https://i.ibb.co/WWvfHP01/Whats-App-Image-2026-02-07-at-7-13-14-PM.jpg" 
              alt="Logo Tritón SAC" 
              className="h-full w-auto object-contain mix-blend-multiply"
            />
          </div>
          <div className="flex flex-col">
            <span className="text-[#0a192f] text-3xl font-black font-industrial leading-none tracking-tighter uppercase">Tritón S.A.C.</span>
            <span className="text-[8px] font-black text-[#e67e22] uppercase tracking-[0.5em] mt-1">Corporación Internacional</span>
          </div>
        </Link>

        <nav className="hidden lg:flex items-center gap-10">
          <ul className="flex gap-8">
            {links.map((link) => (
              <li key={link.name}>
                <Link to={link.path} className={`text-[10px] font-bold uppercase tracking-[0.2em] py-1 transition-all relative group ${location.pathname === link.path ? 'text-[#e67e22]' : 'text-slate-500 hover:text-[#0a192f]'}`}>
                  {link.name}
                  <span className={`absolute -bottom-1 left-0 h-0.5 bg-[#e67e22] transition-all duration-300 ${location.pathname === link.path ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
                </Link>
              </li>
            ))}
          </ul>
          <Link to="/contacto" className="bg-[#0a192f] text-white px-8 py-3 font-black text-[10px] uppercase tracking-[0.2em] hover:bg-[#e67e22] transition-all rounded-sm shadow-md">
            COTIZAR PROYECTO
          </Link>
        </nav>

        <button className="lg:hidden text-[#0a192f] p-2 hover:bg-slate-100 rounded-full transition-colors" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={32} /> : <Menu size={32} />}
        </button>
      </div>

      <div className={`lg:hidden fixed inset-0 bg-[#0a192f] z-[120] flex flex-col items-center justify-center gap-6 transition-all duration-500 ease-in-out ${isOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-full'}`}>
        <button className="absolute top-8 right-8 text-white p-2 hover:bg-white/10 rounded-full transition-all" onClick={() => setIsOpen(false)}>
          <X size={40}/>
        </button>
        <div className="flex flex-col items-center gap-4 w-full px-10">
          {links.map((link, index) => (
            <Link 
              key={link.name} 
              to={link.path} 
              onClick={() => setIsOpen(false)} 
              className={`group flex items-center gap-6 text-5xl md:text-7xl font-black font-industrial uppercase transition-all duration-300 hover:scale-105 ${location.pathname === link.path ? 'text-[#e67e22]' : 'text-white'}`}
            >
              <span className="text-xs font-black text-[#e67e22]/30 group-hover:text-[#e67e22] transition-colors">0{index + 1}</span>
              {link.name}
            </Link>
          ))}
          <Link to="/contacto" onClick={() => setIsOpen(false)} className="mt-8 bg-[#e67e22] text-white w-full max-w-xs py-6 text-center font-black text-sm uppercase tracking-[0.4em] shadow-2xl">
            COTIZAR AHORA
          </Link>
        </div>
      </div>
    </header>
  );
};

const SectionHeading = ({ title, label, centered = false, dark = false }: { title: string, label: string, centered?: boolean, dark?: boolean }) => (
  <div className={`mb-16 ${centered ? 'text-center' : ''}`}>
    <div className={`flex items-center gap-4 mb-4 ${centered ? 'justify-center' : ''}`}>
      <div className="w-12 h-1 bg-[#e67e22]"></div>
      <span className={`text-[10px] font-black uppercase tracking-[0.5em] ${dark ? 'text-white/50' : 'text-slate-400'}`}>{label}</span>
    </div>
    <h2 className={`text-4xl md:text-6xl font-black font-industrial leading-none tracking-tight uppercase ${dark ? 'text-white' : 'text-[#0a192f]'}`}>
      {title}
    </h2>
  </div>
);

const ServiceCard = ({ icon: Icon, title, label, description, items, theme = 'light' }: any) => (
  <div className={`p-10 border transition-all duration-500 group h-full flex flex-col ${theme === 'dark' ? 'bg-[#0a192f] border-white/10 text-white' : 'bg-white border-slate-100 hover:shadow-2xl hover:border-[#e67e22]'}`}>
    <div className={`w-16 h-16 mb-8 flex items-center justify-center transition-transform group-hover:scale-110 ${theme === 'dark' ? 'bg-white/5' : 'bg-slate-50'}`}>
      <Icon className="text-[#e67e22]" size={32} />
    </div>
    {label && <span className="text-[9px] font-black text-[#e67e22] uppercase tracking-[0.4em] mb-2">{label}</span>}
    <h3 className={`text-2xl font-black font-industrial mb-4 tracking-wide ${theme === 'dark' ? 'text-white' : 'text-[#0a192f]'}`}>{title}</h3>
    <p className={`text-sm font-light leading-relaxed mb-8 flex-grow ${theme === 'dark' ? 'text-slate-400' : 'text-slate-500'}`}>{description}</p>
    <ul className="space-y-3">
      {items.map((item: string, i: number) => (
        <li key={i} className="flex items-start gap-3 text-[10px] font-bold uppercase tracking-widest opacity-80 group-hover:opacity-100 transition-opacity">
          <CheckCircle2 size={14} className="text-[#e67e22] shrink-0 mt-0.5" /> 
          <span className="leading-tight">{item}</span>
        </li>
      ))}
    </ul>
  </div>
);

// --- Componente de Mapa Corregido ---
const LocationMap = () => (
  <section className="py-24 bg-slate-50 overflow-hidden">
    <div className="container mx-auto px-6">
      <SectionHeading title="NUESTRA SEDE" label="UBICACIÓN ESTRATÉGICA" centered />
      <div className="relative group max-w-6xl mx-auto">
        <div className="absolute -inset-4 bg-[#e67e22]/5 blur-xl group-hover:bg-[#e67e22]/10 transition-all duration-700"></div>
        <div className="relative w-full h-[500px] bg-slate-200 border border-slate-200 shadow-2xl overflow-hidden group">
          <iframe 
            title="Sede Central Tritón SAC"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3899.6462883344693!2d-76.97534832432658!3d-12.22131388794825!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9105bbfdf8e55503%3A0x97b5fe2bcfa1b919!2sCONCRETERA%20GRAOCON%20-%20CONCRETO%20PREMEZCLADO!5e0!3m2!1ses!2spe!4v1739500000000!5m2!1ses!2spe" 
            width="100%" 
            height="100%" 
            style={{ border: 0, filter: 'grayscale(1) contrast(1.2) opacity(0.8)' }} 
            allowFullScreen={true} 
            loading="lazy"
            className="group-hover:filter-none transition-all duration-700"
          ></iframe>
          <div className="absolute bottom-4 right-4 md:bottom-8 md:right-8 bg-[#0a192f] p-8 text-white max-w-xs shadow-2xl border-l-4 border-[#e67e22] z-20">
            <h4 className="text-xl font-black font-industrial mb-2 uppercase tracking-tight">VILLA EL SALVADOR</h4>
            <p className="text-[10px] font-bold text-[#e67e22] uppercase tracking-[0.2em] mb-4">Planta Operativa</p>
            <p className="text-xs font-light text-slate-400 leading-relaxed uppercase tracking-widest mb-4">CONCRETERA GRAOCON - Villa EL Salvador 15842, Lima.</p>
            <p className="text-lg font-black font-industrial">+51 927 571 365</p>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const HomePage = () => (
  <main className="animate-reveal">
    <section className="relative h-screen flex items-center md:items-end overflow-hidden bg-[#0a192f]">
      <div className="absolute inset-0 z-0">
        <img 
          src="https://i.ibb.co/mC6frpPk/Whats-App-Image-2026-02-12-at-11-25-15-AM.jpg" 
          className="w-full h-full object-cover object-center" 
          alt="Ingeniería Tritón SAC" 
        />
        <div className="absolute inset-0 bg-[#0a192f]/40"></div>
        <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-[#0a192f] via-[#0a192f]/60 to-transparent"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10 pb-12 md:pb-20">
        <div className="max-w-4xl">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-1 bg-[#e67e22]"></div>
            <span className="text-white font-black text-[10px] tracking-[0.5em] uppercase drop-shadow-md">Excelencia en Ingeniería de Suelos</span>
          </div>
          <h1 className="text-white text-5xl md:text-[80px] font-black font-industrial leading-[0.9] mb-4 tracking-tighter drop-shadow-2xl">
            TRITÓN <span className="text-[#e67e22]">S.A.C.</span>
          </h1>
          <div className="max-w-2xl bg-black/20 backdrop-blur-sm border-l-4 border-[#e67e22] pl-6 py-4 mb-8">
            <p className="text-white text-base md:text-xl font-light leading-relaxed">
              Comprometidos con la solidez de sus proyectos. Ingeniería de suelos, demolición técnica y gestión ambiental legal para la industria peruana.
            </p>
          </div>
          <div className="flex flex-wrap gap-4 md:gap-6">
            <Link to="/servicios" className="bg-[#e67e22] text-white px-10 py-5 font-black uppercase text-[10px] tracking-[0.3em] hover:bg-white hover:text-[#0a192f] transition-all shadow-xl flex items-center gap-3">
              NUESTROS SERVICIOS <ArrowRight size={14}/>
            </Link>
            <Link to="/contacto" className="border-2 border-white text-white px-10 py-5 font-black uppercase text-[10px] tracking-[0.3em] hover:bg-white hover:text-[#0a192f] transition-all backdrop-blur-[2px]">
              SOLICITAR COTIZACIÓN
            </Link>
          </div>
        </div>
      </div>
    </section>

    <section className="py-32 bg-white">
      <div className="container mx-auto px-6">
        <SectionHeading title="PODER OPERATIVO" label="CAPACIDAD TÉCNICA" centered />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <ServiceCard 
            icon={Tractor}
            title="Movimiento de Tierras"
            description="Preparación profesional del terreno natural para cimientos estables y duraderos."
            items={["Excavaciones Masivas", "Sótanos Profundos", "Nivelación Láser", "Rellenos Técnicos"]}
          />
          <ServiceCard 
            icon={Hammer}
            title="Demoliciones"
            description="Ejecución controlada de derribos estructurales con máxima seguridad operativa."
            items={["Edificios Completos", "Estructuras Metálicas", "Pavimentos", "Remoción Selectiva"]}
          />
          <ServiceCard 
            icon={Truck}
            title="Gestión de Residuos"
            description="Transporte y eliminación legal de desmonte con certificación ante el MINAM."
            items={["Acreditación Legal", "Flota Certificada", "Disposición Final", "Responsabilidad Ambiental"]}
          />
        </div>
      </div>
    </section>
    <LocationMap />
  </main>
);

const App = () => (
  <Router>
    <ScrollToTop />
    <ScrollProgress />
    <div className="flex flex-col min-h-screen">
      <Header />
      <div className="flex-grow pt-4">
        <Routes>
          <RouterRoute path="/" element={<HomePage />} />
          <RouterRoute path="/servicios" element={<div className="pt-40 px-6 container mx-auto"><SectionHeading title="Servicios" label="Tritón SAC" /></div>} />
          <RouterRoute path="/contacto" element={<div className="pt-40 px-6 container mx-auto"><SectionHeading title="Contacto" label="Escríbenos" /></div>} />
          <RouterRoute path="/proyectos" element={<div className="pt-40 px-6 container mx-auto"><SectionHeading title="Proyectos" label="Obras Realizadas" /></div>} />
          <RouterRoute path="/nosotros" element={<div className="pt-40 px-6 container mx-auto"><SectionHeading title="Nosotros" label="Nuestra Historia" /></div>} />
          <RouterRoute path="/recursos" element={<div className="pt-40 px-6 container mx-auto"><SectionHeading title="Recursos" label="Biblioteca Técnica" /></div>} />
        </Routes>
      </div>
      <footer className="bg-[#0a192f] text-white py-20 border-t-8 border-[#e67e22]">
        <div className="container mx-auto px-6 text-center">
          <h3 className="text-3xl font-black font-industrial mb-4">TRITÓN S.A.C.</h3>
          <p className="text-slate-400 text-sm tracking-widest uppercase">© {new Date().getFullYear()} Corporación Internacional</p>
        </div>
      </footer>
    </div>
  </Router>
);

export default App;
