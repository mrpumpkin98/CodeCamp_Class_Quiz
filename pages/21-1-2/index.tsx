export default function Container() {
  return (
    <>
      <Presenter child="철수" age={13} />
    </>
  );
}

// presenter 부분
export default function Presenter(aaaa) {
  return (
    <div>
      {aaaa.child}는 {props.age}살 입니다.
    </div>
  );
}
