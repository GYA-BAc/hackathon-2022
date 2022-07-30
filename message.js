import React from 'react'

function Message() {
    return (
        <>
        <img src="https://i.etsystatic.com/10919371/r/il/9abf9d/1751690627/il_1588xN.1751690627_bwsp.jpg"></img>
        
        <section class="message-board">
        <div class="title">
            <h2>
                Leave a message
            </h2>
        </div>
        <textarea class="message" type="text"></textarea><br/>
        <input value="submit" type="button" class="submit-btn"></input>
        <div class="display-area">
            Existing comment:
        </div>
    
  <p><span id="display"></span></p>

        </section>
        </>
    );
}

export default Message;
