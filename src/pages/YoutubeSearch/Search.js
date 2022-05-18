import React from "react";
//
// // import {
// //     ButtonGroup,
// //     colors,
// //     StyledFormArea,
// //     StyledFormButton,
// //     StyledTextInput, StyledTitle
// // } from "../../components/Styles";
//
// import "./video.css";
//
// ///////////////////////SEARCH ON A DATATABLE
//
//
// async function searchYouTube(query ) {
//     query = encodeURIComponent(query);
//     const response = await
//     //     youtubeSearch.get('./search',{
//     //     params:{
//     //         query:query,
//     //         maxResults:10,
//     //     }
//     // })
//         fetch("https://youtube-search-results.p.rapidapi.com/youtube-search/?q=" + query, {
//         "method": "GET",
//         "headers": {
//             "x-rapidapi-host": "youtube-search-results.p.rapidapi.com",
//             'X-RapidAPI-Key': '39c26367dbmsh777490f3d0910cfp1baab3jsn22fdcdd9ff8c'
//
//         }
//     });
//     const body = await response.json();
//     console.log("body",body);
//     return body.items.filter(item => item.type === 'video');
// }
//
// function Search() {
//     const [query, setQuery] = useState('bts');
//     const [list, setList] = useState(null);
//     const search = (event) => {
//         event.preventDefault();
//         searchYouTube(query).then(setList);
//     };
//     // return (
//     //     <div className="app">
//     //         <form onSubmit={search}>
//     //             <StyledFormArea bg={colors.dark3}>
//     //                 <StyledTextInput
//     //                     name='name'
//     //                     type='text'
//     //                     label='YouTube'
//     //                     placeholder='Search Here ...'
//     //                     autoFocus value={query}
//     //                     onChange={e => setQuery(e.target.value)}
//     //                 />
//     //                 <ButtonGroup>
//     //                     <StyledFormButton>Search YouTube Videos</StyledFormButton>
//     //                 </ButtonGroup>
//     //             </StyledFormArea>
//     //         </form>
//     //         {list &&
//     //         (list.length === 0
//     //                 ? <p>No results</p>
//     //                 : (
//     //                     <ul className="items">
//     //                         {list.map(item => (
//     //                             <li className="item" key={item.id}>
//     //                                 <StyledTitle>
//     //                                     <b><a href={item.link}>{item.title}</a></b>
//     //                                 </StyledTitle>
//     //                                 <p>{item.description}</p>
//     //                                 <ul className="meta">
//     //                                     <li>By: <a href={item.author.ref}>{item.author.name}</a></li>
//     //                                     <li>Duration: {item.duration}</li>
//     //                                 </ul>
//     //                                 <img alt=""  src={item.url.thumbnail}/>
//     //
//     //                             </li>
//     //
//     //                         ))}
//     //
//     //                     </ul>
//     //                 )
//     //         )
//     //         }
//     //     </div>
//     // );
//     return (
//         <div className="app">
//             <form onSubmit={search}>
//                 <input autoFocus value={query} onChange={e => setQuery(e.target.value)} />
//                 <button>Search YouTube</button>
//             </form>
//             {list &&
//             (list.length === 0 ? <p>No results</p>
//                     : (
//                         <ul className="items">
//                             {list.map(item => (
//                                 <li className="item" key={item.id}>
//                                     <div>
//                                         <b><a href={item.link}>{item.title}</a></b>
//                                         <p>{item.description}</p>
//                                     </div>
//                                     <ul className="meta">
//                                         <li>By: <a href={item.author.ref}>{item.author.name}</a></li>
//                                         <li>Duration: {item.duration}</li>
//                                     </ul>
//                                     <img  src='' alt={item.id}/>
//                                     <img alt={item.link} src={item.thumbnails[0].url} />
//                                 </li>
//                             ))}
//                         </ul>
//                     )
//             )
//             }
//         </div>
//     );
// }

// export default Search;
// import React from 'react';

class SearchBar extends React.Component {
    handleChange = (event) => {
        this.setState({
            term: event.target.value
        });

    };
    handleSubmit = event => {
        event.preventDefault();
        this.props.handleFormSubmit(this.state.term);
    }

    render() {
        return (
            <>
                <h2 style={{textAlign: "center"}}>
                </h2>
                <div className='search-bar ui segment'>
                    <form onSubmit={this.handleSubmit} className='ui form'>
                        <div className='field'>
                            <label htmlFor="video-search">Video Search </label>
                            <input onChange={this.handleChange} name='video-search' type="text" placeholder="Search.."/>
                        </div>
                    </form>
                </div>
            </>
        )
    }
}

export default SearchBar;