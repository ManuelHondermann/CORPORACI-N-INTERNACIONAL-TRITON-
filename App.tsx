
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

// --- Componentes Globales ---

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
          
          <div className="mt-12 w-full max-w-xs h-1 bg-white/10 relative overflow-hidden">
            <div className="absolute top-0 left-0 h-full bg-[#e67e22] w-1/3 animate-pulse"></div>
          </div>
          
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

interface ServiceCardProps {
  icon: any;
  title: string;
  label?: string;
  description: string;
  items: string[];
  theme?: 'light' | 'dark';
}

const ServiceCard: React.FC<ServiceCardProps> = ({ icon: Icon, title, label, description, items, theme = 'light' }) => (
  <div className={`p-10 border transition-all duration-500 group h-full flex flex-col ${theme === 'dark' ? 'bg-[#0a192f] border-white/10 text-white' : 'bg-white border-slate-100 hover:shadow-2xl hover:border-[#e67e22]'}`}>
    <div className={`w-16 h-16 mb-8 flex items-center justify-center transition-transform group-hover:scale-110 ${theme === 'dark' ? 'bg-white/5' : 'bg-slate-50'}`}>
      <Icon className="text-[#e67e22]" size={32} />
    </div>
    {label && <span className="text-[9px] font-black text-[#e67e22] uppercase tracking-[0.4em] mb-2">{label}</span>}
    <h3 className={`text-2xl font-black font-industrial mb-4 tracking-wide ${theme === 'dark' ? 'text-white' : 'text-[#0a192f]'}`}>{title}</h3>
    <p className={`text-sm font-light leading-relaxed mb-8 flex-grow ${theme === 'dark' ? 'text-slate-400' : 'text-slate-500'}`}>{description}</p>
    <ul className="space-y-3">
      {items.map((item, i) => (
        <li key={i} className="flex items-start gap-3 text-[10px] font-bold uppercase tracking-widest opacity-80 group-hover:opacity-100 transition-opacity">
          <CheckCircle2 size={14} className="text-[#e67e22] shrink-0 mt-0.5" /> 
          <span className="leading-tight">{item}</span>
        </li>
      ))}
    </ul>
  </div>
);

const DetailModal = ({ isOpen, onClose, title, content }: { isOpen: boolean, onClose: () => void, title: string, content: React.ReactNode }) => {
  if (!isOpen) return null;
  return (
    <div className="fixed inset-0 z-[200] flex items-center justify-center p-6 bg-[#0a192f]/90 backdrop-blur-md">
      <div className="bg-white w-full max-w-2xl p-12 relative shadow-2xl border-t-8 border-[#e67e22]">
        <button onClick={onClose} className="absolute top-6 right-6 text-[#0a192f] hover:text-[#e67e22] transition-colors">
          <X size={32} />
        </button>
        <div className="flex items-center gap-4 mb-8">
          <div className="w-12 h-1 bg-[#e67e22]"></div>
          <span className="text-[10px] font-black uppercase tracking-[0.5em] text-slate-400">LECTURA TÉCNICA</span>
        </div>
        <h2 className="text-3xl font-black font-industrial text-[#0a192f] mb-8 uppercase">{title}</h2>
        <div className="prose prose-slate max-w-none text-slate-600 font-light leading-relaxed">
          {content}
        </div>
        <button onClick={onClose} className="mt-12 w-full py-4 bg-[#0a192f] text-white font-black text-xs uppercase tracking-[0.3em] hover:bg-[#e67e22] transition-all">
          CERRAR DOCUMENTO
        </button>
      </div>
    </div>
  );
};

