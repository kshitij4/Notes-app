import { useEffect, useState } from "react";
import { adminApi } from "../../../utils/admin.api";
import Card from "../../common/UI/Card/Card";
import classes from './Profile.module.css';
const Profile = () => {
    const [userData, setUserData] = useState();

    useEffect(() => {
        async function fetchProfile(){ 
            try {
                const res = await adminApi.getProfile();
                console.log(res);
                if(res.data.isSuccess){
                    setUserData(res.data.Data); 
                }
            } catch (error) {
                console.log(error);
            }
        }
        fetchProfile();
    },[])
    return (
        <Card className = {classes.profile}>
            <h2 style = {{ textAlign : 'center'}}>Profile</h2>
            <p><b>Name:</b> {userData?.firstname} {userData?.lastname}</p>
            <p><b>Email Address:</b> {userData?.email}</p>
            <p><b>Phone Number:</b> {userData?.phone}</p>
        </Card>
    )
}

export default Profile;