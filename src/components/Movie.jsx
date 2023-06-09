import { FaPlus } from 'react-icons/fa';
import axios from 'axios';
import { useEffect, useState } from 'react';

const Movie = () => {
  const [movies, setMovies] = useState([]);
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [movieName, setMovieName] = useState('');
  const [language, setLanguage] = useState('');
  const [releaseDate, setReleaseDate] = useState('');

  const url = 'http://localhost:8081/movies';
  async function fetchData() {
    const response = await axios.get(url);
    //   console.log(response.data.values);
    setMovies(response.data.values);
  }

  useEffect(() => {
    fetchData();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const formattedDate = new Date(releaseDate).toISOString();
      const response = await axios.post(url, {
        title: movieName,
        language: language,
        releaseDate: formattedDate,
      });
      closePopup();
      //   window.location.reload();
      fetchData();
      console.log(response);
    } catch (error) {
      console.log('error', error);
      alert(error);
    }
  };

  const openPopup = () => {
    setIsPopupOpen(true);
  };

  const closePopup = () => {
    setIsPopupOpen(false);
  };

  return (
    <>
      <div className='inline-flex gap-3'>
        {movies.map((movie) => {
          const date = new Date(movie.releaseDate).toLocaleDateString('en-GB');
          return (
            <div key={movie.id} className='bg-blue-300 p-3'>
              <p>{movie.title}</p>
              <p>{movie.language}</p>
              <p>{date}</p>
            </div>
          );
        })}
        {isPopupOpen && (
          <div className='w-full h-screen bg-black/40 fixed flex justify-center items-center'>
            <form onSubmit={handleSubmit} className='w-72'>
              <div className='p-3 flex flex-col gap-3  bg-blue-300'>
                <input
                  type='text'
                  placeholder='Movie Name'
                  className=' p-3'
                  value={movieName}
                  onChange={(e) => setMovieName(e.target.value)}
                />
                <input
                  type='text'
                  placeholder='Language'
                  className=' p-3'
                  value={language}
                  onChange={(e) => setLanguage(e.target.value)}
                />
                <input
                  type='date'
                  className=' p-3'
                  value={releaseDate}
                  onChange={(e) => setReleaseDate(e.target.value)}
                />
                <button className='bg-red-200 p-3' type='submit'>
                  Submit
                </button>
                <button className='p-3 ' onClick={closePopup}>
                  Cancel
                </button>
              </div>
            </form>
          </div>
        )}
        <div
          className='fixed bottom-2 right-2 bg-blue-300 p-3 rounded-full text-white cursor-pointer'
          onClick={openPopup}
        >
          <FaPlus />
        </div>
      </div>
    </>
  );
};

export default Movie;
