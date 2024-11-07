import Link from 'next/link';
const Download = ({ icon }) => {
  return (
    <>
      <Link href='/frontend-developer-(Tanjin Hossain) .pdf' target='_blank' className='flex flex-row text-LightGray items-center gap-x-4 pb-14 pt-4'>
        <span className='text-pink-600 font-bold'>Download Resume</span>
        <span className='text-pink-600'>{icon}</span>
      </Link>
    </>
  );
};

export default Download;
