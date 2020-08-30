import React from 'react'
import './SearchPage.css'
import { useStateValue } from '../components/StateProvider';
import useGoogleSearch from '../useGoogleSearch';
// import response from '../response';
import { Link } from 'react-router-dom';
import Search from '../components/Search';
import SearchOutlinedIcon from '@material-ui/icons/SearchOutlined';
import DescriptionOutlinedIcon from '@material-ui/icons/DescriptionOutlined';
import ImageOutlinedIcon from '@material-ui/icons/ImageOutlined';
import VideocamOutlinedIcon from '@material-ui/icons/VideocamOutlined';
import RoomOutlinedIcon from '@material-ui/icons/RoomOutlined';
import MoreVertOutlinedIcon from '@material-ui/icons/MoreVertOutlined';
import AppsIcon from '@material-ui/icons/Apps';
import { Avatar } from '@material-ui/core';

function SearchPage() {
    const [{ term }] = useStateValue();

    //*usually API's have a daily quota limit, to get around this do a single fetch
    //*then go onto the console -> network -> all -> response 
    //*copy this response and use this whilst developing

    //actual api call
    const { data } = useGoogleSearch();
    //mock api call
    // const data = response;

    console.log(data)

    return (
        <div className="searchPage">
            <div className="searchPage__header">
                <div className="searchPage__headerLeft">
                    <Link to="/">
                        <img className="searchPage__logo" src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png" alt="logo" />
                    </Link>

                    <div className="searchPage__headerBody">
                        <Search hideButtons />
                        <div className="searchPage__options">
                            <div className="searchPage__optionsLeft">
                                <div className="searchPage__option">
                                    <SearchOutlinedIcon />
                                    <Link to="/all">All</Link>
                                </div>
                                <div className="searchPage__option">
                                    <ImageOutlinedIcon />
                                    <Link to="/images">Images</Link>
                                </div>
                                <div className="searchPage__option">
                                    <VideocamOutlinedIcon />
                                    <Link to="/videos">Videos</Link>
                                </div>
                                <div className="searchPage__option">
                                    <RoomOutlinedIcon />
                                    <Link to="/maps">Maps</Link>
                                </div>
                                <div className="searchPage__option">
                                    <DescriptionOutlinedIcon />
                                    <Link to="/news">News</Link>
                                </div>
                                <div className="searchPage__option">
                                    <MoreVertOutlinedIcon />
                                    <Link to="/more">More</Link>
                                </div>
                            </div>

                            <div className="searchPage__optionsRight">
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
                
                <div className="searchPage__headerRight">
                    <AppsIcon />
                    <Avatar />
                </div>
            </div>

            {term && (
                <div className="searchPage__results">
                    <p className="searchPage__resultCount">
                        About {data?.searchInformation.formattedTotalResults} results ({data.searchInformation.formattedSearchTime} seconds) for {term}
                    </p>

                    {data?.items.map(item => (
                        <div className="searchPage__result">
                            <a rel="noopener noreferrer" className="searchPage__link" target="_blank" href={item.link}>
                                {item.pagemap?.cse_image?.length > 0 && 
                                    item.pagemap?.cse_image[0]?.src && (
                                        <img className="searchPage__resultImage" alt="search-pic"
                                            src={item.pagemap?.cse_image?.length > 0 && item.pagemap?.cse_image[0]?.src}
                                        />
                                    )
                                }
                                {item.displayLink} ∇
                            </a>
                            <a rel="noopener noreferrer" target="_blank" className="searchPage__resultTitle" href={item.link}>
                                <h3>{item.title}</h3>
                            </a>
                            <p className="searchPage__resultSnippet">
                                {item.snippet}
                            </p>
                        </div>
                    ))}
                </div>
            )}
        </div>
    )
}

export default SearchPage
