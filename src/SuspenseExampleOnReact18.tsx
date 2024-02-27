import { Suspense } from 'react';
import './App.css'

const sleep = (ms: number) => {
  return new Promise(resolve => setTimeout(resolve, ms));
};

const fetchUserName = () => {
  let status = 'pending';
  let result = '';
  const suspender = sleep(2000).then(() => {
    status = 'resolved';
    result = 'Taro';
  }).catch(e => {
    status = 'rejected';
    result = e;
  });

  return () => {
    if (status === 'pending') throw suspender;
    if (status === 'rejected') throw result;
    return result;
  };
};

const userName = fetchUserName(); // 非同期処理の状態を持っている

// コンポーネントとして切り出される
const UserNameElement = () => {
  const name = userName();
  return <h1>{name}</h1>;
};

// App内の記述は簡潔になる
export default function SuspenseExampleOnReact18() {
  return (
    <div>
      <Suspense fallback={<h1>Loading... (react 18)</h1>}>
        <UserNameElement />
      </Suspense>
    </div>
  );
}
