import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './pages/auth/Login';
import Register from './pages/auth/Register';
import ResetPassword from './pages/auth/ResetPassword';
import NotFound from './pages/NotFound';
import ProtectedRoute from './components/ProtectedRoute';
import { AuthProvider } from './context/AuthContext';
import SuperAdminDashboard from './pages/dashboard/SuperAdminDashboard';
import CrewDashboard from './pages/dashboard/CrewDashboard';
import CompanyAdminDashboard from './pages/dashboard/CompanyAdminDashboard';
import SubAdminDashboard from './pages/dashboard/SubAdminDashboard';

const App = () => {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/reset-password" element={<ResetPassword />} />
          
          <Route element={<ProtectedRoute allowedRoles={['SuperAdmin']} />}>
            <Route path="/superadmin" element={<SuperAdminDashboard />} />
          </Route>
          
          <Route element={<ProtectedRoute allowedRoles={['CompanyAdmin']} />}>
            <Route path="/companyadmin" element={<CompanyAdminDashboard />} />
          </Route>

          <Route element={<ProtectedRoute allowedRoles={['SubAdmin']} />}>
            <Route path="/subadmin" element={<SubAdminDashboard />} />
          </Route>

          <Route element={<ProtectedRoute allowedRoles={['CrewMember']} />}>
            <Route path="/crew" element={<CrewDashboard />} />
          </Route>

          <Route path="*" element={<NotFound />} />
          <Route path="/reset-password" element={<ResetPassword />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
};

export default App;
