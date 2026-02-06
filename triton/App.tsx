
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
  ExternalLink, MousePointer2, Pickaxe, Waves, Factory, Sun, Trophy
} from 'lucide-react';

// --- Utilidades ---

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    // Forzamos el scroll al inicio de la página de forma inmediata al cambiar de ruta
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
    <header className="fixed top-0 left-0 w-full z-50 bg-white/95 backdrop-blur-md h-20 shadow-lg border-b border-slate-100 transition-all duration-300">
      <div className="container mx-auto px-6 h-full flex items-center justify-between">
        <Link to="/" className="group flex items-center gap-3">
          <div className="bg-[#0a192f] p-2 rounded-sm rotate-45 group-hover:rotate-0 transition-transform duration-500">
             <div className="-rotate-45 group-hover:rotate-0 transition-transform duration-500">
                <Pickaxe className="text-[#e67e22]" size={20}/>
             </div>
          </div>
          <div className="flex flex-col">
            <span className="text-[#0a192f] text-2xl font-black font-industrial leading-none tracking-tighter uppercase">Tritón S.A.C.</span>
            <span className="text-[7px] font-black text-[#e67e22] uppercase tracking-[0.4em] mt-0.5">Corporación Internacional</span>
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

        <button className="lg:hidden text-[#0a192f]" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      <div className={`lg:hidden fixed inset-0 bg-[#0a192f] z-[120] flex flex-col items-center justify-center gap-8 transition-all duration-500 ${isOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-10'}`}>
        <button className="absolute top-6 right-6 text-white" onClick={() => setIsOpen(false)}><X size={32}/></button>
        {links.map((link) => (
          <Link key={link.name} to={link.path} onClick={() => setIsOpen(false)} className="text-4xl font-black text-white uppercase font-industrial hover:text-[#e67e22] transition-colors">{link.name}</Link>
        ))}
      </div>
    </header>
  );
};

const SectionHeading = ({ title, label, centered = false, dark = false }: { title: string, label: string, centered?: boolean, dark?: boolean }) => (
  <div className={`mb-20 ${centered ? 'text-center' : ''}`}>
    <div className={`flex items-center gap-4 mb-4 ${centered ? 'justify-center' : ''}`}>
      <div className="w-12 h-1 bg-[#e67e22]"></div>
      <span className={`text-[10px] font-black uppercase tracking-[0.5em] ${dark ? 'text-white/50' : 'text-slate-400'}`}>{label}</span>
    </div>
    <h2 className={`text-4xl md:text-6xl font-black font-industrial leading-none tracking-tight uppercase ${dark ? 'text-white' : 'text-[#0a192f]'}`}>
      {title}
    </h2>
  </div>
);

