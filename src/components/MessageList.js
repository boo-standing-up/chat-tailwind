import React, { useEffect, useState } from "react";
import MessageListItem from "./MessageListItem";
import {
  getDatabase,
  ref,
  onValue,
  limitToLast,
  query,
} from "firebase/database";

const MessageList = () => {
  const [messages, setMessages] = useState([]);
  const md5 = require("md5");
  const db = getDatabase();
  const starCountRef = query(ref(db, "/message"), limitToLast(15));
  // const recentPostsRef = query(ref(db, 'posts'), limitToLast(100));

  useEffect(() => {
    onValue(starCountRef, (snapshot) => {
      const data = snapshot.val();
      //  console.log(Object.entries(data)); 配列にしました。
      const entries = Object.entries(data);
      const newMessages = entries.map((entry) => {
        //0: Array(2)
        //0: "-Mwl3Nz8-jHsZ4oFAlG9"　←key
        //1: {name: 'Boo', text: 'どうなる'}　←NameAndText
        const [key, NameAndText] = entry;
        return { key, ...NameAndText };
      });
      console.log(newMessages);
      setMessages(newMessages);
    });
  }, []);

  const length = messages.length;

  return (
    <div className="flex flex-col h-full overflow-x-auto mb-2 ">
      <div className="flex flex-col gap-2">
        {messages.map(({ key, name, text }, index) => {
          const isLastItem = length === index + 1;
          return (
            <MessageListItem
              key={key}
              name={name}
              text={text}
              isLastItem={isLastItem}
            />
          );
        })}
      </div>
    </div>
  );
};
export default MessageList;
