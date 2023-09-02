'use strict';

const { createElement, Component } = React;

import { Configuration, OpenAIApi } from "openai";
const configuration = new Configuration({
    organization: "org-2KEWsr9tVZglYFjJqfGTrOIf",
    apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);
//const response = await openai.listEngines(); // Documentation said to include it. Don't think I need to
const mySecret = process.env.GPT_API;

// This displays a box with the info collected from chat gpt
class Display extends Component {
    constructor(props) {
        super(props);
        this.state = {
            date: new Date(),// Get the date for the submission to chat gpt
            output: 'This is where the output goes'
        }
        this.getDayDetails = this.getDayDetails.bind(this);
    }

    componentDidMount() {
        // Call getDayDetails when the component mounts, this means that it only runs when initially loaded
        this.getDayDetails();
    }

    getDayDetails () {
        const prompt = "Say this is a test";

        openai.Completion.create({
            engine: "text-davinci-002", 
            prompt: prompt,
            max_tokens: 50, // Set the maximum number of tokens in the response
            n: 1, // Number of completions to generate
            stop: null, // Optional: You can specify a list of stop words
            temperature: 0.7, // Optional: Adjust the randomness of the output
        }).then((response) => {
            // Extract the generated text from the API response
            const generatedText = response.choices[0].text;
            this.setState({output: generatedText});
        })
          .catch((error) => {
            console.error("API Request Error:", error);
        });
    }

    render () {
        return (
            <div className="GTP_output">
                <h3>This day in history as presented by chat GPT.</h3>
                <p>On this day the following happened:</p>
                <p>{this.state.output}</p>
            </div>
        )
    }
}

const domContainer = document.querySelector('#React-game');
const boardElement = <Display />;
ReactDOM.render(boardElement, domContainer);