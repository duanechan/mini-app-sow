import { Navigate, Route, Routes } from "react-router";
import ProtectedRoute from "./layouts/ProtectedRoute.jsx";
import Login from "./pages/Login.jsx";
import PriceList from "./pages/PriceList.jsx";

function App() {
  return (
    <main>
      <Routes>
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/login" element={<Login />} />
        <Route
          path="/price-list"
          element={
            <ProtectedRoute>
              <PriceList />
            </ProtectedRoute>
          }
        />
      </Routes>
    </main>
  );
}

export default App;
