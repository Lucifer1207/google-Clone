import React from 'react';
import './SearchPage.css';
import { useStateValue } from '../StateProvider';
import { Link } from 'react-router-dom';
import Search from '../pages/Search';
import DescriptionIcon from '@mui/icons-material/Description';
import ImageIcon from '@mui/icons-material/Image';
import LocalOfferOutlinedIcon from '@mui/icons-material/LocalOfferOutlined';
import CheckroomIcon from '@mui/icons-material/Checkroom';
import MoreVertOutlinedIcon from '@mui/icons-material/MoreVertOutlined';
import useGoogleSearch from '../useGoogleSearch';

function SearchPage() {
    const [{ term }, dispatch] = useStateValue();
    const { data } = useGoogleSearch( term );
  return (
    <div className='searchPage'>
    <div className='searchPage__header'>
        <Link to="/">
            <img 
                className='searchPage__logo'
                src="https://www.google.be/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png"
                alt=""
            />
        </Link>
        <div className='searchPage__headerBody'>
            <Search hideButtons />

            <div className='searchPage__options'>
                <div className='searchPage__optionsLeft'>
                    <div className='searchPage__options'>
                        <DescriptionIcon />
                        <Link to="/news">News</Link>
                    </div>
                    <div className='searchPage__options'>
                        <ImageIcon />
                        <Link to="/images">Images</Link>
                    </div>
                    <div className='searchPage__options'>
                        <LocalOfferOutlinedIcon />
                        <Link to="/shopping">Shopping</Link>
                    </div>
                    <div className='searchPage__options'>
                        <CheckroomIcon/>
                        <Link to="/maps">Maps</Link>
                    </div>
                    <div className='searchPage__options'>
                        <MoreVertOutlinedIcon/>
                        <Link to="/more">More</Link>
                    </div>
                </div>
                <div className='searchPage__optionsRight'>
                    <div className='searchPage__options'>
                        <Link to="/settings">Settings</Link>
                    </div>
                    <div className='searchPage__options'>
                        <Link to="/tools">Tools</Link>
                    </div>
                </div>
            </div>
        </div>
    </div>
    {term && (
        <div className='searchPage__results'>
            <p className='searchPage__resultCount'>
            About {data?.searchInformation.formattedTotalResults} results 
                ({data?.searchInformation.formattedSearchTime} seconds)
                for { term }
            </p>

            {data?.items.map(item => (
                <div className='searchPage__result'>
                    <a href={item.link}>
                        {item.pagemap?.cse_image?.length > 0 &&
                        item.pagemap?.cse_image[0]?.src && (
                            <img className="searchPage__resultImage"
                            src={
                                item.pagemap?.cse_image?.length > 0
                                && item.pagemap?.cse_image[0]?.src
                            }
                            alt=""
                            />
                        )}
                        {item.displayLink}
                    </a>
                    <a className="searchPage__resultTitle" href={item.link}>
                        <h2>{item.title}</h2>
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
