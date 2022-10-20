import Item from "./Item";

export default function List({ data }) {
  return (
    <div className="todoList">
      <ul>
        {data.map((item, idx) => {
          return <Item data={item} key={item.id} />;
        })}
      </ul>
    </div>
  );
}
