import { Footer } from "flowbite-react";
import { Link } from "react-router-dom";

const FooterApp = () => {
  return (
    <Footer container>
      <Footer.Copyright href="#" by="Flowbite™" year={2022} />
      <Footer.LinkGroup>
        <Footer.Link href="#">
          <Link to="#">Home</Link>
        </Footer.Link>
        <Footer.Link href="#">
          <Link to="#">Portfolio</Link>
        </Footer.Link>
        <Footer.Link href="#">
          <Link to="#">Contact</Link>
        </Footer.Link>
      </Footer.LinkGroup>
    </Footer>
  );
};

export default FooterApp;
