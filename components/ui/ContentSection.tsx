import React from 'react'
import "../components.css"

const ContentSection = ({ title, titleHighlight, content }: { title: string; titleHighlight?: string; content: string; }) => {
    return (
        <div className="benefits content-sec flex flex-col items-center">
            <h1 className="heading lg:max-w-[45vw]">
                {title} {titleHighlight && (<span className="text-purple"> {titleHighlight}</span>)}
            </h1>
            <p className="text-white-200 md:mt-10 my-5 text-justify ">
                {content}
            </p>
        </div>
    )
}

export default ContentSection