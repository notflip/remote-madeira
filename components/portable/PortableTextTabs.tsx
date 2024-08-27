'use client'

import { Nav, Tab } from 'react-bootstrap'

export default function PortableTextTabs({ value }) {
  return (
    <Tab.Container defaultActiveKey={value.steps[0]._key}>
      <div className="days-area mb-55 wow fadeInUp">
        <Nav as={'ul'} className="nav nav-tabs mb-35">
          {value.steps &&
            value.steps.map((step) => (
              <Nav.Item as={'li'} className="nav-item">
                <Nav.Link as="button" className="nav-link" eventKey={step._key}>
                  {step.title}
                </Nav.Link>
              </Nav.Item>
            ))}
        </Nav>
        <Tab.Content className="tab-content">
          {value.steps &&
            value.steps.map((step) => (
              <Tab.Pane className="tab-pane fade" eventKey={step._key}>
                <div className="content-box">{step.text}</div>
              </Tab.Pane>
            ))}
        </Tab.Content>
      </div>
    </Tab.Container>
  )
}
