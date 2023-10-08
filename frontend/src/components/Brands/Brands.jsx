import BrandsItems from "./BrandsItems";
import "./Brand.css";

function Brands() {
  return (
    <section className="brands">
      <div className="container">
        <ul className="brand-list">
          <BrandsItems />
          <BrandsItems />
          <BrandsItems />
          <BrandsItems />
          <BrandsItems />
          <BrandsItems />
        </ul>
      </div>
    </section>
  );
}

export default Brands;
