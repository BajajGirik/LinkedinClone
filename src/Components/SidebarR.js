import { useState } from "react";
import { useEffect } from "react";
import styled from "styled-components";

function SidebarR() {
    const [trending, setTrending] = useState([])
    useEffect(() => {
        fetch('https://covid19-api.com/country?name=India&format=json')
            .then(response => {
                return response.json();
            })
            .then(data => {
                ['code', 'longitude', 'latitude', 'lastChange', 'lastUpdate']
                    .forEach(obj => delete data[0][obj]);
                
                setTrending([...trending, data[0]]);
        })
    }, []);

    return (
        <SidebarRContainer className='shadow'>
            {trending.map(data => (
                Object.keys(data).map(key => (
                    <div key={key.id}>
                        <span>{key}: </span>
                        <span>{data[key]}</span>
                    </div>
                ))
            ))}
        </SidebarRContainer>
    )
}

export default SidebarR

const SidebarRContainer = styled.div``;