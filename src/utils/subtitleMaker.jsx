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

    if(subtitle === '똥'){
        return(
            <div>
                <table>
                    <tbody>
                        <tr>
                            <td>
                                <img src='https://wiki.dcinside.com/images/thumb/d/d7/%EB%98%A5%EB%A8%B9%EB%8A%94%EB%8D%B0_%EC%B9%B4%EB%A0%88%EC%96%98%EA%B8%B0.jpg/220px-%EB%98%A5%EB%A8%B9%EB%8A%94%EB%8D%B0_%EC%B9%B4%EB%A0%88%EC%96%98%EA%B8%B0.jpg'/>
                            </td>
                            <td>
                            <h1>💩이 문서는 똥에 관한 것, 또는 똥 그 자체를 다루고 있습니다.💩</h1><br/>
                            정말로 똥 같은 것이나 진짜 똥에 대한 이야기를 다루기 때문에 비위가 역겨워질지도 모르니 뒤로가기를 누를 준비를 미리 해 두세요!<br/>
                            "야, 똥 먹는데 카레 얘기 하지 마라."
                            </td>
                            <td>
                                <img src='https://wiki.dcinside.com/images/thumb/4/40/amber_heard_jjang.jpeg/140px-amber_heard_jjang.jpeg'/>
                            </td>
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
    
    if(subtitle === '병신'){
        return(
            <div>
            <table>
                <tbody>
                    <tr>
                        <td>
                            <img src='https://wiki.dcinside.com/images/thumb/6/6e/%EC%95%88%EB%85%95%EB%A1%9C%EB%B4%87.jpg/110px-%EC%95%88%EB%85%95%EB%A1%9C%EB%B4%87.jpg'/>
                        </td>
                        <td>
                        <strong><span className="first">이걸 만든 새끼는 진짜 병신 새끼입니다! </span></strong><br/>
                        도대체 무슨 생각으로 이딴 걸 처만들었는지 모르겠습니다.<br/>
                        이 새끼들은 자기가 만든 것으로부터 직접 고통 받게 해야 합니다!
                        </td>
                        <td>
                            <img src='https://wiki.dcinside.com/images/thumb/a/a6/%EA%B9%94%EA%B9%94%EA%B9%94%EA%B9%94.jpg/110px-%EA%B9%94%EA%B9%94%EA%B9%94%EA%B9%94.jpg'/>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
        )
    }

    if(subtitle === '발암'){
        return(
            <div>
            <table>
                <tbody>
                    <tr>
                        <td>
                            <img src='https://wiki.dcinside.com/images/thumb/a/a9/Cancer.jpg/220px-Cancer.jpg'/>
                        </td>
                        <td>
                       <span className="first"> <strong>경고. 발암 위험이 있는 문서입니다.</strong></span>
                        이 문서를 끝까지 보려 했다가는 암 걸릴 것 같은 고통에 몸부림치게 되고 심지어 죽을 수도 있습니다!
                        자세한 내용은 의사나 약사에게 상담하기엔 이미 늦었군요.
                        故 너의 명복을 왼손으로 비비고~ 오른손으로 비비고~ 아무튼 야무지게 빕니다.
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
        )
    }

    if(subtitle === '쓰레기'){
        return(
            <div>
            <table>
                <tbody>
                    <tr>
                        <td>
                            <img src='https://wiki.dcinside.com/images/thumb/6/6e/Trash.png/150px-Trash.png'/>
                        </td>
                        <td>
                        주의. 이 문서에서 다루는 대상은 너무나도 쓰레기 같습니다.
                        이 쓰레기는 쓰레기보다 더 쓰레기 같아서 쓰레기에게 미안한 마음이 들 정도입니다.
                        이 문서 보고 쓰레기 생각한 당신, 당장 쓰레기한테 사과해.
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
        )
    }


    if(subtitle === '애미'){
        return(
            <div>
            <table>
                <tbody>
                    <tr>
                        <td>
                            <img src='https://wiki.dcinside.com/images/thumb/9/93/%EA%B8%B0%EC%B2%A0%EC%9D%B4_%ED%8C%A8%EB%93%9C%EB%A6%BD.jpg/140px-%EA%B8%B0%EC%B2%A0%EC%9D%B4_%ED%8C%A8%EB%93%9C%EB%A6%BD.jpg'/>
                        </td>
                        <td>
                        <h1>이 문서에서 설명하는 대상은 애미애비가 처뒤졌습니다.</h1><br/>
                        이게 아부지도 없는 게 까불어!!! 너희 아부진 돌아가셨어, 그것도 모르냐?
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
        )
    }

    if(subtitle === '극혐'){
        return(
            <div>
            <table>
                <tbody>
                    <tr>
                        <td>
                            <img src='https://wiki.dcinside.com/images/thumb/3/36/%EA%B7%B9%ED%98%902.png/250px-%EA%B7%B9%ED%98%902.png'/>
                        </td>
                        <td>
                        <span className="first">주의! 정말 극혐인 내용을 담고 있습니다.</span><br/>
                        이 문서는 정신적 또는 시각적 피해를 받을 수 있는 내용이 담겨 있습니다.<br/>
                        이러한 피해를 받지 않으려면 살포시 뒤로가기를 눌러 주십시오.<br/>
                        이를 무시하고 문서를 보아서 피해를 입더라도 태고위키는 일절 책임을 지지 않습니다.<br/>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
        )
    }
}

export {subTitleMaker};