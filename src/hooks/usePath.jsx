import { useLocation } from 'react-router-dom'

const usePath = () => {
    const { pathname } = useLocation();
    const isCurrentPage = (path) => {

        if (path === "/pacientes" && (pathname === "/pacientes" || pathname === "/pacientes_cadastrar" || pathname === "/pacientes_detalhes")) {
            return true;
        }
        if (path === pathname) return true;
        return false;
    };
    return {
        isCurrentPage
    }

}

export default usePath
