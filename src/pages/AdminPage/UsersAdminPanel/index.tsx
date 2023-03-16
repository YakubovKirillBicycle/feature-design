import { memo } from "react";

import { PageHeader } from "shared";

const UsersAdminPanel = () => {
    return ( 
        <div>
            <PageHeader text='Users' />
        </div>
     );
}
 
export default memo(UsersAdminPanel);