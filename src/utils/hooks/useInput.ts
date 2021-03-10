import { useState } from "react";

const useInput = (initialValue: string, validation: Function|null = null) => {
    const [value, setValue] = useState(initialValue);

    return {
        value,
        setValue,
        reset: () => setValue(""),
        bind: {
            value,
            onChange: (event: React.ChangeEvent<HTMLInputElement>) => {
                if (validation) validation(event?.target?.name, event?.target?.value);
                setValue(event?.target?.value);
            },
        },
    };
};

export default useInput;
