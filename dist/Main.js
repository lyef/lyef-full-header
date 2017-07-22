Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _Styles = require('./Styles');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var defaultProps = {
    bgColor: '#000',
    textColor: '#fff',
    font: 'sans-serif',
    bgImg: ''
};

var propTypes = {
    title: _propTypes2['default'].string,
    subtitle: _propTypes2['default'].string,
    bgColor: _propTypes2['default'].string,
    textColor: _propTypes2['default'].string,
    font: _propTypes2['default'].string,
    bgImg: _propTypes2['default'].string,
    video: _propTypes2['default'].string
};

var FullHeader = function FullHeader(_ref) {
    var title = _ref.title,
        subtitle = _ref.subtitle,
        bgColor = _ref.bgColor,
        textColor = _ref.textColor,
        font = _ref.font,
        bgImg = _ref.bgImg,
        video = _ref.video;

    var headerStyle = {
        display: 'table',
        width: '100%',
        height: '100vh',
        backgroundSize: 'cover',
        backgroundColor: bgColor,
        backgroundImage: 'url(' + String(bgImg) + ')',
        color: textColor,
        fontFamily: font
    };

    return _react2['default'].createElement(
        'header',
        { className: 'full-header', style: headerStyle },
        _react2['default'].createElement(
            'div',
            { className: 'texts', style: _Styles.containerStyle },
            title && _react2['default'].createElement(
                'h1',
                { className: 'title', style: _Styles.titleStyle },
                title
            ),
            subtitle && _react2['default'].createElement(
                'h2',
                { className: 'subtitle', style: _Styles.subtitleStyle },
                subtitle
            )
        ),
        video && _react2['default'].createElement('video', { className: 'video', autoPlay: true, muted: true, loop: true, src: video, style: _Styles.videoStyle })
    );
};

FullHeader.defaultProps = defaultProps;
FullHeader.propTypes = propTypes;

exports['default'] = FullHeader;