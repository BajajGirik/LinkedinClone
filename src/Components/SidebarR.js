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
            <h1>News</h1>
            {trendings.map(trend => (
                <div>
                    <a href={trend.url}>{trend.title}</a>
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
    font-size: 0.7rem;
    height: fit-content;
    
    > h1 {
        text-align: center;
        margin-bottom: 1rem;
        font-style: italic;
        text-decoration: underline;
    }

    > div {
        margin-bottom: 1rem;

        > a {
            color: black;
            font-size: 0.88rem;
            font-weight: 700;
            text-decoration: none;
        }

        :hover {
            background-color: lightgray;
        }
    }
`;