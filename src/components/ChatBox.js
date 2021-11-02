import './ChatBox.css';
import Chat from './Chat';

function ChatBox() {
  return (
    <div className="ChatBox">
        <Chat username="ExampleUser" text="Something to say" color="red" />
        <Chat username="bot" text="New thing to say" color="blue" />
        <Chat username="ExampleUser" text="Response" color="red" />
        <Chat username="ExampleUser" text="Response" color="red" />
        <Chat username="ExampleUser" text="Response" color="red" />
        <Chat username="ExampleUser" text="Response" color="red" />
        <Chat username="ExampleUser" text="Response" color="red" />
        <Chat username="ExampleUser" text="Response" color="red" />
        <Chat username="ExampleUser" text="Response" color="red" />
        <Chat username="ExampleUser" text="Response" color="red" />
    </div>
  );
}

export default ChatBox;