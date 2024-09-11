import AppSideBar from "./AppSideBar";
import AppTopBar from "./AppTopBar";
import {Outlet} from "react-router-dom";

const AppMain = () => {
    const sidebarItems = ['Item 1', 'Item 2', 'Item 3'];
    const itemMap = new Map([
        ['Item 1', ['Subitem 1.1', 'Subitem 1.2']],
        ['Item 2', ['Subitem 2.1', 'Subitem 2.2']],
        ['Item 3', ['Subitem 3.1', 'Subitem 3.2']],
    ]);

    const topbarItems = ['Home', 'About', 'Contact'];

    return(
        <div className="AppMain" style={{zIndex : -1}}>
            <div style={{display: 'flex'}}>
                <AppSideBar items={sidebarItems} itemMap={itemMap}/>
                <div style={{flex: 1}}>
                    <AppTopBar items={topbarItems}/>
                    <div style={{padding: '20px'}}>
                        {/* 페이지 내용 */}
                        <Outlet />
                    </div>
                </div>
            </div>
        </div>
    )

}

export default AppMain;