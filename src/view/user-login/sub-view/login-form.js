import {useRef, useState} from "react";
import {useSearchParams} from "react-router-dom";
import {Form, Card, CardBody, Container, Row, Col, Button} from "react-bootstrap";

const userIdComponent = 'userId';
const userPasswordComponent = 'userPassword';

function UserLoginForm({getLoginUserInfo, fnSubmit}) {

    const [userInfo, setUserInfo] = useState({
        userId: null, userPassword: null,
    });

    const fnChangeUserInfo = (event) => {
        const id = event.target.id;

        const value = event.target.value;
        console.log(id, value);
        switch (id) {
            case userIdComponent:
                setUserInfo({...userInfo, userId: value});
                break;
            case userPasswordComponent:
                setUserInfo({...userInfo, userPassword: value});
                break;
        }


    }

    const fnLogin = () => {

        fnSubmit(userInfo);
    }

    return (

        <div className={"loginForm"}>

                <h2 className="text-center mb-4">로그인</h2>
                <Form>
                    <Form.Group>
                        <Form.Label>아이디</Form.Label>
                        <Form.Control id={userIdComponent} type="text" placeholder="아이디 입력" onInput={(event) => fnChangeUserInfo(event)}/>
                    </Form.Group>

                    <Form.Group>
                        <Form.Label>비밀번호</Form.Label>
                        <Form.Control id={userPasswordComponent} type="password" placeholder="비밀번호 입력" onInput={(event) => fnChangeUserInfo(event)}/>
                    </Form.Group>

                    <Button variant="primary" className="w-100 mt-3" onClick={fnLogin}>
                        로그인
                    </Button>
                    <Button variant="link" className="w-100 mt-2" >
                        회원가입
                    </Button>
                </Form>

        </div>

    )


}


export default UserLoginForm;