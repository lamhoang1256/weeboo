import { Heading, Logo } from "components/common";
import { LocalStorage } from "constants/localStorage";
import { path } from "constants/path";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "lib/firebase-app/config";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { toast } from "react-toastify";

const SignInPage = () => {
  const router = useRouter();
  const signInWithGoogle = async () => {
    try {
      const provider = new GoogleAuthProvider();
      const { user } = await signInWithPopup(auth, provider);
      const currentUser = {
        name: user.displayName,
        email: user.email,
        avatar: user.photoURL,
        id: user.uid,
      };
      localStorage.setItem(LocalStorage.currentUser, JSON.stringify(currentUser));
      toast.success("Đăng nhập thành công");
      router.push(path.home);
    } catch (error: any) {
      toast.error(error.message);
    }
  };

  useEffect(() => {
    const currentUser = JSON.parse(localStorage.getItem(LocalStorage?.currentUser) || "{}");
    if (currentUser?.email) {
      router.push(path.home);
    }
  }, []);

  const stylesButton =
    "text-[19px] text-white w-[290px] rounded-lg my-4 mx-auto block py-[14px] bg-[#0083ec]";
  return (
    <div className="h-screen flex flex-col justify-between mx-auto max-w-[700px] px-5">
      <div className="pt-12 text-center">
        <Logo className="text-5xl" />
        <h2 className="font-semibold my-4">Đăng nhập</h2>
        <Heading className="font-normal">
          Nếu đăng nhập, bạn sẽ tận hưởng niềm vui của truyện tranh với các tác giả nổi tiếng và có
          thể bày tỏ ý kiến ​​của mình với các nhà văn.
        </Heading>
        <button className={stylesButton} onClick={signInWithGoogle}>
          Đăng nhập với Google
        </button>
      </div>
      <img src="/images/img-bg-login.png" alt="" />
    </div>
  );
};

export default SignInPage;