const LocationMap = () => (
  <section className="py-24 bg-slate-50 overflow-hidden">
    <div className="container mx-auto px-6">
      <SectionHeading title="NUESTRA SEDE" label="UBICACIÓN ESTRATÉGICA" centered />
      <div className="relative group max-w-6xl mx-auto">
        <div className="absolute -inset-4 bg-[#e67e22]/5 blur-xl group-hover:bg-[#e67e22]/10 transition-all duration-700"></div>
        <div className="relative w-full h-[500px] bg-slate-200 border border-slate-100 shadow-2xl overflow-hidden grayscale contrast-125 hover:grayscale-0 transition-all duration-1000">
          <iframe 
            title="Sede Central Tritón SAC"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3899.6462883344693!2d-76.97534832432658!3d-12.22131388794825!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9105bbfdf8e55503%3A0x97b5fe2bcfa1b919!2sCONCRETERA%20GRAOCON%20-%20CONCRETO%20PREMEZCLADO!5e0!3m2!1ses!2spe!4v1739500000000!5m2!1ses!2spe" 
            width="100%" 
            height="100%" 
            style={{ border: 0 }} 
            allowFullScreen={true} 
            loading="lazy"
          ></iframe>
          <div className="absolute bottom-0 right-0 md:bottom-8 md:right-8 bg-[#0a192f] p-8 text-white max-w-xs shadow-2xl border-l-4 border-[#e67e22] z-20">
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
          className="w-full h-full object-cover object-center opacity-100" 
          alt="Ingeniería Tritón SAC - Pirámides" 
        />
        <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-[#0a192f]/80 via-transparent to-transparent"></div>
        <div className="absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-[#0a192f]/50 via-transparent to-transparent"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10 pb-12 md:pb-20">
        <div className="max-w-4xl">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-1 bg-[#e67e22]"></div>
            <span className="text-white font-black text-[10px] tracking-[0.5em] uppercase drop-shadow-md">Excelencia en Ingeniería de Suelos</span>
          </div>
          
          <h1 className="text-white text-5xl md:text-[80px] font-black font-industrial leading-[0.9] mb-4 tracking-tighter drop-shadow-[0_5px_15px_rgba(0,0,0,0.8)]">
            TRITÓN <span className="text-[#e67e22]">S.A.C.</span>
          </h1>
          
          <div className="max-w-2xl bg-black/10 backdrop-blur-sm border-l-4 border-[#e67e22] pl-6 py-4 mb-8">
            <p className="text-white text-base md:text-xl font-light leading-relaxed drop-shadow-lg">
              Comprometidos con la solidez de sus proyectos. Ingeniería de suelos, demolición técnica y gestión ambiental legal para la industria peruana.
            </p>
          </div>
          
          <div className="flex flex-wrap gap-4 md:gap-6">
            <Link to="/servicios" className="bg-[#e67e22] text-white px-10 py-5 font-black uppercase text-[10px] tracking-[0.3em] hover:bg-white hover:text-[#0a192f] transition-all shadow-xl flex items-center gap-3 group">
              NUESTROS SERVICIOS <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform"/>
            </Link>
            <Link to="/contacto" className="border-2 border-white text-white px-10 py-5 font-black uppercase text-[10px] tracking-[0.3em] hover:bg-white hover:text-[#0a192f] transition-all backdrop-blur-[2px] shadow-xl">
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

const ServicesPage = () => {
  const services = [
    {
      title: "1. ELIMINACIÓN DE DESMONTE",
      label: "GESTIÓN Y DISPOSICIÓN FINAL LEGAL",
      desc: "Retiramos, transportamos y disponemos sus residuos de construcción y demolición con responsabilidad ambiental y certificación legal.",
      icon: Trash2,
      items: [
        "Carga, transporte y disposición en vertederos autorizados",
        "Entrega de documentación con respaldo normativo",
        "Manejo de residuos de obra gris, demolición y acabados",
        "Obra limpia, sin multas, sin riesgos"
      ]
    },
    {
      title: "2. MOVIMIENTO DE TIERRA",
      label: "PREPARACIÓN Y NIVELACIÓN",
      desc: "Ejecutamos trabajos técnicos de excavación, relleno, compactación y nivelación para adecuar el terreno natural a las exigencias de su proyecto.",
      icon: Tractor,
      items: [
        "Excavación de terrenos y apertura de zanjas",
        "Relleno, nivelación y compactación de suelos",
        "Preparación de plataformas para construcción",
        "Control topográfico y nivelación final"
      ]
    },
    {
      title: "3. DEMOLICIÓN CONTROLADA",
      label: "DERRIBO PROFESIONAL SEGURO",
      desc: "Ejecutamos demoliciones totales, parciales o selectivas con precisión, seguridad y estricto cumplimiento normativo.",
      icon: Hammer,
      items: [
        "Demolición total de edificios y naves industriales",
        "Demolición parcial o selectiva (muros, losas)",
        "Elementos de concreto (tanques, chimeneas)",
        "Predemolición: retiro certificado de materiales peligrosos"
      ]
    },
    {
      title: "4. PREPARACIÓN DE TERRENOS",
      label: "BASES SÓLIDAS PARA CONSTRUCCIÓN",
      desc: "Transformamos terrenos en bruto en superficies estables, niveladas y listas para recibir cimentación técnica.",
      icon: Construction,
      items: [
        "Estudio topográfico y análisis de suelos profesional",
        "Limpieza integral, desbroce y retiro de obstáculos",
        "Corte, relleno y compactación por capas técnicas",
        "Instalación de drenajes y perfilado de subrasante"
      ]
    },
    {
      title: "5. ESTABILIZACIÓN DE SUELOS",
      label: "SOLUCIÓN TÉCNICA PARA TERRENOS DÉBILES",
      desc: "Aplicamos tratamientos físico-químicos para mejorar la capacidad portante, controlar expansiones y eliminar hundimientos.",
      icon: Droplets,
      items: [
        "Muestreo y análisis riguroso en laboratorio",
        "Dosificación de cal, cemento o químicos estabilizantes",
        "Mezcla en profundidad con maquinaria especializada",
        "Compactación y curado controlado para bases resistentes"
      ]
    },
    {
      title: "6. INFRAESTRUCTURA VIAL",
      label: "CONSTRUCCIÓN DE CAMINOS Y CARRETERAS",
      desc: "Desarrollamos proyectos viales integrales: desde caminos rurales hasta vías de alto tránsito, con enfoque en durabilidad.",
      icon: RouteIcon,
      items: [
        "Estudios de factibilidad y diseño técnico de vías",
        "Movimiento de tierras para trazados viales urbanos/rurales",
        "Bases granulares, subbases y capas de rodadura",
        "Drenajes, bermas y obras complementarias de seguridad"
      ]
    },
    {
      title: "7. OBRAS ESPECIALES",
      label: "PROYECTOS TÉCNICOS A MEDIDA",
      desc: "Soluciones de ingeniería para naves industriales, centros logísticos, parques renovables y áreas de alta precisión.",
      icon: Factory,
      items: [
        "Plataformas logísticas e industriales de gran extensión",
        "Adecuación para parques solares y eólicos renovables",
        "Campos deportivos y golf con perfilado de precisión",
        "Excavación y modelado de reservorios y espejos de agua"
      ]
    }
  ];

  return (
    <main className="pt-48 pb-32 bg-white animate-reveal">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mb-24">
          <SectionHeading title="SERVICIOS" label="CORPORACIÓN INTERNACIONAL TRITÓN S.A.C." />
          <p className="text-xl md:text-2xl text-slate-500 font-light leading-relaxed border-l-4 border-[#e67e22] pl-8">
            Maquinaria moderna, cumplimiento normativo y más de 20 años de experiencia en movimiento de tierras, demoliciones, estabilización de suelos y obras civiles mayores.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, i) => (
            <ServiceCard 
              key={i}
              icon={service.icon}
              title={service.title}
              label={service.label}
              description={service.desc}
              items={service.items}
            />
          ))}
        </div>
        
        <div className="mt-24 p-12 bg-[#0a192f] text-white flex flex-col md:flex-row items-center justify-between gap-10">
           <div className="max-w-xl">
              <h4 className="text-3xl font-black font-industrial mb-4 tracking-tight">¿NECESITA EVALUACIÓN PARA SU PROYECTO?</h4>
              <p className="text-slate-400 font-light text-lg">Realizamos estudios técnicos preliminares para garantizar la viabilidad y eficiencia de sus obras.</p>
           </div>
           <Link to="/contacto" className="bg-[#e67e22] text-white px-12 py-6 font-black uppercase text-xs tracking-[0.4em] hover:bg-white hover:text-[#0a192f] transition-all shadow-xl whitespace-nowrap">
              SOLICITAR EVALUACIÓN
           </Link>
        </div>
      </div>
    </main>
  );
};

