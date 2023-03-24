import { UserListModel } from "entities/User";

export const UsersList = () => {
    const usersList = UserListModel.userListSelector();

    return (
        <div>
            <div className="flex flex-wrap flex-auto items-center justify-evenly">
                {
                    usersList.map((user) => (
                        <div key={user.id}>{user.nickname}</div>
                    ))
                }
                
            </div>
        </div>
    );
}