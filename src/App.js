import "./App.css";
import Header from "./components/Header";
import NavBar from "./components/Navbar";
import Profile from "./components/Profile";

function App() {
  return (
    <div className="app-wrapper">
      <Header/>
      <Profile/>
      <NavBar/>
    </div>
  );
}
export default App;