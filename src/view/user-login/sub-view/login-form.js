import {useRef, useState} from "react";
import {useSearchParams} from "react-router-dom";
import {Form, Card, CardBody} from "react-bootstrap";

const userIdComponent = 'userId';
const userPasswordComponent = 'userPassword';

function UserLoginForm({getLoginUserInfo}) {

    const [userInfo, setUserInfo] = useState({
        userId: null, userPassword: null,
    });

    const fnChangeUserInfo = (event) => {
        const id = event.target.id;

        const value = event.target.value;

        switch (id) {
            case userIdComponent:
                setUserInfo({...userInfo, userId: value});
                break;
            case userPasswordComponent:
                setUserInfo({...userInfo, userPassword: value});
                break;
        }
        getLoginUserInfo(userInfo);
    }


    return (

        <div className={"loginForm"}>
            <Card style={{ width : '80%' }}>
            <Form>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label htmlFor={userIdComponent} column={true}>ID</Form.Label>
                    <Form.Control id={userIdComponent} onInput={(event) => fnChangeUserInfo(event)}/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
                    <Form.Label htmlFor={userPasswordComponent} column={true}>비밀번호</Form.Label>
                    <Form.Control id={userPasswordComponent} onInput={(event) => fnChangeUserInfo(event)}/>
                </Form.Group>
            </Form>
            </Card>
        </div>

    )


}


export default UserLoginForm;