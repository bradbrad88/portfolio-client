import useFetch, { Req } from "hooks/useFetch";
import { toast } from "react-toastify";

interface Proptypes {
  token: string;
  closeToast?: () => void;
}
const Undo = ({ token, closeToast = () => {} }: Proptypes) => {
  const { deleteRequest } = useFetch();

  const onUndo: React.PointerEventHandler<HTMLParagraphElement> = async e => {
    const req: Req = {
      url: "undo",
      data: { token },
    };
    const res = await deleteRequest(req);
    closeToast();
    if (!res) return toast.error("Failed to undo this action");
    toast.success("Message deleted");
  };
  return (
    <div className="undo-container">
      <p>Message sent! </p>
      <p>
        <span className="undo" onClick={onUndo}>
          Undo
        </span>
      </p>
    </div>
  );
};

export default Undo;
