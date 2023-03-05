import { memo, useEffect } from "react";
import { useSelector } from "react-redux";

import { MachineModel } from "entities/Machine";
import { useAppDispatch } from "shared/model";
import { MACHINE_STORE } from "shared/model/mockData";

const Content = () => {
  const machines = useSelector(MachineModel.selectAll);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(MachineModel.actions.addMachines(MACHINE_STORE))
  }, [])
  
  return (
    <div>
      <span>Hello</span>
    </div>
   );
}
 
export default memo(Content);