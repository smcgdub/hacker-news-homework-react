import './App.css';
import Navbar from './components/Navbar';
import NewsCard from './components/NewsCard';

export default function App() {
  return (
    <div>
      <Navbar />
      <br />
      <div className="container">
        <div className="row">
          <div className="col">
            <NewsCard />
          </div>
        </div>
      </div>
    </div>
  );
}
