Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Styles = require('./Styles');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var defaultProps = {
    bgColor: '#000',
    textColor: '#fff',
    font: 'sans-serif',
    bgImg: ''
};

var propTypes = {
    title: _react.PropTypes.string,
    subtitle: _react.PropTypes.string,
    bgColor: _react.PropTypes.string,
    textColor: _react.PropTypes.string,
    font: _react.PropTypes.string,
    bgImg: _react.PropTypes.string,
    video: _react.PropTypes.string
};

var FullHeader = function FullHeader(_ref) {
    var title = _ref.title;
    var subtitle = _ref.subtitle;
    var bgColor = _ref.bgColor;
    var textColor = _ref.textColor;
    var font = _ref.font;
    var bgImg = _ref.bgImg;
    var video = _ref.video;

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