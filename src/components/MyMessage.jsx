const MyMessage = ({ message }) => {
  // Check if the message has any attachments (images, files, etc.) and if so, render them
  if (message?.attachments?.length > 0) {
    return (
      <img
        src={message.attachments[0].file}
        alt="message-attachments"
        className="message-image"
        style={{ float: 'right' }}
      />
    );
  }
  return (
    <div
      className="message"
      style={{
        float: 'right',
        marginRight: '18px',
        color: 'white',
        backgroundColor: '#3B2A50',
      }}
    >
      {message.text}
    </div>
  );
};

export default MyMessage;
