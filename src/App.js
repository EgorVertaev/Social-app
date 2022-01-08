import "./style/App.css";
import "./style/reset.css";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Profile from "./components/Profile";

function App() {
  return (
    <div className="app-wrapper">
      <Header/>
      <Profile/>
      <Navbar/>
    </div>
  );
}
export default App;
