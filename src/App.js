import { Card, Col, Space , Row , Layout } from 'antd';
import './App.css';
import CardWrapper from './components/cardWrapper'
import HeroSection from './components/HeroSection';
import Contribution from './components/Contribution';
import Contact from './components/Contact';
import FooterComp from './components/FooterComp';
import CloseBtn from './components/closeBtn';

const { Content  , Footer} = Layout;

function App() {
  
  return (
    <div className="App">
         <Layout style={{backgroundColor : "#000"}}>
            <Content>
            <CloseBtn/>
            <Space direction="vertical" size="large"  >
            <Row>
                <HeroSection/>
            </Row>
            <Row>
              <CardWrapper />
            </Row>
            <Row>
                <Contribution />
            </Row>
            <Row>
               <Contact />
            </Row>
            </Space>
            <Footer>
               <FooterComp />
            </Footer>
            </Content>
           
         </Layout>
     
    </div>
  );
}

export default App;
