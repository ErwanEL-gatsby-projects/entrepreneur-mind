// import { Link } from "gatsby"
// import PropTypes from "prop-types"
import React from "react"
// import logo from "../images/logo.png"
import "bulma/bulma.sass"
import "./layout-test.css"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const Breadcrumb = () => (
  <div class="section is-paddingless-horizontal">
    <div class="container grid">
      <nav class="breadcrumb" aria-label="breadcrumbs">
        <ul>
          <li>
            <a href="#">
              <span class="icon is-small">
                <FontAwesomeIcon icon="home" />
              </span>
              <span>Home</span>
            </a>
          </li>
        </ul>
      </nav>
    </div>
  </div>
)

export default Breadcrumb
