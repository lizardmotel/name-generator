import React, { Component } from 'react';
import Select from 'react-select';
import styled from 'styled-components';

class Options extends Component {
    componentDidMount() {
        this.props.generate();
    }
    render() {
        const nameCount = [
            { type: 'name', value: 20, label: '20 names' },
            { type: 'name', value: 40, label: '40 names' },
            { type: 'name', value: 60, label: '60 names' },
            { type: 'name', value: 80, label: '80 names' },
            { type: 'name', value: 100, label: '100 names' }
        ]
        const digitCount = [
            { type: 'num', value: 10000, label: '4 digits' },
            { type: 'num', value: 1000, label: '3 digits' },
            { type: 'num', value: 100, label: '2 digits' },
            { type: 'num', value: 10, label: '1 digit' },
            { type: 'num', value: 0, label: 'no digits' }
        ]

        return (
            <div>
                <form id='option-form'>
                    <Select 
                        id='totalNames'
                        className='option'
                        defaultValue={nameCount[0]}
                        isClearable={false}
                        isSearchable={false}
                        options={nameCount}
                        onChange={this.props.onChange}
                        />

                    <Select
                        id='totalDigits'
                        className='option'
                        defaultValue={digitCount[4]}
                        isClearable={false}
                        isSearchable={false}
                        options={digitCount}
                        onChange={this.props.onChange}
                        />

                    <RefreshButton
                        onClick={(e) => {
                            e.preventDefault()
                            this.props.generate();
                        }}

                    >Refresh</RefreshButton>
                </form>
            </div>
        )
    }
}

const RefreshButton = styled.button`
    width: 200px;
    text-align: center;
    padding: 8px;
    border-radius: 3px;
    background-color: white;
    border: 1px solid rgba(0, 0, 0, 0.2);
    transition: all 0.1s linear;
    &:hover {
        background-color: var(--mainWhite);
    }
`

export default Options
