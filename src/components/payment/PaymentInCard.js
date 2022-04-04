import React from 'react'


function PaymentInCard({data}) {
  return (
    <div className='py-3 px-5 bg-white' style={{boxShadow: '2px 2px 5px 0px #9D20FF1A'}} > 
        <div className='grid grid-cols-8 gap-2'>
            <img src={data.gambar} alt="" className='col-span-1 rounded-lg h-10 w-10' />
            <div className='col-span-4 py-[2px]'>
                <h5 className='text-sm font-medium'>{data.nama} - {data.tipe}</h5>
                <h4 className='text-lg font-semibold'>Rp {data.jumlah}</h4>
                <p className='text-sm'>Note: {data.note}</p>
            </div>
            <div className='col-span-3  flex flex-col items-end'>
                <p className='text-sm text-left'>Due: {data.deadline}</p>
                <p className={`text-sm font-medium ${data.status === "Pending" ? "text-[#ffa800]" : "text-red-600"}`}>{data.status}</p>
            </div>
        </div>

        {/* Button */}
        <div className='grid grid-cols-9 gap-2 mt-4'>
            <div className='col-span-1'></div>
            <div className='font-medium py-2 px-10 bg-red-600 hover:bg-red-700 cursor-pointer text-white col-span-4 ml-1 rounded-md flex justify-center items-center'>Reject</div>
            <div className='font-medium py-2 px-10 bg-green-600 hover:bg-green-700 cursor-pointer text-white col-span-4 ml-1 rounded-md flex justify-center items-center'>Accept</div>
        </div>
    </div>
  )
}

export default PaymentInCard