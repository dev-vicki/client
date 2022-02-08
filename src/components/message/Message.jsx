import "./message.css";

export default function Message({own}) {
  return (
    <div className={own ? "message own" : "message"}>
      <div className="messageTop">
        <img
          className="messageImg"
          src="https://images.unsplash.com/photo-1583440012065-e99ad5f8f4c9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
          alt=""
        />
        <p className="messageText">Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
      </div>
      <div className="messageBottom">1 hour ago</div>
    </div>
  );
}
