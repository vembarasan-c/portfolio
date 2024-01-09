function Containers({ name, language, link, image }) {
  return (
    <section className="space-y-10 mt-5">
      <div className=" flex justify-center">
        <div className=" w-80 lg:w-[400px] rounded-xl lg:mx-80  bg-slate-800  py-4 ">
          <a href={link}>
            <img
              className="border-b-4  border-slate-700  h-72  "
              src={image}
              alt=""
            />
          </a>
          <div className="text-center text-lg space-y-1 lg:text-xl mt-4 ">
            <p>{name}</p>
            <p> {language}</p>
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
