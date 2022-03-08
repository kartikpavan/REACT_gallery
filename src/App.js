import React from 'react';
import Header from './components/Header';
import Image from './components/Image';
import Search from './components/Search';

const App = () => {
  const [loading, setLoading] = React.useState(true);
  const [images, setImages] = React.useState([]);
  const [searchTerm, setSearchTerm] = React.useState('a');

  React.useEffect(() => {
    fetch(
      `https://pixabay.com/api/?key=26045983-52a8c766db230dc3bb499f26c&q=${searchTerm}&image_type=photo&pretty=true`
    )
      .then((res) => res.json())
      .then((data) => {
        setImages(data.hits);
        setLoading(false);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      <Header />
      <div className="container mx-auto">
        <Search />
        <article className="grid grid-cols-3 gap-20 items-center ">
          {images.map((img) => {
            return <Image key={img.id} {...img} />;
          })}
        </article>
      </div>
    </div>
  );
};

export default App;
