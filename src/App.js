import React from "react";
import "./style.css";
// import classes from "./style.module.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Content from "./components/Content";
import Text from "./components/Text";
import Link from "./components/Link";
function App() {
  const paths = ["Home", "About", "Projects", "Contact"];
  return (
    <div className="App">
      <Header data={paths}>
        <Link></Link>
      </Header>
      <Content>
        <div className="contanier">
          {" "}
          <Text />
        </div>
      </Content>

      <Footer></Footer>
    </div>
  );
}

export default App;