const ProjectsPage = () => (
  <main className="pt-48 pb-32 animate-reveal bg-white">
    <div className="container mx-auto px-6">
      <SectionHeading title="OBRAS" label="PORTAFOLIO RECIENTE" centered />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {[
          { title: "Parque Logístico Lurín", desc: "Movimiento de tierras de 120,000 m3 para cimentación de naves.", img: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=1200&q=80" },
          { title: "Demolición Industrial Cercado", desc: "Derribo técnico de planta metalúrgica de 8,000 m2.", img: "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?auto=format&fit=crop&w=1200&q=80" },
          { title: "Defensa Ribereña Sur", desc: "Enrocado y protección de riberas para prevención de desbordes.", img: "https://images.unsplash.com/photo-1541746972996-4e0b0f43e02a?auto=format&fit=crop&w=1200&q=80" },
          { title: "Cimentación Torre Empresarial", desc: "Excavación masiva y muros anclados para edificio comercial.", img: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1200&q=80" }
        ].map((p, i) => (
          <div key={i} className="group relative aspect-video overflow-hidden bg-[#0a192f] cursor-pointer shadow-2xl">
              <img src={p.img} alt={p.title} className="w-full h-full object-cover opacity-50 group-hover:opacity-100 group-hover:scale-110 transition-all duration-1000" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a192f] via-transparent to-transparent opacity-80"></div>
              <div className="absolute bottom-0 left-0 p-12 translate-y-4 group-hover:translate-y-0 transition-all">
                <h4 className="text-white text-3xl font-black font-industrial mb-3 tracking-wide">{p.title}</h4>
                <p className="text-slate-300 text-sm font-light italic mb-8 opacity-0 group-hover:opacity-100 transition-opacity">{p.desc}</p>
                <div className="inline-flex items-center gap-4 text-white text-[10px] font-black uppercase tracking-[0.4em] border-b border-white/40 pb-2">
                    VER DETALLES DE OBRA <ArrowRight size={14}/>
                </div>
              </div>
          </div>
        ))}
      </div>
    </div>
  </main>
);

const AboutUsPage = () => (
  <main className="pt-48 pb-32 animate-reveal bg-white">
    <div className="container mx-auto px-6">
      <div className="max-w-4xl mb-24">
        <SectionHeading title="NOSOTROS" label="CORPORACIÓN INTERNACIONAL TRITÓN S.A.C." />
        <h3 className="text-2xl md:text-3xl font-black font-industrial text-[#0a192f] mb-6 uppercase tracking-tight">Solidez, experiencia y maquinaria moderna para obras civiles de alto nivel.</h3>
        <p className="text-xl text-slate-500 font-light leading-relaxed mb-10">
          Somos una empresa peruana especializada en movimiento de tierras, eliminación de desmonte, demoliciones controladas, estabilización de suelos y preparación de terrenos para proyectos de construcción, infraestructura y energía.
        </p>
        <p className="text-lg text-slate-600 font-light leading-relaxed">
          Contamos con un parque de maquinaria moderna, personal técnico altamente capacitado y un firme compromiso con la calidad, la seguridad y el cumplimiento normativo ambiental.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-32">
        <div className="bg-[#0a192f] text-white p-12 border-l-8 border-[#e67e22] shadow-2xl">
          <div className="flex items-center gap-4 mb-8">
            <Target className="text-[#e67e22]" size={32} />
            <h4 className="text-3xl font-black font-industrial uppercase tracking-tight">NUESTRA MISIÓN</h4>
          </div>
          <p className="text-slate-300 text-lg font-light leading-relaxed">
            Proporcionar soluciones integrales de preparación de terrenos y obras civiles que garanticen bases sólidas, procesos eficientes y resultados duraderos, acompañando a nuestros clientes desde la planificación hasta la entrega final con transparencia, responsabilidad y excelencia operativa.
          </p>
        </div>

        <div className="bg-slate-50 p-12 border-l-8 border-[#0a192f] shadow-xl">
          <div className="flex items-center gap-4 mb-8">
            <Globe className="text-[#0a192f]" size={32} />
            <h4 className="text-3xl font-black font-industrial text-[#0a192f] uppercase tracking-tight">NUESTRA VISIÓN</h4>
          </div>
          <p className="text-slate-500 text-lg font-light leading-relaxed">
            Ser la empresa líder en el Perú en servicios de movimiento de tierras, estabilización de suelos y gestión de residuos de construcción, reconocida por nuestra capacidad técnica, innovación en procesos y compromiso con el desarrollo sostenible del sector infraestructura.
          </p>
        </div>
      </div>

      <div className="relative group overflow-hidden bg-[#0a192f] aspect-[21/9] shadow-2xl">
        <img 
          src="https://images.unsplash.com/photo-1541746972996-4e0b0f43e02a?auto=format&fit=crop&w=1600&q=80" 
          className="w-full h-full object-cover opacity-60 group-hover:opacity-80 transition-all duration-1000 group-hover:scale-105" 
          alt="Equipo Tritón en Obra" 
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a192f] via-transparent to-transparent"></div>
        <div className="absolute bottom-12 left-12">
          <h5 className="text-white text-4xl font-black font-industrial uppercase tracking-tighter mb-2">Más de 20 años</h5>
          <p className="text-[#e67e22] text-sm font-black uppercase tracking-[0.5em]">Construyendo bases sólidas en todo el Perú</p>
        </div>
      </div>
    </div>
  </main>
);

