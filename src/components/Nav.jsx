import { FaBeer, FaSearch, FaDashcube } from 'react-icons/fa';

const Nav = () => {
  return (
    <div>
      <nav className='flex justify-between items-center bg-red-50'>
        <div className='text-3xl font-semibold p-3'>MOVIIA</div>
        <ul className='flex  '>
          <li className='p-3'>
            <a href='#'>Movies</a>
          </li>
          <li className='p-3'>
            <a href='#'>TV shows</a>
          </li>
          <li className='p-3'>
            <a href='#'>Animations</a>
          </li>
        </ul>
        <ul className='flex'>
          <li className='p-3'>
            <a href='#'>
              <FaSearch />
            </a>
          </li>
          <li className='p-3'>
            <a href='#'>
              <FaBeer />
            </a>
          </li>
          <li className='p-3'>
            <a href='#'>
              <FaDashcube />
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Nav;
