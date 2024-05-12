'use client'
import React, {useState} from 'react';
import ResultPage from '../components/ResultPage';

const LoginPage = () => {
const [username, setUsername] = useState('');
const [password, setPassword] = useState('');
const [data,setData] =useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();

    const response = await fetch('/api/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username, password }),
    });

    const data = await response.json();

    console.log('fielddata:',data.records.response.data[0])
    console.log('portaldata:',data.records.response.data[0].portalData)
    setData(data.records.response.data[0]);
  };

  if(data){
return(
    <ResultPage data={data}/>
)
  }
  return (
    <div className='h-full m-4'>
    <p className='m-4 indent-3'>
        ログインをすると、毎月の出席率を確認することができます。<strong className='text-red-600'>出席率は在留許可の更新、進学のためにとても重要です。</strong>
    </p>
    <form  onSubmit={handleSubmit} className='flex flex-col justify-center m-4'>
        <label>学籍番号</label>
        <input type="text" id="username" name="username"  className="m-2 p-2  w-4/5" required onChange={e => setUsername(e.target.value)} />
        <label htmlFor="password">パスワード</label>
        <input type="password" id="password" name="password" className="m-2 p-2 w-4/5" required onChange={e => setPassword(e.target.value)}  />
        <button type="submit"  className="bg-blue-800 p-4 mt-12 m-6 text-white rounded-md" value="Submit">ログイン</button>
    </form>
    </div>
  );
}

export default LoginPage;