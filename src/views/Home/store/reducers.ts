import { State } from "@/utils/glass/store/@types/store";

export const changeHome = (state: State) => ({ home: !state.home });
