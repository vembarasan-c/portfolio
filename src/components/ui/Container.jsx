function Containers({ name, language, link, image }) {
  return (
    <section className="space-y-2 mt-5 mb-2">
      <div className=" flex  justify-center">
        <div className=" w-[320px] lg:w-[340px] rounded-xl lg:mx-80  bg-slate-800 py-2 px-2 ">
          <a href={link}>
            <img
              className="border-2 rounded-sm object-cover w-full h-60  border-slate-700   "
              src={image}
              alt="image"
            />
          </a>
          <div className=" text-slate-200 text-center text-lg space-y-2 mt-2 ">
            <p>{name}</p>
            <p className="text-sm">{language}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
export default Containers;

// i want to become a successful software developer
// java is my favourite language
// logical thinking criticalthinking problem solving, communication
