import "./Card.css";
import IconButton from "../IconButton/IconButton";
import TagList from "../Tag/TagList";

const Card = ({ title, time, body, icon, href, tags }) => {
  return (
    <div className="project-card">
      <div className="project-card-heading">
        <h5>
          <a href={href} target="_blank">{title}</a>
        </h5>
        {icon && <div className="project-card-icon">{icon}</div>}
      </div>
      <div className="project-card-subheading">
        <p>{time}</p>
      </div>
      <div className="project-card-content">
        <p>{body}</p>
      </div>
      {/* only render this footer if it has tags */}
      {tags && tags.length > 0 && (
        <div className="project-card-footer">
          <TagList tags={tags} />
        </div>
      )}
    </div>
  );
};

export default Card;