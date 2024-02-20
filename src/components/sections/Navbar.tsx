import { Link } from "react-router-dom";
import { navLinks } from "../../assets/data/data";

const Navbar = () => {
  return (
    <nav className="fixed z-50 flex w-full items-center justify-center py-10 text-neutral">
      <div className="flex items-center gap-4">
        {navLinks.map((link, index) => (
          <Link
            key={index}
            to={link.link}
            className="text-lg hover:text-primary lg:text-2xl"
          >
            {link.name}
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