const ResourcesPage = () => {
  const [activeGuide, setActiveGuide] = useState<any>(null);
  const guides = [
    { id: 1, title: "Estabilización de Suelos", label: "Guía de Ingeniería", desc: "Cuándo y por qué es necesario mejorar el terreno natural antes de construir.", icon: Droplets, content: <p>Contenido detallado sobre estabilización de suelos arcillosos y expansivos...</p> },
    { id: 2, title: "Eliminación Legal de Desmonte", label: "Normativa Ambiental", desc: "Gestión responsable y cumplimiento de la normativa de residuos de construcción.", icon: Truck, content: <p>Procesos y certificaciones necesarias ante el MINAM...</p> },
    { id: 3, title: "Demolición Profesional", label: "Métodos Técnicos", desc: "Seguridad y precisión en el desmantelamiento de infraestructuras industriales.", icon: Hammer, content: <p>Análisis de riesgos y metodologías de demolición técnica...</p> }
  ];

  return (
    <main className="pt-48 pb-32 bg-white animate-reveal">
      <div className="container mx-auto px-6">
        <SectionHeading title="BIBLIOTECA" label="RECURSOS TÉCNICOS" centered />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {guides.map((guide) => (
            <div key={guide.id} className="p-10 border border-slate-100 hover:border-[#e67e22] transition-all group flex flex-col shadow-sm hover:shadow-2xl">
              <guide.icon className="text-[#e67e22] mb-8 group-hover:scale-110 transition-transform" size={48} />
              <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-2">{guide.label}</span>
              <h3 className="text-2xl font-black font-industrial text-[#0a192f] mb-6 uppercase tracking-tight leading-none">{guide.title}</h3>
              <p className="text-slate-500 text-sm font-light mb-10 flex-grow">{guide.desc}</p>
              <button 
                onClick={() => setActiveGuide(guide)}
                className="inline-flex items-center gap-4 text-[10px] font-black text-[#0a192f] uppercase tracking-[0.3em] hover:text-[#e67e22] transition-all"
              >
                LEER GUÍA TÉCNICA <ArrowRight size={14}/>
              </button>
            </div>
          ))}
        </div>
      </div>
      <DetailModal isOpen={!!activeGuide} onClose={() => setActiveGuide(null)} title={activeGuide?.title || ""} content={activeGuide?.content} />
    </main>
  );
};

