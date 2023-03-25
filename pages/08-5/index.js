import { useState } from 'react';

export default function Sample() {
    const data = [
        { id: 0, title: '선택 1' },
        { id: 1, title: '선택 2' },
        { id: 2, title: '선택 3' },
        { id: 3, title: '선택 4' }
    ];

    // 체크된 아이템을 담을 배열
    const [checkItems, setCheckItems] = useState([]);

    // 체크박스 단일 선택
    const handleSingleCheck = (checked, id) => {
        if (checked) {
            // 단일 선택 시 체크된 아이템을 배열에 추가
            setCheckItems(ddd => [...ddd, id]);
        } else {
            // 단일 선택 해제 시 체크된 아이템을 제외한 배열 (필터)
            setCheckItems(checkItems.filter((aaa) => aaa !== id));
        }
        console.log(id)
    };

    // 체크박스 전체 선택
    const handleAllCheck = (checked) => {
        if (checked) {
            // 전체 선택 클릭 시 데이터의 모든 아이템(id)를 담은 배열로 checkItems 상태 업데이트
            const idArray = [];
            data.forEach((el) => idArray.push(el.id));
            setCheckItems(idArray);
        }
        else {
            // 전체 선택 해제 시 checkItems 를 빈 배열로 상태 업데이트
            setCheckItems([]);
        }
        console.log(checked)
    }

    return (
        <>
            <table>
                <th><input type='checkbox' onChange={(e) => handleAllCheck(e.target.checked)}
                    // 데이터 개수와 체크된 아이템의 개수가 다를 경우 선택 해제 (하나라도 해제 시 선택 해제)
                    checked={checkItems.length === data.length ? true : false} />
                </th>
                <th>번호</th>
                <th>제목</th>
                {data.map(el => (
                    <tr key={el.id}>
                        <td><input type='checkbox' onChange={(e) => handleSingleCheck(e.target.checked, el.id)}
                            // 체크된 아이템 배열에 해당 아이템이 있을 경우 선택 활성화, 아닐 시 해제
                            checked={checkItems.includes(el.id) ? true : false} /></td>
                        <th>{el.id}</th>
                        <td>{el.title}</td>
                    </tr>

                ))}
                <tr>
                </tr>
            </table>
        </>
    )

}
