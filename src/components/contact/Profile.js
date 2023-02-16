import profileImage from "../../assets/images/profile.png"

import styles from "./Profile.module.css";

const Profile = () => {
    return <img src={profileImage} alt="profile logo" className={styles["profile-img"]} />
}

export default Profile;
