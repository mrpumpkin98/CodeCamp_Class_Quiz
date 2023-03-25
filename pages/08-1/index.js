const classmates = [
    { name: "철수", age: 10, school: "토끼초등학교" },
    { name: "영희", age: 13, school: "다람쥐초등학교" },
    { name: "훈이", age: 11, school: "토끼초등학교" },
]



export default function MapFruitsPage() {



    return (
        <>
            {classmates.map((el, index) => (
                <div>
                    <div>{el.name} {el.age} {el.school} {el.school === "토끼초등학교" ? "candy : 10개" : "candy :  0개"}</div>
                </div>
            ))}
            ==========================================================
            {classmates.map((el, index) => (
                <div>
                    <div>{el.school === "다람쥐초등학교" ? `${el.name}어린이` : el.name}  {el.age} {el.school}</div>
                </div>
            ))}
        </>
    )
}
