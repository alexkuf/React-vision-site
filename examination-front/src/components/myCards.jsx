import { Link } from "react-router-dom";
import PageHeader from "./common/pageHeader";
import { useMyCards } from "../hooks/useMyCards";
import Card from "./card";

const MyCards = ({ theme }) => {
  const cards = useMyCards();
  return (
    <>
      <PageHeader title="My Cards" description="" />

      <div className="row fs-4  text-center hover-zoomin">
        <Link
          to="/create-card"
          style={{
            color: theme === "light" ? "#0d6efd" : "#00ffff",
            width: "350px",
            margin: "auto",
          }}
        >
          Create a New Card
          <i className="bi bi-file-earmark-plus ms-3"></i>
        </Link>
      </div>

      <div className="row justify-content-center">
        {!cards.length ? (
          <p className="text-center text-danger fs-3 border border-danger rounded p-2 mt-3">
            No Cards Yet. Please Create new ones..
          </p>
        ) : (
          cards.map((card) => <Card key={card._id} card={card} theme={theme} />)
        )}
      </div>
    </>
  );
};

export default MyCards;
