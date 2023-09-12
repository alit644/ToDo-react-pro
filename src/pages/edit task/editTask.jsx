import { Helmet } from "react-helmet-async";
import "./editTask.css";
import Header from "comp/header";
import Footer from "comp/footer";

const EditTask = () => {
  return (
    <div>
      <Helmet>
        <title>Edit Task</title>
      </Helmet>
      <Header />
      <div className="edit-task">
        {/* title */}
        <section className="title center">
          <h1>
            <input
              value={"ali talib"}
              className="title-input center"
              type="text"
            />
            <i className="fa-regular fa-pen-to-square"></i>
          </h1>
        </section>

        {/* sub tasks sec */}

        <section className="sub-task mtt">
          <div className="parent-time">
            <p className="time">Created 6 days ago</p>
            <div className="input-check">
              <input type="checkbox" id="checkbox" />
              <label htmlFor="checkbox">Completed</label>
            </div>
          </div>

          <ul>
            <li className="cart-task flex">
              <p>sub task</p>
              <i className="fa-solid fa-trash"></i>
            </li>
          </ul>
        </section>

        {/* add more btn && delete btn */}

        <section className="center mt">
          <button className="add-more-task">
            Add more <i className="fa-solid fa-plus"></i>
          </button>
          <div>
            <button className="delete mt">Delete task</button>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default EditTask;
