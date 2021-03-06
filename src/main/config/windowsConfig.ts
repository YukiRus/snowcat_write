import config from '@config/index'


export const mainWindowConfig = {
    height: 600,
    useContentSize: true,
    width: 1000,
    minWidth: 1000,
    show: false,
    frame: config.IsUseSysTitle,
    webPreferences: {
        contextIsolation: false,
        nodeIntegration: true,
        webSecurity: false,
        // 如果是开发模式可以使用devTools
        devTools: process.env.NODE_ENV === 'development',
        // 在macos中启用橡皮动画
        scrollBounce: process.platform === 'darwin',
    }
};

export const otherWindowConfig = {
    height: 595,
    useContentSize: true,
    width: 1140,
    autoHideMenuBar: true,
    minWidth: 842,
    frame: config.IsUseSysTitle,
    show: false,
    webPreferences: {
        contextIsolation: false,
        nodeIntegration: true,
        webSecurity: false,
        // 如果是开发模式可以使用devTools
        devTools: process.env.NODE_ENV === 'development',
        // 在macos中启用橡皮动画
        scrollBounce: process.platform === 'darwin',
    }
}
