import React, { useState, useEffect } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const Header = () => {
  const [active, setActive] = useState('Home');
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const links = [
    'Home',
    'Quem Somos',
    'Suporte',
    'Contato',
   // 'Área do Reabilitador'
  ];

  // Gerar caminho da rota
  const getPath = (link) => {
    if (link === 'Área do Reabilitador') return '/login';
    if (link === 'Home') return '/';

    return `/${link
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '')
      .toLowerCase()
      .replace(/\s+/g, '-')}`;
  };

  // Scroll suave
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  // Botões Home e Quem Somos funcionam como âncoras
  const handleAnchorClick = async (id, label) => {
    setActive(label);
    setMenuOpen(false);

    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(() => scrollToSection(id), 300);
    } else {
      scrollToSection(id);
    }
  };

  // 🔥 Ativar automaticamente o link da rota atual
  useEffect(() => {
    const currentPath = location.pathname;

    // Home
    if (currentPath === '/') {
      setActive('Home');
      return;
    }

    // Área do Reabilitador
    if (currentPath === '/login') {
      setActive('Área do Reabilitador');
      return;
    }

    // Demais rotas
    links.forEach((link) => {
      const path = getPath(link);
      if (path === currentPath) {
        setActive(link);
      }
    });
  }, [location.pathname]);

  // Renderização dos links
  const renderLinks = () =>
    links.map((link) => {
      const isAnchor = link === 'Home' || link === 'Quem Somos';
      const isReabilitador = link === 'Área do Reabilitador';
      const path = getPath(link);

      return (
        <li key={link}>
          {isAnchor ? (
            <button
              onClick={() =>
                handleAnchorClick(
                  link === 'Home' ? 'home' : 'quem-somos',
                  link
                )
              }
              className={`cursor-pointer font-black text-[16px] ${active === link ? 'text-pink' : 'text-light-gray'
                } hover:text-pink transition-colors`}
            >
              {link}
            </button>
          ) : isReabilitador ? (
            <a
              href={path}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => {
                setActive(link);
                setMenuOpen(false);
              }}
              className={`cursor-pointer font-black text-[16px] ${active === link ? 'text-pink' : 'text-light-gray'
                } hover:text-pink transition-colors`}
            >
              {link}
            </a>
          ) : (
            <Link
              to={path}
              onClick={() => {
                setActive(link);
                setMenuOpen(false);
              }}
              className={`cursor-pointer font-black text-[16px] ${active === link ? 'text-pink' : 'text-light-gray'
                } hover:text-pink transition-colors`}
            >
              {link}
            </Link>
          )}
        </li>
      );
    });

  return (
    <header className="fixed top-0 left-0 right-0 z-50 h-[122px] bg-[var(--color-white)] px-[60px] flex justify-between lg:justify-around items-center shadow-md">
      {/* LOGO → Home */}
      <button
        onClick={() => (window.location.href = '/')}
        className="cursor-pointer"
      >
        <img
          src="/images/NEW-LOGO-MP.webp"
          alt="Logo MentalPlus®"
          className="w-[63.94px] h-[38px] sm:w-[80px] sm:h-[48px] lg:w-[93.94px] lg:h-[54.24px] xl:w-[93.94px] xl:h-[54.24px]"
        />
      </button>

      {/* DESKTOP */}
      <nav className="hidden lg:flex">
        <ul className="flex space-x-12 items-center">{renderLinks()}</ul>
      </nav>

      {/* MOBILE BUTTON */}
      <div className="lg:hidden">
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="text-gray hover:text-pink text-2xl focus:outline-none cursor-pointer"
        >
          {menuOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>

      {/* MOBILE MENU */}
      {menuOpen && (
        <nav className="absolute top-[122px] left-0 w-full bg-white shadow-md lg:hidden z-50">
          <ul className="flex flex-col items-center space-y-4 p-6">
            {renderLinks()}
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Header;