const DetailModal = ({ isOpen, onClose, title, content }: { isOpen: boolean, onClose: () => void, title: string, content: React.ReactNode }) => {
  if (!isOpen) return null;
  return (
    <div className="fixed inset-0 z-[200] flex items-center justify-center p-4 md:p-10 bg-[#0a192f]/90 backdrop-blur-sm animate-reveal">
      <div className="bg-white w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-sm relative shadow-2xl">
        <button onClick={onClose} className="sticky top-6 float-right mr-6 text-[#0a192f] hover:text-[#e67e22] transition-colors z-20 bg-white/80 p-2 rounded-full backdrop-blur-sm shadow-md">
          <X size={24}/>
        </button>
        <div className="p-8 md:p-16">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-8 h-1 bg-[#e67e22]"></div>
            <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Documentación Técnica Tritón</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-black font-industrial text-[#0a192f] mb-8 leading-none uppercase">{title}</h2>
          <div className="prose prose-slate max-w-none text-slate-600 font-light leading-relaxed">
            {content}
          </div>
          <div className="mt-12 pt-8 border-t border-slate-100">
             <Link to="/contacto" onClick={onClose} className="inline-flex items-center gap-4 text-[10px] font-black text-[#e67e22] uppercase tracking-[0.4em] hover:text-[#0a192f] transition-all">
                CONSULTAR ESTE SERVICIO <ArrowRight size={14}/>
             </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

// --- Componentes de Contenido Específico ---

const ServiceCard = ({ icon: Icon, title, description, items, theme = 'light' }: { icon: any, title: string, description: string, items: string[], theme?: 'light' | 'dark' }) => (
  <div className={`p-10 border transition-all duration-500 group ${theme === 'dark' ? 'bg-[#0a192f] border-white/10 text-white' : 'bg-white border-slate-100 hover:shadow-2xl hover:border-[#e67e22]'}`}>
    <div className={`w-16 h-16 mb-8 flex items-center justify-center transition-transform group-hover:scale-110 ${theme === 'dark' ? 'bg-white/5' : 'bg-slate-50'}`}>
      <Icon className="text-[#e67e22]" size={32} />
    </div>
    <h3 className={`text-2xl font-black font-industrial mb-4 tracking-wide ${theme === 'dark' ? 'text-white' : 'text-[#0a192f]'}`}>{title}</h3>
    <p className={`text-sm font-light leading-relaxed mb-8 ${theme === 'dark' ? 'text-slate-400' : 'text-slate-500'}`}>{description}</p>
    <ul className="space-y-3">
      {items.map((item, i) => (
        <li key={i} className="flex items-center gap-3 text-[10px] font-bold uppercase tracking-widest opacity-80 group-hover:opacity-100 transition-opacity">
          <CheckCircle2 size={14} className="text-[#e67e22] shrink-0" /> {item}
        </li>
      ))}
    </ul>
  </div>
);

// --- Mapa de Ubicación ---

const LocationMap = () => (
  <section className="py-32 bg-slate-50 border-y border-slate-100">
    <div className="container mx-auto px-6">
      <SectionHeading title="SEDE CENTRAL" label="UBICACIÓN ESTRATÉGICA" centered />
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
        <div className="lg:col-span-1 space-y-8">
           <div className="bg-[#0a192f] text-white p-10 shadow-2xl">
              <h4 className="text-2xl font-black font-industrial mb-6 text-[#e67e22]">OFICINA LIMA</h4>
              <div className="space-y-6">
                 <div className="flex gap-4 items-start">
                    <MapPin className="text-[#e67e22] shrink-0" size={20}/>
                    <p className="text-sm font-light leading-relaxed">Av. Alameda Los Cedros 185, Chorrillos, Lima - Perú.</p>
                 </div>
                 <div className="flex gap-4 items-start">
                    <Clock className="text-[#e67e22] shrink-0" size={20}/>
                    <p className="text-sm font-light leading-relaxed">Lunes a Viernes: 08:00 - 18:00<br/>Sábados: 08:00 - 13:00</p>
                 </div>
                 <div className="flex gap-4 items-start">
                    <Phone className="text-[#e67e22] shrink-0" size={20}/>
                    <p className="text-sm font-light leading-relaxed">(01) 255-5650</p>
                 </div>
              </div>
              <a 
                href="https://www.google.com/maps/dir//Av.+Alameda+los+Cedros+185,+Chorrillos+15067/@-12.1895783,-77.0115883,17z" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="mt-10 inline-flex items-center gap-3 text-[10px] font-black uppercase tracking-widest border border-white/20 px-6 py-4 hover:bg-white hover:text-[#0a192f] transition-all"
              >
                CÓMO LLEGAR <Navigation size={14}/>
              </a>
           </div>
           <div className="p-8 bg-white border border-slate-100 flex items-center gap-6">
              <ShieldCheck className="text-[#e67e22]" size={32}/>
              <div>
                <span className="block text-[10px] font-black text-slate-400 uppercase tracking-widest">Seguridad</span>
                <span className="text-sm font-bold text-[#0a192f] uppercase">Acceso Controlado 24h</span>
              </div>
           </div>
        </div>
        <div className="lg:col-span-2 relative h-[500px] shadow-2xl group overflow-hidden border-8 border-white">
           <iframe 
             src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3899.8660281693897!2d-77.01416322394555!3d-12.189578288056463!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9105b90f6b315263%3A0x6b7729f27376c694!2sAv.%20Alameda%20los%20Cedros%20185%2C%20Chorrillos%2015067!5e0!3m2!1ses!2spe!4v1710500000000!5m2!1ses!2spe" 
             className="w-full h-full border-0 absolute inset-0 grayscale contrast-125 opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700" 
             allowFullScreen={true} 
             loading="lazy" 
             referrerPolicy="no-referrer-when-downgrade"
             title="Mapa Tritón SAC"
           ></iframe>
           <div className="absolute top-6 left-6 bg-[#e67e22] text-white px-4 py-2 text-[9px] font-black uppercase tracking-widest z-10 pointer-events-none">
             GPS Tritón SAC
           </div>
        </div>
      </div>
    </div>
  </section>
);

// --- Vistas de Página ---

const HomePage = () => (
  <main className="animate-reveal">
    <section className="relative h-screen flex items-center overflow-hidden bg-[#0a192f]">
      <div className="absolute inset-0 z-0">
        <img src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=1920&q=80" className="w-full h-full object-cover opacity-40 grayscale-[0.5]" alt="Hero Ingenieria" />
        <div className="absolute inset-0 hero-gradient"></div>
      </div>
      <div className="container mx-auto px-6 relative z-10 pt-20">
        <div className="max-w-5xl">
          <div className="flex items-center gap-4 mb-10">
            <div className="w-16 h-1.5 bg-[#e67e22]"></div>
            <span className="text-white font-black text-xs tracking-[0.6em] uppercase">Especialistas en Movimiento de Tierras y Obra Civil</span>
          </div>
          <h1 className="text-white text-6xl md:text-[150px] font-black font-industrial leading-[0.75] mb-10 tracking-tighter drop-shadow-2xl">
            TRITÓN <br />
            <span className="text-[#e67e22]">S.A.C.</span>
          </h1>
          <p className="text-slate-300 text-xl md:text-3xl max-w-3xl mb-14 font-light leading-relaxed border-l-4 border-[#e67e22] pl-8">
            Comprometidos con la solidez de sus proyectos. Ingeniería de suelos, demolición técnica y gestión ambiental legal para la industria peruana.
          </p>
          <div className="flex flex-wrap gap-8">
            <Link to="/servicios" className="bg-[#e67e22] text-white px-14 py-6 font-black uppercase text-xs tracking-[0.4em] hover:bg-white hover:text-[#0a192f] transition-all shadow-2xl flex items-center gap-4 group">
              NUESTROS SERVICIOS <ArrowRight size={18} className="group-hover:translate-x-2 transition-transform"/>
            </Link>
            <Link to="/contacto" className="border-2 border-white/40 text-white px-14 py-6 font-black uppercase text-xs tracking-[0.4em] hover:border-white hover:bg-white/5 transition-all backdrop-blur-sm">
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
  const [activeService, setActiveService] = useState<any>(null);

  const services = [
    {
      title: "Movimiento de Tierras",
      content: (
        <div className="space-y-6">
          <p>El movimiento de tierras es la base de toda obra de ingeniería. En Tritón SAC, utilizamos maquinaria de última generación controlada por GPS para garantizar precisión milimétrica.</p>
          <ul className="list-disc pl-5 space-y-2">
            <li>Excavación masiva en diversos tipos de terreno.</li>
            <li>Conformación de terraplenes y plataformas industriales.</li>
            <li>Carguío y acarreo de materiales excedentes.</li>
            <li>Nivelación final y compactación según normas ASTM.</li>
          </ul>
        </div>
      )
    },
    {
      title: "Suministro de Concreto",
      content: (
        <div className="space-y-6">
          <p>Contamos con equipos modernos para suministrar y bombear concreto premezclado directamente en obra, asegurando la continuidad del vaciado y la calidad estructural.</p>
          <ul className="list-disc pl-5 space-y-2">
            <li>Bombeo de concreto en altura y largas distancias.</li>
            <li>Mezclas certificadas bajo normas nacionales e internacionales.</li>
            <li>Control de calidad en sitio (asentamiento, temperatura).</li>
            <li>Personal especializado en maniobras de vaciado crítico.</li>
          </ul>
        </div>
      )
    }
  ];

  return (
    <main className="pt-32 pb-32 bg-white animate-reveal">
      <div className="container mx-auto px-6">
        <SectionHeading title="ESPECIALIDADES" label="NUESTROS SERVICIOS" centered />
        
        {/* Movimiento de Tierras con Detalle */}
        <div className="mb-40 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div>
            <span className="text-[#e67e22] text-[10px] font-black tracking-[0.4em] uppercase mb-4 block">Ingeniería de Suelos</span>
            <h3 className="text-4xl font-black font-industrial text-[#0a192f] mb-8 uppercase tracking-tight">Movimiento de Tierras</h3>
            <p className="text-slate-500 font-light leading-relaxed mb-10 border-l-4 border-[#e67e22] pl-8">
              Comprende el conjunto de trabajos necesarios para modificar el terreno natural, con el fin de prepararlo para la construcción de obras civiles de alta complejidad.
            </p>
            <button 
              onClick={() => setActiveService(services[0])}
              className="text-[10px] font-black uppercase tracking-widest text-[#e67e22] hover:text-[#0a192f] transition-all flex items-center gap-2 mb-10"
            >
              LEER MÁS SOBRE TIERRAS <Plus size={14}/>
            </button>
            <ul className="space-y-4">
              {["Evaluación del terreno y análisis de suelo.", "Planificación técnica con maquinaria pesada.", "Ejecución de excavación y nivelación de precisión.", "Control final de compactación y sub-rasante."].map((step, i) => (
                 <li key={i} className="flex gap-4 items-center text-sm text-slate-600 font-light">
                    <div className="w-8 h-8 rounded-full bg-slate-50 flex items-center justify-center text-[#e67e22] font-black font-industrial">{i+1}</div>
                    {step}
                 </li>
              ))}
            </ul>
          </div>
          <div className="bg-slate-50 p-12 border border-slate-100">
             <h4 className="text-xl font-black font-industrial text-[#0a192f] mb-8 uppercase">Tipos de Intervención</h4>
             <div className="grid grid-cols-1 gap-4">
                {[
                  { t: "Excavaciones Masivas", d: "Remoción de grandes volúmenes para nivelación industrial." },
                  { t: "Sótanos Profundos", d: "Excavación controlada para infraestructura subterránea." },
                  { t: "Rellenos Controlados", d: "Compactación en capas para lograr la densidad requerida." },
                  { t: "Plataformados", d: "Preparación de bases para naves o almacenes." }
                ].map((item, i) => (
                  <div key={i} className="flex gap-4 items-start p-4 bg-white shadow-sm hover:shadow-md transition-all">
                    <Check size={18} className="text-[#e67e22] mt-1"/>
                    <div>
                      <span className="block font-black font-industrial text-[#0a192f] uppercase text-xs tracking-widest">{item.t}</span>
                      <span className="text-[11px] text-slate-400 font-light">{item.d}</span>
                    </div>
                  </div>
                ))}
             </div>
          </div>
        </div>

        {/* Otras Especialidades */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          <div className="relative group">
            <ServiceCard 
              icon={Droplets}
              title="Estabilización de Suelos"
              description="Mejora de la capacidad portante de suelos arcillosos o con alta humedad mediante aditivos."
              items={["Análisis de Laboratorio", "Uso de Cal y Cemento", "Mejora Mecánica", "Curado Controlado"]}
            />
          </div>
          <div className="relative group">
            <ServiceCard 
              icon={Factory}
              title="Bombeo de Concreto"
              description="Suministro de concreto premezclado en obra con equipos modernos y alto estándar de calidad."
              items={["Bombas Estacionarias", "Suministro Certificado", "Asesoría en Obra", "Normas Nacionales"]}
            />
            <button 
              onClick={() => setActiveService(services[1])}
              className="absolute bottom-6 right-10 text-[9px] font-black uppercase text-[#e67e22] hover:text-[#0a192f] transition-all"
            >
              LEER MÁS
            </button>
          </div>
          <ServiceCard 
            icon={Waves}
            title="Obras Hidráulicas"
            description="Infraestructura para saneamiento y defensa de riberas contra desbordes y erosión."
            items={["Defensas Ribereñas", "Descolmatación", "Canales de Riego", "Alcantarillado"]}
          />
        </div>
      </div>
      <DetailModal 
        isOpen={!!activeService} 
        onClose={() => setActiveService(null)} 
        title={activeService?.title || ""} 
        content={activeService?.content} 
      />
    </main>
  );
};

const ResourcesPage = () => {
  const [activeGuide, setActiveGuide] = useState<any>(null);

  const guides = [
    {
      id: 1,
      title: "Estabilización de Suelos",
      label: "Guía de Ingeniería",
      desc: "Cuándo y por qué es necesario mejorar el terreno natural antes de construir.",
      icon: Droplets,
      content: (
        <div className="space-y-8">
          <p>La estabilización es crítica cuando el terreno natural presenta baja capacidad portante, excesiva plasticidad o expansión, o alto contenido de humedad.</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-6 bg-slate-50">
              <h5 className="font-industrial font-black text-[#0a192f] mb-4">Consecuencias de no estabilizar:</h5>
              <ul className="list-disc pl-5 space-y-2 text-sm opacity-80">
                <li>Grietas en estructuras y pavimentos ondulados.</li>
                <li>Asentamientos diferenciales severos.</li>
                <li>Fallas prematuras en la vida útil de la obra.</li>
              </ul>
            </div>
            <div className="p-6 bg-[#0a192f] text-white">
              <h5 className="font-industrial font-black text-[#e67e22] mb-4">Nuestro Proceso Técnico:</h5>
              <ul className="list-decimal pl-5 space-y-2 text-sm opacity-80">
                <li>Análisis de laboratorio para determinar estabilizante óptimo.</li>
                <li>Escarificación y homogeneización del suelo existente.</li>
                <li>Aplicación de cal, cemento o productos químicos específicos.</li>
                <li>Compactación y supervisión del tiempo de curado.</li>
              </ul>
            </div>
          </div>
          <p className="italic text-slate-400">"Nosotros convertimos un terreno inestable en su mayor fortaleza estructural."</p>
        </div>
      )
    },
    {
      id: 2,
      title: "Eliminación Legal de Desmonte",
      label: "Normativa Ambiental",
      desc: "Gestión responsable y cumplimiento de la normativa de residuos de construcción.",
      icon: Truck,
      content: (
        <div className="space-y-8">
          <p>Retiramos y disponemos sus escombros con total certificación legal. El manejo incorrecto conlleva multas elevadas y daño ambiental irreversible.</p>
          <div className="space-y-6">
             <h5 className="font-industrial font-black text-[#0a192f]">Tipos de Residuos que Gestionamos:</h5>
             <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  { t: "Obra Gris", d: "Excavaciones, sobrantes de concreto y ladrillos." },
                  { t: "Demolición", d: "Vigas, losas, mampostería y hormigón armado." },
                  { t: "Material Mixto", d: "Mezcla de tierra con residuos de construcción." },
                  { t: "Acabados", d: "Retazos de cerámica, drywall y porcelanato." }
                ].map((item, i) => (
                  <div key={i} className="p-4 border border-slate-100 flex gap-4">
                    <CheckCircle2 className="text-[#e67e22] shrink-0" size={18}/>
                    <div>
                      <span className="block font-bold text-xs uppercase tracking-widest text-[#0a192f]">{item.t}</span>
                      <span className="text-[11px] text-slate-400">{item.d}</span>
                    </div>
                  </div>
                ))}
             </div>
          </div>
          <div className="p-10 bg-amber-50 border-l-8 border-amber-500">
             <h6 className="font-black font-industrial text-amber-900 mb-2">Compromiso Legal MINAM</h6>
             <p className="text-sm text-amber-800 leading-relaxed">
               Entregamos toda la documentación que acredita el cumplimiento ante las autoridades municipales y ambientales. Su obra limpia y sin preocupaciones legales.
             </p>
          </div>
        </div>
      )
    },
    {
      id: 3,
      title: "Demolición Profesional",
      label: "Métodos Técnicos",
      desc: "Seguridad y precisión en el desmantelamiento de infraestructuras.",
      icon: Hammer,
      content: (
        <div className="space-y-8">
          <p>La demolición es el primer paso para su nueva construcción. Transformamos lo viejo en una oportunidad nueva mediante procesos controlados.</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 bg-slate-50 text-center">
              <Building2 className="mx-auto text-[#e67e22] mb-4" size={32}/>
              <h6 className="font-industrial font-black text-xs uppercase mb-2">Total de Edificios</h6>
              <p className="text-[10px] text-slate-500">Naves industriales, casas y estructuras en ruinas.</p>
            </div>
            <div className="p-6 bg-slate-50 text-center">
              <Layers className="mx-auto text-[#e67e22] mb-4" size={32}/>
              <h6 className="font-industrial font-black text-xs uppercase mb-2">Parcial o Selectiva</h6>
              <p className="text-[10px] text-slate-500">Remoción de losas o muros manteniendo el resto.</p>
            </div>
            <div className="p-6 bg-slate-50 text-center">
              <Construction className="mx-auto text-[#e67e22] mb-4" size={32}/>
              <h6 className="font-industrial font-black text-xs uppercase mb-2">Infraestructura</h6>
              <p className="text-[10px] text-slate-500">Obras viales, puentes y muros de con tención.</p>
            </div>
          </div>
          <div className="bg-[#0a192f] p-8 text-white border-b-4 border-[#e67e22]">
             <h6 className="font-industrial font-black text-[#e67e22] mb-4">Pre-demolición Especializada:</h6>
             <p className="text-sm opacity-80 mb-6">Gestionamos el retiro de asbestos y materiales peligrosos bajo certificaciones internacionales estrictas.</p>
             <button className="text-[10px] font-black uppercase tracking-widest bg-[#e67e22] px-6 py-3 hover:bg-white hover:text-[#0a192f] transition-all">Solicitar Inspección</button>
          </div>
        </div>
      )
    }
  ];

  return (
    <main className="pt-32 pb-32 bg-white animate-reveal">
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

      <DetailModal 
        isOpen={!!activeGuide} 
        onClose={() => setActiveGuide(null)} 
        title={activeGuide?.title || ""} 
        content={activeGuide?.content} 
      />
    </main>
  );
};

// --- Footer ---

const Footer = () => (
  <footer className="bg-[#0a192f] text-white pt-24 pb-12 overflow-hidden relative">
    <div className="absolute top-0 right-0 p-20 text-white/5 font-industrial text-[250px] leading-none select-none pointer-events-none -rotate-6">
      TRITON
    </div>
    <div className="container mx-auto px-6 relative z-10">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-16 mb-24">
        <div className="col-span-1 md:col-span-2 space-y-10">
          <div>
            <div className="text-5xl font-black font-industrial tracking-tighter">TRITÓN S.A.C.</div>
            <p className="text-[#e67e22] text-[11px] tracking-[0.7em] uppercase font-black mt-2">Corporación Internacional</p>
          </div>
          <p className="text-slate-400 text-base max-w-md font-light leading-relaxed">
            Expertos en la cimentación de su éxito. Movimiento de tierras, demoliciones y suministro de concreto con rigor técnico internacional.
          </p>
          <div className="flex gap-6">
            <a href="#" className="w-12 h-12 bg-white/5 flex items-center justify-center hover:bg-[#e67e22] transition-all text-slate-400 hover:text-white border border-white/10 group">
              <Facebook size={22} className="group-hover:scale-110 transition-transform"/>
            </a>
            <a href="#" className="w-12 h-12 bg-white/5 flex items-center justify-center hover:bg-[#e67e22] transition-all text-slate-400 hover:text-white border border-white/10 group">
              <Linkedin size={22} className="group-hover:scale-110 transition-transform"/>
            </a>
            <a href="#" className="w-12 h-12 bg-white/5 flex items-center justify-center hover:bg-[#e67e22] transition-all text-slate-400 hover:text-white border border-white/10 group">
              <Instagram size={22} className="group-hover:scale-110 transition-transform"/>
            </a>
          </div>
        </div>
        <div>
          <h4 className="font-industrial text-[#e67e22] font-bold mb-10 tracking-[0.2em] text-xl uppercase">Enlaces Rápidos</h4>
          <ul className="space-y-5 text-[11px] font-bold text-slate-500 uppercase tracking-widest">
            <li><Link to="/servicios" className="hover:text-white hover:translate-x-2 transition-all inline-block">Especialidades</Link></li>
            <li><Link to="/proyectos" className="hover:text-white hover:translate-x-2 transition-all inline-block">Portafolio</Link></li>
            <li><Link to="/nosotros" className="hover:text-white hover:translate-x-2 transition-all inline-block">Nosotros</Link></li>
            <li><Link to="/recursos" className="hover:text-white hover:translate-x-2 transition-all inline-block">Guías Técnicas</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-industrial text-[#e67e22] font-bold mb-10 tracking-[0.2em] text-xl uppercase">Central Operativa</h4>
          <div className="space-y-8">
            <div className="flex items-start gap-4 text-slate-400 text-sm">
              <MapPin size={20} className="text-[#e67e22] shrink-0 mt-1"/>
              <span className="leading-relaxed">Av. Alameda Los Cedros 185,<br/>Chorrillos, Lima.</span>
            </div>
            <div className="flex items-center gap-4 text-slate-400 text-sm">
              <Phone size={20} className="text-[#e67e22] shrink-0"/>
              <span>(01) 255-5650</span>
            </div>
          </div>
        </div>
      </div>
      <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 text-[10px] font-bold text-slate-600 uppercase tracking-[0.4em]">
        <span>© {new Date().getFullYear()} CORPORACIÓN INTERNACIONAL TRITÓN S.A.C.</span>
        <div className="flex gap-10">
           <a href="#" className="hover:text-[#e67e22] transition-colors">PRIVACIDAD</a>
           <a href="#" className="hover:text-[#e67e22] transition-colors">TÉRMINOS</a>
        </div>
      </div>
    </div>
  </footer>
);

// --- Aplicación ---

const App = () => (
  <Router>
    <ScrollToTop />
    <ScrollProgress />
    <div className="flex flex-col min-h-screen">
      <Header />
      <div className="flex-grow">
        <Routes>
          <RouterRoute path="/" element={<HomePage />} />
          <RouterRoute path="/servicios" element={<ServicesPage />} />
          <RouterRoute path="/proyectos" element={
            <main className="pt-32 pb-32 animate-reveal">
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
          } />
          <RouterRoute path="/nosotros" element={
            <main className="pt-32 pb-32 animate-reveal">
              <div className="container mx-auto px-6">
                <SectionHeading title="CONÓCENOS" label="IDENTIDAD CORPORATIVA" />
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
                   <div className="space-y-10">
                      <p className="text-xl md:text-2xl text-slate-600 font-light leading-relaxed">
                        <strong>Corporación Internacional Tritón S.A.C.</strong> es una empresa peruana dedicada a profesionalizar la ingeniería y el suministro de concreto premezclado.
                      </p>
                      <div className="bg-slate-50 p-8 md:p-12 border-l-[6px] border-[#e67e22] shadow-sm">
                        <p className="text-base md:text-lg text-[#0a192f] font-medium leading-relaxed mb-6 italic">
                          "Contamos con maquinarias y equipos modernos para suministrar y bombear concreto premezclado en obra. Nuestro producto cumple con los requisitos de las normas nacionales e internacionales, los cuales garantizan que nuestro producto alcance los más altos estándares de calidad."
                        </p>
                        <p className="text-slate-500 font-light leading-relaxed">
                          Además, a nuestros clientes brindamos servicio personalizado y asesoramiento durante la ejecución de obra, asegurando que cada etapa del proyecto cumpla con los objetivos de eficiencia y durabilidad.
                        </p>
                      </div>
                      <div className="grid grid-cols-2 gap-10 py-12 border-y border-slate-100">
                         <div>
                            <span className="text-5xl font-industrial font-black text-[#0a192f] block mb-2">15+</span>
                            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Años de Exp.</span>
                         </div>
                         <div>
                            <span className="text-5xl font-industrial font-black text-[#0a192f] block mb-2">1M+</span>
                            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">m3 Operados</span>
                         </div>
                      </div>
                   </div>
                   <div className="relative group">
                      <div className="absolute inset-0 bg-[#e67e22] -m-6 z-0 opacity-10 rounded-sm"></div>
                      <img src="https://images.unsplash.com/photo-1541746972996-4e0b0f43e02a?auto=format&fit=crop&w=1000&q=80" className="relative z-10 shadow-2xl grayscale group-hover:grayscale-0 transition-all duration-1000" alt="Nosotros Equipo" />
                   </div>
                </div>
              </div>
            </main>
          } />
          <RouterRoute path="/recursos" element={<ResourcesPage />} />
          <RouterRoute path="/contacto" element={
            <>
              <main className="pt-32 pb-32 animate-reveal">
                <div className="container mx-auto px-6">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-24">
                    <div>
                      <SectionHeading title="HABLEMOS" label="CONTACTO CORPORATIVO" />
                      <p className="text-xl text-slate-500 font-light leading-relaxed mb-16">
                        Inicie hoy su próximo proyecto de infraestructura con un aliado que garantiza precisión y cumplimiento legal. Atendemos a nivel nacional.
                      </p>
                      <div className="space-y-12">
                         <div className="flex gap-8 items-center group">
                            <div className="w-16 h-16 bg-slate-50 flex items-center justify-center text-[#0a192f] group-hover:bg-[#e67e22] group-hover:text-white transition-all shadow-sm">
                              <Phone size={24}/>
                            </div>
                            <div>
                              <p className="text-[10px] font-black uppercase text-slate-400 tracking-widest mb-1">Central Telefónica</p>
                              <p className="text-2xl font-black font-industrial text-[#0a192f]">(01) 255-5650</p>
                            </div>
                         </div>
                         <div className="flex gap-8 items-center group">
                            <div className="w-16 h-16 bg-slate-50 flex items-center justify-center text-[#0a192f] group-hover:bg-[#e67e22] group-hover:text-white transition-all shadow-sm">
                              <Mail size={24}/>
                            </div>
                            <div>
                              <p className="text-[10px] font-black uppercase text-slate-400 tracking-widest mb-1">Email de Ventas</p>
                              <p className="text-2xl font-black font-industrial text-[#0a192f]">ventas@triton.com.pe</p>
                            </div>
                         </div>
                      </div>
                    </div>
                    <div className="bg-white p-14 shadow-2xl border border-slate-100 relative overflow-hidden">
                      <h4 className="text-3xl font-black font-industrial text-[#0a192f] mb-12 uppercase tracking-tight">Presupuesto Rápido</h4>
                      <form className="space-y-8">
                         <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div className="space-y-2">
                              <label className="text-[10px] font-black uppercase tracking-widest text-slate-400">Razón Social</label>
                              <input className="w-full border-b-2 border-slate-200 py-3 text-[#0a192f] outline-none focus:border-[#e67e22] bg-transparent" placeholder="Ej: Constructora S.A." />
                            </div>
                            <div className="space-y-2">
                              <label className="text-[10px] font-black uppercase tracking-widest text-slate-400">Email Corporativo</label>
                              <input type="email" className="w-full border-b-2 border-slate-200 py-3 text-[#0a192f] outline-none focus:border-[#e67e22] bg-transparent" placeholder="ejemplo@empresa.pe" />
                            </div>
                         </div>
                         <div className="space-y-2">
                            <label className="text-[10px] font-black uppercase tracking-widest text-slate-400">Mensaje / Detalles de Obra</label>
                            <textarea rows={4} className="w-full border-b-2 border-slate-200 py-3 text-[#0a192f] outline-none focus:border-[#e67e22] resize-none bg-transparent" placeholder="Describa área, volumen y ubicación..."></textarea>
                         </div>
                         <button className="w-full py-6 bg-[#0a192f] text-white font-black text-xs uppercase tracking-[0.4em] hover:bg-[#e67e22] transition-all flex items-center justify-center gap-4 shadow-xl">
                            SOLICITAR EVALUACIÓN <Send size={16}/>
                         </button>
                      </form>
                    </div>
                  </div>
                </div>
              </main>
              <LocationMap />
            </>
          } />
        </Routes>
      </div>
      <Footer />
    </div>
  </Router>
);

export default App;
