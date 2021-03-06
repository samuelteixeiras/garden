/*
 * Copyright (C) 2018 Garden Technologies, Inc. <info@garden.io>
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 */

import { css } from "emotion/macro"
import styled from "@emotion/styled/macro"
import React, { Component } from "react"

import { NavLink } from "./links"
import { Page } from "../containers/sidebar"

import { colors, fontMedium } from "../styles/variables"

interface Props {
  pages: Page[]
}

interface State {
  selectedTab: string
}

const Button = styled.li`
  ${fontMedium}
  border-radius: 2px;
  cursor: pointer;
  width: 100%;
  transition: all 0.3s ease;
  &: hover {
    background-color: ${colors.brightTealAccent};
    color: ${colors.white};
    border-color: ${colors.brightTealAccent};
  }
`

const linkStyle = `
  display: inline-block;
  font-size: 1.025rem;
  margin-left: 1.5rem;
  padding: 0.5em 0.5em 0.5em 0;
  width: 100%;
`

const A = styled.a(linkStyle)
const Link = styled(NavLink)(linkStyle)

class Sidebar extends Component<Props, State> {

  constructor(props) {
    super(props)

    // TODO Use tab id instead of title
    this.state = {
      selectedTab: this.props.pages[0].path,
    }
  }

  render() {
    return (
      <div className="pb-1">
        <nav>
          <ul className="pt-2">
            {this.props.pages.map(page => {
              const link = page.url
                ? <A href={page.url} target="_blank" title={page.description}>
                  {page.title}
                  <i className={`${css("color: #ccc; margin-left: 0.5em;")} fas fa-external-link-alt`}></i>
                </A>
                : <Link
                  exact
                  to={{ pathname: page.path, state: page }}
                  title={page.description}>
                  {page.title}
                </Link>

              return (
                <Button tabName={name} key={page.title}>
                  {link}
                </Button>
              )
            })}
          </ul>
        </nav>
      </div>
    )
  }

}

export default Sidebar
