import { useEffect, useMemo, useRef, useState } from 'react';

const UseMemoExample = () => {
  const [number, setNumber] = useState(1);
  const [inc, setInc] = useState(0);

  // const sqrt = getSqrt(number)
  const sqrt = useMemo(() => getSqrt(number), [number]);

  const renders = useRef(1);

  useEffect(() => {
    renders.current = renders.current + 1;
  }, []);

  const onClick = () => {
    setInc((prevState) => {
      console.log(prevState + 1);
      return prevState + 1;
    });
  };

  function getSqrt(n) {
    for (let i = 0; i < 100000; i++) {
      console.log(i);
    }

    console.log('Expensive Function Called!');
    return Math.sqrt(n);
  }

  return (
    <div>
      <input
        type="number"
        value={number}
        onChange={(e) => setNumber(e.target.value)}
        className="form-control w-25"
      />
      <h2 className="my-3">
        The sqrt of {number} is {sqrt}
      </h2>
      <button className="btn btn-primary" onClick={onClick}>
        Re Render
      </button>
    </div>
  );
};

export default UseMemoExample;