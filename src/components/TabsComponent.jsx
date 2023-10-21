import { AiOutlineRise } from "react-icons/ai";
import { AiOutlineFall } from "react-icons/ai";

export default function TabsComponent({ title, icon }) {
  return (
    <span className="flex items-center gap-2">
      {icon === "rise" ? (
        <AiOutlineRise className="h-8 w-8 text-green-600" />
      ) : (
        <AiOutlineFall className="h-8 w-8 text-red-600" />
      )}
      <p className="text-white py-3">{title}</p>
    </span>
  );
}
