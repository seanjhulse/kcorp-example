import './ChatText.css';

function ChatText(props) {
  return (
      <div className="ChatText">
          {props.text}
    </div>
  );
}

export default ChatText;