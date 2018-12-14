import {
    Accordion,
    AccordionItem,
    AccordionItemTitle,
    AccordionItemBody,
} from 'react-accessible-accordion';

import 'react-accessible-accordion/dist/fancy-example.css';

const React = require('react');




class MyAccordion extends React.Component {
    constructor(props) {
        super(props);
        this.state = { activeTabId: 0 };
    }

    tabClicked(tabId) {
        if (this.state.activeTabId === tabId) {
            this.setState({ activeTabId: -1 });
        } else {
            this.setState({ activeTabId: tabId });
        }
    }

    render() {
        return (
            <div id="accordion">
                {this.props.accordionInfoList.map((accordionInfo, i) => {
                    return <AccordionTab
                        key={i}
                        accordionInfo={accordionInfo}
                        tabId={i}
                        activeTabId={this.state.activeTabId}
                        callback={this.tabClicked.bind(this)} />
                })}
            </div>
        );
    }
}

/*
{this.props.accordionInfoList.map((accordionInfo, i) => {
                    return <AccordionTab
                        key={i}
                        accordionInfo={accordionInfo}
                        tabId={i}
                        activeTabId={this.state.activeTabId}
                        callback={this.tabClicked.bind(this)} />
                })}
                */

const AccordionTab = function ({ accordionInfo, tabId, activeTabId, callback }) {
    return (
        <div className="card">
            <div className="card-header">
                <h5 className="mb-0">
                    <button className="btn btn-link" data-toggle="collapse" data-target={"#collapseTab" + tabId} onClick={() => callback(tabId)}>
                        {accordionInfo.title}</button>
                </h5>
            </div>
            <div id={"collapseTab" + tabId} className={tabId !== activeTabId ? "collapsed show" : "collapsed"}>
                <div className="card-body">
                    {accordionInfo.body}
                    Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
                </div>
            </div>
        </div>
    )
}


const AboutAccordion = function ({ accordionInfoList }) {
    return (
        <Accordion>
            {accordionInfoList.map((accordionInfo, i) => {
                return (
                    <AccordionItem key={i}>
                        <AccordionItemTitle>
                            <h4 className="display-4">{accordionInfo.title}</h4>
                        </AccordionItemTitle>
                        <AccordionItemBody>
                            <ul>
                                {accordionInfo.body.map((bulletPoint, i) => {
                                    return (
                                        <li key={i}>
                                            <strong>{bulletPoint.itemTitle}: </strong>{bulletPoint.itemContent}
                                        </li>);
                                })}
                            </ul>
                        </AccordionItemBody>
                    </AccordionItem>)
            })
            }
        </Accordion>);
}

export default AboutAccordion;