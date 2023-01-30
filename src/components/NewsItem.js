function NewsItem({item}){

    const websiteurl = item.url
    const website = websiteurl.split('https://').pop().split('/')[0]

    const date = item.publishedAt
    const fdate = date.replace('T',' ')
    const ftime = fdate.replace('Z',' ')

return(
    <a href={item.url} className="article">
        <div className="article-image">
                <img src={item.urlToImage} alt={item.title}/>
        </div>
        <div className="article-des">
        <div className="article-content">
                <div className="article-source">
                <img src={`https://t2.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=http://${website}`} alt={item.source.id}/>
                <span>{item.source.name}</span>
                </div>      
        </div>
        <div className="article-title">
                <h2>{item.title}</h2>
        </div>
        <p className="article-description">
                {item.description}
        </p>
        </div>
        
        <div className="article-details">
            <small><b>Published At : </b>{ftime}</small>
        </div>


    </a>
)

}

export default NewsItem