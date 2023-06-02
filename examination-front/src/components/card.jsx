import { Link } from "react-router-dom";

const Card = ({
  card: { _id, bizName, bizDescription, bizAddress, bizPhone, bizImage },
  theme,
}) => {
  return (
    <div
      className="card ms-2 me-2 mt-3 mb-3 shadow p-3 bg-body-tertiary rounded"
      style={{
        width: "18rem",
        backgroundColor: theme === "light" ? "#ffffff" : "#e3e1d9",
        color: "black",
      }}
    >
      <div className="text-center mb-1">
        <img
          src={bizImage}
          className="card-img-top mt-2"
          alt={bizName}
          style={{ width: "250px", height: "200px" }}
        />
      </div>
      <div className="justify-content-start">
        <ul
          className="list pt-2"
          style={{
            backgroundColor: theme === "light" ? "#ffffff" : "#e3e1d9",
          }}
        >
          <div className="d-flex lh-sm">
            <p className="fs-6 me-2 text-secondary">
              <i className="bi bi-buildings-fill"></i>
            </p>
            <p className="fs-6">{bizName}</p>
          </div>
          <div className="d-flex lh-sm">
            <p className="fs-6 me-2 text-secondary">
              <i className="bi bi-card-text"></i>
            </p>
            <p className="fs-6">{bizDescription}</p>
          </div>
          <div className="d-flex lh-sm">
            <p className="fs-6 me-2 text-secondary">
              <i className="bi bi-geo-alt-fill"></i>
            </p>
            <p className="fs-6">{bizAddress}</p>
          </div>
          <div className="d-flex lh-sm">
            <p className="fs-6 me-2 text-secondary">
              <i className="bi bi-telephone-inbound-fill"></i>
            </p>
            <p className="fs-6">{bizPhone}</p>
          </div>
        </ul>
        <div
          className="d-flex justify-content-between me-3 ms-3"
          style={{
            backgroundColor: theme === "light" ? "#ffffff" : "#e3e1d9",
          }}
        >
          <Link to={`/my-cards/edit/${_id}`}>
            <button className="btn btn-primary border-0 fs-5 hover-zoomin">
              <i className="bi bi-pencil"></i>
            </button>
          </Link>
          <Link to={`/my-cards/preview/${_id}`}>
            <button className="btn btn-success border-0 fs-5 hover-zoomin">
              <i className="bi bi-eye"></i>
            </button>
          </Link>

          <Link to={`/my-cards/delete/${_id}`}>
            <button className="btn btn-danger border-0 fs-5 hover-zoomin">
              <i className="bi bi-trash3"></i>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Card;
