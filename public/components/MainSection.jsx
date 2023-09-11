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
             <FaSearchLocation className='searchIcon'></FaSearchLocation>
             <p>Enter your city name in search bar.
             </p>

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
        background-color:#fdb713c0;
        padding: 2vh 0;
        padding-left: 1rem;
        border-radius: 1rem;
        box-shadow: inset 2px 2px 18px 2px #66542a86;

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
    background-image:url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRx3QNm1xlj3UVnx200XT8LZ6QzTskO001Alw&usqp=CAU");
    height: 40vh;
    background-size: cover;
    position: relative;
    display: flex;
    place-items: center;
    justify-content: center;
    border-radius: 1rem;

    &::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border-radius: 1rem;
  background-color: rgba(143, 203, 243, 0.3); /* Adjust the opacity here */
}

.content {
  position: relative;
  z-index: 1; 
  display: flex;
    place-items: center;
    justify-content: center;
    color: #ad7900;
.searchIcon{
  font-size: 2rem;
  margin:0 1vw;
}
    p{
      font-size: 1.1rem;
    }
    
   
   }
}
.error1{
  color: red;
  flex-direction: column;
  margin: 5vh 0;
  margin-left: -1rem;
  padding: 1vh 2vw;
  text-align: center;
  .wrong{
    font-size: 4rem;
   }
}
@media(max-width:950px){
  .card{
    width:40vw;
  }
  .noVal{
    width: 30vw;
  }
}

@media(max-width:700px){
  .card{
    width:50vw;
  }
  .noVal{
    width: 35vw;
  }
  input{
    width: 25vw;

  }
}

@media(max-width:550px){
  .card{
    width:68vw;
  }
  .noVal{
    width: 45vw;
  }
  input{
    width: 30vw;

  }
}

@media(max-width:400px){
  .card{
    width:92vw;
  }
  .noVal{
    width: 65vw;
  }
  input{
    width: 60vw;

  }
}
@media(max-width:300px){
.card{
  height: 67vh;
  width: 100vw;
}
.windcloud{
  flex-direction: column;
}
.searchBox {
    flex-direction: column;
    align-items: center;
    gap: 2vh;
}
.info{
  font-size: .9rem;
}
}
`