import React from 'react';
import './style.css';
import {
  RecoilRoot,
  atom,
  useRecoilState,
  useRecoilValue,
  selector,
} from 'recoil';
export default function App() {
  return (
    <div>
      <h1>Hello StackBlitz!</h1>
      <p>Start editing to see some magic happen :)</p>
      <RecoilRoot>
        <h4>Char Counter</h4>
        <CharCount />
        <GetCharValue />
      </RecoilRoot>
    </div>
  );
}
const charAtom = atom({
  key: 'charState',
  default: 0,
});

function CharCount() {
  const [text, setText] = useRecoilState(charAtom);
  return (
    <div>
      <h4>Component One</h4>
      <input type="text" onChange={(e) => setText(e.target.value)} />
    </div>
  );
}

function GetCharValue() {
  const [text, setText] = useRecoilState(charAtom);
  return (
    <div>
      <h4>Component Two</h4>
      <span>{text}</span> <br />
      <span>{useRecoilValue(charValueSelector)}</span>
    </div>
  );
}

const charValueSelector = selector({
  key: 'charValueSelector',
  get: ({ get }) => {
    const text = get(charAtom);
    return text.length;
  },
});
