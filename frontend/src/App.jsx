import { Navigate, Route, Routes } from "react-router";
import ProtectedRoute from "./layouts/ProtectedRoute.jsx";
import Login from "./pages/Login.jsx";
import PriceListPage from "./pages/PriceListPage.jsx";

function App() {
  return (
    <main>
      <Routes>
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/login" element={<Login />}></Route>
        <Route
          path="/price-list"
          element={
            <ProtectedRoute>
              <PriceListPage />
            </ProtectedRoute>
          }
        />
      </Routes>
    </main>
  );
}

export default App;
