import Item from "./Item";

export default function List({ data }) {
  return (
    <div className="todoList">
      <ul>
        {data.map((item, idx) => {
          return <Item data={item} key={idx} />;
        })}
      </ul>
    </div>
  );
}
//listbox click - > 수정
//!listbox(listbox아닌곳) click -> 다시 바뀜
//delete 기능 만들지마
