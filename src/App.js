import './App.css';
import Navbar from './components/Navbar';
import NewsCard from './components/NewsCard';
import Header from './components/Header';
import data from './data'

export default function App() {

  // let unixTimestamp = data.time;
  // let milliseconds = unixTimestamp * 1000;
  // let dateObject = new Date(milliseconds);
  // let humanDateFormat = dateObject.toLocaleString();

  let currentTimestamp = Date.now()
  console.log(currentTimestamp);
  let date = new Intl.DateTimeFormat('en-US', { year: 'numeric', month: '2-digit', day: '2-digit' }).format(currentTimestamp)
  console.log(date);

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
      {/* <NewsCard /> */}
      <div>
        {news}
      </div>
    </div>
  );
}