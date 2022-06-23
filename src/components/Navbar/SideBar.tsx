import React from 'react';


const SideBar = () => {
// example style object
    const wrapper = {
        display: 'inline-grid',
        gridTemplateColumns: '1fr 1fr 1fr',
        width: '100%',
        marginTop: '100px',
        padding: '10px'
    }
    const friendsStyle = {
        width: '50px',
        height: '50px',
        borderRadius: '25px',
    }

// style in JSX bad practice
    return (
        <div style={wrapper}>
            <div>
                <img style={friendsStyle} src={''} alt=""/>
                <caption style={{
                    textAlign: 'center', color: "#2f3131",
                    textDecoration: "none",
                    fontSize: "1.5em"
                }}>{''}</caption>
            </div>
            <div>
                <img style={friendsStyle} src={''} alt=""/>
                <caption style={{
                    textAlign: 'center', color: "#2f3131",
                    textDecoration: "none",
                    fontSize: "1.5em"
                }}>{''}</caption>
            </div>
            <div>
                <img style={friendsStyle} src={''} alt=""/>
                <caption style={{
                    textAlign: 'center', color: "#2f3131",
                    textDecoration: "none",
                    fontSize: "1.5em"
                }}>{''}</caption>
            </div>


        </div>
    );
};

export default SideBar;