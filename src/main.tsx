import "@fontsource/poppins"
import "./index.css"

import { ChakraProvider } from "@chakra-ui/react"
import { render } from "react-dom"

import App from "./App"
import theme from "./theme"

render(
  <ChakraProvider theme={theme}>
    <App />
  </ChakraProvider>,
  document.getElementById("root"),
)
