import React, { Dispatch, SetStateAction, createContext, useReducer, ReactNode } from 'react';


type GlobalContextType = {
	showLoadingSpinner: boolean;
};

const initialValues  = {
	showLoadingSpinner: false,
};

export const GlobalContext = createContext(initialValues);


export const ACTIONS = {
	TRUE: true,
	FALSE: false
};

type Action = {
    type: true | false
}

const reducer = (state: GlobalContextType, action: Action) => {
	switch (action.type) {
	case ACTIONS.TRUE:
		return {
			showLoadingSpinner: true
		};
	case ACTIONS.FALSE:
		return {
			showLoadingSpinner: false
		};
	}
};

export const GlobalContextProvider: React.FC = ({ children }) => {
	const [state, dispatch] = useReducer(reducer, initialValues);

	return <GlobalContext.Provider
		value={{showLoadingSpinner: state.showLoadingSpinner}}
	>
		{children}
	</GlobalContext.Provider>;
};