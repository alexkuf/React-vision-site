const PageHeader = ({ title, description }) => {
  return (
    <>
      <div className="row mt-5 ">
        <div className="col-12 mt-5 d-flex justify-content-center">
          <h1>
            {title}
            {title === "My Cards" && <i className="bi bi-balloon-heart"></i>}
          </h1>
        </div>
      </div>

      {description && (
        <div className="row mt-2 text-center">
          <div className="col-12">
            <p>{description}</p>
          </div>
        </div>
      )}
    </>
  );
};

export default PageHeader;
