import React from 'react';

type SideBarPropsType = {
   // friendsBar: { name: string, img: string }[]
}

const SideBar = (props: SideBarPropsType) => {

    const styleFriends = {
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


    return (
        <div style={styleFriends}>
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