import FriendsListItem from "./FriendsListItem";
import PropTypes from 'prop-types';
import './FriendsList.css'

function FriendsList({ friends }) {
    return (
            <ul className="Friend-list">
                {friends.map(friend => (
                        <FriendsListItem
                            key={friend.id}
                            avatar={friend.avatar}
                            name={friend.name}
                            isOnline={friend.isOnline}
                        />
                ))}
            </ul>
    );
}

FriendsList.propTypes = {
    friends: PropTypes.array,
}

export default FriendsList;