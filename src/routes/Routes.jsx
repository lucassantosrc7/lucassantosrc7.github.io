import React from 'react'
import { BrowserRouter as Router, Routes as ReactRoutes, Route } from 'react-router-dom'
import Home from '../pages/home/Home'
import SaibaMais from '../pages/learnmore/LearnMore'
import Artigos from '../pages/articles/Articles'
import Suporte from '../pages/support/Support'
import Contato from '../pages/contact/Contact'
import Login from '../pages/login/Login'
import Dashboard from '../pages/dashboard/Dashboard'
import Cadastro from '../pages/register/Register'
import Licencas from '../pages/licenses/Licenses'
import Pacientes from '../pages/patients/Patients'
import Pacientes_Cadastrar from '../pages/patients/PatientRegister'
import Pacientes_Detalhes from '../pages/patients/PatientDetails'
import Relatorios from '../pages/reports/Reports'
import Financeiro from '../pages/financial/Financial'
import Agenda from '../pages/agenda/Agenda'
import Ajustes from '../pages/adjustments/Adjustments'
import Eula from '../pages/eula/Eula'
import Politica from '../pages/privacy/Privacy'
import Torne from '../pages/become/Become'


export default function Routes() {
    return (
        <Router>
            <ReactRoutes>
                <Route path="/" element={<Home />} />
                <Route path='/saibaMais' element={<SaibaMais />} />
                <Route path='/artigos' element={<Artigos />} />
                <Route path='/suporte' element={<Suporte />} />
                <Route path='/contato' element={<Contato />} />
                <Route path="/login" element={<Login />} />
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/licencas" element={<Licencas />} />
                <Route path="/pacientes" element={<Pacientes />} />
                <Route path="/pacientes_cadastrar" element={<Pacientes_Cadastrar />} />
                <Route path="/pacientes_detalhes" element={<Pacientes_Detalhes />} />
                <Route path="/relatorios" element={<Relatorios />} />
                <Route path="/financeiro" element={<Financeiro />} />
                <Route path="/agenda" element={<Agenda />} />
                <Route path="/ajustes" element={<Ajustes />} />
                <Route path="/cadastro" element={<Cadastro />} />
                <Route path="/politica" element={<Politica />} />
                <Route path="/eula" element={<Eula />} />
                <Route path="/torne" element={<Torne />} />
            </ReactRoutes>
        </Router>
    )
}
