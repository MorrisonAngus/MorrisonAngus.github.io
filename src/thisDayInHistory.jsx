'use strict';

import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Configuration, OpenAIApi } from '../node_modules/openai';

const configuration = new Configuration({
    organization: 'org-2KEWsr9tVZglYFjJqfGTrOIf',
    apiKey: process.env.REACT_APP_GPT_API,
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
            const response = await openai.Completion.create({
                engine: 'text-davinci-002',
                prompt: prompt,
                max_tokens: 50,
                n: 1,
                stop: null,
                temperature: 0.7,
            });

            const generatedText = response.choices[0].text;
            this.setState({ output: generatedText });
        } catch (error) {
            console.error('API Request Error:', error);
        }
    }

    render() {
        return (
            <div className="GTP_output">
                <h3>This day in history as presented by chat GPT.</h3>
                <p>On this day the following happened:</p>
                <p>{this.state.output}</p>
            </div>
        );
    }
}

const domContainer = document.querySelector('#React-game');
const boardElement = <Display />;
ReactDOM.render(boardElement, domContainer);
