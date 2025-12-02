import usePath from "../../hooks/usePath"
import { useState, useEffect } from "react"

const linksMain = [
  { href: "/dashboard", icon: "bx-home", label: "Home" },
  { href: "/licencas", icon: "bxs-devices", label: "Licenças" },
  { href: "/pacientes", icon: "bx-group", label: "Pacientes" },
  { href: "/relatorios", icon: "bx-file", label: "Relatórios" },
  { href: "https://run.mentalplus.app/", icon: "bx-desktop", label: "AppWeb" },
  { href: "/financeiro", icon: "bx-dollar-circle", label: "Financeiro" },
  { href: "/agenda", icon: "bx-calendar", label: "Agenda" },
];
const linksBottom = [
  { href: "https://api.whatsapp.com/send/?phone=5511963724579&text=Ol%C3%A1!+Preciso+de+mais+informa%C3%A7%C3%B5es+sobre+MentalPlus%C2%AE!&type=phone_number&app_absent=0", icon: "bx-question-mark", label: "Suporte" },
  { href: "/ajustes", icon: "bx-cog", label: "Ajustes" },
  // O item de sair será tratado manualmente para mostrar confirmação
  { href: "/", icon: "bx-log-out-circle", label: "Sair", confirm: true },
];

const Sidebar = () => {
  const [expandAll, setExpandAll] = useState(false);
  const [pendingHref, setPendingHref] = useState(null);
  const { isCurrentPage } = usePath();

  // Detecta largura da tela para manter sidebar contraído no mobile
  useEffect(() => {
    const handleResize = () => {
        if (window.innerWidth <= 1180) {
        setExpandAll(true); // Contraído no mobile
      } else {
        setExpandAll(false); // Expandido no desktop
      }
    };
    handleResize(); // Chama ao montar
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const current =
    "flex flex-inline gap-2 bg-pink hover:bg-blue dark:bg-blue dark:hover:bg-pink rounded-lg w-[180px] h-[50px] text-white hover:text-white items-center";
  const general =
    "flex flex-inline gap-2 text-gray hover:bg-blue dark:text-blue dark:hover:bg-pink hover:text-white rounded-lg w-[180px] h-[50px] items-center";

  return (
    <div
      className={`w-64 z-30 fixed flex h-full justify-center items-center pt-8 rounded-r-4xl border-b-[30px] border-pink dark:border-blue bg-white dark:bg-dark-gray transition-transform duration-400 ${expandAll ? "-translate-x-[170px] justify-end" : "translate-x-0"
        }`}
    >
      <div className="flex flex-col justify-center items-center">
        <button
          onClick={() => setExpandAll((prev) => !prev)}
          aria-label={expandAll ? "Recolher barra lateral" : "Expandir barra lateral"}
        >
          <i
            className={`text-pink dark:text-white mb-2 cursor-pointer bx bx-${expandAll ? "collapse-alt -translate-x-[16px] pb-8 -ml-9" : "expand-alt"
              } text-2xl -mr-40 mb-30 z-40`}
          ></i>
        </button>

        <img
          src='/images/NEW-LOGO-MP.webp'
          alt="Logo MentalPlus®"
          className={`block dark:hidden -mt-24 ${expandAll ? "translate-x-[50px] w-[60px]" : "translate-x-0"}`}
        />
        <img
          src='/images/NEW-LOGO-MP_1.webp'
          alt="Logo MentalPlus®"
          className={`hidden dark:block -mt-24 ${expandAll ? "translate-x-[50px] w-[60px]" : "translate-x-0"}`}
        />

        <ul>
          <li className="flex flex-col gap-[8px] my-8">
            {linksMain.map((item) => {
              const isExternal = /^https?:\/\//i.test(item.href);
              return (
                <a
                  key={item.href}
                  href={item.href}
                  className={isCurrentPage(item.href) ? current : general}
                  aria-label={item.label}
                  {...(isExternal ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                >
                  <i
                    className={`bx ${item.icon} text-2xl ${expandAll ? "translate-x-[90px] text-3xl pl-8" : "translate-x-0 pl-8"
                      }`}
                  ></i>
                  <h1
                    className={`font-bold text-[20px] ${expandAll ? "hidden" : "translate-x-0"
                      }`}
                  >
                    {item.label}
                  </h1>
                </a>
              );
            })}
          </li>
        </ul>
        <hr
          className={`text-pink dark:text-blue ${expandAll ? "translate-x-[50px] w-[60px]" : "translate-x-0 w-[180px]"
            }`}
        />
        <ul>
          <li className="flex flex-col gap-[8px] my-8">
            {linksBottom.map((item) => {
              const isExternal = /^https?:\/\//i.test(item.href);
              // Se for item de confirmação, renderiza botão que abre modal
              if (item.confirm) {
                return (
                  <button
                    key={item.href}
                    type="button"
                    onClick={() => {
                      setPendingHref(item.href);
                      // Dispara evento global para abrir o popup no DefaultScreen
                      window.dispatchEvent(new CustomEvent('open-logout-popup', { detail: { href: item.href } }))
                    }}
                    className={`${isCurrentPage(item.href) ? current : general} cursor-pointer`}
                    aria-label={item.label}
                  >
                    <i
                      className={`bx ${item.icon} text-2xl ${expandAll ? "translate-x-[90px] text-3xl pl-8" : "translate-x-0 pl-8"}`}
                    ></i>
                    <h1 className={`font-bold text-[20px] ${expandAll ? "hidden" : "translate-x-0"}`}>
                      {item.label}
                    </h1>
                  </button>
                );
              }

              return (
                <a
                  key={item.href}
                  href={item.href}
                  className={isCurrentPage(item.href) ? current : general}
                  aria-label={item.label}
                  {...(isExternal ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                >
                  <i
                    className={`bx ${item.icon} text-2xl ${expandAll ? "translate-x-[90px] text-3xl pl-8" : "translate-x-0 pl-8"
                      }`}
                  ></i>
                  <h1
                    className={`font-bold text-[20px] ${expandAll ? "hidden" : "translate-x-0"
                      }`}
                  >
                    {item.label}
                  </h1>
                </a>
              );
            })}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
