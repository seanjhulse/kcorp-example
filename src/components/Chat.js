import './Chat.css';
import Avatar from './Avatar';
import ChatText from './ChatText';

function Chat(props) {
  return (
    <div className="Chat">
          <Avatar color={props.color} />
          <div className="ChatUsername">
              {props.username}
          </div>
          <ChatText text={props.text} />
    </div>
  );
}

export default Chat;