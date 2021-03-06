import '@toast-ui/editor/dist/toastui-editor.css';

import { Editor } from '@toast-ui/react-editor';
import { useState } from 'react';
import { useRef } from 'react';
import { getIpAddress } from '../apis/getIpAddress';
import { fileUpload } from '../apis/fileUpload';
import { postingWiki } from '../apis/postingWiki';
import { getWikiData } from '../apis/getWikiData';
import { useEffect } from 'react';

const WikiReg = () => {

    const editorRef = useRef();
    const [getIp , setIp] = useState({});
    const [songName , setSongName] = useState('');
    const [subTitle , setSubTitle] = useState('');
    const [writer , setWriter] = useState('');
    const [sheetWriter , setSheetWriter] = useState('');
    const [recorded , setRecorded] = useState('');
    const [kantan , setKantanLevel] = useState('');
    const [hutsuu , setHutsuuLevel] = useState('');
    const [muzukashi , setMuzukashiLevel] = useState('');
    const [oni , setOniLevel] = useState('');
    const [ura , setUraLevel] = useState('');
    const [thumbnail , setThumbNail] = useState('');
    const [makeDocTitle ,setMakeDocTitle] = useState('');
    const [isExistDoc , setIsExistDoc] = useState(false);
    const [existDocData , setExistDocData] = useState({});
    
    useEffect(()=>{
        const currentUrl = window.location.href;
        const url = new URL(currentUrl);
        const urlParams = url.searchParams;
        const parameter = urlParams.get('title');

        getWikiData(parameter)
        .then((res)=>{
            console.log(res.data);
            if(res.data){
                setIsExistDoc(true);
                setMakeDocTitle(res.data.title)
                setExistDocData(res.data);  
            } else {
                setMakeDocTitle(parameter);
            }
        })
        .catch((e)=>{
            e.message;
        })

        
        getIpAddress()
        .then((res)=>{
            setIp(res.data);
        })
        .catch((e)=>{
            e.message;
        })

    },[]);
    
    const wikiWrite = () => {
        const editorInstance = editorRef.current.getInstance();
        const getHtml = editorInstance.getHTML().replaceAll('&lt;','<').replaceAll('&gt;','>');
        if(!songName){ alert('??????????????? ??????????????????'); return}

        const frm = new FormData();
        frm.append("ip_address",getIp.IPv4);
        frm.append("title",songName);
        frm.append("subtitle",subTitle);
        frm.append("song_writer",writer);
        frm.append("sheet_maker",sheetWriter);
        frm.append("recorded",recorded);
        frm.append("kantan",kantan);
        frm.append("hutsuu",hutsuu);
        frm.append("muzukashi",muzukashi);
        frm.append("oni",oni);
        frm.append("ura",ura);
        frm.append("text",getHtml);
        frm.append("thumnail",thumbnail);

        postingWiki(frm)
        .then((res)=>{
            alert('????????? ??????????????????.');
            window.location.href = '/';
        })
        .catch((e)=>{
            e.message;
            alert('????????? ??????????????? ????????? ??????????????????.');
        })

    }

    const uploadImage = async(blob) =>{
        const frm = new FormData();
        frm.append('file', blob);
        const url = await fileUpload(frm);
        return 'http://localhost:3000/src/assets/image/'+url.data.fileName;
    }

    const getSongName = (e) => {
        setSongName(e.target.value);
    }

    const getSubtitle = (e) => {
        setSubTitle(e.target.value);
    }

    const getWriter = (e) => {
        setWriter(e.target.value);
    }

    const getSheetWriter = (e) => {
        setSheetWriter(e.target.value);
    }

    const getRecorded = (e) => {
        setRecorded(e.target.value);
    }
    const getThumnail = (e) =>{
        setThumbNail(e.target.value);

    }

    const getKantanLevel = (e) => {
        setKantanLevel(e.target.value);
    }

    const getHutsuuLevel = (e) => {
        setHutsuuLevel(e.target.value);
    }

    const getMuzukashiLevel = (e) => {
        setMuzukashiLevel(e.target.value);
    }
    
    const getOniLevel = (e) => {
        setOniLevel(e.target.value);
    }

    const getUraLevel = (e) => {
        setUraLevel(e.target.value);
    }
  
    return(
        <div>
            {isExistDoc ? 
            <>
            {editorRef.current.getInstance().setHTML(existDocData.text)}
            {console.log('text=====>',existDocData.text)}
            <h2 className='title_wiki'>{makeDocTitle} ????????????</h2>
                <div className='editor_area'>
                <div className="input-group mb-3">
                    <input type="text" className="form-control" value={existDocData.title} placeholder="??? ??????" onChange={getSongName} aria-label="Username" aria-describedby="basic-addon1"/>
                </div>
                <div className="input-group mb-3">
                    <input type="text" className="form-control" value={existDocData.thumnail} placeholder="??? ????????? ????????? ??????" onChange={getSongName} aria-label="Username" aria-describedby="basic-addon1"/>
                </div>
                <div className="input-group mb-3">
                    <input type="text" className="form-control" value={existDocData.subtitle} onChange={getSubtitle} placeholder="?????? ,??? ??????????????? ???????????????????????????. ??????(ex: ??????,?????????..??????)" aria-label="Username" aria-describedby="basic-addon1"/>
                </div>
                <div className="input-group mb-3">
                    <input type="text" className="form-control" value={existDocData.song_writer} onChange={getWriter} placeholder="?????????" aria-label="Username" aria-describedby="basic-addon1"/>
                </div>
                <div className="input-group mb-3">
                    <input type="text" className="form-control" value={existDocData.sheet_maker} onChange={getSheetWriter} placeholder="???????????????" aria-label="Username" aria-describedby="basic-addon1"/>
                </div>
                <div className="input-group mb-3">
                    <input type="text" className="form-control" value={existDocData.recorded} onChange={getRecorded} placeholder="???????????? (ex: ???????????? AC , ps2 , psp, AC14...)" aria-label="Username" aria-describedby="basic-addon1"/>
                </div>
                <div className="input-group mb-3">
                    <input type="text" className="form-control" value={existDocData.kantan} onChange={getKantanLevel} placeholder="????????????" aria-label="Username" aria-describedby="basic-addon1"/>
                </div>
                <div className="input-group mb-3">
                    <input type="text" className="form-control" value={existDocData.hutsuu} onChange={getHutsuuLevel} placeholder="???????????????" aria-label="Username" aria-describedby="basic-addon1"/>
                </div>
                <div className="input-group mb-3">
                    <input type="text" className="form-control" value={existDocData.muzukashi} onChange={getMuzukashiLevel} placeholder="??????????????????" aria-label="Username" aria-describedby="basic-addon1"/>
                </div>
                <div className="input-group mb-3">
                    <input type="text" className="form-control" value={existDocData.oni} onChange={getOniLevel} placeholder="????????????" aria-label="Username" aria-describedby="basic-addon1"/>
                </div>
                <div className="input-group mb-3">
                    <input type="text" className="form-control" value={existDocData.ura} onChange={getUraLevel} placeholder="????????????" aria-label="Username" aria-describedby="basic-addon1"/>
                </div>

        <Editor
          previewStyle="vertical"
          height="400px"
          initialEditType="markdown"
          initialValue=""
          ref={editorRef}
          hooks={{
            addImageBlobHook: async (blob, callback) => {
              const upload = await uploadImage(blob);
              callback(upload, "alt text");
              return false;

            }

        }}
        />
        </div>
            </> : <>
            <h2 className='title_wiki'>?????? ?????? ????????????</h2>
                <div className='editor_area'>
                <div className="input-group mb-3">
                    <input type="text" className="form-control" placeholder="??? ??????" onChange={getSongName} aria-label="Username" aria-describedby="basic-addon1"/>
                </div>
                <div className="input-group mb-3">
                    <input type="text" className="form-control"  placeholder="??? ????????? ????????? ??????" onChange={getThumnail} aria-label="Username" aria-describedby="basic-addon1"/>
                </div>
                <div className="input-group mb-3">
                    <input type="text" className="form-control" onChange={getSubtitle} placeholder="?????? ,??? ??????????????? ???????????????????????????. ??????(ex: ??????,?????????..??????)" aria-label="Username" aria-describedby="basic-addon1"/>
                </div>
                <div className="input-group mb-3">
                    <input type="text" className="form-control" onChange={getWriter} placeholder="?????????" aria-label="Username" aria-describedby="basic-addon1"/>
                </div>
                <div className="input-group mb-3">
                    <input type="text" className="form-control" onChange={getSheetWriter} placeholder="???????????????" aria-label="Username" aria-describedby="basic-addon1"/>
                </div>
                <div className="input-group mb-3">
                    <input type="text" className="form-control" onChange={getRecorded} placeholder="???????????? (ex: ???????????? AC , ps2 , psp, AC14...)" aria-label="Username" aria-describedby="basic-addon1"/>
                </div>
                <div className="input-group mb-3">
                    <input type="text" className="form-control" onChange={getKantanLevel} placeholder="????????????" aria-label="Username" aria-describedby="basic-addon1"/>
                </div>
                <div className="input-group mb-3">
                    <input type="text" className="form-control" onChange={getHutsuuLevel} placeholder="???????????????" aria-label="Username" aria-describedby="basic-addon1"/>
                </div>
                <div className="input-group mb-3">
                    <input type="text" className="form-control" onChange={getMuzukashiLevel} placeholder="??????????????????" aria-label="Username" aria-describedby="basic-addon1"/>
                </div>
                <div className="input-group mb-3">
                    <input type="text" className="form-control" onChange={getOniLevel} placeholder="????????????" aria-label="Username" aria-describedby="basic-addon1"/>
                </div>
                <div className="input-group mb-3">
                    <input type="text" className="form-control" onChange={getUraLevel} placeholder="????????????" aria-label="Username" aria-describedby="basic-addon1"/>
                </div>
           
        <Editor
          previewStyle="vertical"
          height="400px"
          initialEditType="markdown"
          initialValue=""
          ref={editorRef}
          hooks={{
            addImageBlobHook: async (blob, callback) => {
              const upload = await uploadImage(blob);
              callback(upload, "alt text");
              return false;

            }

        }}
        />
          </div>  
            </>}
            
            
        <span className="editInfo">?????? ????????? IP({getIp.IPv4})??? ????????? ???????????????.</span>
        <div className='writeBtn'>
            <button type="button" onClick={wikiWrite} className="btn btn-primary">??????</button>
        </div>
    
        </div>
    
    )
}

export {WikiReg};
