import React from 'react';

class Searchbar extends React.Component {
    handleChange = (event) => {
        this.setState({
            term: event.target.value
        });
    
    };
    handleSubmit = event => {
        event.preventDefault();
        this.props.handleFormSubmit(this.state.term);
    }

    render() {
        
        return (
            <>
                <h2 style={{ textAlign: "center",marginTop:"50px",fontFamily:"cursive",fontWeight:"600" }}>Sahirat Music </h2>
            <div className='search-bar ui segment'>
                    <form onSubmit={this.handleSubmit} className='ui form'>
                        <input onChange={this.handleChange} name='video-search' type="text" placeholder="Search.."/>
                </form>
            </div>
            </>
        )
    }
}
export default Searchbar;