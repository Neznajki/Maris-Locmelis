import {PageHandler} from "@/contract/PageSection";
import {PlaySongType} from "@/contract/PageType";
import React from "react";
import {PlaySong} from "@/components/page/type/PlaySong";

export const PlaySongHandler: PageHandler<PlaySongType> = {
    render(data: PlaySongType): React.JSX.Element {
        return (
            <PlaySong key={`song_${data.songLink}`} songLink={data.songLink} />
        );
    },

    parseContent: (content) => {
        return content as PlaySongType;
    },
};