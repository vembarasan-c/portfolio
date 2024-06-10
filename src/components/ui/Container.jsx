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
    </section>

    );
}
export default Containers;
