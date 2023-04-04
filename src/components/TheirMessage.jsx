const TheirMessage = ({ lastMessage, message }) => {
  // Check if the message is the first message by the user and if so, render the avatar
  const isFirstMessageByUser =
    !lastMessage || lastMessage.sender.username !== message.sender.username;
  return (
    // If the message is the first message by the user, render the avatar
    <div className="message-row">
      {isFirstMessageByUser && (
        <div
          className="message-avatar"
          style={{ backgroundImage: `url($(message?.sender?.avatar))` }}
        />
      )}
      // If the message has any attachments (images, files, etc.) and if so,
      render them
      {message?.attachments?.length > 0 ? (
        <img
          src={message.attachments[0].file}
          alt="message-attachments"
          className="message-attachments"
          style={{ marginLeft: isFirstMessageByUser ? '4px' : '48px' }}
        />
      ) : (
        <div
          className="message"
          style={{
            float: 'left',
            backgroundColor: '#CABCDC',
            marginLeft: isFirstMessageByUser ? '4px' : '48px',
          }}
        >
          {message.text}
        </div>
      )}
      ;
    </div>
  );
};

export default TheirMessage;
