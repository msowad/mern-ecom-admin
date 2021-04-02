import { Grid } from "@material-ui/core"
import { Dashboard } from "@material-ui/icons"
import React from "react"
import Layout from "../../Layout/Index"
import PageTitle from "../../UI/PageTitle"

export default function Home() {
  return (
    <Layout>
      <PageTitle title="Dashboard" icon={<Dashboard />} />
    </Layout>
  )
}
