import { cloneElement, useEffect } from "react";
import { useNavigate } from "react-router";
import { useAuth } from "../context/AuthContext.jsx";

export default function ProtectedRoute({ children }) {
  const navigate = useNavigate();
  const { user, setUser } = useAuth();

  useEffect(() => {
    fetch("/api/v1/auth/me")
      .then((res) => {
        if (!res.ok) throw new Error("Failed to get user data");
        return res.json();
      })
      .then((data) => {
        if (!data) navigate("/login");
        setUser(data);
      });
  }, []);

  return cloneElement(children, { user });
}
