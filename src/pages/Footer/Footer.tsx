import { Layout } from 'antd';
import './Footer.scss';

const { Footer } = Layout;

function Footers() {

  return (
    <Footer style={{ textAlign: 'center' }}>
      <div className="footerWrapper">
        <div className="title">RISK WARNING FOR OLI CAPITAL PTY LTD</div>
        <div className="content">
        <span>Oli Capital is a Corporate Authorised Representative (Number: 1281917) of Suanni Capital Pty Ltd (AFSL number: 508985) and GIB & Capital Group (Aust) Pty Ltd (AFSL number: 338674). Oli Capital is authorised under Suanni Capital Pty Ltd’s Australian Financial Services Licence (AFSL) to provide financial services in relation to managed investment schemes to wholesale clients. Oli Capital is authorised under GIB & Capital Group (Aust) Pty Ltd’s AFSL to provide general advisory services in relation to securities and derivatives to retail and wholesale clients. This website is owned and operated by Oli Capital. The information contained on this website is general in nature and does not constitute advice or a recommendation to act upon the information or an offer. The information on this website does not consider your personal objectives, circumstances, financial situations or needs. You are strongly recommended to seek independent professional advice before opening an account with us and/or acquiring our services/products. 
       </span>
       <span>
       This website is intended for persons located within Australia only and is not directed at any person in countries or jurisdictions where the offer of such financial products is not permitted or is unlawful. This Website may contain hypertext links to other websites that are owned or operated by parties other than Oli Capital and are included for your convenience only. We have no control over and are not responsible for the content or availability of any such third party websites, and inclusion of a hypertext link or other link does not imply any recommendation or endorsement of the material or content on such websites by us, nor any association with their operators. The information on this website is directed and available to residents of Australia only deemed to be wholesale clients under Section 761G and 761GA of the Corporations Act 2001 (Cth).Before you decide whether or not to invest any products referred to on this website, it is important for you to read and consider the relevant disclosure documents and ensure that you fully understand the risks involved. 
       </span>
        </div>

        <div className="bottom">
           <div className="logo"></div>
           <div className="info">
               <div className="content">
               Financial Service Guide | Terms & Conditions | Privacy Policy
               </div>
               <div className="content">
               ABN: 88 627 780 590
               </div>
               <div className="content">
               AFSL Rep Number: ​001281917
               </div>
           </div>
        </div>
      </div>

    </Footer>
  );
}

export default Footers;
