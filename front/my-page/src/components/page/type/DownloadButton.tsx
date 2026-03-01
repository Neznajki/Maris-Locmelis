import React from "react";
import {DownloadButtonType} from "@/contract/PageType";

export const DownloadButton: React.FC<DownloadButtonType> = ({ href, fileName, content }) => {
    return (
        <div className="popup-spoiler">
            <button className="popup-trigger">
                <a href={href} download={fileName}>{content}</a>
            </button>
        </div>
    )
}
export default DownloadButton