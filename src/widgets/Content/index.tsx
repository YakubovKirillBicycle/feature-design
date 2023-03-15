import { memo, useEffect } from "react";
import { useSelector } from "react-redux";

import { MachineModel } from "entities/Machine";
import { AppModel, MockData } from "shared";

const Content = () => {
  const machines = useSelector(MachineModel.selectAll);
  const dispatch = AppModel.useAppDispatch();

  useEffect(() => {
    dispatch(MachineModel.actions.addMachines(MockData.MACHINE_STORE))
  }, [])
  
  return (
    <div>
      <span>Hello</span>
    </div>
   );
}
 
export default memo(Content);