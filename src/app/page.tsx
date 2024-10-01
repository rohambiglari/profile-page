import HtmlTag from "../../componet/htmlTag/htmlTag";
import SideBar from "../../componet/sidebar/sidebar";
import Link from "next/link";
import "./tailwind.css";
export default function Home() {
  return (
    <div>
      <HtmlTag></HtmlTag>
      <SideBar />
      <p className="text-lg p-4  text-yellow-300 bg-slate-600">goodbby</p>
      <h1 className="text-lg text-green-600">hello</h1>
      <Link href={"./test"}>
        <button className="">hello</button>
      </Link>
      <div></div>
    </div>
  );
}
