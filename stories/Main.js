import React from 'react';
import FullHeader from '../src/Main'; // This is our component
import { storiesOf } from '@kadira/storybook';

storiesOf('<FullHeader />', module)
    .add('with just title', () => (
        <FullHeader title="lyef" />
    ))
    .add('with title and subtitle', () => (
        <FullHeader title="lyef" subtitle="What is tested may never break." />
    ))
    .add('with title, subtitle and bg-color', () => (
        <FullHeader
            title="lyef"
            subtitle="What is tested may never break."
            bg-color="#3299BB"
        />
    ))
    .add('with just title, subtitle, bg-color and text-color', () => (
        <FullHeader
            title="lyef"
            subtitle="What is tested may never break."
            bg-color="#3299BB"
            text-color="#FF9900"
        />
    ))
    .add('with all settings', () => (
        <FullHeader
            title="lyef"
            subtitle="What is tested may never break."
            bg-color="#7AA7CE"
            text-color="#129418"
            bg-img="http://www.toptenpack.com/wp-content/uploads/2016/01/ireland-full-hd-wallpaper.jpeg"
        />
    ))
    .add('with just title, subtitle and video', () => (
        <FullHeader
            title="lyef"
            subtitle="What is tested may never break."
            bg-color="#EBE9EB"
            text-color="#272727"
            video="http://callmenick.com/_development/video/full-screen-background-video/media/demo.mp4"
        />
    ));
