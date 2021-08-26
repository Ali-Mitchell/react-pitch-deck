import React from 'react';
import chat from './Chat-02.svg';
import './StickyChat.css';
import { Link } from 'react-router-dom';

function StickyChat() {
  return (
  <Link className="chat" to="/Contact">
       <img alt="" src={chat}/>
  </Link>

  );
}

export default StickyChat;
