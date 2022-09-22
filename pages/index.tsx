import type { NextPage } from 'next'
import {Button, theme} from 'antd';
import { Input } from 'antd';
import {useEffect, useState} from "react";

const { Search } = Input;

const Home: NextPage = () => {
    return (
        <div style={{margin: 200}}>
            <div>
                <Button type="primary">Primary Button</Button>
                <Button type="dashed">Dashed Button</Button>
                <br />
                <Button type="text">Text Button</Button>
                <Button type="link">Link Button</Button>
                <br />
                <br />
                <br />
            </div>
            <div style={{width: 300}}>
                <Search placeholder="input search loading default" loading />
            </div>
        </div>
    )
}

export default Home