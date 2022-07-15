import Message from './Message'

function Chat(props) {
  return (
    <div className="chat">
      <ul>
        {props.messages.map( (message, index) => (
          <Message key={index} message={message} />
        ))}
      </ul>

      <form
        onSubmit={e => {
          e.preventDefault()
          props.addMessage(e.target.message.value)
          e.target.reset()
        }}
      >
        <input
          className="message-input"
          name="message"
          placeholder="Type a message"
          required
        />
      </form>
    </div>
  )
}

export default Chat
