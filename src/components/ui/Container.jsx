

function Containers({ name, language, link, image }) {
  return (
        <section className="space-y-2 mt-5 mb-2">
      <div className=" flex  justify-center">
        <div className=" w-[320px] shadow-md shadow-cyan-200 lg:w-[340px] rounded-xl lg:mx-80  bg-slate-800 py-2 px-2 ">
          <a href={link} > 
            <img
              className=" shadow-md  rounded-sm object-contain rounded-md w-full   border-slate-700   "
              src={image}
              alt="image"
            />
          </a>

          <div className=" text-slate-200  text-center  space-y-1 mt-2 ">
            <hr className=" shadow-sm shadow-gray-300 border-gray-400 " />
            <p className="text-lg font-semibold" >{name}</p>
            <p className="text-gray-400 text-xs">{language}</p>
          </div>
        </div>
      </div>

      
      {/* <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
    <a href={link}>
        <img className="rounded-t-lg" src={image} alt="" />
    </a>
    <div className="p-5">
        <a href={link}>
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{name}</h5>
        </a>

        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
        <a href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            Link
             <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
            </svg>
        </a>
        <p className="text-gray-500" >{language} </p>
         
    </div>
</div>
 */}

    </section>

    );
}
export default Containers;
