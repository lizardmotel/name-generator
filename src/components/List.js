import React, { Component } from 'react'

class List extends Component {
    render() {
        const names = this.props.nameList;
        const right = names.slice(names.length / 2);
        const left = names.slice(0, names.length / 2);

        const leftNames = left.map(name => {
            return <p className='name'>{name}</p>
        });
        const rightNames = right.map(name => {
            return <p className='name'>{name}</p>
        });
        return (
            <div className='name-container'>
                <div id='left'>
                    {leftNames}
                </div>
                <div id='right'>
                    {rightNames}
                </div>
            </div>
        )
    }
}

export default List
