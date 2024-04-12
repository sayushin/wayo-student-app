import '@/assets/styles/globals.css';

export const metadata ={
    title:'和陽日本語学院学生用アプリ',
    description:'出席率確認アプリ'
}

const MainLayout = ({children}) => {
    return (
        <html lang='ja'>
            <body>
                <main>{children}</main>
            </body>

        </html>
    )
}

export default MainLayout;