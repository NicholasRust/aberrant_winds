import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import donators from "../util/donators"
import { Card, CardBody, CardTitle, Row } from "reactstrap"

const DonorPage = () => {
  console.log(donators[0])
  return (
    <Layout pageTitle="Thanks to all our awesome donors!">
      <SEO title="Thanks to all our awesome donors!" />
      <ul>
        {donators.map(donators => (
          <li key={donators} style={{ marginBottom: "10px" }}>
            <Card className="donor-card-list">
              <CardBody>
                <CardTitle>Thank you {donators}!</CardTitle>
              </CardBody>
            </Card>
          </li>
        ))}
      </ul>
      <Card>
        <CardBody className="donor-card-list">
          <CardTitle>Get your name added here by donating!</CardTitle>
        </CardBody>
      </Card>
    </Layout>
  )
}

export default DonorPage
