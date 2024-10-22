import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import NetflixPage from "./components/NetflixPage";

function App() {
  return (
    <>
      <Header />
      <main className="container mt-5">
        <NetflixPage />
      </main>
      <Footer />
    </>
  );
}

export default App;
