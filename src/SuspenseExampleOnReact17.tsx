import { useState, useEffect } from 'react';
import './App.css'

const sleep = (ms: number) => {
  return new Promise(resolve => setTimeout(resolve, ms));
};

export default function App() {
  const [userName, setUserName] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    sleep(2000).then(() => { // データ取得待ちを擬似的に再現
      setUserName('Taro')    // データ取得が完了したらユーザー名をセット
    }).finally(() => {
      setIsLoading(false);
    });
  }, []);

  return (
    <div>
      {
        isLoading ? (
          <h1>Loading... (react 17)</h1>
        ) : (
          <h1>{userName}</h1>
        )
      }
    </div>
  );
}