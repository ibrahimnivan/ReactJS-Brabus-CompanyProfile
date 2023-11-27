import logoBrabus from "../assets/brabuss.webp"

const Navbar = () => {
  return (
    <nav className="navbar-container z-10">
      <span></span>
      <img className="navbar-logo" src={logoBrabus} alt="" />
      <p>account</p>
    </nav>
  )
}

export default Navbar