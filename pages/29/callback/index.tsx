import axios from "axios";
import { useEffect, useState } from "react";

export default function Page(): JSX.Element {
  const [answer, setAnswer] = useState([]);

  //////////////////////////////////////////////////////////////
  // Callback
  //////////////////////////////////////////////////////////////

  const myCallback = async (data: any): Promise<void> => {
    const aa = new XMLHttpRequest();
    aa.open("get", `http://numbersapi.com/random?min=1&max=200`);
    aa.send();
    aa.addEventListener("load", (res) => {
      console.log(res); // api 요청 결과
      const num = res.target.response.split(" ")[0]; // 랜덤 숫자

      const bb = new XMLHttpRequest();
      bb.open("get", `https://koreanjson.com/posts/${num}`);
      bb.send();
      bb.addEventListener("load", (res) => {
        console.log(res); // api 요청 결과
        const userId = JSON.parse(res.target.response).UserId;

        const cc = new XMLHttpRequest();
        cc.open("get", `https://koreanjson.com/posts?userId=${userId}`);
        cc.send();
        cc.addEventListener("load", (res) => {
          setAnswer(JSON.parse(res.currentTarget.responseText));
          console.log(answer); // 최종 api 요청 결과
        });
      });
    });
  };

  //////////////////////////////////////////////////////////////
  // Promise
  //////////////////////////////////////////////////////////////

  const myPromise = () => {
    axios.get(`http://numbersapi.com/random?min=1&max=200`).then((res1) => {
      console.log(res1); // api 요청 결과
      const num = res1.data.split(" ")[0]; // 랜덤 숫자

      axios.get(`https://koreanjson.com/posts/${num}`).then((res2) => {
        console.log(res2); // api 요청 결과
        const userId = res2.data.UserId;

        axios
          .get(`https://koreanjson.com/posts?userId=${userId}`)
          .then((res3) => {
            setAnswer(res3.data);
            console.log(answer); // 최종 api 요청 결과
          });
      });
    });
  };

  //////////////////////////////////////////////////////////////
  // AsyncAwait
  //////////////////////////////////////////////////////////////

  const myAsyncAwait = async () => {
    const res1 = await axios.get(`http://numbersapi.com/random?min=1&max=200`);
    const num = res1.data.split(" ")[0];
    const res2 = await axios.get(`https://koreanjson.com/posts/${num}`);
    const userId = res2.data.UserId;
    const res3 = await axios.get(
      `https://koreanjson.com/posts?userId=${userId}`
    );
    setAnswer(res3.data);
  };

  useEffect(() => {
    if (answer.length > 0) {
      console.log(answer);
    }
  }, [answer]);

  return (
    <>
      <button onClick={myCallback}>Callback</button>
      <button onClick={myPromise}>Peomise</button>
      <button onClick={myAsyncAwait}>Async/Await</button>
      <div>
        {answer.map((i) => (
          <div style={{ border: "1px solid gray" }}>
            <br></br>
            <div>아이디 : {i.id}</div>
            <br></br>
            <div>제목 : {i.title}</div>
            <br></br>
            <div>내용 : </div>
            <div> {i.content}</div>
            <br></br>
          </div>
        ))}
      </div>
    </>
  );
}
