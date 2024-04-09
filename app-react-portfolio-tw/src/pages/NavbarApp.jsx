import { Button, Navbar } from "flowbite-react";
import { Link } from "react-router-dom";
import { DarkThemeToggle, Flowbite } from "flowbite-react";
import Contact from "./Contact";

function NavbarApp() {
  return (
    <Navbar fluid className="bg-gray-200">
      <Navbar.Brand href="#">
        <img
          src="../images/website-logo-sample.png"
          className="mr-3 h-6 sm:h-9"
          alt="Logo"
        />
      </Navbar.Brand>
      <div className="flex md:order-2">
        <DarkThemeToggle />

        <Button>
          <Link to="../Contact.jsx">Contact</Link>
        </Button>

        <Navbar.Toggle />
      </div>
      <Navbar.Collapse>
        <Navbar.Link>
          <Link to="../">Home</Link>
        </Navbar.Link>

        <Navbar.Link>
          <Link to="../Portfolio.jsx">Portfolio</Link>
        </Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default NavbarApp;
