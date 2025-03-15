export function Loading({ message = 'Loading...', className = '' }) {
  return (
    <div className={`d-flex justify-content-center align-items-center ${className}`}>
      <strong role='status' className='me-5'>
        {message}
      </strong>
      <div className='spinner-border' role='status' aria-hidden='true'></div>
    </div>
  );
}
