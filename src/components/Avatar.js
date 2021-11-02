import './Avatar.css';

function Avatar(props) {
  return (
      <div className="Avatar">
        <div className="AvatarIcon-Wrapper" style={{backgroundColor: props.color}}>
              <i className="AvatarIcon fa fa-user"></i>
        </div>
    </div>
  );
}

export default Avatar;