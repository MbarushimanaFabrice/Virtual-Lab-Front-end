import { useState, useEffect } from 'react';
import axios from 'axios';
import '@chatscope/chat-ui-kit-styles/dist/default/styles.min.css';
import { MainContainer, ChatContainer, MessageList, Message as ChatMessage, MessageInput, TypingIndicator } from '@chatscope/chat-ui-kit-react';
import React from "react";
import { Link } from "react-router-dom";
 import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Ai = () => {
  const [title, settitle] = useState("");
  const [discription, setdiscription] = useState("");
  const notify = () => toast("Note added successfuly");
  const notifyerror = () => toast("Server error try again!");
  const redirect =useNavigate();

  const SendNotes = async (e) => {
    const API = "http://localhost:5000/api/notes";
    e.preventDefault();
    try {
      const response = await fetch(API, {
        method: "post",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          title,
          discription
        }),
        credentials:'include',
      });
      if (response.ok) {
        notify();
        settitle("");
        setdiscription("");
      } else {
        notifyerror()
      }
    } catch (error) {
      console.log(error);
    }
  };

  const [chatMessages, setChatMessages] = useState([]);
  const [isTyping, setIsTyping] = useState(false);

  useEffect(() => {
    fetchData();
  }, []);

  const handleSend = async (message) => {
    setChatMessages([...chatMessages, {
      message: message,
      sender: "User",
      isUser: true
    }]);

    setIsTyping(true);

    const options = {
      method: 'POST',
      url: 'https://chatgpt-42.p.rapidapi.com/conversationgpt4',
      headers: {
        'content-type': 'application/json',
        'X-RapidAPI-Key': '83f1ba17e2mshde57cacff138b86p1f88ebjsn5276bd4b59bf',
        'X-RapidAPI-Host': 'chatgpt-42.p.rapidapi.com'
      },
      data: {
        messages: [
          {
            role: 'user',
            content: message
          }
        ],
        system_prompt: '',
        temperature: 0.9,
        top_k: 5,
        top_p: 0.9,
        max_tokens: 256,
        web_access: false
      }
    };

    try {
      const response = await axios.request(options);
      const resultMessage = response.data.result;
      setChatMessages([...chatMessages, {
        message: resultMessage,
        sender: "ChatGPT",
        isUser: false
      }]);
      setIsTyping(false);
    } catch (error) {
      console.error(error);
    }
    
  };

  const fetchData = async () => {
    const options = {
  method: 'POST',
  url: 'https://chatgpt-42.p.rapidapi.com/conversationgpt4',
  headers: {
    'content-type': 'application/json',
    'X-RapidAPI-Key': '83f1ba17e2mshde57cacff138b86p1f88ebjsn5276bd4b59bf',
    'X-RapidAPI-Host': 'chatgpt-42.p.rapidapi.com'
  },
      data: {
        messages: [
          {
            role: 'user',
            content: ''
          }
        ],
        system_prompt: '',
        temperature: 0.9,
        top_k: 5,
        top_p: 0.9,
        max_tokens: 256,
        web_access: false
      }
    };

    try {
      const response = await axios.request(options);
      const resultMessage = response.data.result;
      setChatMessages([...chatMessages, {
        message: resultMessage,
        sender: "ChatGPT",
        isUser: false
      }]);
      setIsTyping(false);
    } catch (error) {
      console.error(error);
    }
  };

  // const handleCopy = (message) => {
  //   navigator.clipboard.writeText(message);
  // };

  return (
    <div className="App flex  flex-col lg:flex-row">
         <ToastContainer />

      <div className='w-full lg:w-1/2 ' style={{ position:"relative", height: "700px",paddingTop:"99px"}}>
        <h2 className='text-xl mb-3 text-gray-500 ml-1'>Search anything about your subject here.</h2>
        <MainContainer>
          <ChatContainer>       
            <MessageList 
              scrollBehavior="smooth" 
              typingIndicator={isTyping ? <TypingIndicator content="Virtual Lab is typing" /> : null}
            >
              {chatMessages.map((message, i) => (
                <CustomMessage key={i} model={message} isUser={message.isUser} onCopy={() => handleCopy(message.message)} />
              ))}
            </MessageList>
            <MessageInput placeholder="Type message here" onSend={handleSend} />        
          </ChatContainer>
        </MainContainer>
      </div>



<form onSubmit={SendNotes} className=' ml-2 mt-10 lg:mt-40 lg:ml-40 '> 
<h2 className='text-2xl mb-3 text-gray-500'>Save your notes here.</h2>
<input type="text"
placeholder='Enter note title'
value={title}
onChange={(e) => settitle(e.target.value)}
 class="block mb-5 p-4 w-[28rem]  text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-orange-500 focus:border-orange-500  focus:outline-orange-300 dark:placeholder-gray-400  text-lg dark:focus:ring-orange-500 dark:focus:border-orange-500" 

/>
<textarea id="message" rows="4"
 value={discription}
 onChange={(e) => setdiscription(e.target.value)}
 className="block w-[28rem] h-60 p-4  text-lg text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-orange-500 focus:border-orange-500 focus:outline-orange-300   dark:focus:ring-orange-500 dark:focus:border-orange-500" 
 placeholder="Write your notes here..."></textarea>




<button className=' w-60 bg-orange-500 text-white hover:bg-orange-600 rounded-lg p-3 text-xl mt-3'>Add notes</button>

 </form>


    </div>
  );
}

export default Ai;

const CustomMessage = ({ model, isUser, onCopy }) => {
  return (
    <ChatMessage 
      model={{
        message: model.message,
        sentTime: 'just now',
        sender: model.sender,
        direction: isUser ? 'outgoing' : 'incoming',
        position: isUser ? 'right' : 'left',
        type: 'text',
        onClick: isUser ? null : onCopy
      }}
    />
  );
};
