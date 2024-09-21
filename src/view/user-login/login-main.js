import UserLoginForm from "./sub-view/login-form";
import {useState} from "react";
import {http_post, http_get} from "../../util/axiosUtil";
import {useNavigate} from "react-router-dom";

function UserLoginMain() {

    const [userInfo, setUserInfo] = useState({
        userId : null, userPassword : null
    });

    const navigate = useNavigate();

    const setLoginUserInfo = (userInfo) => {
        setUserInfo({...userInfo});
    }

    const fnSubmit = async () => {
        console.log('이베늩')
        const res = await http_post('/user/login',userInfo,null);
        console.log(res);
        if(res.data && res.data.resultData && res.data.statusCode === 200) {
            // 인증완료. 리다이렉트;
            localStorage.setItem('userInfo', JSON.stringify(res.data.resultData));

            // 메뉴 권한 요청
            navigate('/');

        } else if(!res.data || res.data.statusCode != 200) {
            alert(res.data.message); // 로그인 실패와 관련된 알럿
        }
    }

    return (
        <div className={"userLoginMain"} style={{ width: "100%" }}>

                    <UserLoginForm getLoginUserInfo={setLoginUserInfo} fnSubmit={fnSubmit} />

            {/*<button onClick={fnSubmit}>로그인</button>*/}

        </div>
    )

}

export default UserLoginMain;