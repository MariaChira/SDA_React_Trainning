import React from 'react';
import Logo from './logo/Logo';
import './header.css';


/*
1. Buton de login
2. Icon Brand
3. Search Field
4. Help link
*/

class Header extends React.Component {
    constructor() {
        super();
        this.state = {
            text: 'This is my first react app!!!!',
            buttonState: false
        }
    }

    componentDidMount() {

    }

    handleBtnOnClick = () => {
        this.props.onCLickBtn && this.props.onClickBtn(this.state.buttonState)
        this.setState({
            buttonState: !this.state.buttonState
        }, () => {
            console.log("state-callback", this.state.buttonState);
        });
    }

    getList = () => {
        if (this.props.listItems && this.props.listItems.length > 0) {
            return <ul>
                <li>{this.props.listItems[0]}</li>
                <li>{this.props.listItems[1]}</li>
            </ul>
        }
        return null
    }

    render() {

        return (
            // <React.Fragment>
            //     <h1>{this.state.buttonState ? "Button True" : "Button false"}</h1>
            //     <button
            //         className={this.state.buttonState ? "header-btn-style" : "header-btn-style-select"}
            //         onClick={this.handleBtnOnClick}>Change-Title</button>
            //     {(this.props.listItems && this.props.listItems.length > 0) &&
            //     <ul>
            //         {this.props.listItems.map(elem => (
            //             <li>{elem}</li>
            //         ))}
            //     </ul>
            //     }
            // </React.Fragment>
            <div className="header-container">
                <Logo width="4rem"/>
                <div>
                    <input type="text" onChange={this.props.handleSearchInput} />
                    <button onClick={this.props.handleButtonSearch}>Search</button>   
                </div>
               
            </div>
        )
    }
}

export default Header;