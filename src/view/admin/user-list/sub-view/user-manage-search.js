import { useSearchParams } from "react-router-dom";

function UserManageSearch ({ getSearchCondition }) {
  const [searchParams, setSearchParams] = useSearchParams();
  // const titleName = searchParams.has("userName") ? searchParams.get("userName") : '제목이 없어요';
    const fnGetSearchCondition = (event, componentId) => {
        getSearchCondition(event.target.value, componentId);
    }

    return (


        <div className="user-manage-search">
            <div style={{ display: "flex", justifyContent: "center", alignItems:"center" }}>
                <div >
            <label>이름</label>
            <input id="userName" onInput={(event) => fnGetSearchCondition(event,event.target.id)}></input>
            </div>
            <div>
            <label>아이디</label>
            <input id="userId" onInput={(event) => fnGetSearchCondition(event,event.target.id)}></input>
            </div>
            </div>
        </div>
        
    );

}

export default UserManageSearch;