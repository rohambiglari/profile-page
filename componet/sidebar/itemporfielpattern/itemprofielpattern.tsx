// import React, { useContext } from "react";
// import { ItemContext } from "../../../../usecontext/usecontext";
import { Interface } from "readline";
import "./itemprofielpattern.css";
import Link from "next/link";

interface ProfileItem {
  id: number;
  name: string;
  path: string;
}
const profileItems: ProfileItem[] = [
  { id: 1, name: "داشبورد", path: "/dash" },
  { id: 2, name: "افزودن اعتبار", path: "/add-credit" },
  { id: 3, name: "اطلاعات کاربری", path: "/user-info" },
  { id: 5, name: "تغییر رمز عبور", path: "/change-password" },
  { id: 6, name: "آدرس های من", path: "/my-addresses" },
  { id: 7, name: "درخواست ها", path: "/test" },
  { id: 8, name: "گردش حساب", path: "/account-statement" },
  { id: 9, name: "خروج", path: "/logOut" },
];

const Items: React.FC = () => {
  // const { setNameItem } = useContext(ItemContext);
  // const handleButtonClick = (id, name) => {
  //   setNameItem({ id, name });
  // };

  return (
    <div>
      {profileItems.map((item) => (
        <div
          key={item.id}
          className={
            item.id === profileItems.length - 1
              ? "last-profile-section-item"
              : "profile-section-item"
          }
        >
          <Link href={item.path} passHref>
            <button
              className="option-item"
              // onClick={() => handleButtonClick(item.id, item.name)}
            >
              <div>{item.name}</div>
              <div className="circle"></div>
            </button>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default Items;
