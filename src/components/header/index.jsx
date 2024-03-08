import "./index.scss";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function Header(props) {
  const add = () => {
    props.AddContact("active");
  };

  return (
    <>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        transition:Bounce
      />
      <header>
        <div className="container">
          <div className="header">
            <h1>My Contacts</h1>
            <button onClick={add}>Add Contact</button>
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;
