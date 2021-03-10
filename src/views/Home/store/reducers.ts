import { State } from "@/utils/glass/store/@types/store";

export const changeHome = (state: State) => {
    console.log("change home");
    
    return { home: !state.home };
};
