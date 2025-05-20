'use strict';

// React
import React, { Component } from 'react';
import ReactDOM from 'react-dom';

// OpenAI
import { Configuration, OpenAIApi } from 'openai';

// Environment Variables
import dotenv from 'dotenv';
dotenv.config();

// OpenAI Configuration (Ensure API key is loaded securely from .env)
const configuration = new Configuration({
    organization: 'org-2KEWsr9tVZglYFjJqfGTrOIf',
    apiKey: process.env.OPENAI_API_KEY, // Corrected
});

const openai = new OpenAIApi(configuration);

class Display extends Component {
    constructor(props) {
        super(props);
        this.state = {
            date: new Date(),
            output: 'This is where the output goes',
        };
        this.getDayDetails = this.getDayDetails.bind(this);
    }

    componentDidMount() {
        this.getDayDetails();
    }

    async getDayDetails() {
        const prompt = 'Say this is a test';

        try {
            // Corrected the API call method to 'createCompletion'
            const response = await openai.createChatCompletion({
                model: 'gpt-3.5-turbo',
                messages: [
                    { role: 'user', content: prompt }
                ],
                max_tokens: 50,
                temperature: 0.7,
            });

            
            const generatedText = response.data.choices[0].message.content.trim();
            this.setState({ output: generatedText });
        } catch (error) {
            console.error('API Request Error:', error);
            this.setState({ output: 'Error fetching data from OpenAI.' });
        }
    }

    render() {
        return (
            <div className="GTP_output">
                <h3>This day in history as presented by ChatGPT</h3>
                <p>On this day the following happened:</p>
                <p>{this.state.output}</p>
            </div>
        );
    }
}

const domContainer = document.querySelector('#React-game');
const boardElement = <Display />;
ReactDOM.render(boardElement, domContainer);
