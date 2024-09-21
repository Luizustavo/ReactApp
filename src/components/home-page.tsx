import Header from "./header";
import Nav from "./nav";
import Main from "./main";
import Aside from "./aside";
import Footer from "./footer";
import "../App.css";

export default function HomePage() {
  return (
    <div className="container">
      <Header />
      <Nav />
      <Main />
      <Aside />
      <Footer />
    </div>
  );
}
