import { navLinks } from "../../assets/data/data";
import { Link } from "react-scroll";

const Navbar = ({ isHeaderInView }: { isHeaderInView: boolean }) => {
  return (
    // <nav className="fixed z-50 flex w-full items-center justify-center py-10 text-neutral">
    <nav
      className={`fixed z-50 flex w-full items-center justify-center py-10 ${isHeaderInView ? "text-neutral" : "text-secondary"}`}
    >
      <div className="flex items-center gap-4">
        {navLinks.map((link, index) => (
          <Link
            key={index}
            to={link.link}
            spy={true}
            smooth={true}
            offset={0}
            duration={500}
            activeClass="text-primary"
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
