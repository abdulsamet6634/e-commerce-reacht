import CategoryItems from "./CategoryItems";
import "./Categorys.css";
function Categotys() {
  return (
    <section className="categories">
      <div className="container">
        <div className="section-title">
          <h2>All Categories</h2>
          <p>Summer Collection New Morden Design</p>
        </div>
        <ul className="category-list">
          <CategoryItems />
          <CategoryItems />
          <CategoryItems />
          <CategoryItems />
          <CategoryItems />
          <CategoryItems />
        </ul>
      </div>
    </section>
  );
}

export default Categotys;
