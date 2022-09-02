import createCtx from "./index";

import { MenuItem } from "components/elements/Submenu";

interface Ctx {
  newMenu: (submenu?: MenuItem[]) => void;
  submenu?: MenuItem[];
}

const [useCtx, Provider] = createCtx<Ctx>();

export { Provider };

export default useCtx;
