import PropTypes from 'prop-types';
import './Profile.css';

function Profile({ name, tag, location, avatar, stats }) {
  return (
    <div className="Profile">
      <div className="Description">
        <img
          src={avatar}
          alt="Аватар пользователя"
          className="Avatar"
        />
        <p className="Name">{name}</p>
        <p className="Tag">@{tag}</p>
        <p className="Location">{location}</p>
      </div>

      <ul className="Stats">
        <li className="Stats-item">
          <span className="Label">Followers</span>
          <span className="Quantity"> {stats.followers}</span>
        </li>
        <li className="Stats-item">
          <span className="Label">Views</span>
          <span className="Quantity"> {stats.views}</span>
        </li>
        <li className="Stats-item"> 
          <span className="Label">Likes</span>
          <span className="Quantity"> {stats.likes}</span>
        </li>
      </ul>
    </div>
  );
}

Profile.propTypes = {
  name: PropTypes.string,
  tag: PropTypes.string,
  location: PropTypes.string,
  avatar: PropTypes.string,
  stats: PropTypes.object,
}

export default Profile;