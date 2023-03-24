import { memo } from "react";
import { useNavigate } from "react-router";

import { PageHeader } from "shared";
import { VendorsList } from "widgets/AdminControl/VendorsList";

const VendorsAdminPanel = () => {
    const navigate = useNavigate();

    const navigateHandle = () => navigate(-1);

    return ( 
        <div>
            <PageHeader text='Vendors' navigate={navigateHandle} />
            <VendorsList />
        </div>
     );
}
 
export default memo(VendorsAdminPanel);