import React, { useState } from 'react'
import { Gif } from '@giphy/react-components'
import { GiphyFetch } from '@giphy/js-fetch-api';
import { useAsync } from 'react-async-hook';

function GetGif({props}) {
    const [gif, setGif] = useState(null);
        
    function GifRet() {
        useAsync( async () => {
            const giphyFetch = new GiphyFetch(process.env.REACT_APP_GIPHY_PUBLIC_KEY);
            const { data } = await giphyFetch.gif(props);
            setGif(data);
        }, []);

        return gif && <Gif gif={gif} width={'100%'} height="auto" hideAttribution noLink />;
    
    }

    return (
        <>
            <GifRet />
        </>
    )
}

export default GetGif;
