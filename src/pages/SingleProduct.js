import { Link, useParams } from "react-router-dom";
import products from "../data";

const SingleProduct = () => {
  const { productId } = useParams();
  const product = products.find(
    (product) => product.id === parseInt(productId)
  );
  const { image, title, desc } = product;
  return (
    <section className="section-product">
      <img src={image} alt={title} />
      <h5 className="price">{title}</h5>
      <p className="description">{desc}</p>
      <button className="btn">
        <Link className="link" to="/">
          back home
        </Link>
      </button>
    </section>
  );
};

export default SingleProduct;
