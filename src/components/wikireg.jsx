import '@toast-ui/editor/dist/toastui-editor.css';

import { Editor } from '@toast-ui/react-editor';
import { useState } from 'react';
import { useRef } from 'react';
import { getIpAddress } from '../apis/getIpAddress';
import { validator } from '../utils/validator';
import { fileUpload } from '../apis/fileUpload';
import test from '../assets/image/901988f7f179347887cead25ee34c46a.jpg';

const WikiReg = () => {

    const editorRef = useRef();
    const [getIp , setIp] = useState({});
    const [songName , setSongName] = useState('');
    const [subTitle , setSubTitle] = useState('');
    const [writer , setWriter] = useState('');
    const [sheetWriter , setSheetWriter] = useState('');
    const [recorded , setRecorded] = useState('');
    const [kantanLevel , setKantanLevel] = useState('');
    const [hutsuuLevel , setHutsuuLevel] = useState('');
    const [muzukashiLevel , setMuzukashiLevel] = useState('');
    const [oniLevel , setOniLevel] = useState('');
    const [uraLevel , setUraLevel] = useState('');

    useState(()=>{
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
        const md = editorInstance.getMarkdown();
        const getHtml = editorInstance.getHTML().replaceAll('&lt;','<').replaceAll('&gt;','>');
        validator(songName);

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
            <h2 className='title_wiki'>위키 문서 작성하기</h2>
            <img src={test}/>
                <div className='editor_area'>
                <div className="input-group mb-3">
                    <input type="text" className="form-control" placeholder="곡 제목" onChange={getSongName} aria-label="Username" aria-describedby="basic-addon1"/>
                </div>
                <div className="input-group mb-3">
                    <input type="text" className="form-control" onChange={getSubtitle} placeholder="틀은 ,로 구분지어서 작성하실수있습니다. 예시(ex: 갓곡,레전드..등등)" aria-label="Username" aria-describedby="basic-addon1"/>
                </div>
                <div className="input-group mb-3">
                    <input type="text" className="form-control" onChange={getWriter} placeholder="작곡가" aria-label="Username" aria-describedby="basic-addon1"/>
                </div>
                <div className="input-group mb-3">
                    <input type="text" className="form-control" onChange={getSheetWriter} placeholder="채보제작자" aria-label="Username" aria-describedby="basic-addon1"/>
                </div>
                <div className="input-group mb-3">
                    <input type="text" className="form-control" onChange={getRecorded} placeholder="수록기체 (ex: 신아시아 AC , ps2 , psp, AC14...)" aria-label="Username" aria-describedby="basic-addon1"/>
                </div>
                <div className="input-group mb-3">
                    <input type="text" className="form-control" onChange={getKantanLevel} placeholder="칸탄레벨" aria-label="Username" aria-describedby="basic-addon1"/>
                </div>
                <div className="input-group mb-3">
                    <input type="text" className="form-control" onChange={getHutsuuLevel} placeholder="후츠우레벨" aria-label="Username" aria-describedby="basic-addon1"/>
                </div>
                <div className="input-group mb-3">
                    <input type="text" className="form-control" onChange={getMuzukashiLevel} placeholder="무즈카시레벨" aria-label="Username" aria-describedby="basic-addon1"/>
                </div>
                <div className="input-group mb-3">
                    <input type="text" className="form-control" onChange={getOniLevel} placeholder="오니레벨" aria-label="Username" aria-describedby="basic-addon1"/>
                </div>
                <div className="input-group mb-3">
                    <input type="text" className="form-control" onChange={getUraLevel} placeholder="우라레벨" aria-label="Username" aria-describedby="basic-addon1"/>
                </div>
                <>
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
        <span className="editInfo">편집 역사에 IP({getIp.IPv4})가 영구히 기록됩니다.</span>
        <div className='writeBtn'>
            <button type="button" onClick={wikiWrite} className="btn btn-primary">작성</button>
        </div>
      </>
        </div>
    </div>
    )
}

export {WikiReg};