const ContactPage = () => (
  <main className="pt-48 pb-32 animate-reveal bg-white">
    <div className="container mx-auto px-6">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-24">
        <div>
          <SectionHeading title="HABLEMOS" label="CONTACTO CORPORATIVO" />
          <p className="text-xl text-slate-500 font-light leading-relaxed mb-16">
            Inicie hoy su próximo proyecto de infraestructura con un aliado que garantiza precisión y cumplimiento legal.
          </p>
          <div className="space-y-12">
              <div className="flex gap-8 items-center group">
                <div className="w-16 h-16 bg-slate-50 flex items-center justify-center text-[#0a192f] group-hover:bg-[#e67e22] group-hover:text-white transition-all shadow-sm">
                  <Phone size={24}/>
                </div>
                <div>
                  <p className="text-[10px] font-black uppercase text-slate-400 tracking-widest mb-1">Central Telefónica</p>
                  <p className="text-2xl font-black font-industrial text-[#0a192f]">+51 927 571 365</p>
                </div>
              </div>
          </div>
        </div>
        <div className="bg-white p-14 shadow-2xl border border-slate-100">
          <h4 className="text-3xl font-black font-industrial text-[#0a192f] mb-12 uppercase tracking-tight">Presupuesto Rápido</h4>
          <form className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <input className="w-full border-b-2 border-slate-200 py-3 text-[#0a192f] outline-none focus:border-[#e67e22] bg-transparent" placeholder="Razón Social" />
                <input type="email" className="w-full border-b-2 border-slate-200 py-3 text-[#0a192f] outline-none focus:border-[#e67e22] bg-transparent" placeholder="Email Corporativo" />
              </div>
              <textarea rows={4} className="w-full border-b-2 border-slate-200 py-3 text-[#0a192f] outline-none focus:border-[#e67e22] resize-none bg-transparent" placeholder="Detalles de Obra..."></textarea>
              <button className="w-full py-6 bg-[#0a192f] text-white font-black text-xs uppercase tracking-[0.4em] hover:bg-[#e67e22] transition-all flex items-center justify-center gap-4 shadow-xl">
                SOLICITAR EVALUACIÓN <Send size={16}/>
              </button>
          </form>
        </div>
      </div>
    </div>
  </main>
);

