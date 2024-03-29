import React, { useContext } from 'react';
import { TransactionContext } from '../context/TransactionContext';
import dummyData from '../utils/dummyData';
import useFetch from './Hooks/useFetch';

const TransactionCard = ({ addressTo, addressFrom, timestamp, message, keyword, amount, url }) => {
  // const gifUrl = useFetch({ keyword })
  return (
    <div className='bg-[#181918] m-4 flex flex-1
      2xl:min-w-[450px]
      2xl:max-w-[500px]
      sm:min-w-[270px]
      sm:max-w-[300px]
      flex-col p-3 rounded-md hover:shadow-2xl
    '>
      <div className='flex flex-col items-center w-full mt-3'>
        <div className=' w-full mb-6 p-2'>
          <a href='#'>
            <p className='text-white text-base'>From: OcwF8-..6A50</p>
          </a>
          <a href='#'>
            <p className='text-white text-base'>To Pac7F8-..5S870</p>
          </a>
          <p className='text-white text-base'>Amount: 0.01ETH</p>
          
        </div>
        <img src={ url }
               alt='gif'
               className='w-full h-64 2x:h-96 rounded-md shadow-md'
          />

          <div className='bg-black p-3 px-5 w-max rounded-3xl -mt-5 shadow-2xl object-cover'>
            <p className='text-[#37c7da] font-bold'>12/21/2022, 4:33:21 PM</p>
          </div>
      </div>
    </div>
  )
};

const Transactions = () => {
  //const { currentAccount } = useContext(TransactionContext);
  return (
    <div className='flex w-full justify-center items-center zxl:px-20 gradient-bg-transactions'>
      <div className='flex flex-col md:p-12 px-4'>
        {false ? (
          <h3 className='text-white text-3xl text-center my-2'>Latest Transactions</h3>
        ) : (
          <h3 className='text-white text-3xl text-center my-2'>Connect your account to see the latest transactions</h3>
        )}

        <div className='flex flex-wrap justify-center items-center mt-10'>
          {dummyData.reverse().map((transaction, i) => (
            <TransactionCard key={i} {...transaction}/>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Transactions