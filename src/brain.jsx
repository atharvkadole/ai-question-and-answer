import React, { useState } from 'react'
import Footer from "./footer"
import { GoogleGenerativeAI } from "@google/generative-ai";
import ChatUI from './chatui';
export default function Brain() {
    const [loading, setLoading] = useState(false)
    const [chat, setChat] = useState([]);
    async function generateText(prompt) {
        setLoading(true);
        try{
            const genAI = new GoogleGenerativeAI("your api key");
            const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
            const result = await model.generateContent(prompt);
            console.log(result.response.text());
            const responseText = result.response.text();
            // Set question and answer separately
            setChat([...chat, { question: prompt, answer: responseText }]);
            
            // Set both question and answer at once
        }catch(e){
            console.log(e);
        }finally{
            setLoading(false);
        }
        
    }

    function getquery(query) {
        generateText(query);
    }
    return (
        <>
            <ChatUI chat={chat} />
            {loading && <h1>Loading...</h1>}
            <Footer getquery={getquery} />
        </>
    )
}