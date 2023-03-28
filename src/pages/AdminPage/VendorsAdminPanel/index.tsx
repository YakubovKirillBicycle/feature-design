import { memo } from "react";
import { useNavigate } from "react-router";

import { MachineModel } from "entities/Machine";
import { PageHeader } from "shared";
import VendorsList from "widgets/AdminControl/VendorsList";

const VendorsAdminPanel = () => {
    const vendorsList = MachineModel.allMachinesSelector().sort((vendorA, vendorB) => vendorA.status - vendorB.status);
    const navigate = useNavigate();
    const navigateHandle = () => navigate(-1);

    return ( 
        <div>
            <PageHeader text='Vendors' navigate={navigateHandle} />
            <VendorsList vendors={vendorsList} />
        </div>
     );
}
 
export default memo(VendorsAdminPanel);