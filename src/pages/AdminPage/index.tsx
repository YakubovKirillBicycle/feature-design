import { memo } from "react";

import { PageHeader } from "shared";
import { UserControlItem } from "widgets/UserControl";

const AdminPage = () => {
    return (
            <div>
                <PageHeader text='Admin panel' />
                <div className="flex flex-wrap flex-auto items-center justify-evenly">
                    <UserControlItem />
                    <UserControlItem />
                    <UserControlItem />
                </div>
            </div>
    );
}
 
export default memo(AdminPage);