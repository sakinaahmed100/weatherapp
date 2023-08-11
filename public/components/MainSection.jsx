import styled from 'styled-components';
import { UseMyContext } from '../Context';
import { FaTemperatureLow, FaWind ,FaSearchLocation} from "react-icons/fa"
import { BsFillCloudsFill } from "react-icons/bs"
import { LiaCloudSunRainSolid } from "react-icons/lia"
import {ImArrowUpLeft} from "react-icons/im"
import {MdWrongLocation} from "react-icons/md"
import 'animate.css';

export default function MainSection() {
  const { Search, state, SearchButton } = UseMyContext()
  const { loading, temp, feels, weather, wind, clouds, min, max, inputVal, error } = state
  return (
    <>
      <Section>
        <div className='card'>
          <div className='searchBox'>
            <input type="text" onChange={Search} />
            <button className='btn' onClick={SearchButton}>SEARCH</button>
          </div>

          {!inputVal ? (
            <div className='noVal'>
              <div className='content'>
             <FaSearchLocation></FaSearchLocation>
             <p>Enter your city name in search.
             </p>

              <ImArrowUpLeft></ImArrowUpLeft>
              </div>
            </div>
          ) : (
            <div className='info'>
              {error ? ( <div className='error1 animate__animated animate__headShake'>
                <div>Enter a correct city name</div>
               <MdWrongLocation className='wrong'></MdWrongLocation>
                </div>
              ) : (
                <>
                  <div className="temp">Temperature <FaTemperatureLow className='icon'></FaTemperatureLow> <span>{loading ? "loading" : temp}</span></div>
                  <div className="feels">Feels like:<span>{loading ? "loading" : feels}</span></div>
                  <div className="weather">Weather<LiaCloudSunRainSolid className='icon'></LiaCloudSunRainSolid><span>{loading ? "loading" : weather}</span></div>
                  <div className='windcloud'>
                    <div className="wind">Wind Speed <FaWind className='icon'></FaWind><span>{loading ? "loading" : wind}</span></div>
                    <div className="cloud">Clouds<BsFillCloudsFill className='icon'></BsFillCloudsFill><span>{loading ? "loading" : clouds}</span></div>
                  </div>
                  <div className="max">Max Temp:<span>{loading ? "loading" : max}</span></div>
                  <div className="min">Min Temp:<span>{loading ? "loading" : min}</span></div>
                </>
              )}
            </div>
          )
          }


        </div>

      </Section >
    </>)
}

const Section = styled.section`
    height: 90vh;
    display: flex;
    justify-content: center;
    align-items: center;

    
    .card{
        color: black;
        background: #ffffff;
        padding: 2rem;
        border-radius: 1rem;
        border: 1px solid #fdb813;
        border-top: 1.5rem solid #fdb813;
        border-bottom: 1.5rem solid #fdb813;
    box-shadow: 10px 7px 10px rgba(19, 14, 14, 0.2);
    display: flex;
    flex-direction: column;
    /* justify-content: center; */
    align-items:center;
    gap: 1rem;
    width: 30vw;
    height: 60vh;

    .searchBox{
      display: flex;
    }

    .info{
        display: flex;
        flex-direction: column;
        gap: 1rem;
        color:#004080;
        font-weight: bold;
        padding-left: 1rem;

        div{
            display: flex;
            align-items: center;
        }
        span{
            font-weight: lighter;
        }
    }
    input{
    padding: 0.3rem;
    border-radius: 5px;
    outline:1px solid #fdb813;
    border:none;
    margin-right: 1rem;
    }

   .btn{
    background-color: #fdb813;
    color:white;
    border:none;
    padding:.4rem;
    border-radius: .5rem;
   } 
   .windcloud{
    display: flex;
    gap:1rem;
   }
   .icon{
    font-size:1.3rem;
    margin: 0 .5rem;
   }
   }

   .noVal{
    background-image:url("https://th.bing.com/th/id/OIG.7Sa4myEBmvjYVTxOwRIe?pid=ImgGn");
    height: 40vh;
    background-size: cover;
    position: relative;
    display: flex;
    place-items: center;
    justify-content: center;

    &::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(143, 203, 243, 0.3); /* Adjust the opacity here */
}

.content {
  position: relative;
  z-index: 1; 
  display: flex;
    place-items: center;
    justify-content: center;
    color: #ad7900;

    p{
      font-size: 1.1rem;
    }
    
   
   }
}
.error1{
  color: red;
  flex-direction: column;
  margin-top: 10vh;
  .wrong{
    font-size: 4rem;
   }
}

  
`