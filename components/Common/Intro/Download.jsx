import Link from 'next/link';
const Download = ({ icon }) => {
  return (
    <>
      <Link href='/Frontend Dev (Tanjin Hossain).pdf' target='_blank' className='flex flex-row text-LightGray items-center gap-x-4 pb-14 pt-4'>
        <span className='text-[#00c922]'>Download Resume</span>
        <span style={{color:"#00c922"}}>{icon}</span>
      </Link>
    </>
  );
};

export default Download;
