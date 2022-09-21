import type {NextPage} from 'next'
import {Button, Layout} from 'antd'

const {Header, Footer, Sider, Content} = Layout;

const Home: NextPage = () => {
    return (
        <Layout>
            <Header>Heade</Header>
            <Content>
                <Button type='primary'>Click me</Button>
            </Content>
            <Footer>Footer</Footer>
        </Layout>
    )
}

export default Home
