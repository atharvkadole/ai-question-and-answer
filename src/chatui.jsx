import'./chatui.css'
export default function ChatUI({ chat }) {
    console.log(chat);
    return (
        <div className="chat">
            {(chat.length > 0) && (

                chat.map((entry, index) => {
                    return (
                        <div key={index} className='chat-entry'>
                            <p className='question'>{entry.question}</p>
                            <p className='answer'>{entry.answer}</p>
                        </div>
                    )
                })

            )
            }
        </div>
    )
}