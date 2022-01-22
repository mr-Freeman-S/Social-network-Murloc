import React from "react";

import s from './ProfileInfo.module.css'

const ProfileInfo = (props:any) => {
    return (
        <div>
          <img className={s.wallpaper}
            src=""
            alt="pic"
          />
          <div>
              <div>
                  <img className={s.profileUser} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQka2kbF4jHO8AabBgSLkal5aNjRKQzrE_fEg&usqp=CAU" alt=""/>
              </div>
          </div>

      </div>
    );
}

export default ProfileInfo;