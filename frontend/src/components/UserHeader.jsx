import { UserCircleIcon } from "@phosphor-icons/react";
import { useAuth } from "../context/AuthContext.jsx";

export default function UserHeader({ user }) {
  const { setUser } = useAuth();
  const fullName = `${user.firstName} ${user.lastName}`;

  async function handleLogout(e) {
    e.preventDefault();
    const response = await fetch("/api/v1/auth/logout", { method: "POST" });
    if (!response.ok) throw new Error("Logout failed");
    setUser(undefined);
  }

  return (
    <header className="user-header">
      <UserCircleIcon weight="fill" color="white" size={56} />
      <div>{fullName}</div>
      <button type="button" onClick={handleLogout}>
        Logout
      </button>
    </header>
  );
}
