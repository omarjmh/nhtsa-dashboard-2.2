import styles from './AboutBlock.css';

import React from 'react';
import AboutHeader from '../AboutHeader/AboutHeader';
import AboutDescription from '../AboutDescription/AboutDescription';
import ZDWebsiteButton from '../ZDWebsiteButton/ZDWebsiteButton';
import CloseAboutButton from '../CloseAboutButton/CloseAboutButton';
import { VelocityComponent } from 'velocity-react';

const AboutBlock = ({aboutVisibility}) => {
    let animationProps;
    if (aboutVisibility === 'CLOSE_ABOUT') {
        animationProps = {
            duration: 1000,
            animation: {
                opacity: 0
            },
            display: 'auto'
        }
    } else {
        animationProps = {
            duration: 1000,
            animation: {
                opacity: 1
            },
            display: 'block'
        }
    }
    return (
        <VelocityComponent {...animationProps}>
            <div
                className={styles.root}>
                <AboutHeader />
                <AboutDescription />
                <a
                    target="_blank"
                    href="http://zoomdata.com">
                    <ZDWebsiteButton />
                </a>
                <CloseAboutButton />
            </div>
        </VelocityComponent>
    )
};

export default AboutBlock;