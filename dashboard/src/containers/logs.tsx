/*
 * Copyright (C) 2018 Garden Technologies, Inc. <info@garden.io>
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 */

import { flatten } from "lodash"
import React, { useContext, useEffect } from "react"

import PageError from "../components/page-error"
import Logs from "../components/logs"
import LoadWrapper from "../components/load-wrapper"
import { DataContext } from "../context/data"

export default () => {
  const {
    actions: { loadConfig },
    store: { config },
  } = useContext(DataContext)

  useEffect(loadConfig, [])

  const isLoading = !config.data || config.loading

  return (
    <LoadWrapper error={config.error} ErrorComponent={PageError} loading={isLoading}>
      <LogsContainer />
    </LoadWrapper>
  )
}

const LogsContainer = () => {
  const {
    actions: { loadLogs },
    store: { config, logs },
  } = useContext(DataContext)

  const serviceNames = flatten(config.data.modules.map(m => m.serviceNames))
  useEffect(() => {
    loadLogs(serviceNames)
  }, [])

  const isLoading = !logs.data

  return (
    <LoadWrapper error={logs.error} ErrorComponent={PageError} loading={isLoading}>
      <Logs loadLogs={loadLogs} config={config.data} logs={logs.data} />
    </LoadWrapper>
  )

}
