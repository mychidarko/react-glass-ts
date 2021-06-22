import { State } from "glassx/dist/@types/store";

export const CHANGE_HOME = (state: State) => ({ home: !state.home });
