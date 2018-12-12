import React from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'
import Section from '../components/Section'

const ListWithHeader = function ({ header, items }) {
    return (
        <div className="col-sm">
            <h4>{header}</h4>
            <ul>
                {items.map(function (item, i) {
                    return <li key={i}>{item}</li>;
                })}
            </ul>
        </div>
    );
}

const discipleMakingList = [
    'Simple ways to identify and connect with the lost',
    'Simple ways to start spiritual conversations and share the gospel',
    'A way to teach new believers how to obey Jesus',
    'How to lead a discovery Bible study for those interested in Jesus',
    'How to train others to make disciples'
]

const churchPlantingList = [
    'Zero budget church planting',
    'How to find willing church planters in your church',
    'How to form a church planting team from your church',
    'How to find a target to start a new church',
    'How to help new believers form community',
    'How to help a new church grow towards health and multiply'
]

const mobilizationList = [
    'How to help those desiring to be missionaries get prepared',
    'Develop a sending pipeline from your church to the unreached',
    'Looking into resources for missionaries to get from point A to point B',
    'Forming missionary teams in the Memphis Metro Area or another city'
]


const TrainingPage = () => (
    <Layout>
        <SEO title="Training" />
        <Section header="Our Training">
            <br />
            <p class="text-center">We are happy to offer <strong>free training</strong> in any of the following areas:</p>
            <div className="row">
                <ListWithHeader header="DISCIPLE MAKING" items={discipleMakingList} />
                <ListWithHeader header="CHURCH PLANTING" items={churchPlantingList} />
                <ListWithHeader header="MOBILIZATION" items={mobilizationList} />
            </div>
        </Section>
    </Layout>
)

export default TrainingPage
