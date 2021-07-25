import Categories from './Catergory';
import './Main.scss';


function Main() {
  return (
    <div className="Main">
      <div className="abstract">
        <div className='explore'>
          <div className="exploreInfo">
            <div className="title">
              Oli View: Exclusive Insight of Financial Market
            </div>
            <h4>金融分析师眼中的</h4>
            <h4>澳洲资本市场</h4>
            <div className="info">
              傲利观点 (Oli View) 旨在帮助投资者实时透彻地理解最新的金融和政治新闻，确保投资者的能够站在一手信息的最前端，避免因为信息的不完整或不准确性而影响正确的投资决策。傲利分析部也将发布对全球金融市场的每日独家观点及意见，或者针对多个热门话题、热门产业进行全面的研究与深入的剖析。
            </div>
            <div className="exploreBtn">Explore +</div>
          </div>
        </div>
        <div className="right">
          <div className="weclome">
            <div className="line"></div>
            <div className="title">
              Welcome To OLI VIEW
            </div>
            <h4>First Time to OLI VIEW?</h4>
            <div className="info">
              傲利资本的投资研究部门将在此为广大投资者提供对澳洲资本市场的独到见解、深度分析。我们的研究与分析广泛地涵盖了澳洲的各大资本市场，其中包括股票，固定收益，货币和大宗商品市场；股权投资、二级市场投资等。
            </div>
            <div className="end">Oli Research Team</div>
          </div>
          <div className="subscripe">
            <div className="img">
            </div>
            <div className="follow">
              <div className="info">
                <div className="line"></div>
                <div className="title">
                  Newsletter
                </div>
                <h4>即刻订阅傲利资本</h4>
                <h4>独家原创深度分析</h4>
              </div>
              <div className="barCode"></div>
            </div>
          </div>
        </div>

      </div>
      <Categories />
    </div>
  );
}

export default Main;

