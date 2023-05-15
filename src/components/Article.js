import React from 'react'

function Article({ title, date = "January 1, 1970" ,preview, minutes }) {

    function makeEmojiList(minutes){
        const interval = minutes < 30 ? 5 : 10;
        const emoji = minutes < 30 ? "☕️" : "🍱";

        let emojis = " ";
        for(let i = 0; i < minutes ; i+=interval){
            emojis += emoji;
        }
        return emojis;
    }

    const emojis = makeEmojiList(minutes)

  return (
    <article>
      <h3>{title}</h3>
      <small>{date}  : <span>{emojis} {minutes} min read </span>  </small>
      <p>{preview}</p>
    </article>
  );
}


export default Article;