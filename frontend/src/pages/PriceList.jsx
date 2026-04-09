import { useEffect, useState } from "react";
import { Navigate } from "react-router";
import UserHeader from "../components/UserHeader.jsx";

export default function PriceList({ user }) {
  const [products, setProducts] = useState([]);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/v1/products")
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .finally(() => setLoading(false));
  }, []);

  if (isLoading) return "Loading...";

  if (!user) return <Navigate to="/login" />;

  return (
    <section className="price-list-page-container">
      <UserHeader user={user} />
      <div>
        {products.map((p, i) => (
          <li key={p.id}>{p.productName}</li>
        ))}
      </div>
    </section>
  );
}