const Footer = () => (
  <footer className="bg-[#0a192f] text-white pt-32 pb-12 overflow-hidden relative border-t-8 border-[#e67e22]">
    <div className="absolute top-0 right-0 p-20 text-white/5 font-industrial text-[350px] leading-none select-none pointer-events-none -rotate-6">
      TRITON
    </div>
    <div className="container mx-auto px-6 relative z-10">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-20 mb-24">
        <div className="col-span-1 md:col-span-2 space-y-12">
          <div className="space-y-10">
            <div className="h-48 w-auto flex items-center justify-start">
              <img 
                src="https://i.ibb.co/WWvfHP01/Whats-App-Image-2026-02-07-at-7-13-14-PM.jpg" 
                alt="Logo Oficial Tritón SAC" 
                className="h-full w-auto object-contain mix-blend-multiply brightness-110"
              />
            </div>
            <div>
              <div className="text-6xl font-black font-industrial tracking-tighter">TRITÓN S.A.C.</div>
              <p className="text-[#e67e22] text-xs tracking-[0.8em] uppercase font-black mt-3">Corporación Internacional</p>
            </div>
          </div>
          <p className="text-slate-400 text-lg max-w-md font-light leading-relaxed">
            Expertos en la cimentación de su éxito. Movimiento de tierras, demoliciones y suministro de concreto con rigor técnico internacional.
          </p>
        </div>
        <div>
          <h4 className="font-industrial text-[#e67e22] font-bold mb-10 tracking-[0.2em] text-xl uppercase">Navegación</h4>
          <ul className="space-y-6 text-xs font-bold text-slate-500 uppercase tracking-widest">
            <li><Link to="/servicios" className="hover:text-white transition-all">Servicios</Link></li>
            <li><Link to="/proyectos" className="hover:text-white transition-all">Obras</Link></li>
            <li><Link to="/nosotros" className="hover:text-white transition-all">Nosotros</Link></li>
            <li><Link to="/contacto" className="hover:text-white transition-all">Contacto</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-industrial text-[#e67e22] font-bold mb-10 tracking-[0.2em] text-xl uppercase">Sede Central</h4>
          <div className="space-y-10">
            <div className="flex items-start gap-4 text-slate-400">
              <MapPin size={24} className="text-[#e67e22] shrink-0 mt-1"/>
              <span className="text-base leading-relaxed">Villa EL Salvador 15842,<br/>Lima, Perú.</span>
            </div>
            <div className="flex items-center gap-4 text-slate-400">
              <Phone size={24} className="text-[#e67e22] shrink-0"/>
              <span className="text-lg font-black font-industrial">+51 927 571 365</span>
            </div>
          </div>
        </div>
      </div>
      <div className="pt-10 border-t border-white/5 text-[10px] font-bold text-slate-600 uppercase tracking-[0.5em] text-center md:text-left">
        © {new Date().getFullYear()} CORPORACIÓN INTERNACIONAL TRITÓN S.A.C.
      </div>
    </div>
  </footer>
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
          <RouterRoute path="/servicios" element={<ServicesPage />} />
          <RouterRoute path="/contacto" element={<ContactPage />} />
          <RouterRoute path="/proyectos" element={<ProjectsPage />} />
          <RouterRoute path="/nosotros" element={<AboutUsPage />} />
          <RouterRoute path="/recursos" element={<ResourcesPage />} />
        </Routes>
      </div>
      <Footer />
    </div>
  </Router>
);

export default App;
