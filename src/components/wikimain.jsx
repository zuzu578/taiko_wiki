const WikiMain = () => {
    return(
        <div className="wrapper">
            <div className="wiki_main_image">
                <img src='https://taiko-ch.net/images/top/slide/slide_ac.jpg'/>
            </div>
            <div className="main_info">
                <h1>여러분이 가꾸어 나가는 <strong>태고위키</strong></h1><br/>
                <strong>태고위키</strong>에 오신 것을 환영합니다!<br/>
                <strong>태고위키</strong>는 누구나 기여할 수 있는 위키입니다.<br/>
                <strong>검증되지 않았거나 편향된 내용이 있을 수 있습니다.</strong><br/>
                <div className="first">
                    <div className="item"> 
                        <h2> <a href='/wikireg'>태고위키에 문서를 기여해주세요!</a> </h2><br/>
                        <h2> 태고위키에서 자유롭게 문서를 작성하고 문서를 기여하실수 있습니다.</h2>
                    </div>
                    <div className="item"> 
                        <h2> 태고 위키에 처음오셨나요? </h2><br/>
                        <h2> 태고위키의 규정과 도움말 등을 확인해보세요.</h2>
                    </div>
                    <div className="item"> 
                        <h2> 태고위키즐기기 </h2><br/>
                        <h2> 유저들이 작성한 문서들을 확인해보세요.</h2>
                    </div>
                </div>
            </div>
        
        </div>
    )
}

export { WikiMain };