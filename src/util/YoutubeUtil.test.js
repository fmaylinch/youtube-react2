//@flow

import YoutubeUtil from './YoutubeUtil'
import data from './api-data-sample.json'

describe('YoutubeUtil', () => {

    it('extracts videos correctly', () => {
        
        const videos = YoutubeUtil.extractVideos(data)

        expect(videos.length).toEqual(9)

        expect(videos[0].title).toEqual("St. Vincent - New York (Official Video)")

        expect(videos[0]).toEqual({
            id: "4TPqUvy1vYU",
            image: "https://i.ytimg.com/vi/4TPqUvy1vYU/mqdefault.jpg",
            title: "St. Vincent - New York (Official Video)"
        })
    })
})