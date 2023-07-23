import React from 'react';
import ServiceCard from './ServiceCard';
import { Col } from 'reactstrap';

import weatherImg from '../assets//images/weather.png';
import guideImg from '../assets//images/guide.png';
import customizationImg from '../assets//images/customization.png';

const servicesData = [
    {
        imgUrl: weatherImg,
        title: "Caculate Weather",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
    },
    {
        imgUrl: guideImg,
        title: "Best Tour Guide",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
    },
    {
        imgUrl: customizationImg,
        title: "CustomizationImg",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
    }
]


const ServiceList = () => {
    return <>
        {
            servicesData.map((item, index) => (
                <Col lg='3' key={index}>
                    <ServiceCard item={item} />
                </Col>
            ))
        }
    </>
}

export default ServiceList
