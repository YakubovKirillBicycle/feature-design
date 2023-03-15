import CircularProgress from '@mui/material/CircularProgress';

export const Loader = () => {
    return ( 
        <div className='flex justify-center items-center h-[100%]'>
            <CircularProgress />
        </div>
     );
}