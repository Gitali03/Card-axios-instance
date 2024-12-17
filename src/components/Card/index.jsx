import PropTypes from "prop-types";
import "./card.css";
import IconArrowRight from "../icons/IconArrowRight";

function Card({ variant = "small", title, content }) {
  return (
    <div className={`card-container ${variant}`}>
      <div className="text-container">
        <div>
          <h2>{title}</h2>
          <span>22.01.2022</span>
        </div>
        <p
          dangerouslySetInnerHTML={{
            __html: content,
          }}
        />

        <a href="javascript:void(0)">
          Raporu Göster
          <IconArrowRight  />
        </a>
      </div>
      <img src={`/${variant}.png`} alt="Energy Solutions" />
    </div>
  );
}

Card.propTypes = {
  title: PropTypes.string,
  variant: PropTypes.oneOf(["small", "big"]),
  content: PropTypes.string,
};

export default Card;
