import styled from 'styled-components';
export default function Header() {
   

    return (<>


        <Head>
            <h1>WeatherWise</h1>
            <p className='tag'>Weather Wisdom at Your Fingertips</p>

           
        </Head>

    </>)
}
const Head = styled.header`
    width:100%;
    background-color:#fdb813;
    height: 10vh;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    color: white;
    display: grid;
    place-items: center;

    .tag{
        color: #c6fcff;;
    }


`