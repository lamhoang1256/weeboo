import { Heading, Logo } from "components/common";
import classNames from "utils/classNames";

const SignInPage = () => {
  const stylesButton = "text-[19px] text-white w-[290px] rounded-lg my-4 mx-auto block py-[14px]";
  return (
    <div className="h-screen flex flex-col justify-between mx-auto max-w-[700px] px-5">
      <div className="pt-12 text-center">
        <Logo className="text-5xl" />
        <h2 className="font-semibold my-4">Đăng nhập</h2>
        <Heading className="font-normal">
          Nếu đăng nhập, bạn sẽ tận hưởng niềm vui của truyện tranh với các tác giả nổi tiếng và có
          thể bày tỏ ý kiến ​​của mình với các nhà văn.
        </Heading>
        <button className={classNames(stylesButton, "bg-[#4864a6]")}>Đăng nhập với Facebook</button>
        <button className={classNames(stylesButton, "bg-[#0083ec]")}>Đăng nhập với Google</button>
      </div>
      <img src="/images/img-bg-login.png" alt="" />
    </div>
  );
};

export default SignInPage;
