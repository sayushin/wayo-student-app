
"use client"
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

const RedirectPage = () => {
  const router = useRouter();

  useEffect(() => {
    // Ensure this code is only executed on the client
    if (typeof window !== 'undefined') {
      router.push('/login');
    }
  }, [router]); // Empty dependency array ensures it only runs once at component mount

  return null; // Render nothing while redirecting
};

export default RedirectPage;

// const HomePage =  () =>  {
// 	return (
// 		<div>
// 		Home
// 		</div>
// 	);
// }
// export default HomePage;
