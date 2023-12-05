import Navbar from "./templates/Navbar";
import Sidebar from "./templates/Sidebar";
import Footer from "./templates/Footer";
import CarCard from "./CarCard";

import carData from "../carData.json";
console.log(carData);
const Products = () => {
  return (
    <div>
      <Navbar />
      <Sidebar />
      <section>
        <h2 className="mt-20 text-center text-4xl font-semibold">SUPERCARS</h2>
        <p className="text-center mt-7 leading-7 max-w-3xl mx-auto">
          From the ULTIMATE E to the ROCKET 900 – each BRABUS supercar is the result of a perfect interplay: consummate technology, sophisticated art of engineering and custom craftsmanship make every BRABUS supercar unique in its class.
        </p>
        <div className="mx-auto my-20 w-[90%] flex flex-row flex-wrap justify-center gap-10 ">
          {carData.map((item) => (
            <CarCard key={item.id} id={item.id} name={item.name} img={item.img} description={item.description} price={item.price} powerTorque={item.power_torque} engine={item.engine} />
          ))}
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Products;
