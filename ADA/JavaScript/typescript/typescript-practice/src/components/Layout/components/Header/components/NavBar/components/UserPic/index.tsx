import React, { FC } from 'react'
import Pic from '../../../../../../../../assets/img/profilePic.jpg'

const UserPic: FC = () => {
    return (
        <div className="d-flex">
            <img src={Pic} alt="User Profile Picture" height="45" />
        </div>
    )
}
export { UserPic }