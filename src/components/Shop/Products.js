import ProductItem from "./ProductItem";
import classes from "./Products.module.css";

const Dummydata = [
  {
    id: "p1",
    price: 6,
    title: "Ponniyan Selvan",
    description: "Historical Fiction",
  },
  {
    id: "p2",
    price: 8,
    title: "Fault In Our Star",
    description: "Love",
  },
];

const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {Dummydata.map((product) => (
          <ProductItem
            key={product.id}
            id={product.id}
            title={product.title}
            price={product.price}
            description={product.description}
          />
        ))}
      </ul>
    </section>
  );
};

export default Products;
