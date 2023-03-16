import { memo } from "react";
import { useNavigate } from "react-router";

import { PageHeader } from "shared";
import { UserControlItem } from "widgets/UserControl";

const AdminPage = () => {
    const navigate = useNavigate();

    const navigateHandle = () => navigate(-1);

    return (
            <div>
                <PageHeader text='Admin panel' navigate={navigateHandle} />
                <div className="flex flex-wrap flex-auto items-center justify-evenly">
                    <UserControlItem />
                    <UserControlItem />
                    <UserControlItem />
                </div>
            </div>
    );
}
 
export default memo(AdminPage);