

import "./Home.css"
import TabTab from "../TabTab/TabTab";
import useTitle from "../../../hooks/useTitle";
import Banner from "../Banner/Banner"
import Marqueeing from "../Marqueeing/Marqueeing"
import Gallery from "../Gallery/Gallery";
import Review from "../Review/Review";
import About from "../About/About";


const Home = () => {
    useTitle("Home");
    return (
        <div>
           <Banner></Banner>
           <Marqueeing></Marqueeing>
           <About></About>
           <Review></Review>
           <TabTab></TabTab>
           <Gallery></Gallery> 
        </div>
    );
};

export default Home;