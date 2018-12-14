import React from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'
import Section from '../components/Section'
import AboutAccordion from '../components/AboutAccordion'


const accordionInfoList = [
    {
        'title': 'in vision',
        'body': [
            {
                'itemTitle': 'Kingdom',
                'itemContent': 'Our Father’s heart is that He has created a ready harvest (Matt. 9:37-38) and wants to bring His kingdom fully in each locale (Matt. 6:9-10) for His glory.'
            },
            {
                'itemTitle': 'Global',
                'itemContent': 'A global Acts 1:8 movement in which disciples make reproducing disciples to fully reach their own diverse contexts and then unreached peoples of the earth for Christ. We foster interdependent partnerships in mission between autonomous churches and apostolic "missionary" bands (Acts 13, Philippians 1:5).'
            },
            {
                'itemTitle': 'CPM-Based',
                'itemContent': 'We aim to catalyze Spirit-led church planting movements as the avenue for reaching a whole area—emphasizing 1) finding God prepared people (entry), 2) reproducing evangelism, 3) reproducing disciples, 4) reproducing churches and 5) reproducing leaders.'
            },
            {
                'itemTitle': 'Finishing The Task',
                'itemContent': 'Therefore, we are about finishing the task of the Great Commission (Matt. 28:18-20; 24:14) whatever it may cost us for His glory (John 12:24).'
            },
            {
                'itemTitle': 'Generational Growth',
                'itemContent': 'We are a decentralized movement (starfish) of reproducing generations of disciples and churches, knowing that until we see consistent fourth generation of new churches and beyond, a stream is not becoming a movement (Matt. 28:18-20; 2 Tim. 2:2; Matt. 13:31-33).'
            }
        ]
    },
    {
        'title': 'in practice',
        'body': [
            {
                'itemTitle': 'Gospel, Word & Spirit',
                'itemContent': 'We are Christ-centered, proclaiming the gospel of grace (Luke 24:46-49; Acts 20:24) reliant on the Word as our guide (John 15:1-16) and the Spirit to empower us (John 14:23-26).'
            },
            {
                'itemTitle': 'Urgency',
                'itemContent': 'We live and work with urgency keeping THE DAY in mind—hastening the end of the age as we await Christ’s coming (Heb. 10:24-25; 2 Pet. 3:12).'
            },
            {
                'itemTitle': 'Prayerful Practice',
                'itemContent': 'We pray for laborers while practicing as laborers ourselves (Luke 10:2). We all take personal ownership of the Great Commission and allocate time to reaching the lost within their sphere of influence (1 Cor. 9:16).'
            },
            {
                'itemTitle': 'Disciples Not Converts',
                'itemContent': 'We go to new believers where they are and disciple them to obey Jesus’ commands out of love (Matt 28:18-20, Jn. 14:21), with the expectation that the Word will reproduce in their life as they do the same with others (Matt 13).'
            },
            {
                'itemTitle': 'Humility',
                'itemContent': 'Our aspiration is to humble ourselves under the mighty hand of God (James 4:6-10) to live by His grace, honor one another in love (Rom. 12:9-11) and continue as learners of the counter-intuitive ways of the King (Mk 1:15).'
            }
        ]
    },
    {
        'title': 'in structure',
        'body': [
            {
                'itemTitle': 'Volunteer Movement',
                'itemContent': "An open-membership open-source volunteer movement (or coalition) built around the Matthew 24:14/Romans 15:23 vision. Anyone aspiring to the vision and ethos can enter the movement as a free-will offering (Psalm 110:3) and we are open-handed in our interactions (Prov. 11:24-25). Our leaders grow into position they don't go into position; spiritual authority is extended to leaders, not extracted by them."
            },
            {
                'itemTitle': 'Not an Organization',
                'itemContent': 'We are a movement or coalition with no hierarchy or defined leadership structure. Therefore we are not an organization with associated structures. Nor are we defined by any organizations, regional initiatives or ventures bearing the name No Place Left. They may simply be manifestations of this movement in its various forms.'
            },
            {
                'itemTitle': 'Not a Funding Base Or Conduit',
                'itemContent': 'Practitioners in our coalition pursue funding in a variety of ways and mechanisms but No Place Left is not a funding conduit.'
            },
            {
                'itemTitle': 'Not a Denominationally-Based Movement',
                'itemContent': 'Though our practitioners are Evangelical in orientation we are not restricted to any one denomination or church.'
            }
        ]
    },
    {
        'title': 'in beliefs',
        'body': [
            {
                'itemTitle': 'The Bible',
                'itemContent': 'We believe in the Scripture of the Old and New Testaments as verbally inspired by God and inerrant in the original writings, and believe that they are of supreme and final authority in faith and life.',
            },
            {
                'itemTitle': 'The Trinity',
                'itemContent': 'We believe in one God, eternally existing in three persons:  Father, Son and Holy Spirit.',
            },
            {
                'itemTitle': 'The Nature of Jesus',
                'itemContent': 'We believe that Jesus Christ was begotten by the Holy Spirit, born of the Virgin Mary, and is true God and true man.',
            },
            {
                'itemTitle': 'Mankind',
                'itemContent': 'We believe that man was created in the image of God, that he sinned and thereby incurred not only physical death, but also that spiritual death which is separation from God.  We believe that all human beings are born with a sinful nature and are sinners in thought, word and deed.',
            },
            {
                'itemTitle': 'The Cross of Jesus',
                'itemContent': 'We believe that the Lord Jesus died for our sins, according to the Scriptures, as a representative and substitutionary sacrifice, and that all who embrace Him as their personal Lord and Savior are justified on the ground of His shed blood.',
            },
            {
                'itemTitle': 'The Resurrection of Jesus',
                'itemContent': 'We believe in the resurrection of the crucified body of our Lord, in His ascension into heaven, and His present life there for us as High Priest and Advocate.',
            },
            {
                'itemTitle': 'The Return of Jesus',
                'itemContent': 'We believe that our Lord and Savior Jesus Christ will personally return and set up His Kingdom wherein He will rule and reign in righteousness.',
            },
            {
                'itemTitle': 'Salvation',
                'itemContent': 'We believe that all who receive by faith the Lord Jesus Christ are born again of the Holy Spirit and thereby become children of God.',
            },
            {
                'itemTitle': 'The Final Judgment',
                'itemContent': 'We believe in the bodily resurrection of the just and the unjust, the blessedness of the saved, and the retribution of the lost.',
            }
        ]
    }
]


const AboutPage = () => (
    <Layout>
        <SEO title="About" />
        <Section header={
            {
                "title": "Who We Are",
                "classes": "display-4"
            }}>
            <br />
            <div className="card shadow">
                <AboutAccordion accordionInfoList={accordionInfoList} />
            </div>
        </Section>
    </Layout>
)

export default AboutPage
