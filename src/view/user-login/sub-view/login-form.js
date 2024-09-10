import { useRef, useState } from "react";
import { useSearchParams } from "react-router-dom";

const userIdComponent = 'userId';
const userPasswordComponent = 'userPassword';

function UserLoginForm({getLoginUserInfo}){

    const [userInfo, setUserInfo] = useState({
        userId : null, userPassword : null,
    });

    const fnChangeUserInfo = (event) => {
        const id = event.target.id;

        const value = event.target.value;

        switch(id){
            case userIdComponent:
                setUserInfo({...userInfo, userId : value });
                break;
            case userPasswordComponent:
                setUserInfo({...userInfo, userPassword : value});
                break;
        }
        getLoginUserInfo(userInfo);
    }


    return (

        <div className={"loginForm"}>
            <input id={userIdComponent} onInput={(event) => fnChangeUserInfo(event)}/>
            <input id={userPasswordComponent} onInput={(event) => fnChangeUserInfo(event)}/>
        </div>

    )


}


export default UserLoginForm;