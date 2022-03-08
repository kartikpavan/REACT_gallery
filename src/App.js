import React from 'react';
import Header from './components/Header';
import Image from './components/Image';
import Search from './components/Search';

const App = () => {
  const [loading, setLoading] = React.useState(true);
  const [images, setImages] = React.useState([]);
  const [searchTerm, setSearchTerm] = React.useState('');

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
  }, [searchTerm]);

  return (
    <div>
      <Header />
      <div className="container mx-auto mb-20">
        <Search searchText={(text) => setSearchTerm(text)} />
        {!loading && images.length === 0 && (
          <h1 className="text-6xl text-center mt-40">No Images Found</h1>
        )}
        {loading ? (
          <h1 className="text-6xl text-center">LOADING.....</h1>
        ) : (
          <article className="grid grid-cols-1 gap-20 items-center xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-2 ">
            {images.map((img) => {
              return <Image key={img.id} {...img} />;
            })}
          </article>
        )}
      </div>
    </div>
  );
};

export default App;
