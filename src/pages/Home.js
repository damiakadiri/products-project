import { useState } from "react";
import products from "../data";
import { Link } from "react-router-dom";

const Home = () => {
  const [query, setQuery] = useState("");
  return (
    <section className="section">
      <div className="container">
        <input
          type="text"
          placeholder="search products..."
          className="search"
          onChange={(e) => setQuery(e.target.value)}
        />
      </div>

      <h2 className="header">products</h2>
      <div className="products">
        {products
          .filter((product) => product.title.toLowerCase().includes(query))
          .map((product) => {
            return (
              <article key={product.id}>
                <img src={product.image} alt={product.title} />
                <h5>{product.title}</h5>
                <h5 className="price">${product.price}</h5>
                <button className="btn">
                  <Link className="link" to={`/${product.id}`}>
                    more info
                  </Link>
                </button>
              </article>
            );
          })}
      </div>
    </section>
  );
};

export default Home;
