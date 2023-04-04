import MessageForm from './MessageForm';
import MyMessage from './MyMessage';
import TheirMessage from './TheirMessage';

const ChatFeed = (props) => {
  // Destructure the props
  const { chats, activeChat, userName, messages } = props;

  // Get the chat that is currently active
  const chat = chats && chats[activeChat];

  // Render the read receipts for each message
  const renderReadReceipts = (message, isMyMessage) => {
    // Get the keys of the chat object
    chat.people.map(
      (person, index) =>
        person.last_read === message.id && (
          // Render the read receipts
          <div>
            key={`read_${index}`}
            className="read-receipt" style ={' '}
            {{
              float: isMyMessage ? 'right' : 'left',
              backgroundImage: `url($(person?.person?.avatar))`,
            }}
          </div>
        )
    );
  };

  // Render the read receipts for each message
  const renderMessages = () => {
    // Get the keys of the messages object
    const keys = Object.keys(messages);

    return keys.map((key, index) => {
      const message = messages[key];
      const lastMessageKey = index === 0 ? null : keys[index - 1];
      const isMyMessage = userName === message.sender.userName;

      return (
        // Render the messages and the read receipts for each message
        <div key={`msg_${index}`} style={{ width: '100%' }}>
          <div className="message-block">
            {isMyMessage ? (
              <MyMessage message={message} />
            ) : (
              <TheirMessage
                message={message}
                lastMessage={messages[lastMessageKey]}
              />
            )}
          </div>

          <div
            className="read-receipts"
            style={{
              marginRight: isMyMessage ? '18px' : '0px',
              marginLeft: isMyMessage ? '0px' : '68px',
            }}
          >
            {renderReadReceipts(message, isMyMessage)}
          </div>
        </div>
      );
    });
  };
  return (
    // Render the chat title and subtitle and the messages
    <div className="chat-feed">
      <div className="chat-title-container">
        <div className="chat-title">{chat?.title}</div>
        <div className="chat-subtitle"></div>
        {renderMessages()}
        <div style={{ height: '100px' }} />
        <div className="message-form-container">
          <MessageForm {...props} chatId={activeChat} />
        </div>
      </div>
    </div>
  );
};

export default ChatFeed;
