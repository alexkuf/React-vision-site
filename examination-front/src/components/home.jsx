import { useAuth } from "../context/auth.context";
import { useMyCards } from "../hooks/useMyCards";
import Card from "./card";

const Home = ({ theme }) => {
  const { user } = useAuth();
  const cards = useMyCards();
  return (
    <div className="container-fluid">
      <div className="mt-5">
        <div className="text-center min-vw-25">
          <img
            src="https://www.pngkey.com/png/full/854-8540842_download-multlored-buildings-decor-clipart-png-photo-building.png"
            alt="building"
            className="img-fluid mt-5 "
            style={{
              height: "32rem",
            }}
          />
          <div
            className="title"
            style={{
              fontFamily: "Georgia, serif",
            }}
          >
            <h1>Build your Dream </h1>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="row text-center justify-content-center">
          <div
            className="card me-3 ms-3 mb-3 shadow p-3 bg-body-tertiary rounded"
            style={{
              width: "18rem",
              backgroundColor: theme === "light" ? "#ffffff" : "#238f52",
            }}
          >
            <i className="bi bi-headset fs-1"></i>
            <h3>Best Service</h3>
            <p>At any time we are in touch with customers</p>
          </div>
          <div
            className="card me-3 ms-3 mb-3 shadow p-3 bg-body-tertiary rounded"
            style={{
              width: "18rem",
              backgroundColor: theme === "light" ? "#ffffff" : "#e81f65",
            }}
          >
            <i className="bi bi-people-fill fs-1"></i>
            <h3>Best Teams</h3>
            <p>We have a lot of experience working with a team</p>
          </div>
          <div
            className="card me-3 ms-3 mb-3 shadow p-3 bg-body-tertiary rounded"
            style={{
              width: "18rem",
              backgroundColor: theme === "light" ? "#ffffff" : "#0d71aa",
            }}
          >
            <i className="bi bi-tools fs-1"></i>
            <h3>Best Design</h3>
            <p>
              Our capabilities allow us to create projects of varying complexity
            </p>
          </div>
        </div>
      </div>

      {user && user?.biz && cards.length > 0 && (
        <div className="row justify-content-center pb-4 border-top border-bottom mt-5">
          <h3 className="text-center mt-3 mb-3">My Cards</h3>
          {cards?.toReversed().map((elem, ind) => {
            if (ind <= 3) {
              return <Card key={ind} card={elem} theme={theme} />;
            }
            return null;
          })}
        </div>
      )}
    </div>
  );
};

export default Home;
