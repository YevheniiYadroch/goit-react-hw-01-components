import PropTypes from 'prop-types';

function FriendsListItem({avatar, name, isOnline}) {
    return (
        <li className="Friend-list-item" >
            <span className={isOnline ? "Status Online" : "Status Offline"} />
            <img className="Friend-list-avatar" src={avatar} alt={name} width="48" />
            <p className="Friend-list-name">{name}</p>
        </li>
    );
};

FriendsListItem.defaultProps = {
  avatar: 'Image not detected',
};

FriendsListItem.propTypes = {
    avatar: PropTypes.string,
    name: PropTypes.string,
    isOnline: PropTypes.bool,
}

export default FriendsListItem;