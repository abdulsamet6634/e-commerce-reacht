import "./Campagins.css";
import CampaginsItems from "./CampaginsItems";
function Campagins() {
  return (
    <section className="campaigns">
      <div className="container">
        <div className="campaigns-wrapper">
          <CampaginsItems />
          <CampaginsItems />
        </div>
        <div className="campaigns-wrapper">
          <CampaginsItems />
          <CampaginsItems />
        </div>
      </div>
    </section>
  );
}

export default Campagins;
