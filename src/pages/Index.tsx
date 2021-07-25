import { Layout } from 'antd';
import { Headers } from './Header/Header';
import Routes from '../components/Routes';
import { useEffect } from 'react';
import Footers from './Footer/Footer';


interface IndexProps {
  routes: any;
}

function Index(props: IndexProps) {
  const { routes } = props;
  useEffect(() => {

  }, []);
  return (
    <Layout className="layout">
      <Headers />
      <Routes routes={routes} />
      <Footers />
    </Layout>
  );
}

export default Index;
