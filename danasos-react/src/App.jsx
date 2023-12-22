import Navbar from "./components/Navbar";

function App() {
  const href = window.location.href;
  console.log(href);
  return (
    <>
      <Navbar halaman="Dashboard" />
    </>
  );
}

export default App;
