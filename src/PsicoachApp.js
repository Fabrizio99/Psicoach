import React from 'react'
import { AppRouter } from './routers/AppRouter'
import {Provider} from 'react-redux'
import { store } from './store/store'

import 'antd/dist/antd.css';
import { ConfigProvider } from 'antd';
import esES from 'antd/lib/locale/es_ES';
import moment from 'moment';
import 'moment/locale/es';

moment.locale('es');
export const PsicoachApp = () => {
    return (
        <Provider store={store}>
            <ConfigProvider locale={esES}>
                <AppRouter/>
            </ConfigProvider>
        </Provider>
    )
}