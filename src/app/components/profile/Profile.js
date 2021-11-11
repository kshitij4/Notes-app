import Card from "../common/UI/Card/Card"
import classes from './Profile.module.css';
const Profile = (props) => {
    return (
        <Card className = {classes.profile}>
            <h3>Name of person</h3>
            <p>Contact Info</p>
            <p>Address</p>
            <p>Email address</p>
            <p>Phone Number</p>
        </Card>
    )
}

export default Profile;