import AboutImage from "../Image/bg-01.jpg.webp";
import "./PageInfo.css";


function PageInfo(props){
return(
<div
        className="bg-img p-lr p-tb"
        style={{
          backgroundImage: `url(${AboutImage})`,
        }}
      >
        <h2 className="ltext-105 cl0 txt-center">{props.title}</h2>
      </div>
);
    }

export default PageInfo;