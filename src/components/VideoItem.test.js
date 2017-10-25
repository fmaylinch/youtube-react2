//@flow

import React from 'react'
import { shallow } from 'enzyme'
import VideoItem from './VideoItem'
import type { Video } from '../components/types.js'

describe('VideoItem', () => {

    const video = {
        id: "4TPqUvy1vYU",
        image: "https://i.ytimg.com/vi/4TPqUvy1vYU/mqdefault.jpg",
        title: "St. Vincent - New York (Official Video)"
    }

    it('renders correctly', () => {
        const component = shallow(<VideoItem video={video}/>)
        expect(component).toMatchSnapshot()
    })

    it('renders image correctly', () => {
        const component = shallow(<VideoItem video={video}/>)
		const image = <img src={video.image} alt={video.title} />
		expect(component.contains(image)).toBeTruthy()
    })
})