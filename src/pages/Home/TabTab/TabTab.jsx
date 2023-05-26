import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
// import tab2 from "../../../assets/tab2.jpg"
import 'react-tabs/style/react-tabs.css';
import "./TabTab.css"
import Architect from '../Category/Architect';
import Relaxing from '../Category/Relaxing';
import Science from '../Category/Science';

const TabTab = () => {
    return (
        <div className='container text-center mt-8'>
            <Tabs>
                <TabList className=" mb-8">
                    <Tab>Architect Lego</Tab>
                    <Tab>Relaxing lego</Tab>
                    <Tab>Science Lego</Tab>
                </TabList>

                <TabPanel>
                    <Architect></Architect>
                </TabPanel>
                <TabPanel>
                    <Relaxing></Relaxing>
                </TabPanel>
                <TabPanel>
                    <Science></Science>
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default TabTab;