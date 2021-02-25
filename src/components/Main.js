import React, { Component } from 'react'
import { animals, nouns } from '../words';

import Options from './Options';
import List from "./List";

class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            names: [],
            total: 20,
            digits: 0
        }
        this.generateNames = this.generateNames.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }


    getArrValue = (arr) => {
        return arr[Math.floor(Math.random() * Math.floor(arr.length))];
    }

    generateNames = () => {
        let tempNames = [];
        let counter = 0;
        
        while (counter !== this.state.total) {
            const animal = this.getArrValue(animals)
            const word = this.getArrValue(nouns)
            const maxDigits = this.state.digits
            const minDigits = maxDigits / 10

            if (maxDigits === 0) {
                const name = `${animal}${word}`
                tempNames.push(name)
            }

            if (maxDigits > 0) {
                const num = Math.floor(
                    Math.random() * (maxDigits - minDigits) + minDigits
                    )
                const name = `${animal}${word}${num}`
                tempNames.push(name)
            }

            counter++;

        }

        this.setState(state => {
            state.names = tempNames;
            return {names: state.names}
        });
    }

    handleChange = (e) => {
        const val = e.value;

        if (e.type === 'name') {
            this.setState(state => {
                state.total = val;

                return {
                    total: state.total
                }
            })
        }

        if (e.type === 'num') {
            this.setState(state => {
                state.digits = val;

                return {
                    digits: state.digits
                }
            })
        }
    }

    render() {
        return (
            <div className='nameGenContainer'>
                <h1 className='title'>Name Generator</h1>
                <Options generate={this.generateNames}
                onChange={this.handleChange} />
                <List nameList={this.state.names} />
            </div>
        )
    }
}

export default Main
