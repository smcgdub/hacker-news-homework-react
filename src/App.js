import './App.css';
import Navbar from './components/Navbar';
import NewsCard from './components/NewsCard';
import Header from './components/Header';
import data from './data'

export default function App() {

  // Convert unix time to human readable time
  let currentTimestamp = Date.now()
  let date = new Intl.DateTimeFormat('en-US', { year: 'numeric', month: '2-digit', day: '2-digit' }).format(currentTimestamp)

  const news = data.map(item => {
    return (
      <NewsCard
        key={item.id}
        title={item.title}
        type={item.type}
        by={item.by}
        time={date}
        url={item.url}
      />
    )
  })

  return (
    <div>
      <Navbar />
      <Header />
      <div>
        {news}
      </div>
    </div>
  );
}