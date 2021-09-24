import React from 'react'

const ChatButton = ({ onclick = null,children = null }) => (
    <button onclick={onclick}>{children}</button>
);
export default ChatButton;
