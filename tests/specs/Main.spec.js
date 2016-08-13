import React from 'react';
import chai, { expect } from 'chai';
import chaiEnzyme from 'chai-enzyme';
import { shallow } from 'enzyme';
import FullHeader from '../../src/Main';
chai.use(chaiEnzyme());

describe('<FullHeader />', () => {

    it('should have header when mount', () => {
        const wrapper = shallow(<FullHeader />);
        expect(wrapper.find('header')).to.have.length(1);
    });

    it('should have h1 when title passed', () => {
        const wrapper = shallow(<FullHeader title="lyef" />);
        expect(wrapper.find('h1')).to.have.length(1);
    });

    it('should not have h1 when title is not passed', () => {
        const wrapper = shallow(<FullHeader />);
        expect(wrapper.find('h1')).to.have.length(0);
    });

    it('should have h2 when subtitle passed', () => {
        const wrapper = shallow(<FullHeader subtitle="What is tested may never break." />);
        expect(wrapper.find('h2')).to.have.length(1);
    });

    it('should not have h2 when subtitle is not passed', () => {
        const wrapper = shallow(<FullHeader />);
        expect(wrapper.find('h2')).to.have.length(0);
    });

    it('should have video when video passed', () => {
        const wrapper = shallow(<FullHeader video="my_video.mp4" />);
        expect(wrapper.find('video')).to.have.length(1);
    });

    it('should not have video when video is not passed', () => {
        const wrapper = shallow(<FullHeader />);
        expect(wrapper.find('video')).to.have.length(0);
    });

    it('should have background-color equal #000 when none is passed', () => {
        const wrapper = shallow(<FullHeader />);
        expect(wrapper).to.have.style('background-color').equal('#000');
    });

    it('should have background-color equal bgColor passed', () => {
        const wrapper = shallow(<FullHeader bgColor="#123" />);
        expect(wrapper).to.have.style('background-color').equal('#123');
    });

    it('should have color equal #fff when none is passed', () => {
        const wrapper = shallow(<FullHeader />);
        expect(wrapper).to.have.style('color').equal('#fff');
    });

    it('should have color equal textColor passed', () => {
        const wrapper = shallow(<FullHeader textColor="#123" />);
        expect(wrapper).to.have.style('color').equal('#123');
    });

    it('should have font-family equal sans-serif when none is passed', () => {
        const wrapper = shallow(<FullHeader />);
        expect(wrapper).to.have.style('font-family').equal('sans-serif');
    });

    it('should have font-family equal font passed', () => {
        const wrapper = shallow(<FullHeader font="Lobster" />);
        expect(wrapper).to.have.style('font-family').equal('Lobster');
    });

    it('should have background-image equal empty when none is passed', () => {
        const wrapper = shallow(<FullHeader />);
        expect(wrapper).to.have.style('background-image').equal('url()');
    });

    it('should have background-image equal bgImg passed', () => {
        const wrapper = shallow(<FullHeader bgImg="img/mybackground.jpg" />);
        expect(wrapper).to.have.style('background-image').equal('url(img/mybackground.jpg)');
    });
});
