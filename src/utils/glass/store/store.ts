import GlassX from ".";
import { setGlobal, getGlobal, useGlobal } from "reactn";
import { Hook, InternalOptions, Module, Options, State } from "./@types/store";
import { Obj } from "../../types";

export default class GlassXBase {
    protected plugins: Array<any> = [];
    protected _options: InternalOptions = {
        defaultState: {},
        state: {},
        reducers: {},
        compareState: false,
    };

    constructor(options: Options|null = null) {
        if (options) {
            this.store(options);
        }
    }

    public store(options: Options|null = null) {
        let state = options?.state || {};
        let reducers = options?.reducers || {};
        let modules: Module[] = options?.modules || [];
        const plugins = options?.plugins || [];

        this._options.compareState = options?.compareState || false;

        if (modules.length > 0) {
            modules.forEach((module) => {
                if (module.state) {
                    const mstate = module.state;

                    state = {
                        ...state,
                        ...mstate,
                    };
                }

                if (module.reducers) {
                    const mreducers = module.reducers;

                    reducers = {
                        ...reducers,
                        ...mreducers,
                    };
                }
            });
        }

        setGlobal(state);

        this._options.defaultState = state;
        this._options.state = state;
        this._options.reducers = reducers;

        this.pluginInit(plugins);

        this.applyPluginHook("onReady", state);
    }

    protected pluginInit(plugins: any[]) {
        plugins.forEach((plugin) => {
            const p = new plugin();
            this.plugins.push(p);
        })
    }

    protected applyPluginHook(hook: Hook, ...params: any[]) {
        this.plugins.forEach((plugin) => {
            plugin[hook] && plugin[hook](...params);
        });
    }

    public set(state: State) {
        const globalState = getGlobal();

        state = {
            ...globalState,
            ...state
        };
        
        this.applyPluginHook("onSave", state);

        if (this._options.compareState && this.compareState(state)) {
            return;
        }

        setGlobal(state);
    }

    public get(state: string|null = null) {
        const globalState: State = getGlobal();

        if (!state) {
            return globalState;
        }

        this.applyPluginHook("onRead", state);

        return globalState[state];
    }

    public reducer(reducer: string) {
        return this._options.reducers[reducer];
    }

    public reset() {
        this.set(this._options.defaultState);
    }

    protected compareState(state: State|string) {
        state = JSON.stringify(state);
        let globalState = getGlobal();
        globalState = JSON.stringify(globalState);

        return state === globalState;
    }

    protected runner(reducer: Function) {
        return (payload: Obj) => {
            const state = reducer(this.get(), payload);

            this.set(state);
        };
    }

    public useReducer(reducer: string) {
        return this.runner(this.reducer(reducer));
    }
}

export const useStore = (item: string) => {
    const [value] = useGlobal<any>(item);

    return value;
}

export const useReducer = (reducer: string) => {
    return GlassX.useReducer(reducer);
}
