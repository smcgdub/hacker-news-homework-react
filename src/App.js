import './App.css';
import Navbar from './components/Navbar';
import NewsCard from './components/NewsCard';

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