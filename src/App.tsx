import React from 'react'
import { ThemeProvider } from '@material-ui/core/styles'
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom'
import HomePage from './pages/homepage/HomePage'
import EpisodesPage from './pages/episodes/EpisodesPage'
import Header from './components/header/Header'
import theme from './components/ui/theme'

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
      <Header />
        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>
          <Route path="/home">
            <HomePage />
          </Route>
          <Route path="/episodes">
            <EpisodesPage />
          </Route>
        </Switch>
      </Router>
    </ThemeProvider>
  )
}

export default App
