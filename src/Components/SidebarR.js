import { useState } from "react";
import { useEffect } from "react";
import styled from "styled-components";

function SidebarR() {
    const [trendings, setTrendings] = useState([])
    useEffect(() => {
        fetch('https://saurav.tech/NewsAPI/top-headlines/category/technology/in.json')
            .then(response => {
                return response.json();
            })
            .then(data => {
                setTrendings(data.articles.slice(0, 5));
            })
            .catch(e => alert(e))
    }, []);

    return (
        <SidebarRContainer className='shadow'>
            {trendings.map(trend => (
                <div>
                    <h3>{trend.title}</h3>
                    <p>{trend.description}</p>
               </div>
            ))}
        </SidebarRContainer>
    )
}

export default SidebarR

const SidebarRContainer = styled.div`
    flex: 0.2;
    padding: 1rem;
    > div {
        margin-bottom: 0.5rem;
    }
`;