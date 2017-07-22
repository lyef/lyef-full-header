import React from 'react';
import PropTypes from 'prop-types';
import { headerStyle, containerStyle, titleStyle, subtitleStyle, videoStyle } from './Styles';

const defaultProps = {
    bgColor: '#000',
    textColor: '#fff',
    font: 'sans-serif',
    bgImg: '',
};

const propTypes = {
    title: PropTypes.string,
    subtitle: PropTypes.string,
    bgColor: PropTypes.string,
    textColor: PropTypes.string,
    font: PropTypes.string,
    bgImg: PropTypes.string,
    video: PropTypes.string,
};

const FullHeader = ({ title, subtitle, bgColor, textColor, font, bgImg, video }) => {
    const headerStyleCombined = {
        ...headerStyle,
        backgroundColor: bgColor,
        backgroundImage: `url(${bgImg})`,
        color: textColor,
        fontFamily: font,
    };

    return (
        <header className="full-header" style={headerStyleCombined}>
            <div className="texts" style={containerStyle}>
                {title && <h1 className="title" style={titleStyle}>{title}</h1>}
                {subtitle && <h2 className="subtitle" style={subtitleStyle}>{subtitle}</h2>}
            </div>
            {video &&
                <video className="video" autoPlay muted loop src={video} style={videoStyle} />
            }
        </header>
    );
};

FullHeader.defaultProps = defaultProps;
FullHeader.propTypes = propTypes;

export default FullHeader;
