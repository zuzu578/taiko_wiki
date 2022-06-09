import { InputGroup,FormControl} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect } from 'react';
import { getIpAddress } from '../apis/getIpAddress';
import { useState } from 'react';

const Navbar = () => {
    const [getIp , setIp ] = useState('');
    useEffect(()=>{
        getIpAddress()
        .then((res)=>{
            setIp(res.data.IPv4);
        })
       
    },[]);
    return(
        <nav className="search">
            <div className="user_ip"> 현재 {getIp} 로 접속하고 있습니다.</div>
              <InputGroup className="mb-3">
                <FormControl
                placeholder="검색"
                aria-label="Username"
                aria-describedby="basic-addon1"
                />
            </InputGroup>
            {/* <div className="">
                여러분이 가꾸어 나가는 태고위키<br/>
                태고위키에 오신 것을 환영합니다!<br/>
                태고위키는 누구나 기여할 수 있는 위키입니다.<br/>
                검증되지 않았거나 편향된 내용이 있을 수 있습니다.<br/>
            </div> */}

        </nav>
    )
}

export { Navbar };