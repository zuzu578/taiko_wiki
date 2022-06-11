import { useState } from "react";
import { useEffect } from "react";
import { getWikiData } from "../apis/getWikiData";
import { subTitleMaker } from "../utils/subtitleMaker";

const WikiDetail = () => {
    const [wikiData , setWikiData ] =useState([{}]);
    const [subTitle , setSubtitle ] = useState([]);
    useEffect(()=>{
        const currentUrl = window.location.href;
        const url = new URL(currentUrl);
        const urlParams = url.searchParams;
        const parameter = urlParams.get('searchKeyword');
        getWikiData(parameter)
        .then((res)=>{
            console.log(res.data);
            setWikiData(res.data);
            setSubtitle(res.data.subtitle.split(','));
        })
        .catch((e)=>{
            e.message;
        })
        
    },[]);

    return (
        <div className="wrapper">
            {wikiData ? <>
                <h1>{wikiData.title}</h1>
                {subTitle.map((item)=>{
                    return(
                        <div className="subtitle_wrapper">
                            {subTitleMaker(item)}
                        </div>
                    )
                })}
                <div className="wikiInfo">
                <div className="thumbnail">
                    <img src={wikiData.thumnail}/>
                </div>
                <div className="songTitle">
                    <span className="songTitle">{wikiData.title}</span>
                </div>
                <div className="song_writer">
                    <span className="song_writer"> 작곡 : {wikiData.song_writer}</span>
                </div>
                <div className="sheet_maker">
                    <span className="sheet_maker"> 보면제작 : {wikiData.sheet_maker}</span>
                </div>
                <div className="recorded">
                    <span className="recorded"> 수록된 버전 / 기체  : {wikiData.recorded}</span>
                </div>
                <div className="kantan">
                    <span className="kantan"> 칸탄(かんたん) {wikiData.kantan}</span>
                </div>
                <div className="hutsuu">
                    <span className="hutsuu"> 후츠우(ふつう) {wikiData.hutsuu}</span>
                </div>
                <div className="muzukashi">
                    <span className="muzukashi"> 무즈카시이(むずかしい)	{wikiData.muzukashi}</span>
                </div>
                <div className="oni">
                    <span className="oni"> 오니(おに){wikiData.oni}</span>
                </div>
                <div className="ura">
                    <span className="ura"> 우라(裏) {wikiData.ura}</span>
                </div>

            </div>
            </> : ''}
            
             <div dangerouslySetInnerHTML={{ __html: wikiData.text }}></div>
            {/* {wikiData.map((item)=>{
                return(
                   
                    <div dangerouslySetInnerHTML={{ __html: item.text }}></div>
                )
            })} */}

        </div>
    )
}

export { WikiDetail };