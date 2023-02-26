import './App.css';
import Footer from './Component/Footer';
import Header from './Component/Header';
import Navbar from './Component/Navbar';
import TodoList from './Component/TodoList';

function App() {
  return (
    <div className="App">
      <div className="grid place-items-center bg-blue-100 h-screen px-6 font-sans">
        <Navbar />


        <div className="w-full max-w-3xl shadow-lg rounded-lg p-6 bg-white">
          <Header />


          <TodoList />



          <hr className="mt-4" />

          <Footer />

        </div>
      </div>
    </div>
  );
}

export default App;
