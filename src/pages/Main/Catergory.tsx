import './Main.scss';


function Categories() {
    return (
        <div className="categories">
            <div className="info">
                <div className="line"></div>
                <div className="title">
                    Oli View Updates
                </div>
                <h4>OLI VIEW </h4>
                <h4>Categories</h4>
            </div>
            <div className="content">
                {['热点新闻', '市场观点', '深度分析', '投资机会', '创业故事', '金融科普'].map((item) => {
                    return <div className="item">
                         <div className="name">
                               {item}
                         </div>
                    </div>
                })}
            </div>
        </div>
    );
}

export default Categories;

