import Search from './Search'
import React from 'react'
import { Link } from 'react-router-dom'
import SearchIcon from '@material-ui/icons/Search';
import DescriptionIcon from '@material-ui/icons/Description';
import ImageIcon from '@material-ui/icons/Image';
import LocalOfferIcon from '@material-ui/icons/LocalOffer';
import RoomIcon from '@material-ui/icons/Room';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import"./searchpage.css";
import { useStateValues } from '../StateProvider';
import useGoogleSearch from '../useGoogleSearch';
const SearchPage = () => {
    const [{term}] = useStateValues();
   
    const { data } = useGoogleSearch(term);
    console.log(term);
    return (
        <div className="searchPage" >
            <div className="searchPage__header">
                    <Link to="/">
                        <img src="https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png" alt="" />

                   </Link>
                   <div className="searchPage__headerBody">
                            <Search hidebuttons/>

                            <div className="searchPage__options">
                                <div className="searchPage__optionsleft">
                                        <div className="searchPage__option">
                                            <SearchIcon/>
                                            <Link to="/all">All</Link>
                                            
                                        </div>

                                        <div className="searchPage__option">
                                            <DescriptionIcon/>
                                            <Link to="/all">News</Link>
                                            
                                        </div>
                                        <div className="searchPage__option">
                                             <ImageIcon/>
                                            <Link to="/all">Images</Link>
                                           
                                        </div>
                                        <div className="searchPage__option">
                                            <LocalOfferIcon/>
                                            <Link to="/all">Shopping</Link>
                                            
                                        </div>
                                        <div className="searchPage__option">
                                            <RoomIcon/> 
                                            <Link to="/all">Maps</Link>
                                            
                                        </div>
                                        <div className="searchPage__option">
                                            <MoreVertIcon/> 
                                            <Link to="/all">More</Link>
                                            
                                        </div>
                                        
                                </div>
                                
                                <div className="searchPage__optionsright"> 
                                    <div className="searchPage__option">
                                    <Link to="/settings">Settings</Link>
                                    </div>
                                    <div className="searchPage__option">
                                    <Link to="/tools">Tools</Link>
                                    </div>
                                </div>    
                                    
                                    
                                    
                                  
                            </div>
                   </div>
            </div>
            {
                term && (
                            <div className="searchPage__results">
                                <p className="searchPage__resultCount">
                                        About {data?.searchInformation.formattedTotalResults} results({data?.searchInformation.formattedSearchTime}) for {term}
                                </p>

                                {
                                    data?.items.map((item)=>(
                                         <div className="searchPage__result">
                                            <a href={item.link} className="searchPage__resultlink">
                                                
                                                {item.pagemap?.cse_image?.legth > 0 && item.pagemap?.cse_image[0]?.src && (
                                                    <img src={item.pagemap?.cse_image[0]?.src}
                                                     className="searchPage__resultImage" alt="cant load pic" />
                                                )}
                                                
                                                {item.displayLink}
                                                
                                            </a>
                                            <a href={item.link} className="searchPage__resultTitle">
                                                <h2>{item.title}</h2>
                                            </a>
                                            <p className="searchPage__resultdescription">{item.snippet}</p>
                                        </div>
                                    ))
                                }
                               
                                    
                            </div>
                        )
            }
        </div>
    );
};

export default SearchPage 
