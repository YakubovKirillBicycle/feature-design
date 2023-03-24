import { memo } from "react";
import { useNavigate } from "react-router";

import { PageHeader } from "shared";
import { UsersList } from "widgets/AdminControl";

const UsersAdminPanel = () => {
    const navigate = useNavigate();

    const navigateHandle = () => navigate(-1);

    return ( 
        <div>
            <PageHeader text='Users' navigate={navigateHandle} />
            <UsersList />
        </div>
     );
}
 
export default memo(UsersAdminPanel);