import { memo, useEffect } from "react";
import { useNavigate } from "react-router";

import { MachineModel } from "entities/Machine";
import { UserListModel } from "entities/User";
import { AppModel, GlobalConstant, PageHeader } from "shared";
import { useAppDispatch } from "shared/model";
import { AdminControlEntity } from "widgets/AdminControl";

const AdminPage = () => {
    const navigate = useNavigate();
    const dispatch = useAppDispatch();

    const userListLength = UserListModel.userListLengthSelector();
    const usersUploadStatus = UserListModel.userListStatusSelector();

    const machines = MachineModel.allMachinesSelector();
    const activeMachinesCount = MachineModel.machinesLengthByStatusSelector(MachineModel.MachineStatus.Active);
    const disabledMachinesCount = MachineModel.machinesLengthByStatusSelector(MachineModel.MachineStatus.Disabled);

    const navigateHandle = () => navigate(-1);

    useEffect(() => {
        dispatch(MachineModel.actions.addMachines(MachineModel.getMockMachines()))
        dispatch(UserListModel.getUsersAction())
    }, []);

    return (
            <div>
                <PageHeader text='Admin panel' navigate={navigateHandle} />
                <div className="flex flex-wrap flex-auto items-center justify-evenly">
                    <AdminControlEntity
                        count={userListLength}
                        header="Users"
                        isLoading={usersUploadStatus.state === AppModel.LoadingStatus.Loading}
                        navigateTo={GlobalConstant.APP_NAVIGATOR.ADMIN.USERS}
                    />
                    <AdminControlEntity
                        header="Machines"
                        count={machines.length}
                        activeCount={activeMachinesCount}
                        disabledCount={disabledMachinesCount}
                        navigateTo={GlobalConstant.APP_NAVIGATOR.ADMIN.VENDORS}
                    />
                </div>
            </div>
    );
}
 
export default memo(AdminPage);