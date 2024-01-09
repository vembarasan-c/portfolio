import ConnectWithMe from './Connect';

function Footer() {
  return (
    <footer>
      <div className=" flex justify-center">
        <div className=" text-slate-400 space-y-3">
          <p>
            <span className="">&copy;</span> Vembarasan c | All rights reserved.
          </p>
          <p className="ml-5"> Developed by - Vembarasan c</p>
        </div>
      </div>
      <ConnectWithMe />
    </footer>
  );
}

export default Footer;
