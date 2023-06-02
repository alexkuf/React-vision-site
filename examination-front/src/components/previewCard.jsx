import { useParams } from "react-router-dom";
import { useCard } from "../hooks/useCard";
import PageHeader from "./common/pageHeader";
import { Link } from "react-router-dom";

const PreviewCard = ({ theme }) => {
  const { id } = useParams();
  const card = useCard(id);

  return (
    <div className="container-fluid">
      <PageHeader title={card?.bizName} description="" />
      <div
        className="card m-auto border-dark text-dark rounded-3"
        style={{
          maxWidth: "40rem",
          backgroundColor: theme === "light" ? "#ffffff" : "#e3e1d9",
        }}
      >
        <div
          className="row m-auto mt-1"
          style={{
            maxWidth: "39rem",
          }}
        >
          <img src={card?.bizImage} className="img mt-2" alt={card?.bizImage} />
        </div>
        <div
          className="ms-3 me-3 mt-2 text-center"
          style={{
            backgroundColor: theme === "light" ? "#ffffff" : "#e3e1d9",
          }}
        >
          <Link to={`/my-cards/edit/${id}`}>
            <button className="btn btn-primary border-0 fs-5 me-4 ms-4 hover-zoomin">
              <i className="bi bi-pencil"></i>
            </button>
          </Link>
          <Link to={`/my-cards/delete/${id}`}>
            <button className="btn btn-danger border-0 fs-5 me-4 ms-4 hover-zoomin">
              <i className="bi bi-trash3"></i>
            </button>
          </Link>
          <Link to={"/my-cards"}>
            <button className="btn text-white bg-dark border-0 fs-5 me-4 ms-4 hover-zoomin">
              <i className="bi bi-arrow-left-square"></i>
            </button>
          </Link>
        </div>
        <ul
          className="card border-0 mt-2 "
          style={{
            backgroundColor: theme === "light" ? "#ffffff" : "#e3e1d9",
          }}
        >
          <div className="d-flex lh-sm">
            <p className="fs-4 me-3">
              <i className="bi bi-buildings-fill"></i>
            </p>
            <p className="fs-4">{card?.bizName}</p>
          </div>
          <div className="d-flex lh-sm">
            <p className="fs-4 me-3">
              <i className="bi bi-card-text"></i>
            </p>
            <p className="fs-4">{card?.bizDescription}</p>
          </div>
          <div className="d-flex lh-sm">
            <p className="fs-4 me-3">
              <i className="bi bi-geo-alt-fill"></i>
            </p>
            <p className="fs-4">{card?.bizAddress}</p>
          </div>
          <div className="d-flex lh-sm">
            <p className="fs-4 me-3">
              <i className="bi bi-telephone-inbound-fill"></i>
            </p>
            <p className="fs-4">{card?.bizPhone}</p>
          </div>
        </ul>
      </div>
    </div>
  );
};

export default PreviewCard;
