import '@toast-ui/editor/dist/toastui-editor.css';

import { Editor } from '@toast-ui/react-editor';
import { useRef } from 'react';
import youtubeUrl from 'youtube-url'

const WikiReg = () => {
    const editorRef = useRef();

    const wikiWrite = () => {
        const editorInstance = editorRef.current.getInstance();
        const md = editorInstance.getMarkdown();
        console.log('testset',md);
        const getHtml = editorInstance.getHTML();
        console.log('html ==>' , getHtml);
        console.log('test!',getHtml.replace('&lt;iframe','<iframe'))
    }

    return(
        <div>
            <h2 className='title_wiki'>위키 문서 작성하기</h2>
                <div className='editor_area'>
                <>
        <Editor
          previewStyle="vertical"
          height="400px"
          initialEditType="markdown"
          initialValue=""
          ref={editorRef}
        />
        <button onClick={wikiWrite}>Click!</button>
      </>
        </div>
    </div>
    )
}

export {WikiReg};