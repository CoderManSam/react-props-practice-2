function Message(props) {
  return (
    <li className={`message ${props.message.user === 'Nicolas' ? 'mine' : 'other'}`}>
      {props.message.text}
    </li>
  )
}

export default Message
