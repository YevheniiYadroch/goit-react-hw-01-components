import PropTypes from 'prop-types';

function FriendsListItem({avatar, name, isOnline}) {
    return (
        <li className="Friend-list-item" >
            {isOnline ? (<span className="Status Online"></span>):(<span className="Status Offline"></span>)}
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