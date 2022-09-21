import './App.css';
import Navbar from './components/Navbar';
import NewsCard from './components/NewsCard';
import Header from './components/Header';

export default function App() {

  // const newsCards = data.map(story => {
  //   return (
  //     <NewsCard
  //       key={story.id}
  //       title={story.title}
  //       type={story.type}
  //       by={story.by}
  //       date={story.date}
  //       url={story.url}
  //     />
  //   )
  // })

  return (
    <div>
      <Navbar />
      <Header />
      <NewsCard />
    </div>
  );
}