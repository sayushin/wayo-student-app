import '@/assets/styles/globals.css';
import Header from './components/Header';
import Footer from './components/Footer';

export const metadata = {
	title: '和陽日本語学院学生用アプリ',
	description: '出席率確認アプリ',
};

const MainLayout = ({ children }) => {
	return (
		<html lang='ja'>
			<body className='flex flex-col w-screen min-h-screen bg-blue-200 items-center'>
				<Header />
				<main>{children}</main>
				<Footer />
			</body>
		</html>
	);
};

export default MainLayout;
