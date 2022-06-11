import { InputGroup,FormControl} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect } from 'react';
import { getIpAddress } from '../apis/getIpAddress';
import { useState } from 'react';

const Navbar = () => {
    const [searchKeyword , setSearchKeyword] = useState('');
    const [getIp , setIp ] = useState('');

    useEffect(()=>{
        getIpAddress()
        .then((res)=>{
            setIp(res.data.IPv4);
        })
       
    },[]);

    const getSearchKeyword = (e) => {
        setSearchKeyword(e.target.value);
    }

    const search = () => {
        if(!searchKeyword){alert('검색어를 입력해주세요.'); return ;}
        window.location.href = `/find?searchKeyword=${searchKeyword}`;
    }

    return(
        <nav className="nav_bar">
            <div className="user_ip"> 현재 <span className='ip'>{getIp}</span> 로 접속하고 있습니다.</div>
              <InputGroup className="mb-3">
                <FormControl
                placeholder="검색"
                aria-label="Username"
                aria-describedby="basic-addon1"
                onChange={getSearchKeyword}
                />
                <button type="button" onClick={search} className="btn btn-primary">검색</button>
            </InputGroup>
            
        </nav>
    )
}

export { Navbar };