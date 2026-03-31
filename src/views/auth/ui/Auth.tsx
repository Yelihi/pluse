import Link from "next/link";

import { Google, Logo } from "@/shared/components/svg";
import { NativeButton } from "@/shared/components/ui";

function Auth() {
  return (
    <main className="flex flex-col items-center justify-between w-full max-w-[450px] h-[550px]">
      <div className="flex flex-col justify-start items-center w-full gap-[24px]">
        <div className="flex justify-center items-center p-[14px] rounded-[6px] bg-black">
          <Logo />
        </div>
        <div className="flex flex-col gap-[10px] justify-center items-center">
          <h1 className="text-[24px] font-normal text-black">Pluse</h1>
          <p className="text-[14px] font-normal text-description-text">
            오늘도 집중하는 당신을 응원합니다
          </p>
        </div>
      </div>
      <div className="w-full p-[33px] border border-gray-300 rounded-[6px] bg-white">
        <div className="w-full flex flex-col justify-center items-center gap-[32px]">
          <div className="w-full flex flex-col justify-center items-center gap-[24px]">
            <div className="w-full flex flex-col justify-center items-center gap-[5.5px]">
              <h2 className="text-[16px] font-normal text-black">시작하기</h2>
              <p className="text-[12px] font-normal text-description-text">
                소셜 계정으로 간편하게 로그인하세요
              </p>
            </div>
            <div className="w-full flex flex-col gap-[12px]">
              <NativeButton value="Google로 계속하기">
                <Google />
              </NativeButton>
              <Link href="/home">
                <NativeButton value="게스트로 계속하기" variant="fill" className="bg-gray-100" />
              </Link>
            </div>
          </div>
          <p className="text-center text-[12px] font-normal text-description-text">
            로그인을 진행하시면 <a className="underline">이용약관</a> 및{" "}
            <a className="underline">개인정보처리방침</a>에<br />
            동의하는 것으로 간주됩니다
          </p>
        </div>
      </div>
      <p className="text-gray-300 text-[12px] font-medium">
        © 2026 Focus Monitor. All rights reserved.
      </p>
    </main>
  );
}

export default Auth;
