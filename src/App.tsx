import NavBar from "./component/navbar";
import "bootstrap/dist/css/bootstrap.css";
import logo from "./assets/logo.jpeg";

function App() {
  return (
    <>
      <div>
        <NavBar webName="LinkedIn Compare" imgSource={logo} />
      </div>
      <div>
        <h1>{"Hello World!"}</h1>
      </div>
    </>
  );
}

export default App;
