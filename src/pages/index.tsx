import React, { useReducer } from "react";
import { createGlobalStyle } from "styled-components"
import { ThemeProvider } from "styled-components";
import UserState from '../hooks/reducers/user.reducer'; 
import ThemeState from '../hooks/reducers/theme.reducer';
import SurveyState from '../hooks/reducers/survey.reducer';
import Context from '../shared/context/context';
import Layout from '../shared/layout/layout.component';
import{ dark, purple } from '../shared/theme/themes';
import '../styles/app.style.scss';

const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${props => (props.theme.bodyBackgroundColor)};
  }`;

const combineReducers = (slices) => (state, action) =>
  Object.keys(slices).reduce( // use for..in loop, if you prefer it
    (acc, prop) => ({
      ...acc,
      [prop]: slices[prop](acc[prop], action),
    }),
    state
  );

const initialState = { 
	ThemeState: {
		isDark: false
	}, 
	UserState: {
		firstname: 'Rebecca',
		lastname: 'G'
	},
	SurveyState: {
		question: `In a recent survey, <b>65%</b> of customers said they would prefer to speak with an expert on the phone instead through text or email when making a major purchase or investment.`
	}
};
const rootReducer = combineReducers({ ThemeState, UserState, SurveyState });

export default function Home() {
  const [state, dispatch] = useReducer(rootReducer, initialState);
  return (
    <Context.Provider value={{ state, dispatch }}>
			<ThemeProvider theme={state.ThemeState.isDark ? dark : purple}>
				<>
					<GlobalStyle theme={state.ThemeState.isDark ? dark : purple} />
					<Layout />
				</>
			</ThemeProvider>
		</Context.Provider>
  )
}
