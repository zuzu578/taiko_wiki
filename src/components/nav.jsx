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
        <nav className="nav_bar">
            <div className="user_ip"> 현재 <span className='ip'>{getIp}</span> 로 접속하고 있습니다.</div>
              <InputGroup className="mb-3">
                <FormControl
                placeholder="검색"
                aria-label="Username"
                aria-describedby="basic-addon1"
                />
            </InputGroup>
        </nav>
    )
}

export { Navbar };