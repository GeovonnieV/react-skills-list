import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
// put bootstrap above other css
import './App.css';
import React, {useState} from "react"
// import components
import Header from "./components/Header";
import Footer from "./components/Footer";
import Input from "./components/Input";
import Display from "./components/Display";

function App() {

  const [skillsList,setSkillsList] = useState([])

  return (
    <div className="App container">
      <Header />
      <Input skillsList={ skillsList } setSkillsList={ setSkillsList } />
      <Display skillsList={ skillsList } />
      <Footer />
    </div>
  );
}

export default App;
