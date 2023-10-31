"use client"

import { ArrowFatLinesUp } from "@phosphor-icons/react"
import { ArrowFatLinesDown } from "@phosphor-icons/react/dist/ssr"
import { useState } from "react"
import YouTube from "react-youtube"

const VideoPlayer = ({youtubeID}) => {
    const [isOpen, setIsOpen] = useState(true)

    const options = {
        width: "300",
        height: "200"
    }

    const handlerVideoPlayer = () => {
        setIsOpen(prevState => !prevState)
    }

    const HideVideoPlayer = () => {
        return (
            <div className="m-auto md:fixed md:top-20 md:right-20">
                <button onClick={handlerVideoPlayer} className="hidden md:block float-right mb-1 bg-color-accent text-color-secondary rounded-full"><ArrowFatLinesDown size={32}/></button>
                <h1 className="text-color-accent md:hidden font-bold mb-1 mt-3">Trailer :</h1>
                <YouTube videoId={youtubeID} onReady={event => event.target.pauseVideo()} opts={options} />
            </div>
        )
    }

    const ActivationVideoPlayer = () => {
        return <button onClick={handlerVideoPlayer} className="hidden md:block md:fixed md:bottom-2 md:right-8 bg-color-accent text-color-secondary rounded-full"><ArrowFatLinesUp size={32}/></button>
    }

    return isOpen ? <HideVideoPlayer /> : <ActivationVideoPlayer />
}

export default VideoPlayer