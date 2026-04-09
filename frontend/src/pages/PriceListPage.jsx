import { useEffect, useState } from "react";
import { Navigate } from "react-router";

export default function PriceListPage({ user }) {
  const [products, setProducts] = useState([]);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/v1/products")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        setLoading(false);
      });
  }, []);

  if (isLoading) return "Loading...";

  if (!user) return <Navigate to="/login" />;

  const fullName = `${user.firstName} ${user.lastName}`;
  return (
    <section className="price-list-page-container">
      <h1>{fullName}</h1>
      <div>
        {products.map((p, i) => (
          <li key={p.id}>{p.productName}</li>
        ))}
      </div>
    </section>
  );
}
