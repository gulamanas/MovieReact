import { useRouteError } from 'react-router-dom';

export default function ErrorPage() {
  const error = useRouteError();

  return (
    <div className='flex justify-center items-center flex-col h-screen gap-4'>
      <h1 className='text-3xl font-bold'>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
      <p>
        Go Back to{' '}
        <a href='/' className='underline text-blue-500'>
          Home Page
        </a>
      </p>
    </div>
  );
}
