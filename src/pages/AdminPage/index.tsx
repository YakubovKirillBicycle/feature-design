import { memo, useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router";

import { MachineModel } from "entities/Machine";
import { UserListModel } from "entities/User";
import { AppModel, MockData, PageHeader } from "shared";
import { useAppDispatch } from "shared/model";
import { UserControlItem } from "widgets/UserControl";

const AdminPage = () => {
    const navigate = useNavigate();
    const dispatch = useAppDispatch();
    const usersUploadStatus = UserListModel.userListStatusSelector();
    const userList = useSelector(UserListModel.selectAll)

    const machines = useSelector(MachineModel.selectAll);

    const navigateHandle = () => navigate(-1);
    useEffect(() => {
        dispatch(MachineModel.actions.addMachines(MockData.MACHINE_STORE))
        dispatch(UserListModel.getUsersAction())
    }, []);

    return (
            <div>
                <PageHeader text='Admin panel' navigate={navigateHandle} />
                <div className="flex flex-wrap flex-auto items-center justify-evenly">
                    <UserControlItem
                        count={userList.length}
                        header="Users"
                        isLoading={usersUploadStatus.state === AppModel.LoadingStatus.Loading}
                    />
                    <UserControlItem
                        header="Machines"
                        count={machines.length}
                    />
                </div>
            </div>
    );
}
 
export default memo(AdminPage);