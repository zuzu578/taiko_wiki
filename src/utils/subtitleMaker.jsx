const subTitleMaker = (subtitle) =>{
    console.log('subTitleMaker',subtitle);
    if(subtitle === '갓곡'){
        return(
            <div>
                <table >
                    <tbody>
                        <tr>
                            <td> <img src='https://wiki.dcinside.com/images/7/75/Ddul.jpg'/></td>
                            <td><span className="first">이 문서는 갓음악에 대해 다룹니다.</span><br/>
                            이 문서는 남녀노소 귀에 쏙쏙 들어오는 띵곡이나 뮤지션에 대해 다룹니다.<br/>
                            주변의 다른 사람들에게도 이 문서에서 설명하는 노래나 뮤지션을 추천해 주세요.</td>
                        </tr>
                    </tbody>
                </table>
                
            </div>
        )
    }

    if(subtitle === '레전드'){
        return(
            <div>
                <table>
                    <tbody>
                        <tr>
                            <td>
                                <img src='https://wiki.dcinside.com/images/6/61/%EC%9D%B4%EB%A7%8C%EC%88%98_%EB%A0%88%EC%A0%84%EB%93%9C.png'/>
                            </td>
                            <td>
                           이 문서에서 다루는 대상은  <span className="legends">레전드입니다.</span><br/>
                           이 문서에서 다루는 대상은 이미 마구마구 레전드에 등록됐거나 등록될 예정입니다.<br/>
                           모두 레전드에게 예의를 갖춥시다.
                            </td>
                            <td>
                                <img src='https://wiki.dcinside.com/images/c/c7/%EC%B5%9C%EB%8F%99%EC%9B%90_%EB%A0%88%EC%A0%84%EB%93%9C.png'/>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        )
    }
}

export {subTitleMaker};