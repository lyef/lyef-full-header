import React, { PropTypes } from 'react';

const FullHeader = ({ title, subtitle, bgColor = '#000', textColor = '#fff', font = 'sans-serif', bgImg = '' }) => {
    const headerStyle = {
        display: 'table',
        width: '100%',
        height: '100vh',
        backgroundColor: bgColor,
        backgroundImage: `url(${bgImg})`,
        backgroundSize: 'cover',
        color: textColor,
        fontFamily: font,
    };

    const containerStyle = {
        display: 'table-cell',
        verticalAlign: 'middle',
        textAlign: 'center',
    };

    const titleStyle = {
        fontSize: '5rem',
        lineHeight: '1.5',
    };

    const subtitleStyle = {
        fontSize: '2rem',
    };

    return (
        <header className="full-header" style={headerStyle}>
            <div className="texts" style={containerStyle}>
                {title &&
                    <h1 className="title" style={titleStyle}>{title}</h1>
                }
                {subtitle &&
                    <h2 className="subtitle" style={subtitleStyle}>{subtitle}</h2>
                }
            </div>
        </header>
    );
};

FullHeader.propTypes = {
    title: PropTypes.string,
    subtitle: PropTypes.string,
    bgColor: PropTypes.string,
    textColor: PropTypes.string,
    font: PropTypes.string,
    bgImg: PropTypes.string,
};

export default FullHeader;
