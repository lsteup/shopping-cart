import { TbTruckDelivery } from "react-icons/tb";
import { IoMdGlobe } from "react-icons/io";
import { Ri24HoursFill } from "react-icons/ri";

const Deliveries = () => {
  return (
    <div className="text-sm gap-4 border-4 border-zinc-950 flex font-semibold justify-around p-4 mt-8 uppercase tracking-tight bg-zinc-50 mx-auto w-4/5">
      <div className="text-center max-w-32">
        <TbTruckDelivery className="mx-auto" size="2.5em" />
        <p>free italian deliveries 100€ </p>
      </div>
      <div className="text-center max-w-32">
        <IoMdGlobe className="mx-auto" size="2.5em" />
        <p>worldwide shipping</p>
      </div>
      <div className="text-center max-w-32">
        <Ri24HoursFill className="mx-auto" size="2.5em" />
        <p>24h ready for shipment</p>
      </div>
    </div>
  );
};
export default Deliveries;
