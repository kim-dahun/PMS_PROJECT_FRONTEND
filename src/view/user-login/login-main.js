import UserLoginForm from "./sub-view/login-form";
import {useState} from "react";
import {http_post, http_get} from "../../util/axiosUtil";

function UserLoginMain() {

    const [userInfo, setUserInfo] = useState({
        userId : null, userPassword : null
    });

    const setLoginUserInfo = (userInfo) => {
        setUserInfo({...userInfo});
    }

    const fnSubmit = async () => {
        const res = await http_post('/user/login',userInfo,null);

        if(res.data && res.data.resultData){
            // 인증완료. 리다이렉트;
            localStorage.setItem('userInfo', JSON.stringify(res.data.resultData));

            // 메뉴 권한 요청


        } else if(res.data && res.data.message) {
            alert(res.data.message); // 로그인 실패와 관련된 알럿
        }
    }

    return (
        <div className={"userLoginMain"}>
            <UserLoginForm getLoginUserInfo={setLoginUserInfo} />

            <button onClick={fnSubmit}>로그인</button>
        </div>
    )

}