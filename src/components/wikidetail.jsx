import { useState } from "react";
import { useEffect } from "react";
import { getWikiData } from "../apis/getWikiData";
import { subTitleMaker } from "../utils/subtitleMaker";
import { getSameLevelDoc } from "../apis/getSameLevelDoc";

const WikiDetail = () => {
    const [wikiData , setWikiData ] =useState([{}]);
    const [subTitle , setSubtitle ] = useState([]);
    const [nowPageDocLevel , setNowPageDocLevel] = useState('');
    const [nowPageSameLevelContents , setNowPageSameLevelContents] = useState([{}]);

    useEffect(()=>{
        const currentUrl = window.location.href;
        const url = new URL(currentUrl);
        const urlParams = url.searchParams;
        const parameter = urlParams.get('searchKeyword');
        getWikiData(parameter)
        .then(async(res)=>{
            console.log(res.data);
            setWikiData(res.data);
            setSubtitle(res.data.subtitle.split(','));
            setNowPageDocLevel(res.data.oni);
            const result = await getSameLevelDoc(res.data.oni);
            console.log('result ===> ' , result.data);
            setNowPageSameLevelContents(result.data);
        })
        .catch((e)=>{
            e.message;
        })
        
    },[]);

    return (
        <div className="wrapper">
            {wikiData ? <>
                <h1>{wikiData.title}</h1>
                <h5>최초작성일 : {wikiData.created_time}</h5>
                {subTitle.map((item)=>{
                    return(
                        <div className="subtitle_wrapper">
                            {subTitleMaker(item)}
                        </div>
                    )
                })}
                <div className="recommendLevel">
                     <span className="taiko_para">태고의 달인</span> {nowPageDocLevel} 항암곡(추가 중...)
                    <div className="recommend">
                     <table>
                         <tbody>
                             <tr>
                             {nowPageSameLevelContents.map((item)=>{
                                return(
                                        <td>
                                            <div className="sameLevelWrapper">
                                                <div className="sameLevelThumbNail">
                                                    <img src={item.thumnail}/>
                                                    <div className="sameLevelSongTitle">
                                                    <span className="songTitles">
                                                        <a href={`/find?searchKeyword=${item.title}`}>{item.title}</a>
                                                    </span>
                                                </div>
                                                </div>

                                            </div>
                                        </td>
                                )
                            })}
                             </tr>
                         </tbody>
                     </table>
                     </div>
                </div>
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
        </div>
    )
}

export { WikiDetail };