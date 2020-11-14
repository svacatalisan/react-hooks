import React, { useReducer } from "react";
import { ThemeProvider } from "styled-components";
import ThemeReducer from '../hooks/reducers/theme.reducer';
import Context from '../shared/context/context';
import Layout from '../shared/layout/layout.component';
import{ dark, light } from '../shared/theme/themes';
import Switch from "../shared/switch/switch";

export default function Home() {
  const [state, dispatch] = useReducer(ThemeReducer, {
		isDark: false
	});
  return (
    <Context.Provider value={{ state, dispatch }}>
			<ThemeProvider theme={state.isDark ? dark : light}>
				<>
					<Switch />
					<Layout />
				</>
			</ThemeProvider>
		</Context.Provider>
  )
}
